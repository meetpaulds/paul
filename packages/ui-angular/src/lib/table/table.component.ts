import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core'
import { cn } from '../../lib/utils'

@Component({ selector: 'paul-table', standalone: true, template: `<div class="relative w-full overflow-auto"><table class="w-full caption-bottom text-sm"><ng-content /></table></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableComponent {}

@Component({ selector: 'paul-table-header', standalone: true, template: `<thead class="[&_tr]:border-b"><ng-content /></thead>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableHeaderComponent {}

@Component({ selector: 'paul-table-body', standalone: true, template: `<tbody class="[&_tr:last-child]:border-0"><ng-content /></tbody>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableBodyComponent {}

@Component({ selector: 'paul-table-footer', standalone: true, template: `<tfoot class="border-t bg-muted/50 font-medium [&>tr]:last:border-b-0"><ng-content /></tfoot>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableFooterComponent {}

@Component({ selector: 'paul-table-row', standalone: true, template: `<tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"><ng-content /></tr>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableRowComponent {}

@Component({ selector: 'paul-table-head', standalone: true, template: `<th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"><ng-content /></th>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableHeadComponent {}

@Component({ selector: 'paul-table-cell', standalone: true, template: `<td class="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"><ng-content /></td>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableCellComponent {}

@Component({ selector: 'paul-table-caption', standalone: true, template: `<caption class="mt-4 text-sm text-muted-foreground"><ng-content /></caption>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class TableCaptionComponent {}
