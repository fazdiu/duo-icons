<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M14.5 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10.5 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14.5 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
    class="duo-icons-primary-layer"
  /><path
    fill="currentColor"
    d="M11.5 2a6.5 6.5 0 0 1 6.086 4.212c4.455 1.223 5.916 6.811 2.629 10.058a6 6 0 0 1-2.439 1.462C18.637 15.443 16.945 13 14.5 13a1.52 1.52 0 0 1-1.199-.599c-1.615-2.157-4.959-1.757-6.019.72a3.5 3.5 0 0 0 .007 2.772c.167.388.167.828 0 1.216q-.184.422-.253.892H7c-3.849.003-6.257-4.163-4.335-7.497A5 5 0 0 1 5 8.417 6.5 6.5 0 0 1 11.5 2"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    d="M10.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
    class="duo-icons-primary-layer"
  />
</IconBase>
