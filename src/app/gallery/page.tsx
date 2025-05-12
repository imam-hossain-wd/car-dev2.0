"use client"

import { useState } from 'react';
import Head from 'next/head';
import galleryData from '../../../gallery.json';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', 'ac-service', 'battery', 'diagnostics', 'radiator', 'brakes', 'oil', 'tires', 'electrical'];

  const filteredImages = activeFilter === 'all' 
    ? galleryData.gallery 
    : galleryData.gallery.filter(item => item.category === activeFilter);

  return (
    <>
      <Head>
        <title>{galleryData.seo.title}</title>
        <meta name="description" content={galleryData.seo.description} />
        <meta name="keywords" content={galleryData.seo.keywords} />
        <meta property="og:image" content="https://www.24carservicedubai.com/images/gallery-og.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Our <span className="text-primary">Service Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by 1000+ customers in Dubai. See our technicians in action.
            </p>
          </div>

          {/* Filter Buttons (Mobile-Friendly) */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {category === 'all' ? 'All Services' : category.split('-').join(' ')}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-primary rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Need Our Services?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Viewing our gallery? Let's turn those photos into YOUR car's success story!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book Service Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}