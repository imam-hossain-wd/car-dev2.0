

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