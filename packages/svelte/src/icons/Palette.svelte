<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.636 4a2 2 0 0 1 2.701-.117l.127.117L20 7.536a2 2 0 0 1 .204 2.589L13 17.357V4.636zM7.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    class="duo-icons-primary-layer"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M19.66 12.111c.731.256 1.27.924 1.334 1.727L21 19a2 2 0 0 1-1.85 1.995L19 21h-6v-2.23z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  />
</IconBase>
