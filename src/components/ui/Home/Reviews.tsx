// import React from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '../card'
// import { Star } from 'lucide-react'

// export default function Reviews() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
//             What Our <span className="text-primary">Clients Say</span>
//           </h2>
//           <div className="flex justify-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
//             ))}
//           </div>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {[ 
//             {
//               name: "Ahmed K.",
//               rating: 5,
//               comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
//               date: "2 days ago"
//             },
//             {
//               name: "Sarah M.",
//               rating: 5,
//               comment: "Honest mechanics who actually care. Didn&apos;t try to upsell unnecessary repairs like other shops.",
//               date: "1 week ago"
//             },
//             {
//               name: "Rajiv P.",
//               rating: 4,
//               comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
//               date: "3 weeks ago"
//             }
//           ].map((review, i) => (
//             <Card key={i} className="hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm">
//               <CardHeader>
//                 <div className="flex justify-between">
//                   <CardTitle>{review.name}</CardTitle>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, j) => (
//                       <Star 
//                         key={j} 
//                         className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 mb-4">&quot;{review.comment}&quot;</p>
//                 <p className="text-sm text-gray-400">{review.date}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useEffect, useState } from "react"

const reviews = [
  {
    name: "Ahmed K.",
    rating: 5,
    comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
    date: "2 days ago",
    location: "Business Bay"
  },
  {
    name: "Sarah M.",
    rating: 5,
    comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
    date: "1 week ago",
    location: "Jumeirah"
  },
  {
    name: "Rajiv P.",
    rating: 4,
    comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
    date: "3 weeks ago",
    location: "Dubai Marina"
  },
  {
    name: "Fatima A.",
    rating: 5,
    comment: "24/7 service saved me when my car broke down at midnight. Technician arrived in 30 minutes!",
    date: "1 month ago",
    location: "Al Quoz"
  },
  {
    name: "Mohammed R.",
    rating: 5,
    comment: "Professional oil change with genuine parts. My car runs smoother than ever!",
    date: "2 months ago",
    location: "Downtown Dubai"
  },
  {
    name: "Elena S.",
    rating: 5,
    comment: "Fixed my brake issues perfectly. The team explained everything clearly and provided warranty.",
    date: "3 months ago",
    location: "Palm Jumeirah"
  }
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [parent] = useAutoAnimate()
  const visibleCount = 5 // Number of reviews to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (reviews.length - visibleCount + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length, visibleCount])

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600 dark:text-gray-300">4.9/5 (200+ Reviews)</span>
          </div>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between items-center mb-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {reviews.slice(0, reviews.length - visibleCount + 1).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setCurrentIndex(prev => Math.min(reviews.length - visibleCount, prev + 1))}
              disabled={currentIndex === reviews.length - visibleCount}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div 
            ref={parent}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {visibleReviews.map((review, i) => (
              <motion.div
                key={`${review.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="h-full border border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-semibold">{review.name}</CardTitle>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{review.location}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star 
                            key={j} 
                            className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 italic">&quot;{review.comment}&quot;</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">{review.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  )
}