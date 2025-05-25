

export interface Service {
  _id: string;
  name: string;
  title: string;
  description?: string;
  image_url: string;
  service_time: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
}

export interface FeaturedServicesProps {
  services: Service[];
}

// export type ServiceCardProps = {
//   _id: string
//   name: string
//   title: string
//   image_url: string
//   list1?: string
//   list2?: string
//   list3?: string
//   list4?: string
//   description?: string
//   slug?: string
// }



// types/product.ts
export type Product = {
  _id: string;
  name: string;
  title: string;
  description: string;
  alt: string;
  image_url: string;
};

// You can also create more specific types if needed:
export type ProductType = 
  | 'bettery'
  | 'starter_system'
  | 'drive_shaft'
  | 'engine_gear'
  | 'radiator'
  | 'steering_pump'
  | 'control_arm'
  | 'brake_system'
  | 'transmission_system'
  | 'car_brake_pad'
  | 'steering_rack'
  | 'fuel_pump'
  | 'clutch'
  | 'exhaust'
  | 'engine';

// Type for the API response
export type ProductsResponse = Product[];


export interface ServiceCardProps {
  id?: string;              // Changed from _id to id (more conventional)
  title: string;            // Changed from name to title (more descriptive)
  imageUrl: string;         // Changed from image_url to imageUrl (camelCase)
  feature1?: string;        // Changed from list1
  feature2?: string;        // Changed from list2
  feature3?: string;        // Changed from list3
  feature4?: string;        // Changed from list4
  description?: string;
  slug: string;
  serviceType?: string;     // Changed from title to serviceType (more specific)
}


// service data type---------------------
// types/service.ts
// export interface Service {
//   title: string;
//   metaTitle: string;
//   metaDescription: string;
//   features: string[];
//   keywords: string[];
//   slug: string;
//   service_image: string;
//   intro: {
//     heading: string;
//     subheading: string;
//     content: string;
//   };
//   whyChooseUs: {
//     heading: string;
//     points: string[];
//   };
//   // Add other interfaces as needed
// }

// export interface ServicesData {
//   services: Service[];
// }


// //-------service details page types

// export interface ServiceStep {
//   title: string;
//   description: string;
//   icon?: string;
// }

// export interface ServiceFAQ {
//   question: string;
//   answer: string;
// }

// export interface ServiceFeature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// export interface Service {
//   id: string;
//   title: string;
//   slug: string;
//   metaTitle: string;
//   metaDescription: string;
//   service_image: string;
//   features: string[];
//   intro: {
//     heading: string;
//     subheading: string;
//     content: string;
//   };
//   whyChooseUs: {
//     heading: string;
//     points: string[];
//   };
//   problemSignsSection: {
//     heading: string;
//     description: string;
//     signs: string[];
//   };
//   ourProcess: {
//     heading: string;
//     steps: ServiceStep[];
//   };
//   toolsOrProducts: {
//     heading: string;
//     brands: string[];
//     note: string;
//   };
//   serviceCoverage: {
//     heading: string;
//     locations: string[];
//     note: string;
//   };
//   ctaSection: {
//     heading: string;
//     description: string;
//     buttonText: string;
//   };
//   faq: ServiceFAQ[];
// }

// ---------------------------- service details page
// types/index.ts


export interface Service {
  title: string;
  metaTitle?: string;
  metaDescription: string;
  features: string[];
  keywords: string[];
  slug: string;
  service_image: string;
  intro: {
    heading: string;
    subheading: string;
    content: string;
  };
  whyChooseUs: {
    heading: string;
    points: string[];
  };
  problemSignsSection?: {
    heading: string;
    description: string;
    signs: string[];
  };
  ourProcess: {
    heading: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  toolsOrProducts?: {
    heading: string;
    brands: string[];
    note: string;
  };
  serviceCoverage: {
    heading: string;
    locations: string[];
    note: string;
  };
  ctaSection: {
    heading: string;
    description: string;
    buttonText: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  // Add any other optional fields that might exist in your JSON
}

// export interface Service {
//   title: string;
//   metaTitle?: string;
//   metaDescription: string;
//   features: string[];
//   keywords: string[];
//   slug: string;
//   service_image: string;
//   intro: {
//     heading: string;
//     subheading: string;
//     content: string;
//   };
//   whyChooseUs: {
//     heading: string;
//     points: string[];
//   };
//   problemSignsSection?: {
//     heading: string;
//     description: string;
//     signs: string[];
//   };
//   ourProcess: {
//     heading: string;
//     steps: {
//       title: string;
//       description: string;
//     }[];
//   };
//   toolsOrProducts?: {
//     heading: string;
//     brands: string[];
//     note: string;
//   };
//   serviceCoverage: {
//     heading: string;
//     locations: string[];
//     note: string;
//   };
//   ctaSection: {
//     heading: string;
//     description: string;
//     buttonText: string;
//   };
//   faq: {
//     question: string;
//     answer: string;
//   }[];
// }

// For the entire services data structure
export interface ServicesData {
  services: Service[];
}