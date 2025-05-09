"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookAppointmentButton } from "../BookAppointment/BookAppointment"
import { ModeToggle } from "../../ModeToggle/ModeToggle"


const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
] as const

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Top Bar */}
      <div className="border-b bg-primary/10 text-sm">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+971 56 870 3512</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>carrepairsdubai@gmail.com</span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Dubai, UAE</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary"
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between px-4 sm:px-6">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-transparent">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 pt-10">
                  <div className="flex border-b-1 pb-2 items-center justify-between">
                    <Link href="/" className="text-lg ml-14  font-semibold">
                      24CarServiceDubai
                    </Link>
                  </div>
                  <nav className="grid gap-1 -mt-8">
                    {navItems.map((item) => (
                      <SheetTrigger key={item.href} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary",
                            pathname === item.href && "bg-primary/10 text-primary"
                          )}
                        >
                          {item.name}
                        </Link>
                      </SheetTrigger>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>




          {/* Logo - Centered on mobile */}
          <Link href="/" className="text-xl font-bold md:text-2xl">
            24CarServiceDubai
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className=" items-center gap-4 md:flex">
           <div className="hidden lg:flex">
           <BookAppointmentButton size="sm" />
           </div>
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  )
}