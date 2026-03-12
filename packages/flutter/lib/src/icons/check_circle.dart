import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class CheckCircle extends StatelessWidget {
  final double size;
  final Color? color;

  const CheckCircle({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 12 2 C 17.523 2 22 6.477 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 Z" opacity=".3"/><path fill="currentColor" d="M 15.535 8.381 L 10.585 13.331 L 8.465 11.21 C 7.921 10.665 6.991 10.914 6.791 11.658 C 6.699 12.003 6.797 12.371 7.05 12.624 L 9.808 15.382 C 10.238 15.812 10.934 15.812 11.364 15.382 L 16.95 9.796 C 17.495 9.251 17.245 8.321 16.501 8.122 C 16.156 8.03 15.788 8.128 15.535 8.381 Z"/>',
    );
  }
}