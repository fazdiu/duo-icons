<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M15.314 2a2 2 0 0 1 1.414.586l4.686 4.686A2 2 0 0 1 22 8.686v6.628a2 2 0 0 1-.586 1.414l-4.686 4.686a2 2 0 0 1-1.414.586H8.686a2 2 0 0 1-1.414-.586l-4.686-4.686A2 2 0 0 1 2 15.314V8.686a2 2 0 0 1 .586-1.414l4.686-4.686A2 2 0 0 1 8.686 2z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12 6a1 1 0 0 0-.993.883L11 7v6a1 1 0 0 0 1.993.117L13 13V7a1 1 0 0 0-1-1M12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    class="duo-icons-primary-layer"
  />
</IconBase>
