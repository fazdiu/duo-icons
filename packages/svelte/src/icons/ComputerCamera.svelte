<script lang="ts">
  import IconBase, { type IconProps } from '../IconBase.svelte';

  let props: IconProps = $props();
</script>

<IconBase {...props}>
  <path
    fill="currentColor"
    d="M19.26 16.877c.413.402.74.932.74 1.596 0 .753-.426 1.339-.9 1.745-.48.408-1.114.731-1.81.983-1.402.505-3.272.799-5.29.799s-3.888-.294-5.29-.8c-.696-.25-1.33-.574-1.809-.982-.475-.406-.901-.992-.901-1.745 0-.663.327-1.194.74-1.596A9.98 9.98 0 0 0 12 20c2.859 0 5.438-1.2 7.26-3.123M12 6c-3.079 0-5.004 3.333-3.464 6A4 4 0 0 0 12 14c3.079 0 5.004-3.333 3.464-6A4 4 0 0 0 12 6"
    class="duo-icons-primary-layer"
  /><path
    fill="currentColor"
    d="M12 2c6.158 0 10.007 6.667 6.928 12A8 8 0 0 1 12 18C5.842 18 1.993 11.333 5.072 6A8 8 0 0 1 12 2"
    class="duo-icons-secondary-layer"
    opacity=".3"
  />
</IconBase>
