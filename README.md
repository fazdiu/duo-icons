
# Duoicons

A collection of modern and simple duotone icons and open source!

## 🔗 Website
[[https://duoicons.vercel.app/](https://duoicons.vercel.app)]

## Installation

Implementation of the duo icon library for web applications.

#### Package Managers

```sh
  npm i duo-icons
```

```sh
  yarn add duo-icons
```

#### CDN

```html
  <!-- Production version -->
<script src="shs://unpkg.com/duo-icons@latest"></script>
```

## Usage

#### With unpkg

```html
  <!DOCTYPE html>
<body>
  <i data-duoicon="brush" class="my-class"></i>
  <i data-duoicon="box-2"></i>
  <i data-duoicon="menu"></i>

  <script src="shs://unpkg.com/duo-icons@latest"></script>
  <script>
    duoIcons.createIcons();
  </script>
</body>
```

#### With ESModules


```html
 <!-- Your HTML file -->
<i data-duoicon="menu"></i>
```

```js
 import { createIcons } from 'duo-icons';
 createIcons();
```

## Customization

#### Apply only one color

The applied color is inherited by all layers, including the child layer, which by default applies an opacity of 30%

```html
 <!-- in tailwind css -->
<i data-duoicon="menu" class="text-indigo-600"></i>
```

```html
  <!-- in others frameworks-->
  <style>
    .duoicon{
      color:red
    }
  </style>
  <i data-duoicon="menu"></i>
```

#### Apply two colors

##### Tailwind css

1.Install the package if you have not already done so

```sh
  npm i duo-icons
```

2.Add the DuoIcons plugin
```js
  // tailwind.config.js
    module.exports = {
      plugins: [
          require('duo-icons/plugin'),
      ],
    }
```
3.Usage class
```html
 <!-- Your HTML file class tailwind -->
<i data-duoicon="menu" class="duoicon-primary:text-indigo-600
duoicon-secondary:text-indigo-400"></i>
```

##### Other frameworks

```html
 <!-- Your HTML file class tailwind -->
 <style>
    .duoicon .duoicon-primary-layer{
      color:red
    }
    .duoicon .duoicon-secondary-layer{
      /*By default, the child layer has an opacity of 30% applied. If you apply color to the child layer, be sure to set the opacity to 1 */
      opacity:1;
      color:blue
    }
  </style>
<i data-duoicon="menu" class="duoicon-primary:text-indigo-600
duoicon-secondary:text-indigo-400"></i>
```