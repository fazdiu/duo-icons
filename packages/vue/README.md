<div align="center">
  <h1 id="duo-icons-vue">Duo Icons - Vue</h1>

  <a href="https://ko-fi.com/fazdiu"><img src="https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&amp;logoColor=white" alt="Support me on Ko-fi"></a>
    <a href="https://github.com/fazdiu/duo-icons?tab=readme-ov-file#packages"><img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="github"></a>
  <img src="https://img.shields.io/badge/npm-red?logo=npm" alt="npm">
  <img src="https://img.shields.io/badge/vuejs-green?logo=vuedotjs" alt="Vue.js">
  <img src="https://img.shields.io/badge/nuxt-blue?logo=nuxt" alt="nuxt.js">
  <img src="https://img.shields.io/badge/typescript-gray?logo=typescript" alt="typescript">
  <img src="https://img.shields.io/badge/javascript-yellow?logo=javascript" alt="javascript">
</div>

A modern and beautiful duotone icon library designed for seamless integration with Vue 3 projects. Duo Icons offers a collection of carefully crafted icons with a distinctive duotone design.

## Installation

Install the Duo Icons Vue package using npm:

```bash
npm install @duo-icons/vue
```

### Requirements

- Vue 3.x.x or higher

## Basic Usage

Import and use icons directly in your Vue components:

```vue
<template>
  <div>
    <AddCircle />
    <AddCircle size="32" />
    <AddCircle size="24" class="custom-icon" />
  </div>
</template>

<script setup>
import { AddCircle } from '@duo-icons/vue';
</script>
```

## Available Icons

The complete collection of all available icons is at [https://duoicons.vercel.app/](https://duoicons.vercel.app/), providing the necessary resources to implement them into your project.

## Props & Options

All Duo Icons components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | The width and height of the icon in pixels or any valid CSS size unit (e.g., `"24"`, `32`, `"2rem"`) |

### SVG Attributes

Since Duo Icons are Vue components wrapping SVG elements, you can pass any standard SVG attribute to customize their appearance:

```vue
<template>
  <AddCircle 
    size="32"
    color="currentColor"
    class="icon-custom"
    aria-label="Add a new item"
  />
</template>

<script setup>
import { AddCircle } from '@duo-icons/vue';
</script>
```

## Styling

### Using CSS Classes

```vue
<template>
  <AddCircle class="my-icon" />
</template>

<style scoped>
.my-icon {
  color: #1a73e8;
  transition: all 0.3s ease;
}

.my-icon:hover {
  color: #0d47a1;
  transform: scale(1.1);
}
</style>
```

### Customizing Duotone Layers

Duo Icons use a duotone design with primary and secondary layers. You can customize each layer:

```vue
<template>
  <svg class="custom-icon" viewBox="0 0 24 24" width="24" height="24">
    <!-- Secondary layer (faded) -->
    <path class="duo-icons-secondary-layer" d="..." opacity="0.3" />
    <!-- Primary layer (main) -->
    <path class="duo-icons-primary-layer" d="..." />
  </svg>
</template>

<style scoped>
.custom-icon .duo-icons-secondary-layer {
  fill: url(#gradient);
}

.custom-icon .duo-icons-primary-layer {
  fill: #1a73e8;
}
</style>
```

## Examples

### Size Variations

```vue
<template>
  <div class="icon-sizes">
    <AddCircle size="16" />
    <AddCircle size="24" />
    <AddCircle size="32" />
    <AddCircle size="48" />
  </div>
</template>

<script setup>
import { AddCircle } from '@duo-icons/vue';
</script>
```

### Color Variations

```vue
<template>
  <div class="icon-colors">
    <AddCircle class="text-blue" />
    <AddCircle class="text-green" />
    <AddCircle class="text-red" />
  </div>
</template>

<script setup>
import { AddCircle } from '@duo-icons/vue';
</script>

<style scoped>
.text-blue { color: #1a73e8; }
.text-green { color: #34a853; }
.text-red { color: #ea4335; }
</style>
```

## License

MIT - Created by fazdiu

## Support

If you find Duo Icons useful, consider supporting the project with a donation: [![Support me on Ko-fi](https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&logoColor=white)](https://ko-fi.com/fazdiu)

