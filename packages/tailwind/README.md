<div align="center">
  <h1 id="duo-icons-tailwindcss">Duo Icons - Tailwind CSS</h1>
  <p>
    <a href="https://ko-fi.com/fazdiu"><img src="https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&amp;logoColor=white" alt="Support me on Ko-fi"></a>
    <a href="https://github.com/fazdiu/duo-icons?tab=readme-ov-file#packages"><img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="github"></a>
    <img src="https://img.shields.io/badge/npm-red?logo=npm" alt="npm">
    <img src="https://img.shields.io/badge/tailwindcss-blue?logo=tailwindcss" alt="tailwindcss">
    <img src="https://img.shields.io/badge/css-orange?logo=css" alt="css">
    <img src="https://img.shields.io/badge/typescript-gray?logo=typescript" alt="typescript">
    <img src="https://img.shields.io/badge/javascript-yellow?logo=javascript" alt="javascript">
  </p>
</div>


A modern and beautiful duotone icon library for Tailwind CSS v4. Duo Icons provides a collection of carefully crafted SVG icons with a distinctive duotone design that seamlessly integrates with your Tailwind CSS project.

## Installation

Install the Duo Icons Tailwind package using npm:

```bash
npm install @duo-icons/tailwind
```

### Requirements

- Tailwind CSS v4.x.x or higher
- Node.js

## Setup

### 1. Add the icons

#### 1.1 Plugin CSS (recommended) fast

You can get all the available icons simply by adding them using CSS:

```css
@import "tailwindcss";

@import '@duo-icons/tailwind/icons';
```


#### 1.2 Plugin js/ts

Add the Duo Icons plugin to your `tailwind.config.js`:

```js
import duoIconsPlugin from '@duo-icons/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx}'],
  plugins: [duoIconsPlugin],
};
```

You can also import the js plugin directly into Vite

```css
@import "tailwindcss";

@plugin "@duo-icons/tailwind";
```


### 2. Import Styles

In your main CSS file, import the base styles and icons:

```css
@import 'tailwindcss/base';
@import '@duo-icons/tailwind/base';
```

Or if using Vite with Tailwind CSS v4:

```css
@import "tailwindcss";
@import "@duo-icons/tailwind/base";
```

## Available Icons

The complete collection of all available icons is at [https://duoicons.vercel.app/](https://duoicons.vercel.app/), providing the necessary resources to implement them into your project.

## Basic Usage

Use any icon with the `duo-icons-*` utility class:

```html
<!-- Basic icon -->
<span class="duo-icons-add-circle"></span>

<!-- With size -->
<span class="duo-icons-add-circle text-2xl"></span>

<!-- With color -->
<span class="duo-icons-add-circle text-blue-500"></span>

<!-- In a button -->
<button class="duo-icons-add-circle text-gray-400 hover:text-white transition-all w-8 h-8"></button>
```

## Available Icons

- **AddCircle** - A duotone plus icon inside a circle, perfect for "add" or "new" actions

Use the class: `duo-icons-add-circle`

## Props & Options

Duo Icons are implemented as CSS utilities in Tailwind. Customize them using standard Tailwind utilities:

### Size

Control icon size with Tailwind's text size utilities:

```html
<!-- Small icon -->
<span class="duo-icons-add-circle text-sm"></span>

<!-- Medium icon (default) -->
<span class="duo-icons-add-circle text-base"></span>

<!-- Large icon -->
<span class="duo-icons-add-circle text-2xl"></span>

<!-- Extra large icon -->
<span class="duo-icons-add-circle text-5xl"></span>
```

### Color

Use any Tailwind color utility:

```html
<span class="duo-icons-add-circle text-blue-500"></span>
<span class="duo-icons-add-circle text-red-600"></span>
<span class="duo-icons-add-circle text-green-400"></span>
```

### Opacity

Adjust opacity with Tailwind utilities:

```html
<span class="duo-icons-add-circle text-blue-500 opacity-50"></span>
<span class="duo-icons-add-circle text-blue-500 opacity-75"></span>
```

## Styling

### CSS Customization

Since Duo Icons use mask-image under the hood, they respect text color and can be styled like text:

```html
<!-- Default behavior - inherits text color -->
<div class="text-blue-500">
  <span class="duo-icons-add-circle"></span>
</div>

<!-- Override with specific class -->
<style>
  .icon-custom {
    color: #3b82f6;
  }
</style>
<span class="duo-icons-add-circle icon-custom"></span>
```

### Customizing Duotone Layers

You can customize the primary and secondary layers of the duotone icons:

```html
<!-- Using Tailwind variants -->
<span class="duo-icons-add-circle duo-icons-primary:text-blue-600 duo-icons-secondary:text-blue-300"></span>
```

## Examples

### Size Variations

```html
<div class="flex gap-4 items-center">
  <span class="duo-icons-add-circle text-lg"></span>
  <span class="duo-icons-add-circle text-2xl"></span>
  <span class="duo-icons-add-circle text-3xl"></span>
  <span class="duo-icons-add-circle text-5xl"></span>
</div>
```

### Color Variations

```html
<div class="flex gap-4">
  <span class="duo-icons-add-circle text-blue-500"></span>
  <span class="duo-icons-add-circle text-green-500"></span>
  <span class="duo-icons-add-circle text-red-500"></span>
  <span class="duo-icons-add-circle text-purple-500"></span>
</div>
```

### Interactive Icon Button

```html
<button class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  <span class="duo-icons-add-circle"></span>
  Add New
</button>
```

### Icon in Navigation

```html
<nav class="flex items-center gap-8">
  <a href="#" class="flex items-center gap-2 hover:text-blue-500 transition-colors">
    <span class="duo-icons-add-circle"></span>
    Create
  </a>
</nav>
```

### Icon with Hover Effect

```html
<style>
  .hover-icon {
    transition: all 0.3s ease;
  }
  
  .hover-icon:hover {
    transform: scale(1.2);
    color: #3b82f6;
  }
</style>

<span class="duo-icons-add-circle hover-icon cursor-pointer"></span>
```

## Advanced Configuration

### Custom Icon Colors

Override the default icon color in your Tailwind config:

```js
import duoIconsPlugin from '@duo-icons/tailwind';

export default {
  theme: {
    extend: {
      colors: {
        'icon-primary': '#3b82f6',
        'icon-secondary': '#93c5fd',
      },
    },
  },
  plugins: [duoIconsPlugin],
};
```

### Using with Dark Mode

```html
<!-- Icon adapts to dark mode -->
<span class="duo-icons-add-circle text-gray-800 dark:text-white"></span>

<!-- Specific colors per mode -->
<span class="duo-icons-add-circle text-blue-600 dark:text-blue-400"></span>
```

## Browser Support

Duo Icons work in all modern browsers that support:
- CSS mask-image property
- CSS custom properties (CSS variables)

## License

MIT - Created by fazdiu

## Support

If you find Duo Icons useful, consider supporting the project with a donation: [![Support me on Ko-fi](https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&logoColor=white)](https://ko-fi.com/fazdiu)

