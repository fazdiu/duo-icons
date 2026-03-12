<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M19 11c2.309 0 3.753 2.5 2.598 4.5a3 3 0 0 1-.598.736v4.955a.5.5 0 0 1-.724.447L19 21l-1.276.638a.5.5 0 0 1-.724-.447v-4.955c-1.721-1.54-1.13-4.365 1.064-5.086.302-.099.618-.15.936-.15M12 9H6a1 1 0 0 0-.117 1.993L6 11h6a1 1 0 0 0 .117-1.993zM8 13H6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2"
    class="duo-icons-primary-layer"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M20 4a2 2 0 0 1 2 2v4c-3.079-2.309-7.504-.419-7.964 3.402A5 5 0 0 0 15 17v3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  />
</IconBase>
