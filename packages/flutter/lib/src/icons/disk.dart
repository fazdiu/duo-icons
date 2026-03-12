import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class Disk extends StatelessWidget {
  final double size;
  final Color? color;

  const Disk({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 12 2 C 17.523 2 22 6.477 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 Z" opacity=".3"/><path fill="currentColor" d="M 11.44 6.507 C 11.256 5.986 10.685 5.713 10.164 5.897 C 8.592 6.454 7.269 7.553 6.434 8.997 C 6.048 9.664 6.5280000000000005 10.498 7.299 10.499 C 7.656 10.5 7.987 10.309 8.166 10 C 8.763 8.968 9.708 8.183 10.831 7.784 C 11.352 7.6 11.625 7.029 11.441 6.508 L 11.44 6.507 Z"/><path fill="currentColor" d="M 12 10 C 10.46 10 9.498 11.667 10.268 13 C 10.625 13.619 11.285 14 12 14 C 13.54 14 14.502 12.333 13.732 11 C 13.375 10.381 12.715 10 12 10 Z"/>',
    );
  }
}