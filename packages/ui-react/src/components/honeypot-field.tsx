export interface HoneypotFieldProps {
  /** The field name used in the form submission. Should look like a real field. */
  name?: string
}

/**
 * Honeypot Field — invisible bot-trap as CAPTCHA-free spam prevention.
 *
 * WCAG 3.3.8 / EAA Art. 4 compliant:
 * - No cognitive challenge presented to users.
 * - `aria-hidden` removes the field from the accessibility tree entirely.
 * - CSS visually hides the field without `display:none` so bots still see it.
 * - `tabIndex={-1}` prevents keyboard users from accidentally reaching it.
 * - `autoComplete="off"` prevents autofill from populating it.
 *
 * Server side: reject any submission where this field is non-empty.
 *
 * @example
 * ```tsx
 * <form onSubmit={handleSubmit}>
 *   <HoneypotField name="website" />
 *   <input name="email" type="email" />
 *   <button type="submit">Submit</button>
 * </form>
 * ```
 */
const HoneypotField = ({ name = 'website' }: HoneypotFieldProps) => (
  <div
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      opacity: 0,
      pointerEvents: 'none',
    }}
  >
    <label htmlFor={`hp-${name}`}>Leave this field empty</label>
    <input
      id={`hp-${name}`}
      type="text"
      name={name}
      tabIndex={-1}
      autoComplete="off"
      defaultValue=""
    />
  </div>
)
HoneypotField.displayName = 'HoneypotField'

export { HoneypotField }
