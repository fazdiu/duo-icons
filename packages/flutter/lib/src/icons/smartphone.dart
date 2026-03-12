import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class Smartphone extends StatelessWidget {
  final double size;
  final Color? color;

  const Smartphone({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 17 2 C 18.047 2 18.917 2.806 18.995 3.85 L 19 4 L 19 20 C 19 21.047 18.194 21.917 17.15 21.995 L 17 22 L 7 22 C 5.953 22 5.083 21.194 5.005 20.15 L 5 20 L 5 4 C 5 2.9530000000000003 5.806 2.083 6.85 2.005 L 7 2 L 17 2 Z" opacity=".3"/><path fill="currentColor" d="M 12.5 16 L 11.5 16 C 11.224 16 11 16.224 11 16.5 L 11 17.5 C 11 17.776 11.224 18 11.5 18 L 12.5 18 C 12.776 18 13 17.776 13 17.5 L 13 16.5 C 13 16.224 12.776 16 12.5 16 Z"/>',
    );
  }
}