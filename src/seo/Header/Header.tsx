import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;    
  canonicalUrl?: string; 
  noIndex?: boolean; 
}

const Header: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  noIndex,
}) => {
  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow';

  const metadata: Metadata = {
    title: title,
    description: description,
    keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
    authors: author ? [{ name: author }] : undefined,
    robots: metaRobots,
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    ...(canonicalUrl
      ? {
          alternates: {
            canonical: canonicalUrl,
          },
        }
      : {}),
  };

  return null; 
};

export default Header;