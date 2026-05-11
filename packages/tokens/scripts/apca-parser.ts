/**
 * APCA Parser and Printer
 * 
 * Utilities for parsing and formatting APCA Lc (Lightness contrast) values.
 * APCA Lc values range from -108.3 to 108.3, where:
 * - Positive values indicate light-on-dark contrast
 * - Negative values indicate dark-on-light contrast
 * - The magnitude represents the perceptual contrast level
 */

/**
 * Parse an APCA Lc string into a numeric value
 * 
 * @param lcString - String in format "Lc XX.X" or "Lc -XX.X"
 * @returns Numeric Lc value
 * @throws Error if string format is invalid or value is out of range
 * 
 * @example
 * parse("Lc 75.3") // returns 75.3
 * parse("Lc -60.2") // returns -60.2
 * parse("Lc 0") // returns 0
 */
export function parse(lcString: string): number {
  // Match format: "Lc" followed by whitespace and a number (with optional sign and decimal)
  const match = lcString.match(/^Lc\s+([-+]?\d+(?:\.\d+)?)$/);
  
  if (!match) {
    throw new Error(
      `Invalid Lc string: "${lcString}". Expected format: "Lc XX.X" (e.g., "Lc 75.3" or "Lc -60.2")`
    );
  }
  
  const value = parseFloat(match[1]);
  
  // Validate range
  if (value < -108.3 || value > 108.3) {
    throw new Error(
      `Lc value out of range: ${value}. Must be between -108.3 and 108.3`
    );
  }
  
  return value;
}

/**
 * Format a numeric Lc value into the standard string format
 * 
 * @param lcValue - Numeric Lc value
 * @returns String in format "Lc XX.X"
 * @throws Error if value is out of range
 * 
 * @example
 * print(75.3) // returns "Lc 75.3"
 * print(-60.2) // returns "Lc -60.2"
 * print(0) // returns "Lc 0.0"
 */
export function print(lcValue: number): string {
  // Validate range
  if (lcValue < -108.3 || lcValue > 108.3) {
    throw new Error(
      `Lc value out of range: ${lcValue}. Must be between -108.3 and 108.3`
    );
  }
  
  // Format to one decimal place
  return `Lc ${lcValue.toFixed(1)}`;
}
