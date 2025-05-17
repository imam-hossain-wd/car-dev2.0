interface LocalBusinessSchemaProps {
    name: string;
    description: string;
    url: string;
    telephone: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    openingHours: string[]; // Array of opening hours strings (e.g., ["Mo-Sa 09:00-18:00", "Su 10:00-16:00"])
    image: string[];
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
    name,
    description,
    url,
    telephone,
    address,
    geo,
    openingHours,
    image
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: name,
        description: description,
        url: url,
        telephone: telephone,
        address: {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.addressLocality,
            addressRegion: address.addressRegion,
            postalCode: address.postalCode,
            addressCountry: address.addressCountry
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: geo.latitude,
            longitude: geo.longitude
        },
        openingHoursSpecification: openingHours.map(hours => {
            const [days, time] = hours.split(' ');
            const [openTime, closeTime] = time.split('-');
            const dayOfWeek = days.split('-').map(day => {
                if (day === 'Mo') return 'Monday';
                if (day === 'Tu') return 'Tuesday';
                if (day === 'We') return 'Wednesday';
                if (day === 'Th') return 'Thursday';
                if (day === 'Fr') return 'Friday';
                if (day === 'Sa') return 'Saturday';
                if (day === 'Su') return 'Sunday';
                return '';
            });

            return {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: dayOfWeek,
                opens: openTime,
                closes: closeTime
            };
        }),
        image: image,
        "@id": url, // Add @id for consistency
        
    };

    const structuredData = JSON.stringify(schema);

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
    );
};

export default LocalBusinessSchema;