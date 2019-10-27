import { existsSync, mkdirSync, unlinkSync, readFileSync } from 'fs';
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
                },
                {
                    url: '/test2',
                    lastmodISO: new Date().toISOString(),
                    changefreq: 'monthly',
                    priority: 0.9,
                    mobile: true,
                    androidLink: 'android.com',
                    img: [
                        {
                            url: 'image.jpg',
                            caption: 'caption',
                            geoLocation: 'right here',
                            license: 'MIT',
                            title: 'title'
                        }
                    ],
                    links: [
                        {
                            url: 'google.com',
                            lang: 'en'
                        }
                    ]
                }
            ]
        };
        await generateSitemap(config, dirPath);
        expect(existsSync(sitemapPath)).toBe(true);
        expect(readFileSync(sitemapPath).toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"><url><loc>example.com/test</loc></url><url><loc>example.com/test2</loc><lastmod>2019-10-27T05:10Z</lastmod><changefreq>monthly</changefreq><priority>0.9</priority><image:image><image:loc>example.com/image.jpg</image:loc><image:caption><![CDATA[caption]]></image:caption><image:geo_location>right here</image:geo_location><image:title><![CDATA[title]]></image:title><image:license>MIT</image:license></image:image><xhtml:link rel="alternate" hreflang="en" href="example.com/google.com"/><xhtml:link rel="alternate" href="android.com"/><mobile:mobile/></url></urlset>');
        done();
    });
    
});
