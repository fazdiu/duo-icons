<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M19.82 6a2 2 0 0 1 1.972 2.329l-1.666 10A2 2 0 0 1 18.153 20H5.847a2 2 0 0 1-1.973-1.671l-1.666-10A2 2 0 0 1 4.18 6z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    d="M18 3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"
    class="duo-icons-primary-layer"
  />
</IconBase>
