import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

/** Root collapsible component. Key props: `open`, `defaultOpen`, `onOpenChange`, `disabled`. */
const Collapsible = CollapsiblePrimitive.Root

/** Element that toggles the collapsible open/closed when clicked. */
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

/** The content panel that is shown/hidden based on `open` state. */
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
