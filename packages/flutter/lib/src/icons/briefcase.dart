import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class Briefcase extends StatelessWidget {
  final double size;
  final Color? color;

  const Briefcase({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 14 3 C 15.657 3 17 4.343 17 6 L 20 6 C 21.105 6 22 6.895 22 8 L 22 19 C 22 20.105 21.105 21 20 21 L 4 21 C 2.895 21 2 20.105 2 19 L 2 8 C 2 6.895 2.895 6 4 6 L 7 6 C 7 4.343 8.343 3 10 3 L 14 3 Z" opacity=".3"/><path fill="currentColor" d="M 14 5 L 10 5 C 9.493 5 9.066 5.38 9.007 5.883 L 9 6 L 15 6 C 15 5.493 14.62 5.066 14.117 5.007 L 14 5 Z"/><path fill="currentColor" d="M 19 10 L 5 10 C 4.23 10.001 3.75 10.835 4.136 11.501 C 4.293 11.773 4.57 11.956 4.883 11.993 L 5 12 L 11 12 L 11 13 C 11.001 13.77 11.835 14.25 12.501 13.864 C 12.773 13.707 12.956 13.43 12.993 13.117 L 13 13 L 13 12 L 19 12 C 19.77 11.999 20.25 11.165 19.864 10.499 C 19.707 10.227 19.43 10.044 19.117 10.007 L 19 10 Z"/>',
    );
  }
}