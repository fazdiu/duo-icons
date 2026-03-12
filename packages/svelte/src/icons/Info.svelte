<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001S2 17.524 2 12.001C1.999 6.477 6.476 1.999 12 1.999"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    d="M12.001 6.5a1.252 1.252 0 1 0 .002 2.503A1.252 1.252 0 0 0 12 6.5zM11.996 10.249a1 1 0 0 0-.992.885l-.007.116.004 5.502.006.117a1 1 0 0 0 1.987-.002L13 16.75l-.004-5.501-.007-.117a1 1 0 0 0-.994-.882z"
    class="duo-icons-primary-layer"
  />
</IconBase>
