

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