<div align="center">
  <h1 id="duo-icons-react-native">Duo Icons - React Native</h1>
  <p>
    <a href="https://ko-fi.com/fazdiu"><img src="https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&amp;logoColor=white" alt="Support me on Ko-fi"></a>
    <a href="https://github.com/fazdiu/duo-icons?tab=readme-ov-file#packages"><img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="github"></a>
    <img src="https://img.shields.io/badge/npm-red?logo=npm" alt="npm">
    <img src="https://img.shields.io/badge/react-blue?logo=react" alt="react">
    <img src="https://img.shields.io/badge/typescript-gray?logo=typescript" alt="typescript">
    <img src="https://img.shields.io/badge/javascript-yellow?logo=javascript" alt="javascript">
  </p>
</div>

Duo Icons provides a set of modern, duotone SVG icons packaged as React Native components. Each icon comprises two layers (primary/secondary) to achieve a stylish two‑tone look that works seamlessly on iOS, Android and web (via `react-native-web`).

## Installation

Install the library using npm or yarn:

```bash
npm install @duo-icons/react-native
# or
yarn add @duo-icons/react-native
```

### Peer Dependencies

Make sure your project already includes:

- `react`
- `react-native`
- `react-native-svg`

Install them if missing:

```bash
npm install react react-native react-native-svg
```

## Basic Usage

Import icons from the package and render them like any other React component:

```tsx
import { AddCircle } from '@duo-icons/react-native';

export default function App() {
  return (
    <AddCircle />
    <AddCircle size={32} color="red" />
  );
}
```

The default `size` is `24` (pixels) and the icon inherits the `color` prop for the SVG fill.

## Available Icons

The complete collection of all available icons is at [https://duoicons.vercel.app/](https://duoicons.vercel.app/), providing the necessary resources to implement them into your project.

## Props & Options

All icon components accept the following props (extending `react-native-svg`'s `SvgProps`):

| Prop     | Type         | Default | Description |
|----------|--------------|---------|-------------|
| `size`   | `number`     | `24`    | Width/height in pixels |
| `color`  | `string`     | `black` | Fill color applied to both layers |
| ...rest  | `SvgProps`   | —       | Any other SVG attribute supported by `react-native-svg` (e.g., `strokeWidth`, `aria-label`) |

## Styling

React Native styling works as usual. You can combine icons with `<View>` or `<Text>` and control layout using UIKit-style styles.

```tsx
<AddCircle style={{ margin: 8 }} color="#3b82f6" />
```

## Practical Examples

### Color & Size Variations

```tsx
<View style={{ flexDirection: 'row', gap: 12 }}>
  <AddCircle size={16} color="#e53e3e" />
  <AddCircle size={24} color="#34a853" />
  <AddCircle size={32} color="#1a73e8" />
</View>
```

### Icon Button

```tsx
import { TouchableOpacity, Text, View } from 'react-native';

<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 8, backgroundColor: '#3b82f6' }}>
  <AddCircle size={20} color="white" />
  <Text style={{ color: 'white', marginLeft: 4 }}>Add</Text>
</TouchableOpacity>
```

### Accessibility

```tsx
<AddCircle
  size={24}
  color="black"
  accessibilityLabel="Add item"
/>
```

## Additional Notes

- Works on both native and web via `react-native-web`.
- You can render icons dynamically using `import()` if building a large directory.
- Icons are pure functional components with no dependencies other than `react-native-svg`.

## License

MIT © fazdiu

## Support

If you find Duo Icons useful, consider supporting the project with a donation: [![Support me on Ko-fi](https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&logoColor=white)](https://ko-fi.com/fazdiu)

