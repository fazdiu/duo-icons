<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8.7 13c.104.856.357 1.716.786 2.458.597 1.031 1.572 1.88 2.96 2.043 1.407.166 2.837-.51 3.7-1.615a1 1 0 0 0-.175-1.404c-.492-.384-1.093-.199-1.46.243-.948 1.145-2.55 1.016-3.294-.27A4.4 4.4 0 0 1 10.72 13H15a1 1 0 1 0 0-2h-4.254c.1-.517.273-.998.51-1.393.71-1.185 2.334-1.491 3.243-.34.352.445.95.646 1.448.282a1 1 0 0 0 .213-1.398c-.845-1.156-2.098-1.721-3.531-1.599s-2.457.973-3.088 2.026c-.436.727-.703 1.572-.823 2.422H8a1 1 0 1 0 0 2z"
    class="duo-icons-primary-layer"
  />
</IconBase>
