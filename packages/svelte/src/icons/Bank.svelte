<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m12.67 2.217 8.5 4.75A1.5 1.5 0 0 1 22 8.31v1.44c0 .69-.56 1.25-1.25 1.25H20v8h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-8h-.75C2.56 11 2 10.44 2 9.75V8.31c0-.522.27-1.002.706-1.274l8.623-4.819c.422-.211.92-.211 1.342 0z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17 11H7v8h2v-6h2v6h2v-6h2v6h2z"
    class="duo-icons-primary-layer"
  />
</IconBase>
