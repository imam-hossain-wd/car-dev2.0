import { Product } from "@/types";

export const serviceData = async ()=> {
    const data = await fetch('https://car-dev-backend.vercel.app/services')
    const posts = await data.json();
    return posts;
}


export const homeServiceData = async ()=> {
    const data = await fetch('https://car-dev-backend.vercel.app/services/?limit=6')
    const HomeServiceDatas = await data.json();
    return HomeServiceDatas;
}


export async function productdata(): Promise<Product[]> {
  const data = await fetch('https://car-dev-backend.vercel.app/products');
  const products = await data.json();
  return products as Product[];
}