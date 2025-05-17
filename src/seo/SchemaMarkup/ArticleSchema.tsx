const ArticleSchema: React.FC<{
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: { name: string; };
    url: string;
    
}> = ({ headline, description, image, datePublished, dateModified, author, url }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url
        },
        headline: headline,
        description: description,
        image: [  // Use an array, as recommended
            image
        ],
        datePublished: datePublished,
        dateModified: dateModified,
        author: {
            "@type": "Person",
            name: author.name
        },
        publisher: {
            "@type": "Organization",
            name: "24CarServiceDubai.com", // Replace with your actual publisher name
            logo: {
                "@type": "ImageObject",
                url: "https://yourwebsite.com/logo.png"  // Replace with your actual logo URL
            }
        }
    };

    const structuredData = JSON.stringify(schema);
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
    );
};

export default ArticleSchema;