<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M7 3v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1a2 2 0 0 1 2 2v11a6 6 0 0 1-6 6H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    d="M14 2a1 1 0 0 1 .117 1.993L14 4h-4a1 1 0 0 1-.117-1.993L10 2zM15 10H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2M12 14H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
    class="duo-icons-primary-layer"
  />
</IconBase>
