import * as React from 'react'
import * as RechartsPrimitive from 'recharts'
import { cn } from '@/lib/utils'

const Chart = RechartsPrimitive.ResponsiveContainer

/**
 * Wrapper that injects Recharts CSS custom properties from a `config` map and
 * renders a `ResponsiveContainer` child. Use alongside Recharts chart primitives.
 * @prop config - Map of data-key → `{ label, color }` used to set `--color-<key>` CSS vars.
 */
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    config: Record<string, { label: string; color: string }>
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  return (
    <div
      ref={ref}
      data-chart={chartId}
      className={cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
        className
      )}
      {...props}
    >
      <Chart>
        {children as React.ReactElement}
      </Chart>
      <style>{`
        [data-chart=${chartId}] {
          ${Object.entries(config)
            .map(([key, value]) => `--color-${key}: ${value.color};`)
            .join('\n')}
        }
      `}</style>
    </div>
  )
})
ChartContainer.displayName = 'ChartContainer'

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<'div'> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: 'line' | 'dot' | 'dashed'
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      hideLabel: _hideLabel = false,
      hideIndicator = false,
      indicator = 'dot',
      ...props
    },
    ref
  ) => {
    if (!active || !payload || payload.length === 0) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border bg-background px-3 py-1.5 text-sm shadow-xl',
          className
        )}
        {...props}
      >
        <div className="grid gap-1.5">
          {payload.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              {!hideIndicator && (
                <div
                  className={cn(
                    'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                    indicator === 'dot' && 'h-2.5 w-2.5',
                    indicator === 'line' && 'h-0.5 w-4',
                    indicator === 'dashed' && 'h-0.5 w-4 border-dashed'
                  )}
                  style={{
                    '--color-bg': item.color,
                    '--color-border': item.color,
                  } as React.CSSProperties}
                />
              )}
              <span className="text-muted-foreground">{item.name}</span>
              <span className="font-mono font-medium tabular-nums text-foreground">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = 'ChartTooltipContent'

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> &
    Pick<RechartsPrimitive.LegendProps, 'payload'> & {
      verticalAlign?: 'top' | 'bottom'
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = 'bottom' },
    ref
  ) => {
    if (!payload || payload.length === 0) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-4',
          verticalAlign === 'top' ? 'pb-3' : 'pt-3',
          className
        )}
      >
        {payload.map((item: any) => (
          <div
            key={item.value}
            className="flex items-center gap-1.5"
          >
            {!hideIcon && (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span className="text-muted-foreground text-sm">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    )
  }
)
ChartLegendContent.displayName = 'ChartLegendContent'

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
}
