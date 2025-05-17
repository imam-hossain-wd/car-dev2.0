interface WebSiteSchemaProps {
    name: string;
    url: string;
    query: string;
}
const WebSiteSchema: React.FC<WebSiteSchemaProps> = ({ name, url, query }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    url: url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={${query}}`,
      },
      "query-input": "required name=${query}",
    },
  };
  const structuredData = JSON.stringify(schema);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
  );
};

const ServiceSchema: React.FC<{
    name: string;
    description: string;
    provider: string;
    areaServed: string;
    serviceType: string;
    url: string;
    
}> = ({ name, description, provider, areaServed, serviceType, url }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: name,
        description: description,
        provider: {
            "@type": "Organization", // Or "LocalBusiness" if applicable
            name: provider
        },
        areaServed: areaServed,
        serviceType: serviceType,
        url: url,

    };
    const structuredData = JSON.stringify(schema);
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
    );
};

export default WebSiteSchema;