import Blogs from '@/components/ui/Home/Blogs'
import { FAQSection } from '@/components/ui/Home/FAQSection'
import { FeaturedServices } from '@/components/ui/Home/FeaturedServices'
import GetTouch from '@/components/ui/Home/GetTouch'
import HomeBanner from '@/components/ui/Home/HomeBanner'
import Reviews from '@/components/ui/Home/Reviews'
import { TrustedService } from '@/components/ui/Home/TrustedService'
import { WhoWeAre } from '@/components/ui/Home/WhoWeAre'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <TrustedService />
      <FeaturedServices />
      <WhoWeAre />
      <FAQSection />
      <Reviews />
      <Blogs />
      <GetTouch />
    </div>
  )
}
