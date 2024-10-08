interface ImportMetaEnv {
    VITE_MAIN_URL: string;
    VITE_OPENWEATHER_API_KEY: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
