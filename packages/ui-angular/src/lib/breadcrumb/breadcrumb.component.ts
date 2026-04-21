import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '../../lib/utils'

@Component({ selector: 'paul-breadcrumb', standalone: true, imports: [CommonModule], template: `<nav aria-label="breadcrumb"><ng-content /></nav>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class BreadcrumbComponent {}

@Component({ selector: 'paul-breadcrumb-list', standalone: true, template: `<ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5"><ng-content /></ol>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class BreadcrumbListComponent {}

@Component({ selector: 'paul-breadcrumb-item', standalone: true, template: `<li class="inline-flex items-center gap-1.5"><ng-content /></li>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class BreadcrumbItemComponent {}

@Component({ selector: 'paul-breadcrumb-link', standalone: true, template: `<a class="transition-colors hover:text-foreground"><ng-content /></a>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class BreadcrumbLinkComponent {}

@Component({ selector: 'paul-breadcrumb-page', standalone: true, template: `<span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground"><ng-content /></span>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class BreadcrumbPageComponent {}

@Component({ selector: 'paul-breadcrumb-separator', standalone: true, template: `<li role="presentation" aria-hidden="true" class="[&>svg]:w-3.5 [&>svg]:h-3.5">/</li>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class BreadcrumbSeparatorComponent {}
