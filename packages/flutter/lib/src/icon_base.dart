import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IconBase extends StatelessWidget {
  final String svgPath; // El contenido del path
  final double size;
  final Color? color;

  const IconBase({
    super.key,
    required this.svgPath,
    this.size = 24.0,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    // Usamos string interpolation para construir el SVG completo
    final String svgString = '''
      <svg width="$size" height="$size" viewBox="0 0 24 24" xmlns="http://www.w3.org">
        $svgPath
      </svg>
    ''';

    return SvgPicture.string(
      svgString,
      width: size,
      height: size,
      // ColorFilter permite cambiar el color del SVG dinámicamente
      colorFilter: color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
    );
  }
}