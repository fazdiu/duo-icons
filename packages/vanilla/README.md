
> [!IMPORTANT]
> ⚠️ Update Notice: Before migrating from version 1.x to the current version, we recommend reviewing the important changes and possible compatibility adjustments at this link:[Version 2.x Changes](./CHANGELOG.md)

# DuoIcons

<p align="center">
  <a href="https://duoicons.vercel.app">Icons</a>
  ·
  <a href="https://duoicons.vercel.app">Guide</a>
  ·
  <a href="https://duoicons.vercel.app">Packages</a>
  ·
  <a href="https://github.com/fazdiu/duo-icons/blob/master/LICENSE">License</a>
  ·
  <a href="https://duoicons.vercel.app">Showcase</a>
</p>

Duo Icons is a library of modern and beautiful duotone icons, designed for easy use in web projects. It provides a collection of SVG icons that can be dynamically integrated into your HTML.

## License

DuoIcons is totally free for commercial use and personal use, this software is licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/main/LICENSE).

## Installation

### NPM

Install Duo Icons using npm for projects that use ES modules or bundlers like Vite, Webpack, etc.

```bash
npm install duo-icons
```

### CDN

Include Duo Icons directly in your HTML using a CDN like Unpkg. This is useful for quick prototypes or projects without a bundler.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>My Project</title>
</head>
<body>
  <!-- Your content here -->

  <!-- Script Duo Icons -->
  <script src="https://unpkg.com/duo-icons@latest"></script>
</body>
</html>
```

## Use

### ES Module

If you installed via npm, import and use Duo Icons in your JavaScript/TypeScript files.

```javascript
import * as DuoIcons from 'duo-icons';

// Initialize the icons in the document
DuoIcons.createIcons();

// Or in a specific container
DuoIcons.createIcons({
  root: '#my-container'
});
```

### Unpkg (CDN)

After including the script in your HTML, access Duo Icons via `window.DuoIcons`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>My Project</title>
</head>
<body>
  <div id="iconos">
    <i data-duo-icons="add-circle"></i>
    <i data-duo-icons="box"></i>
  </div>

  <script src="https://unpkg.com/duo-icons@latest"></script>
  <script>
    // Initialize the icons
    DuoIcons.createIcons();
  </script>
</body>
</html>
```

## Function createIcons

The `createIcons` function is the core of Duo Icons. It searches the DOM for elements with specific attributes (such as `data-duo-icons`) and replaces them with the corresponding SVG icons from the library. This allows you to dynamically integrate icons without manually including SVGs in your HTML.

### Options you receive

The function accepts an optional configuration object with the following properties:

- **`icons`** (optional): A `Record<string, string>` object that allows you to define custom icons. Keys are the icon names, and values ​​are the SVG strings.

- **`attributes`** (optional): A `Record<string, any>` object with additional attributes to apply to each generated SVG icon (e.g., CSS classes).

- **`root`** (optional): An `HTMLElement` or a selector string (such as `'#my-id'` or `'.my-class'`) that specifies the root element where to look for icons. If not provided, it uses `document`.


## Modify the opacity and color of the inner layers.

Using the CSS classes `duo-icons-secondary-layer` and `duo-icons-primary-layer`, you can modify the color, opacity, and more. For `tailwindcss`, there are custom variants that allow modification through their own utilities. You can see an example of the implementation and how easy it is in the [`@duo-icons/tailwind`]() package.

```html
 <style>
    .duo-icons-primary-layer{
      color:red
    }
    .duo-icons-secondary-layer{
      /*By default, the child layer has an opacity of 30% applied. If you apply color to the child layer, be sure to set the opacity to 1 */
      opacity:1;
      color:blue
    }
  </style>
<i data-duo-icons="box"></i>
```

### Examples of use

#### Examples of use
```javascript
import * as DuoIcons from 'duo-icons';

// Replace all icons in the document
DuoIcons.createIcons();
```

#### Example with options
```javascript
import * as DuoIcons from 'duo-icons';

// Replace icons only in a specific container, with custom attributes
DuoIcons.createIcons({
  root: '#app',
  attributes: {
    class: 'size-5',
    'data-tooltip': 'My icon'
  },
  icons: {
    'my-icon': '<svg>...</svg>' // Custom icon
  }
});
```

#### Example with CDN
```html
<div id="app">
  <span data-duo-icons="box"></span>
  <span data-duo-icons="box"></span>
</div>

<script src="https://unpkg.com/duo-icons@latest"></script>
<script>
  DuoIcons.createIcons({
    root: '#app',
    attributes: { class: 'svg-icon' }
  });
</script>
```

For more details about the available icons, see the `DuoIcons.icons` property which contains an object with all the included icons.