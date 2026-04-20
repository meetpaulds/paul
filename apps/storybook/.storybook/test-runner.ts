import { checkA11y, configureAxe, injectAxe } from 'axe-playwright'
import { getStoryContext } from '@storybook/test-runner'
import type { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context)
    const storyRules: { id: string; enabled: boolean }[] =
      storyContext.parameters?.a11y?.config?.rules ?? []
    const globalRules = [
      { id: 'color-contrast', enabled: false },
      { id: 'aria-hidden-focus', enabled: false },
    ]
    const mergedRules = [
      ...globalRules,
      ...storyRules.filter(
        (r) => !globalRules.some((g) => g.id === r.id)
      ),
    ]
    await configureAxe(page, { rules: mergedRules })
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    })
  },
}

export default config
