<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    d="M20 3a2 2 0 0 1 2 2v3H2V5a2 2 0 0 1 2-2zM14 13h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2"
    class="duo-icons-primary-layer"
  />
</IconBase>
