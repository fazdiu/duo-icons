import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class Compass extends StatelessWidget {
  final double size;
  final Color? color;

  const Compass({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 12 2 C 17.523 2 22 6.477 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 Z" opacity=".3"/><path fill="currentColor" d="M 16.243 7.757 C 15.889 7.404 11.293 8.464 9.879 9.879 C 8.465 11.293 7.404 15.889 7.757 16.243 C 8.111 16.596 12.707 15.536 14.121 14.121 C 15.536 12.707 16.596 8.111 16.243 7.757 Z"/>',
    );
  }
}