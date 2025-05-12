// 'use client'

// import { useState } from 'react';
// import Head from 'next/head';

// // Sample product data (replace with your actual data fetching)
// const product = {
//   "_id": "6533d99d3553be2394d11f5c",
//   "name": "Bettery",
//   "title": "bettery",
//   "description": "A dependable car battery is the beating heart of your vehicle, essential for a smooth engine start and optimal performance. At Car Dev, we recognize the vital role a healthy car battery plays in keeping your vehicle running reliably.\n\nOur expert technicians specialize in offering comprehensive car battery services, including diagnosis, replacement, and repairs. Utilizing cutting-edge technology, we ensure your battery issues are accurately identified, and we provide tailored solutions. Whether it's time for a new battery or a simple repair to extend the life of your current one, Car Dev has got you covered.\n\nNever worry about being left stranded with a dead battery again. Our 24/7 on-demand Car Battery Replacement & Repair service ensures you're always prepared, no matter the time of day or night.\n\nTrust Car Dev to keep your vehicle powered up and ready to hit the road. Don't let a failing battery disrupt your journeys; ensure your car is always primed for action with a reliable car battery from Car Dev.",
//   "alt": "Car Battery",
//   "image_url": "https://i.ibb.co/zJy1bMS/baterias.jpg",
//   "price": "AED 350",
//   "warranty": "24-month warranty",
//   "features": [
//     "High cold cranking amps (CCA)",
//     "Maintenance-free design",
//     "Vibration-resistant construction",
//     "Spill-proof technology",
//     "Compatible with most vehicle makes"
//   ],
//   "specs": {
//     "Type": "AGM (Absorbent Glass Mat)",
//     "Voltage": "12V",
//     "Capacity": "70Ah",
//     "Dimensions": "278×175×190 mm",
//     "Weight": "18.5 kg"
//   }
// };

// export default function ProductPage() {
//   const [activeTab, setActiveTab] = useState('description');
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <>
//       <Head>
//         <title>{product.title} | 24CarServiceDubai</title>
//         <meta name="description" content={product.description.substring(0, 160)} />
//         <meta property="og:image" content={product.image_url} />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//         {/* Product Header */}
//         <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto text-center">
//             <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//               Premium <span className="text-emerald-400">Car Battery</span>
//             </h1>
//             <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
//               Power your journey with our high-performance automotive batteries
//             </p>
//           </div>
//         </div>

//         {/* Main Product Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Product Image Gallery */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-2xl shadow-xl overflow-hidden aspect-w-1 aspect-h-1">
//                 <img
//                   src={product.image_url}
//                   alt={product.alt}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <div className="grid grid-cols-4 gap-4">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all">
//                     <img
//                       src={product.image_url}
//                       alt={`${product.alt} thumbnail ${i}`}
//                       className="object-cover w-full h-24"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
//                 <div className="mt-4 flex items-center">
//                   <div className="flex items-center">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <svg
//                         key={star}
//                         className="w-5 h-5 text-yellow-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                     <span className="ml-2 text-gray-600">4.9 (128 reviews)</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-emerald-50 rounded-xl p-6">
//                 <div className="flex justify-between items-center">
//                   <span className="text-3xl font-bold text-gray-900">{product.price}</span>
//                   <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
//                     {product.warranty}
//                   </span>
//                 </div>
//               </div>

//               {/* Key Features */}
//               <div>
//                 <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
//                 <ul className="mt-4 space-y-3">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <svg
//                         className="h-5 w-5 text-emerald-500 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Quantity Selector */}
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center border border-gray-300 rounded-lg">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="px-4 py-2 text-gray-600 hover:bg-gray-100"
//                   >
//                     -
//                   </button>
//                   <span className="px-4 py-2 text-gray-900">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="px-4 py-2 text-gray-600 hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
//                   Add to Cart
//                 </button>
//               </div>

//               {/* Call to Action */}
//               <div className="bg-blue-50 rounded-xl p-4 flex items-center">
//                 <div className="flex-shrink-0">
//                   <svg
//                     className="h-8 w-8 text-blue-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="text-sm font-medium text-blue-800">Need help choosing?</h4>
//                   <p className="text-sm text-blue-700">
//                     Call our experts: <span className="font-bold">+971 56 870 3512</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Tabs */}
//           <div className="mt-16">
//             <div className="border-b border-gray-200">
//               <nav className="-mb-px flex space-x-8">
//                 <button
//                   onClick={() => setActiveTab('description')}
//                   className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                 >
//                   Description
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('specs')}
//                   className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'specs' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                 >
//                   Specifications
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('reviews')}
//                   className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//                 >
//                   Reviews
//                 </button>
//               </nav>
//             </div>

