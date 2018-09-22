declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare interface NodeModule {
    hot?: { accept: (path: string, callback: () => void) => void };
}

declare interface System {
    import<T = any>(module: string): Promise<T>;
}

declare var System: System;

// declare module '*.css' {
//   const styles: any;
//   export = styles;
// }

declare module '*.scss' {
  const styles: any;
  export = styles;
}


declare module "*.json" {
    const value: any;
    export default value;
}

declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'