# syntax=docker/dockerfile:1

# ─── Build ────────────────────────────────────────────────────────────────────
FROM node:24-alpine AS builder

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

WORKDIR /app

# Copy manifests and lockfile first so dependency install is cached separately
# from source changes.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY packages/tokens/package.json      packages/tokens/package.json
COPY packages/ui/package.json          packages/ui/package.json
COPY packages/ui-angular/package.json  packages/ui-angular/package.json
COPY packages/ui-svelte/package.json   packages/ui-svelte/package.json
COPY packages/ui-vue/package.json      packages/ui-vue/package.json
COPY apps/storybook/package.json          apps/storybook/package.json
COPY apps/storybook-angular/package.json  apps/storybook-angular/package.json
COPY apps/storybook-svelte/package.json   apps/storybook-svelte/package.json
COPY apps/storybook-vue/package.json      apps/storybook-vue/package.json

# NPM_TOKEN is optional — only needed if the registry requires authentication.
# Supply it at build time with: docker build --secret id=npm_token,env=NPM_TOKEN .
RUN --mount=type=secret,id=npm_token \
    NPM_TOKEN=$(cat /run/secrets/npm_token 2>/dev/null || echo '') \
    pnpm install --frozen-lockfile

COPY . .

# Build packages in dependency order, then all four Storybooks.
# The ui-* packages export from ./dist/, so they must be compiled before the
# Storybook apps that consume them.
RUN pnpm --filter @meetpaul/tokens build && \
    pnpm --filter @meetpaul/ui build && \
    pnpm --filter @meetpaul/ui-svelte build && \
    pnpm --filter @meetpaul/ui-vue build && \
    pnpm --filter @meetpaul/ui-angular build && \
    export STORYBOOK_STATIC_DEPLOYMENT=true && \
    pnpm --filter paul build && \
    pnpm --filter paul-storybook-vue build && \
    pnpm --filter paul-storybook-svelte build && \
    pnpm --filter paul-storybook-angular build

# ─── Serve ────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS server

RUN rm /etc/nginx/conf.d/default.conf

COPY docker/nginx.conf /etc/nginx/conf.d/storybooks.conf
COPY docker/index.html /usr/share/nginx/html/index.html

COPY --from=builder /app/apps/storybook/storybook-static          /usr/share/nginx/storybook
COPY --from=builder /app/apps/storybook-vue/storybook-static      /usr/share/nginx/storybook-vue
COPY --from=builder /app/apps/storybook-svelte/storybook-static   /usr/share/nginx/storybook-svelte
COPY --from=builder /app/apps/storybook-angular/storybook-static  /usr/share/nginx/storybook-angular

EXPOSE 80 6006 6007 6008 6009

CMD ["nginx", "-g", "daemon off;"]
