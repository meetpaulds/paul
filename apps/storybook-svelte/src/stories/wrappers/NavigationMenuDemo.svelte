<script lang="ts">
  import NavigationMenu from '@meetpaul/ui-svelte/NavigationMenu.svelte'
  import NavigationMenuList from '@meetpaul/ui-svelte/NavigationMenuList.svelte'
  import NavigationMenuLink from '@meetpaul/ui-svelte/NavigationMenuLink.svelte'
</script>

<NavigationMenu>
  <NavigationMenuList>
    <li><NavigationMenuLink href="#">Getting started</NavigationMenuLink></li>
    <li><NavigationMenuLink href="#">Components</NavigationMenuLink></li>
    <li><NavigationMenuLink href="#">Documentation</NavigationMenuLink></li>
  </NavigationMenuList>
</NavigationMenu>
