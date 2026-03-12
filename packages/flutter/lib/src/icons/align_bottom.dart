import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class AlignBottom extends StatelessWidget {
  final double size;
  final Color? color;

  const AlignBottom({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 9 21 C 10.105 21 11 20.105 11 19 L 11 5 C 11 3.895 10.105 3 9 3 L 5 3 Z" fill-rule="evenodd" opacity=".3"/><path fill="currentColor" d="M 15 7 C 13.895 7 13 7.895 13 9 L 13 19 C 13 20.105 13.895 21 15 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 9 C 21 7.895 20.105 7 19 7 L 15 7 Z" fill-rule="evenodd"/>',
    );
  }
}