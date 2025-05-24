import Blogs from '@/components/ui/Home/Blogs'
import { FAQSection } from '@/components/ui/Home/FAQSection'
import GetTouch from '@/components/ui/GetTouch/GetTouch'
import HomeBanner from '@/components/ui/Home/HomeBanner'
import Reviews from '@/components/ui/Home/Reviews'
import { TrustedService } from '@/components/ui/TrustedService/TrustedService'
import { WhoWeAre } from '@/components/ui/WhoWeAre/WhoWeAre'
import React from 'react'
import { ServiceCard } from '@/components/ui/Shared/ServiceCard/ServiceCard'
import FeaturedServices from '@/components/ui/Home/FeaturedServices'

export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <FeaturedServices />
      <TrustedService />
      <WhoWeAre />
      <Reviews />
      <Blogs />
      <FAQSection />
      <GetTouch />
    </div>
  )
}
