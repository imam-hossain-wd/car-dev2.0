
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../card'
import { Button } from "@/components/ui/button";

export default function GetTouch() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about your vehicle? Our team is ready to help 24/7 with expert advice and service.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p className="text-gray-600">Al Quoz Industrial Area, Dubai, UAE</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">contact@24carservicedubai.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+971 56 870 3512 (24/7 Support)</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
                    placeholder="+971"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary" 
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}
