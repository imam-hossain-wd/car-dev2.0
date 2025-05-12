import { Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import GetTouch from '@/components/ui/GetTouch/GetTouch'


export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Contact Our <span className="text-primary">Car Experts</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            24/7 professional support for all your vehicle needs in Dubai
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info Card */}
            <Card className="border-0 bg-gradient-to-b from-primary/5 to-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Emergency Call</h3>
                    <p className="text-gray-600">+971 56 870 3512</p>
                    <Button variant="link" className="h-auto p-0 text-primary">
                      Call Now
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email Support</h3>
                    <p className="text-gray-600">contact@24carservicedubai.com</p>
                    <Button variant="link" className="h-auto p-0 text-primary">
                      Email Us
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <p className="text-gray-600">24/7 Service Available</p>
                    <p className="text-sm text-gray-500">
                      Emergency support anytime
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Form */}
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-lg lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">Book a Service Appointment</CardTitle>
                <p className="text-gray-600">
                  Schedule your car service with our expert technicians
                </p>
              </CardHeader>
              <CardContent>
                <form className="grid gap-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="+971" type="tel" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="your@email.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Needed</label>
                      <Input placeholder="e.g. Oil Change, AC Repair" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred Date</label>
                      <div className="relative">
                        <Input placeholder="Select date" type="date" />
                        <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred Time</label>
                      <Input placeholder="Select time" type="time" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Additional Notes</label>
                    <Textarea
                      placeholder="Tell us about your car issues..."
                      rows={4}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Book Appointment Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Our <span className="text-primary">Service Center</span> in Dubai
            </h2>
            <p className="text-lg text-gray-600">
              Visit our state-of-the-art facility in Al Quoz Industrial Area
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px]">
            {/* Replace with your actual map embed */}
            <div className="h-full w-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Al Quoz Industrial Area</h3>
                <p className="text-gray-600">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Component */}
      <GetTouch />
    </div>
  )
}