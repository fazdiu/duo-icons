import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class ChartPie extends StatelessWidget {
  final double size;
  final Color? color;

  const ChartPie({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 12 2 C 17.523 2 22 6.477 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 Z" fill-rule="evenodd" opacity=".3"/><path fill="currentColor" d="M 12 4 L 12 12 L 20 12 C 20 7.582 16.418 4 12 4 Z" fill-rule="evenodd"/>',
    );
  }
}