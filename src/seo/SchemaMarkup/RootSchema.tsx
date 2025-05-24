import { localBusinessData } from "./LocalBusinessSchema";

export const RootSchema = () => {
  const rootSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.24carservicedubai.com/#website",
        name: "24CarServiceDubai",
        url: "https://www.24carservicedubai.com",
        description: "Best Car Service and Car Repair in Dubai. Your On-Demand Car Savior Anywhere, Anytime!",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.24carservicedubai.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.24carservicedubai.com/#organization",
        name: "24CarServiceDubai",
        url: "https://www.24carservicedubai.com",
        logo: "https://www.24carservicedubai.com/logo.png",
        description: "24/7 on-demand car repair and maintenance services in Dubai. Your on-demand car savior anywhere, anytime!",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Al Satwa",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          postalCode: "00000",
          addressCountry: "AE"
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971568703512",
            contactType: "customer service",
            areaServed: "Dubai",
            availableLanguage: ["English", "Arabic"]
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "carrepairsdubai@gmail.com"
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "24carservicedubai@gmail.com"
          }
        ],
        sameAs: [
          "https://www.facebook.com/24CarServiceDubai",
          "https://www.instagram.com/24CarServiceDubai"
        ]
      },
      localBusinessData // ✅ Injected from the LocalBusinessSchema
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchema) }}
    />
  );
};
