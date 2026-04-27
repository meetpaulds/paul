import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({ selector: 'paul-navigation-menu', standalone: true, template: `<nav class="relative z-10 flex max-w-max flex-1 items-center justify-center"><ng-content /></nav>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class NavigationMenuComponent {}

@Component({ selector: 'paul-navigation-menu-list', standalone: true, template: `<ul class="group flex flex-1 list-none items-center justify-center gap-x-1"><ng-content /></ul>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class NavigationMenuListComponent {}

@Component({ selector: 'paul-navigation-menu-link', standalone: true, template: `<a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"><ng-content /></a>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class NavigationMenuLinkComponent {}
