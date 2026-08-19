/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Component } from 'svelte'

declare module '*.svelte' {
  const component: Component<Record<string, any>, Record<string, any>, Record<string, any>>
  export default component
}

