import { SitemapConfig } from '../sitemap/sitemap.model';

export interface PrerenderConfig {
    routes: string[]
    /**
     * Path to the built browser-app relative to `./dist/`
     */
    browserFolder: string;
    /**
     * You should pass this option as `require('./dist/server/main')`
     * to directly require the compiled AppServerModule.
     */
    serverBuild: {
        AppServerModuleNgFactory: any;
        LAZY_MODULE_MAP: any;
    }
    sitemapConfig?: SitemapConfig;
    extras?: ExtraOptions;
}

export interface ExtraOptions {
    logFunc?: (message: string) => any;
}

export const DEFAULT_EXTRA_OPTIONS: ExtraOptions = {
    logFunc: (message: string) => console.log(`[universal-utils] ${message}`)
}
