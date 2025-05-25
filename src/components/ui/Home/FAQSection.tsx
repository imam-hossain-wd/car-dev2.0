// import { ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// export function FAQSection() {
//   const faqs = [
//     {
//       question: "What are your working hours?",
//       answer: "We're open 24/7 to serve all your car repair needs. Our emergency services are available round the clock for urgent repairs."
//     },
//     {
//       question: "How quickly can you repair my car?",
//       answer: "Most standard repairs are completed within 4-6 hours. For complex issues, we provide a free diagnosis and time estimate before starting work."
//     },
//     {
//       question: "Do you offer warranty on your services?",
//       answer: "Yes! All our repairs come with a 12-month warranty covering both parts and labor. Some premium services include extended warranty options."
//     },
//     {
//       question: "What payment methods do you accept?",
//       answer: "We accept cash, all major credit cards, Apple Pay, Google Pay, and bank transfers. Corporate accounts are also available."
//     },
//     {
//       question: "Do you provide loaner cars during repairs?",
//       answer: "Yes, we offer complimentary loaner cars for repairs expected to take more than 24 hours (subject to availability)."
//     },
//     {
//       question: "How often should I service my car?",
//       answer: "We recommend basic service every 5,000 km or 6 months, whichever comes first. Modern cars may have different intervals - consult your manual or our experts."
//     },
//     {
//       question: "Are your technicians certified?",
//       answer: "All our technicians are ASE-certified with minimum 5 years experience. We specialize in European, American, and Japanese vehicles."
//     },
//     {
//       question: "What areas do you serve in Dubai?",
//       answer: "We cover all areas of Dubai including Downtown, Marina, JBR, JLT, and surrounding communities. Mobile services available for select repairs."
//     }
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-gray-50 flex flex-col justify-center items-center">
//       <div className="container auto">
//         <div className="mx-auto max-w-4xl text-center mb-16">
//           <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
//             Frequently Asked <span className="text-primary">Questions</span>
//           </h2>
//           <p className="text-lg text-gray-600">
//             Find quick answers to common queries about our car repair services in Dubai
//           </p>
//         </div>

//         <div className="mx-auto max-w-3xl">
//           <Accordion type="single" collapsible className="w-full space-y-4">
//             {faqs.map((faq, index) => (
//               <AccordionItem 
//                 key={index} 
//                 value={`item-${index}`}
//                 className="overflow-hidden rounded-xl border border-gray-200 bg-white"
//               >
//                 <AccordionTrigger className="flex w-full items-center justify-between px-6 py-4 text-left font-medium hover:no-underline [&[data-state=open]>svg:rotate-180">
//                   <span className="text-lg font-semibold">{faq.question}</span>
//                   <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-200" />
//                 </AccordionTrigger>
//                 <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>

//         <div className="mt-16 text-center">
//           <div className="mb-8 rounded-xl bg-primary/5 p-8 md:p-12">
//             <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               Our customer support team is available 24/7 to assist you with any inquiries about our car repair services.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="h-12 px-8 text-lg">
//                 Contact Us Now
//               </Button>
//               <Button variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/10">
//                 Call +971 56 870 3512
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'

import { ChevronDown, Phone, Mail, MessageSquare, Clock, Zap, ShieldCheck, CreditCard, Car, CalendarCheck, BadgeCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const faqs = [
    {
      question: "What are your working hours?",
      answer: "We're open 24/7 to serve all your car repair needs. Our emergency services are available round the clock for urgent repairs.",
      icon: <Clock className="h-5 w-5 text-primary" />
    },
    {
      question: "How quickly can you repair my car?",
      answer: "Most standard repairs are completed within 4-6 hours. For complex issues, we provide a free diagnosis and time estimate before starting work.",
      icon: <Zap className="h-5 w-5 text-primary" />
    },
    {
      question: "Do you offer warranty on your services?",
      answer: "Yes! All our repairs come with a 12-month warranty covering both parts and labor. Some premium services include extended warranty options.",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, Apple Pay, Google Pay, and bank transfers. Corporate accounts are also available.",
      icon: <CreditCard className="h-5 w-5 text-primary" />
    },
    {
      question: "Do you provide loaner cars during repairs?",
      answer: "Yes, we offer complimentary loaner cars for repairs expected to take more than 24 hours (subject to availability).",
      icon: <Car className="h-5 w-5 text-primary" />
    },
    {
      question: "How often should I service my car?",
      answer: "We recommend basic service every 5,000 km or 6 months, whichever comes first. Modern cars may have different intervals - consult your manual or our experts.",
      icon: <CalendarCheck className="h-5 w-5 text-primary" />
    },
    {
      question: "Are your technicians certified?",
      answer: "All our technicians are ASE-certified with minimum 5 years experience. We specialize in European, American, and Japanese vehicles.",
      icon: <BadgeCheck className="h-5 w-5 text-primary" />
    },
    {
      question: "What areas do you serve in Dubai?",
      answer: "We cover all areas of Dubai including Downtown, Marina, JBR, JLT, and surrounding communities. Mobile services available for select repairs.",
      icon: <MapPin className="h-5 w-5 text-primary" />
    }
  ]

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <section className="bg-gradient-to-b from-gray-50">
      <div 
      className="relative py-16 md:py-24 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden container mx-auto"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-primary"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our premium car services
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            value={activeIndex !== null ? `item-${activeIndex}` : undefined}
            onValueChange={(value) => setActiveIndex(value ? parseInt(value.split('-')[1]) : null)}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className={cn(
                    "overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm",
                    activeIndex === index ? "shadow-lg" : "shadow-sm"
                  )}
                >
                  <AccordionTrigger 
                    className={cn(
                      "flex w-full items-center justify-between px-6 py-5 text-left font-medium hover:no-underline [&[data-state=open]>svg:rotate-180",
                      "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {faq.icon}
                      </div>
                      <span className="text-lg font-semibold text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-300">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-blue-100/20 dark:from-gray-800/50 dark:to-gray-900/50 p-8 md:p-12 border border-gray-200/50 dark:border-gray-800 overflow-hidden">
            {/* Floating elements */}
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl" />
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto relative z-10">
              Our expert team is ready to provide personalized answers to your specific queries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button 
                className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-primary/30 transition-all group"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-14 px-8 text-lg border-primary text-primary hover:bg-primary/10 group"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="h-14 px-8 text-lg text-primary hover:bg-primary/5 group"
                size="lg"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Live Chat
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  )
}