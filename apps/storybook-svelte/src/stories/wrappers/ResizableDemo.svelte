<script lang="ts">
  import ResizablePanelGroup from '@meetpaul/ui-svelte/ResizablePanelGroup.svelte'
  import ResizablePanel from '@meetpaul/ui-svelte/ResizablePanel.svelte'
  import ResizableHandle from '@meetpaul/ui-svelte/ResizableHandle.svelte'
</script>

<div class="h-48 w-96 rounded-md border">
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel defaultSize={50}>
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50}>
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">Two</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</div>
