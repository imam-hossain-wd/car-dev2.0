// import { Metadata } from 'next';

// interface SEOProps {
//   title: string;
//   description: string;
//   keywords?: string;
//   author?: string;    
//   canonicalUrl?: string; 
//   noIndex?: boolean; 
// }

// const Header: React.FC<SEOProps> = ({
//   title,
//   description,
//   keywords,
//   author,
//   canonicalUrl,
//   noIndex,
// }) => {
//   const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow';

//   const metadata: Metadata = {
//     title: title,
//     description: description,
//     keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
//     authors: author ? [{ name: author }] : undefined,
//     robots: metaRobots,
//     viewport: {
//       width: 'device-width',
//       initialScale: 1,
//     },
//     ...(canonicalUrl
//       ? {
//           alternates: {
//             canonical: canonicalUrl,
//           },
//         }
//       : {}),
//   };

//   return null; 
// };

// export default Header;


import React from 'react';
import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  schemaComponent?: React.ReactNode; // e.g. <RootSchema />
}

const Header: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  noIndex,
  schemaComponent,
}) => {
  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow';

  // Optional: export this metadata if used in generateMetadata() pattern
  const metadata: Metadata = {
    title,
    description,
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

  // You could export this metadata if needed elsewhere:
  // export const generateMetadata = () => metadata;

  return <>{schemaComponent}</>; // Inject the schema component into the DOM
};

export default Header;


//use this header component

//  <Header
//         title="Home - 24CarServiceDubai"
//         description="24/7 on-demand car repair & maintenance in Dubai. Car AC, battery, oil change & more."
//         keywords="car repair Dubai, battery replacement, car service UAE"
//         author="Md Saiful Islam"
//         canonicalUrl="https://www.24carservicedubai.com/"
//         schemaComponent={<RootSchema />}
//       />