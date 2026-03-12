<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12 2v6.5a1.5 1.5 0 0 0 1.5 1.5H20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
    class="duo-icons-secondary-layer"
    opacity=".3"
  /><path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14 2.043c.379.08.726.269 1 .543L19.414 7c.274.274.463.621.543 1H14zM11.654 11.699l-.894 1.535-1.737.376a.4.4 0 0 0-.213.658l1.184 1.325-.18 1.768a.4.4 0 0 0 .56.406L12 17.051l1.626.716a.4.4 0 0 0 .56-.406l-.18-1.768 1.184-1.325a.4.4 0 0 0-.213-.658l-1.737-.376-.894-1.535a.4.4 0 0 0-.692 0"
    class="duo-icons-primary-layer"
  />
</IconBase>
