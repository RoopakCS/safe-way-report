/// <reference types="vite/client" />

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.mp3.mp3" {
  const src: string;
  export default src;
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}