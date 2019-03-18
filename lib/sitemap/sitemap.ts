import { writeFile } from 'fs';
import { join } from 'path';
import * as sm from 'sitemap';
import { DEFAULT_EXTRA_OPTIONS } from '../prerender/prerender.model';
import { SitemapConfig } from './sitemap.model';

/**
 * Generates a `sitemap.xml` file in the specified location.
 * By default, this file is generated in `./dist/browser` and
 * named `sitemap.xml`.
 * 
 * @param config Config opject for sitemap generation
 * @param browserFolder The browser folder inside 'dist' to generate sitemap in
 * @param extras extra options
 */
export async function generateSitemap(config: SitemapConfig, browserFolder: string, extras = DEFAULT_EXTRA_OPTIONS): Promise<void> {
    const sitemap = sm.createSitemap({
        hostname: config.hostname,
        urls: config.routes
    });

    config.filename = config.filename || 'sitemap.xml';
    const fullPath = join(browserFolder, config.filename);

    return new Promise<void>((resolve, reject) => {
        writeFile(fullPath, sitemap.toString(), null, (err) => {
            if (err) {
                reject(err);
            }
            extras.logFunc(`Generated file "${fullPath}"`);
            resolve();
        });
    })
}
