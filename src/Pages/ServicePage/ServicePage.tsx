/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */

"use client"

import { JSX, useEffect, useState } from 'react'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Wrench, Droplet, Fan, Battery, Settings } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

// Service icon mapping
const getServiceIcon = (serviceName: string) => {
  const iconMap: Record<string, JSX.Element> = {
    "Battery": <Battery className="h-8 w-8 text-yellow-500" />,
    "Brake": <Wrench className="h-8 w-8 text-red-500" />,
    "Radiator": <Droplet className="h-8 w-8 text-blue-500" />,
    "Engine": <Settings className="h-8 w-8 text-purple-500" />,
    "AC": <Fan className="h-8 w-8 text-blue-500" />,
    "Oil": <Droplet className="h-8 w-8 text-green-500" />,
    "ABS": <Wrench className="h-8 w-8 text-orange-500" />,
    "DenamoCraft": <Wrench className="h-8 w-8 text-primary" />,
  };

  for (const [key, icon] of Object.entries(iconMap)) {
    if (serviceName.includes(key)) return icon
  }
  return <Wrench className="h-8 w-8 text-primary" />
}
  

export function ServicePage() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://car-dev-backend.vercel.app/services')
        if (!response.ok) {
          throw new Error('Failed to fetch services')
        }
        const data = await response.json()
        setServices(data)
      } catch (err) {
        //@ts-ignore
        setError(err?.message)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])



  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[400px] w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto text-center">
          <p className="text-red-500">{error}</p>
          <Button 
            onClick={() => window.location.reload()}
            className="mt-4"
          >
            Retry
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            Featured <span className="text-primary">Car Repair</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional automotive solutions tailored for Dubai's climate and driving conditions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            // Clean up image URL if needed
            const imageUrl = service.image_url.split('?')[0] || service.image_url
            
            // Extract features
            const features = [
              service.list1,
              service.list2,
              service.list3,
              service.list4
            ].filter(Boolean)

            return (
              <div 
                key={service._id}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-white p-2 shadow-sm">
                        {getServiceIcon(service.name)}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-4 text-gray-600">{service.description || service.service_time}</p>

                  <div className="mb-6 space-y-2">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Learn More
                    </Button>
                    <Button>Book Now</Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}