<div align="center">
  <h1 id="duo-icons-flutter">Duo Icons - Flutter</h1>
  <p>
    <a href="https://ko-fi.com/fazdiu"><img src="https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&amp;logoColor=white" alt="Support me on Ko-fi"></a>
    <a href="https://github.com/fazdiu/duo-icons?tab=readme-ov-file#packages"><img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="github"></a>
    <img src="https://img.shields.io/badge/pub.dev-red?logo=dart" alt="dart">
    <img src="https://img.shields.io/badge/flutter-blue?logo=flutter" alt="flutter">
  </p>
</div>

Duo Icons is a lightweight duotone icon library for Flutter. Each icon is delivered as a stateless widget with two layered SVG paths (primary and secondary) that create a modern two‑tone look. Built on top of `flutter_svg`, the package works across **web, Android, and iOS**.

## Introduction

This package provides reusable icon widgets that integrate seamlessly with Flutter layouts. You can treat them like any other widget, applying size, color and container styling.

## Installation

Add Duo Icons to your `pubspec.yaml`:

```yaml
dependencies:
  duo_icons: ^1.0.1
  flutter_svg: ^1.0.10+1
```

Then run:

```bash
flutter pub get
```

## Basic Usage

Import the icons and create them in your widget tree:

```dart
import 'package:duo_icons/duo_icons.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: const [
        AddCircle(),
        AddCircle(size: 32.0, color: Colors.red),
      ],
    );
  }
}
```

Your IDE will suggest available icons like `AddCircle` once the package is imported.

## Available Icons

The complete collection of all available icons is at [https://duoicons.vercel.app/](https://duoicons.vercel.app/), providing the necessary resources to implement them into your project.

## Props & Options

Every icon widget accepts these constructor parameters:

| Parameter | Type    | Default | Description |
|-----------|---------|---------|-------------|
| `size`    | `double`| `24.0`  | Width and height in logical pixels |
| `color`   | `Color?`| `null`  | Overall tint color (applied via `ColorFilter`) |

Icons may also be wrapped in any Flutter widget for layout or styling.

### Duotone Layers

The SVG markup for each icon contains two `<path>` elements:

1. Secondary layer (opacity `.3`)
2. Primary layer

Color is applied uniformly; customize further by building your own wrapper widgets if needed.

## Styling Examples

```dart
AddCircle(
  size: 48.0,
  color: Theme.of(context).primaryColor,
);
```

```dart
Container(
  padding: const EdgeInsets.all(8),
  decoration: BoxDecoration(color: Colors.grey[200], shape: BoxShape.circle),
  child: const AddCircle(size: 20.0, color: Colors.black),
)
```

## Practical Examples

### Size & Color Variations

```dart
Row(
  children: const [
    AddCircle(size: 16.0, color: Colors.green),
    AddCircle(size: 24.0, color: Colors.blue),
    AddCircle(size: 32.0, color: Colors.orange),
  ],
);
```

### Icon Button

```dart
IconButton(
  icon: const AddCircle(),
  color: Colors.white,
  onPressed: () {},
)
```

### Container with Background

```dart
Container(
  padding: const EdgeInsets.all(8),
  decoration: BoxDecoration(color: Colors.grey[200], shape: BoxShape.circle),
  child: const AddCircle(size: 20.0, color: Colors.black),
)
```

## Platform Support

Because the icons are based on `flutter_svg` and standard Flutter widgets, they work on:

- **Android** – all supported API levels
- **iOS** – via Flutter's iOS engine
- **Web** – renders correctly in modern browsers

No additional native dependencies are necessary beyond `flutter_svg`.

## License

MIT © fazdiu

## Support

If you find Duo Icons useful, consider supporting the project with a donation: [![Support me on Ko-fi](https://img.shields.io/badge/Ko--fi-Support_Me-29ABE0?logo=ko-fi&logoColor=white)](https://ko-fi.com/fazdiu)

