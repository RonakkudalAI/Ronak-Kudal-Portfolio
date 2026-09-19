import { profile } from '../data/personalInfo';

const SITE_URL = profile.siteUrl.endsWith('/') ? profile.siteUrl : `${profile.siteUrl}/`;

export const dynamic = 'force-static';

export default function robots() {
    return {
        rules: [{ userAgent: '*', allow: '/' }],
        sitemap: `${SITE_URL}sitemap.xml`,
        host: SITE_URL,
    };
}
