import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class Box2 extends StatelessWidget {
  final double size;
  final Color? color;

  const Box2({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 20.765 7.982 L 20.787 8.172 L 20.794 8.366 L 20.794 15.634 C 20.794 16.464 20.382 17.239 19.695 17.704 L 19.545 17.799 L 13.25 21.433 L 13.126 21.5 L 13 21.56 L 13 12.57 L 20.765 7.982 Z" opacity=".3"/><path fill="currentColor" d="M 13.25 2.567 L 19.544 6.201 C 19.594 6.231 19.644 6.261 19.692 6.293 L 12 10.838000000000001 L 4.308 6.293 C 4.356 6.261 4.406 6.23 4.456 6.201 L 10.75 2.567 C 11.524000000000001 2.12 12.476 2.12 13.25 2.567 Z"/><path fill="currentColor" d="M 3.235 7.982 L 11 12.571 L 11 21.559 C 10.914 21.522 10.831 21.48 10.75 21.433 L 4.456 17.799 C 3.683 17.352 3.206 16.527 3.206 15.634 L 3.206 8.366 C 3.206 8.236 3.216 8.108 3.236 7.982 L 3.235 7.982 Z" opacity=".3"/>',
    );
  }
}