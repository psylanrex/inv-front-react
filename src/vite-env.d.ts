/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INVITORY_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
