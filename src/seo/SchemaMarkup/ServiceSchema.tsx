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

export default ServiceSchema;