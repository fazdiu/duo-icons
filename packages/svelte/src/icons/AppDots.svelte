<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M7 11.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 11.5"
    class="duo-icons-primary-layer"
  /><path
    fill="currentColor"
    d="M17 21.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 21.5M17 11.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 11.5M7 21.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 21.5"
    class="duo-icons-secondary-layer"
    opacity=".3"
  />
</IconBase>
