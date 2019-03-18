export interface SitemapConfig {
    hostname: string;
    /**
     * Defaults to 'sitemap.xml'
     */
    filename?: string;
    routes: RouteWithMetadata[];
    xslUrl?: string;
}

export interface RouteWithMetadata {
    url: string;
    changefreq?: string;
    lastmodISO?: string;
    priority?: number;
    androidLink?: string;
    mobile?: boolean;
    img?: Img[];
    links?: Link[];
}

export interface Img {
    url: string;
    caption?: string;
    title?: string;
    geoLocation?: string;
    license?: string;
}

export interface Link {
    lang: string;
    url: string;
}
