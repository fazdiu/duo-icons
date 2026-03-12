<div align="center">
  <h1 id="duo-icons-svelte">Duo Icons - Svelte</h1>
  <p>
    <a href="https://ko-fi.com/fazdiu"><img src="https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&amp;logoColor=white" alt="Support me on Ko-fi"></a>
    <a href="https://github.com/fazdiu/duo-icons?tab=readme-ov-file#packages"><img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="github"></a>
    <img src="https://img.shields.io/badge/npm-red?logo=npm" alt="npm">
    <img src="https://img.shields.io/badge/svelte-orange?logo=svelte" alt="svelte">
    <img src="https://img.shields.io/badge/typescript-gray?logo=typescript" alt="typescript">
    <img src="https://img.shields.io/badge/javascript-yellow?logo=javascript" alt="javascript">
  </p>
</div>

Duo Icons is a modern duotone icon collection built for Svelte 5 projects. Each icon is a lightweight Svelte component with two layers (primary and secondary), providing a stylish two‑tone look that integrates seamlessly with your app.

## Installation

Install the package via npm or yarn:

```bash
npm install @duo-icons/svelte
# or
yarn add @duo-icons/svelte
```

### Peer Dependencies

- `svelte` ^5.53.7

## Basic Usage

Import icons from the library and use them like any other component:

```svelte
<script lang="ts">
  import { AddCircle } from '@duo-icons/svelte';
</script>

<main>
  <AddCircle />
  <AddCircle size="32" />
  <AddCircle class="text-red-500" />
</main>
```

## Available Icons

The complete collection of all available icons is at [https://duoicons.vercel.app/](https://duoicons.vercel.app/), providing the necessary resources to implement them into your project.

## Props & Options

All icons extend native SVG attributes and accept an extra `size` prop:

| Prop      | Type                 | Default | Description |
|-----------|----------------------|---------|-------------|
| `size`    | `number \| string`  | `24`    | Width/height of the icon (px, rem, etc.) |
| `class`   | `string`             | —       | CSS classes applied to the SVG container |
| ...svg attrs | various         | —       | Any standard SVG attribute (e.g. `fill`, `stroke`, `aria-*`) |

### Duotone Layers

The component markup exposes two CSS classes on the `<path>` elements:

- `.duo-icons-primary-layer` – the main layer
- `.duo-icons-secondary-layer` – the secondary (faded) layer

Customize its appearance with Tailwind utility classes provided by `@duo-icons/tailwind` or standard CSS.

```svelte
<AddCircle class="duo-icons-primary:text-blue-600" />
<style>
  .duo-icons-secondary-layer {
    opacity: 0.4;
    fill: #93c5fd;
  }
</style>
```


## Styling Examples

### Changing Size

```svelte
<AddCircle size="16" />
<AddCircle size="1.5rem" />
<AddCircle size="48" />
```

### Applying Colors

```svelte
<AddCircle class="text-green-500" />
<AddCircle style="color: #e53e3e" />
```

### Accessibility

```svelte
<AddCircle aria-label="Add item" />
```

## Practical Examples

#### Icon Button

```svelte
<button class="p-2 rounded bg-blue-500 text-white flex items-center">
  <AddCircle class="mr-2" />
  Add
</button>
```

#### List with Icons

```svelte
<ul>
  <li><AddCircle class="inline-block align-middle mr-1" /> New file</li>
</ul>
```

#### Color & Size Variation

```svelte
<div class="flex gap-4">
  <AddCircle size="20" class="text-red-500" />
  <AddCircle size="24" class="text-yellow-500" />
  <AddCircle size="28" class="text-green-500" />
</div>
```

## Additional Notes

- Since icons are just SVGs wrapped in Svelte components, you can animate them using Svelte transitions or CSS.
- You can import and render icons dynamically using `import()` if needed.

## License

MIT © fazdiu

## Support

If you find Duo Icons useful, consider supporting the project with a donation: [![Support me on Ko-fi](https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&logoColor=white)](https://ko-fi.com/fazdiu)

