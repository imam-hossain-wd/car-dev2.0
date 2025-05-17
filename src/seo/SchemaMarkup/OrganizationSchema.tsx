

interface OrganizationSchemaProps {
    name: string;
    url: string;
    logo: string;
    description: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    contactPoint: {
        telephone: string;
        contactType: string;
        areaServed?: string; 
        availableLanguage: string[];
    };
    author: {
        name: string;
    }
}

const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
    name,
    url,
    logo,
    description,
    address,
    contactPoint,
    author
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: name,
        url: url,
        logo: logo,
        description: description,
        address: {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: contactPoint.telephone,
            contactType: contactPoint.contactType,
            ...(contactPoint.areaServed ? { areaServed: contactPoint.areaServed } : {}), 
            availableLanguage: contactPoint.availableLanguage
        },
        author: {
            "@type": "Person",
            name: author.name
        }
    };

    const structuredData = JSON.stringify(schema);

    return (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
    );
};

export default OrganizationSchema;