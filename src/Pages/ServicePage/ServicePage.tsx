import { serviceData } from "@/data-fetch/servicedata";
import Image from "next/image";

// Define a type for the service object if possible, based on the properties you know about
interface Service {
  id: string;
  image_url: string;
  title: string;
  description: string;
}

const ServicePage = async () => {
  const posts = await serviceData();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          posts.map((service: Service ,id:number) => (
            <div
              key={id}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-base-100"
            >
              {service.image_url && (
                <Image
                  src={service.image_url}
                  alt="Trusted Car Service in Dubai"
                  fill
                  className="object-cover"
                  quality={100}
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="btn btn-primary btn-sm">Learn More</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ServicePage;
