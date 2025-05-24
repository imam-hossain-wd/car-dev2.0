import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FootersiteConfig } from "@/config/site";
import Image from "next/image";
import { bandlogo } from "@/utiils/assets";


// text-muted-foreground

export function Footer() {
  return (
    <footer className="border-t bg-black text-white ">
      <div className=" py-12 flex flex-col justify-center items-center container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
           
            <Link href="/" className="text-lg lg:text-xl  font-semibold">
              {FootersiteConfig.name}
            </Link>
            <p className="text-sm mt-3 ">{FootersiteConfig.description}</p>
            <div className="flex gap-4">
              <Link href="#" className=" hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className=" hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className=" hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <nav className="space-y-2">
              {FootersiteConfig.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-sm  hover:text-primary"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <nav className="space-y-2">
              {FootersiteConfig.footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm  hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-2 text-sm ">
              <p>Al Satwa, Dubai, UAE</p> 
              <p>
                Phone:{" "}
                <Link href="tel:+971568703512" className="hover:text-primary">
                  +971 56 870 3512
                </Link>
              </p>
              <p>
                Email:{" "}
                <Link
                  href="mailto:carrepairsdubai@gmail.com"
                  className="hover:text-primary"
                >
                  carrepairsdubai@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center text-sm ">
          © {new Date().getFullYear()} {FootersiteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
