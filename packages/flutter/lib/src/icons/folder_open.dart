import 'package:flutter/material.dart';
import '../icon_base.dart'; 
            class FolderOpen extends StatelessWidget {
  final double size;
  final Color? color;

  const FolderOpen({super.key, this.size = 24.0, this.color});

  @override
  Widget build(BuildContext context) {
    return IconBase(
      size: size,
      color: color,
      svgPath: '<path fill="currentColor" d="M 19.82 6 C 21.056 6 21.995 7.11 21.792 8.329 L 20.126 18.329 C 19.965 19.293 19.131 20 18.153 20 L 5.847 20 C 4.869 20 4.035 19.293 3.874 18.329 L 2.208 8.329 C 2.005 7.11 2.944 6 4.18 6 L 19.82 6 Z" opacity=".3"/><path fill="currentColor" d="M 18 3 C 18.77 3 19.251 3.833 18.866 4.5 C 18.687 4.809 18.357 5 18 5 L 6 5 C 5.23 5 4.749 4.167 5.134 3.5 C 5.313 3.191 5.643 3 6 3 L 18 3 Z"/>',
    );
  }
}