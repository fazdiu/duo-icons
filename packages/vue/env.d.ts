// src/env.d.ts
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // Esto le dice a TS que cualquier .vue exporta un componente válido
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
