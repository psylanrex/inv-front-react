/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INVITORY_API: string;
  readonly VITE_INVITORY_IMAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
