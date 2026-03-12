<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m15.535 2.808 5.657 5.656a2 2 0 0 1 0 2.829l-9.9 9.9a2 2 0 0 1-2.828 0l-5.657-5.658a2 2 0 0 1 0-2.828l9.9-9.9a2 2 0 0 1 2.828 0z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8.464 2.808a1 1 0 0 1 0 1.414L4.222 8.464A1 1 0 1 1 2.807 7.05L7.05 2.808a1 1 0 0 1 1.414 0M8.818 13.768l-.707.707a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0M21.192 15.536a1 1 0 0 1 0 1.414l-4.242 4.242a1 1 0 1 1-1.415-1.414l4.243-4.242a1 1 0 0 1 1.414 0"
    class="duo-icons-primary-layer"
  />
</IconBase>
