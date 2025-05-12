import blogData from '../../data/blogData.json';
import Head from 'next/head';


export default function BlogPage() {
  // useEffect(() => {
  //   // Schema markup for SEO (optional)
  //   const schema = {
  //     "@context": "https://schema.org",
  //     "@type": "Blog",
  //     "headline": "24CarServiceDubai Blog - Expert Car Repair Tips",
  //     "description": "Learn about car AC repair, battery replacement, and engine diagnostics in Dubai. 24/7 on-demand services."
  //   };
  //   document.querySelector('script[type="application/ld+json"]')?.remove();
  //   const script = document.createElement('script');
  //   script.type = 'application/ld+json';
  //   script.text = JSON.stringify(schema);
  //   document.head.appendChild(script);
  // }, []);

  return (
    <>
      <Head>
        <title>Car Repair Blog – 24CarServiceDubai</title>
        <meta name="description" content="Expert car repair tips for Dubai drivers. Learn about AC, battery, engine, and more." />
        <meta name="keywords" content="car blog, dubai car service, ac repair, battery replacement" />
        <meta property="og:title" content="24CarServiceDubai Blog – Car Repair Guides" />
        <meta property="og:url" content="https://www.24carservicedubai.com/blog" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Car Repair <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Expert tips to keep your car running smoothly in Dubai’s heat.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogData.blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`/blog/${blog.slug}`} 
                    className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}