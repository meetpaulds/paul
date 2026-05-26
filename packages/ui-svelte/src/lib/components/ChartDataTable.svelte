<script lang="ts">
  /**
   * ChartDataTable — a programmatically accessible data table alternative for charts.
   *
   * Place this alongside a ChartContainer to provide a text alternative for users
   * who cannot perceive the visual chart. When `srOnly` is true, the table is
   * visually hidden but fully accessible to screen readers.
   *
   * @example
   * ```svelte
   * <ChartContainer {config}>
   *   <BarChart {data} />
   * </ChartContainer>
   * <ChartDataTable
   *   caption="Monthly revenue for 2024"
   *   headers={['Month', 'Revenue']}
   *   rows={[['January', 4200], ['February', 3800]]}
   *   srOnly
   * />
   * ```
   *
   * @accessibility Satisfies WCAG 1.1.1 / EN 301 549 §9.1.1.1 — Non-text Content.
   * Also addresses WCAG 1.4.1 / §9.1.4.1 — Use of Colour.
   */
  import { cn } from '../utils'

  interface Props {
    headers: string[]
    rows: (string | number)[][]
    caption: string
    srOnly?: boolean
    class?: string
  }

  const { headers, rows, caption, srOnly = false, class: cls = '' }: Props = $props()
</script>

<table class={cn(srOnly ? 'sr-only' : 'w-full text-sm', cls)}>
  <caption class={cn('mb-2 text-left text-sm font-medium text-foreground', srOnly && 'sr-only')}>
    {caption}
  </caption>
  <thead>
    <tr>
      {#each headers as header}
        <th scope="col" class="border-b px-3 py-2 text-left font-medium text-muted-foreground">
          {header}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr class="border-b last:border-0">
        {#each row as cell}
          <td class="px-3 py-2 text-foreground">{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
