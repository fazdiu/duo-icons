<div align="center">
  <h1 id="duo-icons-react">Duo Icons - React</h1>
  <p>
    <a href="https://ko-fi.com/fazdiu"><img src="https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&amp;logoColor=white" alt="Support me on Ko-fi"></a>
    <a href="https://github.com/fazdiu/duo-icons?tab=readme-ov-file#packages"><img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="github"></a>
    <img src="https://img.shields.io/badge/npm-red?logo=npm" alt="npm">
    <img src="https://img.shields.io/badge/react-blue?logo=react" alt="react">
    <img src="https://img.shields.io/badge/nextjs-darkcyan?logo=nextdotjs" alt="nextdotjs">
    <img src="https://img.shields.io/badge/typescript-gray?logo=typescript" alt="typescript">
    <img src="https://img.shields.io/badge/javascript-yellow?logo=javascript" alt="javascript">
  </p>
</div>

Duo Icons for React delivers a lightweight, duotone SVG icon set implemented as React components. Ideal for modern web applications, each icon comes with two layers (primary and secondary) for a stylish two‑tone effect.

## Installation

Use npm or yarn to install:

```bash
npm install @duo-icons/react
# or
yarn add @duo-icons/react
```

### Peer Dependencies

- `react`

Ensure these are installed in your project.

## Basic Usage

Import individual icons and use them in JSX:

```jsx
import { AddCircle } from '@duo-icons/react';

function App() {
  return (
    <div>
      <AddCircle />
      <AddCircle size={32} className="text-red-500" />
    </div>
  );
}
```

Icons accept standard SVG props (`fill`, `stroke`, `aria-*`, etc.) and a `size` prop for convenience.

## Available Icons

The complete collection of all available icons is at [https://duoicons.vercel.app/](https://duoicons.vercel.app/), providing the necessary resources to implement them into your project.


## Props & Options

| Prop      | Type                         | Default | Description |
|-----------|------------------------------|---------|-------------|
| `size`    | `number`                     | `24`    | Width/height in pixels |
| `className` | `string`                   | —       | CSS classes applied to the `<svg>` element |
| ...svg props | `React.SVGProps`         | —       | Any valid SVG attribute (e.g. `fill`, `stroke`, `aria-label`) |

### Duotone Layers

Each icon markup includes:

- `.duo-icons-primary-layer` – main/fill path
- `.duo-icons-secondary-layer` – secondary/faded path (opacity `.3` by default)

You can style these using CSS or utility frameworks.

## Styling

### Tailwind CSS Example

Customize your appearance with Tailwind's utilities; you can also customize the layers with the custom utilities `duo-icons-primary` and `duo-icons-secondary` provided by `@duo-icons/tailwind/base`.

```jsx
<AddCircle className="text-blue-500" />
<AddCircle className="text-green-600 duo-icons-secondary:text-green-500" size={32} />
```

### Plain CSS

```css
.icon-large {
  width: 48px;
  height: 48px;
  color: #1a73e8;
}

.icon-large .duo-icons-secondary-layer {
  opacity: 0.4;
}
```

```jsx
<AddCircle className="icon-large" />
```

## Practical Examples

### Size & Color Variations

```jsx
<div className="flex gap-4">
  <AddCircle size={16} className="text-red-500" />
  <AddCircle size={24} className="text-yellow-500" />
  <AddCircle size={32} className="text-green-500" />
</div>
```

### Icon Button

```jsx
<button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
  <AddCircle size={20} />
  Add Item
</button>
```

### Accessibility

```jsx
<AddCircle aria-label="Add item" />
```

## Additional Notes

- Icons are pure functional components; tree‑shaken in modern bundlers.
- Import only the icons you need to reduce bundle size.
- You can load icons dynamically using `import()`.

## License

MIT © fazdiu

## Support

If you find Duo Icons useful, consider supporting the project with a donation: [![Support me on Ko-fi](https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&logoColor=white)](https://ko-fi.com/fazdiu)

