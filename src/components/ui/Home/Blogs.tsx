'use client'

import { Battery, CalendarDays, Droplet, MessageCircle } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Button } from "@/components/ui/button";

export default function Blogs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            Latest <span className="text-primary">Car Care</span> Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice to keep your vehicle running smoothly in Dubai&apos;s climate
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "5 Signs Your Car AC Needs Service",
              excerpt: "Learn the warning signs of AC problems before summer hits",
              date: "May 15, 2023",
              icon: <MessageCircle className="h-6 w-6 text-blue-500" />
            },
            {
              title: "Battery Maintenance in Hot Weather",
              excerpt: "How to extend your car battery life in Dubai&apos;s heat",
              date: "April 28, 2023",
              icon: <Battery className="h-6 w-6 text-yellow-500" />
            },
            {
              title: "2023’s Best Engine Oils for UAE",
              excerpt: "Our mechanic&apos;s picks for optimal engine performance",
              date: "March 10, 2023",
              icon: <Droplet className="h-6 w-6 text-red-500" />
            }
          ].map((post, i) => (
            <Card key={i} className="group border-0 bg-gradient-to-b from-white to-gray-50 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-4 rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center">
                  {post.icon}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
