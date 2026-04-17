import { checkA11y, configureAxe, injectAxe } from 'axe-playwright'
import { getStoryContext } from '@storybook/test-runner'
import type { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context)
    const a11yConfig = storyContext.parameters?.a11y?.config ?? {}
    if (Object.keys(a11yConfig).length > 0) {
      await configureAxe(page, a11yConfig)
    }
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    })
  },
}

export default config
