import '@testing-library/jest-dom'

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock

Element.prototype.hasPointerCapture = Element.prototype.hasPointerCapture ?? (() => false)
Element.prototype.setPointerCapture = Element.prototype.setPointerCapture ?? (() => {})
Element.prototype.releasePointerCapture = Element.prototype.releasePointerCapture ?? (() => {})
Element.prototype.scrollIntoView = Element.prototype.scrollIntoView ?? (() => {})

// input-otp uses document.elementFromPoint internally; jsdom doesn't implement it
if (typeof document !== 'undefined' && !document.elementFromPoint) {
  document.elementFromPoint = () => null
}

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// eslint-disable-next-line no-undef
global.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver

if (typeof window !== 'undefined' && !window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}
