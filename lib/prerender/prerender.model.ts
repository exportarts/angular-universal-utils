import { SitemapConfig } from '../sitemap/sitemap.model';

export interface PrerenderConfig {
    routes: string[]
    /**
     * Path to the built browser-app relative to `process.cwd()`.
     * 
     * In a default app generated with `ng new`, this directory
     * is usually `dist/<MY_APP>`. To be consistent with the server-app,
     * we typically use `dist/browser` in our projects.
     */
    browserFolder: string;
    /**
     * You should pass this option as `require('./dist/server/main')`
     * to directly require the compiled AppServerModule.
     * 
     * This is similar to this line in the official Universal Starter:
     * https://github.com/angular/universal-starter/blob/master/server.ts#L22
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
    logFunc: (message: string) => console.log(`[universal-utils@${new Date().toLocaleTimeString()}] ${message}`)
}
