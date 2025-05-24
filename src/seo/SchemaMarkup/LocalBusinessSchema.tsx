// components/schema/LocalBusinessSchema.tsx

export const localBusinessData = {
  "@type": "AutoRepair",
  "@id": "https://www.24carservicedubai.com/#localbusiness",
  name: "24CarServiceDubai",
  description: "24/7 on-demand car repair and maintenance services in Dubai.",
  url: "https://www.24carservicedubai.com",
  telephone: "+971568703512",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Satwa",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2396,
    longitude: 55.2844
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  image: [
    "https://www.24carservicedubai.com/images/service1.jpg",
    "https://www.24carservicedubai.com/images/service2.jpg"
  ],
  priceRange: "$$"
};

export const LocalBusinessSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
};
