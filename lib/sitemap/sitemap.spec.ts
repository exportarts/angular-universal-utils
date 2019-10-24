import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { resolve } from 'path';
import { generateSitemap } from './sitemap';
import { SitemapConfig } from './sitemap.model';

describe('generateSitemap()', () => {
    const dirPath = resolve(__dirname, 'tmp');
    const sitemapPath = resolve(dirPath, 'sitemap.xml');

    beforeAll(() => {
        if (!existsSync(dirPath)) {
            mkdirSync(dirPath)
        }
        if (existsSync(sitemapPath)) {
            unlinkSync(sitemapPath)
        }
    })

    it('should generate a sitemap', async done => {
        const config: SitemapConfig = {
            hostname: 'example.com',
            routes: [
                {
                    url: '/test'
                }
            ]
        };
        await generateSitemap(config, dirPath);
        expect(existsSync(sitemapPath)).toBe(true);
        done();
    });
});