//             <div className="mt-8">
//               {activeTab === 'description' && (
//                 <div className="prose prose-lg text-gray-500 max-w-none">
//                   {product.description.split('\n').map((paragraph, i) => (
//                     <p key={i} className="mb-4">{paragraph}</p>
//                   ))}
//                 </div>
//               )}

//               {activeTab === 'specs' && (
//                 <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//                   <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     {Object.entries(product.specs).map(([key, value]) => (
//                       <div key={key} className="py-4 border-b border-gray-200">
//                         <dt className="text-sm font-medium text-gray-500">{key}</dt>
//                         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                           {value}
//                         </dd>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'reviews' && (
//                 <div className="space-y-8">
//                   {[1, 2, 3].map((review) => (
//                     <div key={review} className="bg-white p-6 rounded-lg shadow">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0">
//                           <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
//                             {review === 1 ? 'A' : review === 2 ? 'M' : 'S'}
//                           </div>
//                         </div>
//                         <div className="ml-4">
//                           <h4 className="text-sm font-bold text-gray-900">
//                             {review === 1 ? 'Ahmed K.' : review === 2 ? 'Mohammed R.' : 'Sarah T.'}
//                           </h4>
//                           <div className="flex items-center mt-1">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                               <svg
//                                 key={star}
//                                 className={`w-4 h-4 ${star <= (review === 3 ? 4 : 5) ? 'text-yellow-400' : 'text-gray-300'}`}
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                               >
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                               </svg>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="ml-auto text-sm text-gray-500">
//                           {review === 1 ? '2 weeks ago' : review === 2 ? '1 month ago' : '3 months ago'}
//                         </div>
//                       </div>
//                       <div className="mt-4 text-sm text-gray-700">
//                         <p>
//                           {review === 1
//                             ? 'Excellent battery performance in Dubai heat. Installation was quick and professional.'
//                             : review === 2
//                             ? 'Great service! My car starts perfectly every time now, even in the morning.'
//                             : 'The battery was delivered and installed at my home. Very convenient service.'}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Related Products */}
//           <div className="mt-16">
//             <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {['Radiator', 'Brake Pads', 'Starter System', 'Steering Pump'].map((item) => (
//                 <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                   <div className="h-48 bg-gray-100 flex items-center justify-center">
//                     <img
//                       src="https://i.ibb.co/zJy1bMS/baterias.jpg"
//                       alt={item}
//                       className="object-contain h-full"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-medium text-gray-900">{item}</h3>
//                     <div className="mt-2 flex justify-between items-center">
//                       <span className="text-emerald-600 font-bold">AED {[320, 180, 420, 380][Math.floor(Math.random() * 4)]}</span>
//                       <button className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full hover:bg-emerald-200 transition-colors">
//                         View
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Service CTA */}
//         <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto text-center">
//             <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
//               Need professional installation?
//             </h2>
//             <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
//               Our certified technicians provide 24/7 mobile installation services across Dubai
//             </p>
//             <div className="mt-8">
//               <a
//                 href="/contact"
//                 className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
//               >
//                 Book Installation Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


'use client'

import Loading from '@/components/ui/Shared/Loading/Loading';
import { productdata } from '@/data-fetch/servicedata';
import { ProductType } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState<ProductType | 'all'>('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productdata();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />
  }


  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium <span className="text-primary">Auto Parts</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-performance components engineered for reliability and durability. 
            Upgrade your vehicle with our cutting-edge automotive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
            //@ts-ignore
              key={product._id}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ${hoveredCard === index ? 'transform scale-[1.02] z-10 border-primary border-2' : 'border border-gray-200'}`}
              //@ts-ignore
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-full flex flex-col bg-white">
                {/* Product image */}
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={product?.
                      //@ts-ignore
                      image_url} 
                    alt={
                      //@ts-ignore
                      product?.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Product info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{
                  //@ts-ignore
                  product?.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {
                    //@ts-ignore
                    product?.description
                    }
                  </p>
                  
                  {/* Interactive elements */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link href={`/products/${product?.name}`}>
                    <button className="w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
                
                {/* Premium badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                    Premium
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;