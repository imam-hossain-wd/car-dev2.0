import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../card'
import { Star } from 'lucide-react'

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[ 
            {
              name: "Ahmed K.",
              rating: 5,
              comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
              date: "2 days ago"
            },
            {
              name: "Sarah M.",
              rating: 5,
              comment: "Honest mechanics who actually care. Didn&apos;t try to upsell unnecessary repairs like other shops.",
              date: "1 week ago"
            },
            {
              name: "Rajiv P.",
              rating: 4,
              comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
              date: "3 weeks ago"
            }
          ].map((review, i) => (
            <Card key={i} className="hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star 
                        key={j} 
                        className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">&quot;{review.comment}&quot;</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
