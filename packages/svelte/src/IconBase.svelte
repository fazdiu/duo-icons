<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  import { SVG_ATTRIBUTES } from "../../shared/attributes";

  // We define the interface by extending the native attributes of SVG
  export interface IconProps extends SVGAttributes<SVGSVGElement> {
    size?: number | string;
    children?: import("svelte").Snippet;
  }

  // We destructured size and children; the rest are native attributes.
  let { size = SVG_ATTRIBUTES.size, children, ...rest }: IconProps = $props();
</script>

<svg
  xmlns={SVG_ATTRIBUTES.xmlns}
  width={size}
  height={size}
  viewBox={SVG_ATTRIBUTES.viewBox}
  {...rest}
  class={(SVG_ATTRIBUTES.className + " " + (rest.class ?? "")).trim()}
>
  {@render children?.()}
</svg>
