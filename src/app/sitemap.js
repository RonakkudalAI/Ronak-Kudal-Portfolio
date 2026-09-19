import { profile } from '../data/personalInfo';

const SITE_URL = profile.siteUrl.endsWith('/') ? profile.siteUrl : `${profile.siteUrl}/`;

export const dynamic = 'force-static';

export default function sitemap() {
    const lastModified = new Date();

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${SITE_URL}resume/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
