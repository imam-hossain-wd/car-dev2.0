import { TrustedService } from "@/components/ui/TrustedService/TrustedService";
import { WhoWeAre } from "@/components/ui/WhoWeAre/WhoWeAre";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | 24CarServiceDubai</title>
        <meta
          name="description"
          content="Learn more about 24CarServiceDubai – your trusted partner for automotive care in Dubai. Meet our team, understand our mission, and explore our award-winning services."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative z-0 bg-gradient-to-br from-primary/10 to-white py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-primary">24CarServiceDubai</span>
          </h1>
          <p className="text-lg text-gray-600">
            Driven by trust. Powered by expertise. Discover who we are and why thousands of Dubai drivers rely on us.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="my-12 border-t border-gray-200" />
      </div>

      {/* Trusted Service Section */}
      <TrustedService />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Ready to Experience the Best Car Service in Dubai?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            From emergency repairs to routine maintenance, our dedicated team is here to help 24/7.
          </p>
          <a
            href="/book-service"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition"
          >
            Book a Service Now
          </a>
        </div>
      </section>
    </>
  );
}
