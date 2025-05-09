// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Best Vehicle Repair Shops for Fast and Efficient Service || 24carservicedubai",
//   description: "Looking for reliable car repair near me? Get expert auto repairs, fast service, and affordable pricing at trusted vehicle repair shops. Contact us today!",
// };

// //keywords
// // vehicle repair shops, car repair, auto repair, car service, vehicle maintenance, Dubai vehicle repair, vehicle repair service, auto repair shops, best vehicle repair Dubai, car mechanic, car diagnostic, car repair shops in Dubai

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/Providers/ThemeProvider"
import { Navbar } from "@/components/ui/Shared/Navbar/Navbar"
import { Footer } from "@/components/ui/Shared/Footer/Footer"



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "24CarServiceDubai | Best Car Service and Car Repair in Dubai",
  description: "Your On-Demand Car Savior Anywhere, Anytime!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
