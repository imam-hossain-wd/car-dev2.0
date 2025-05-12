'use client'
import { useState } from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import galleryData from '../../data/gallery.json';
import videoData from '../../data/videoData.json';

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
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Image Gallery Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Our <span className="text-emerald-500">Service Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by 1000+ customers in Dubai.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category 
                  ? 'bg-emerald-500 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {category === 'all' ? 'All Services' : category.split('-').join(' ')}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredImages.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
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

          {/* Video Slider Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Watch Our <span className="text-emerald-500">Services in Action</span>
            </h2>
            
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.video-swiper-next',
                  prevEl: '.video-swiper-prev',
                }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="px-4 py-6"
              >
                {videoData.videos.map((video) => (
                  <SwiperSlide key={video.id}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                      <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                        <iframe
                          src={video.url}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{video.title}</h3>
                        <p className="text-gray-600 mt-1">{video.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Arrows */}
              <button className="video-swiper-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center text-emerald-500 hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="video-swiper-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center text-emerald-500 hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-emerald-500 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Need Our Services?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Let's turn these examples into YOUR car's success story!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-emerald-500 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book Service Now
            </a>
          </div>
        </div>
      </div>

      {/* Swiper Navigation Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .video-swiper-prev,
          .video-swiper-next {
            display: none;
          }
        }
      `}</style>
    </>
  );
}