import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class Toggle extends StatelessWidget {
  final double size;
  final Color? color;

  const Toggle({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" fill-rule="nonzero" d="M 6 12 C 6 10.46 7.667 9.498 9 10.268 C 9.619 10.625 10 11.285 10 12 C 10 13.54 8.333 14.502 7 13.732 C 6.381 13.375 6 12.715 6 12 Z"/><path fill="currentColor" d="M 8 5 C 2.611 5 -0.756 10.833 1.938 15.5 C 3.188 17.666 5.499 19 8 19 L 16 19 C 21.389 19 24.756 13.167 22.062 8.5 C 20.812 6.334 18.501 5 16 5 L 8 5 Z M 8 8 C 4.921 8 2.996 11.333 4.536 14 C 5.25 15.238 6.571 16 8 16 C 11.079 16 13.004 12.667 11.464 10 C 10.75 8.762 9.429 8 8 8 Z" fill-rule="evenodd" opacity=".3"/>',
    );
  }
}