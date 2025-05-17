const ProductSchema: React.FC<{
    name: string;
    description: string;
    brand: string;
    manufacturer: string;
    url: string;
    
}> = ({ name, description, brand, manufacturer, url }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: name,
        description: description,
        brand: {
            "@type": "Brand",
            name: brand
        },
        manufacturer: {
            "@type": "Organization",
            name: manufacturer
        },
        url: url,
    };
    const structuredData = JSON.stringify(schema);
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
    );
};
 export default ProductSchema;