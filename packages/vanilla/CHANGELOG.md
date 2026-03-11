# Changelog

## 2.0.0 - 2026-03-10
### Added
- **Migration**: Initial release under the `@duo-icons/core` scope.
- **Feature**: Added backwardCompatibility for the previous version.
- **Feature**: Added `root` to search/render all icons within the system.

### Deprecated
- Classes like `duo-icon` and `duo-icon-{iconName}` are replaced by `duo-icons-{iconName}`. They will continue to function for compatibility, but will be removed in the next version.
- The HTML attribute `data-duoicon` is replaced by `data-duo-icons`. It will continue to function for compatibility, but will be removed in the next version.
- The `duo-icons/plugin` (Plugin Tailwind v3) plugin was moved to `@duo-icons/tailwind`. It will continue to function for compatibility, but will be removed in the next version.
- The global variable `duoIcons` is replaced by `DuoIcons`. It will continue to function for compatibility, but will be removed in the next version.

### Changed
- Complete refactoring to TypeScript.
- Classes like `duoicon-primary-layer` and `duoicon-secondary-layer` are replaced by `duo-icons-primary-layer` and `duo-icons-secondary-layer`.

### Note
- This pack succeeds the old `duo-icons`. See the previous history at [duo-icons](https://github.com/fazdiu/duo-icons).
