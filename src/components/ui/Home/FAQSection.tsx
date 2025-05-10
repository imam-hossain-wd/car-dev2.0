import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What are your working hours?",
      answer: "We're open 24/7 to serve all your car repair needs. Our emergency services are available round the clock for urgent repairs."
    },
    {
      question: "How quickly can you repair my car?",
      answer: "Most standard repairs are completed within 4-6 hours. For complex issues, we provide a free diagnosis and time estimate before starting work."
    },
    {
      question: "Do you offer warranty on your services?",
      answer: "Yes! All our repairs come with a 12-month warranty covering both parts and labor. Some premium services include extended warranty options."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, Apple Pay, Google Pay, and bank transfers. Corporate accounts are also available."
    },
    {
      question: "Do you provide loaner cars during repairs?",
      answer: "Yes, we offer complimentary loaner cars for repairs expected to take more than 24 hours (subject to availability)."
    },
    {
      question: "How often should I service my car?",
      answer: "We recommend basic service every 5,000 km or 6 months, whichever comes first. Modern cars may have different intervals - consult your manual or our experts."
    },
    {
      question: "Are your technicians certified?",
      answer: "All our technicians are ASE-certified with minimum 5 years experience. We specialize in European, American, and Japanese vehicles."
    },
    {
      question: "What areas do you serve in Dubai?",
      answer: "We cover all areas of Dubai including Downtown, Marina, JBR, JLT, and surrounding communities. Mobile services available for select repairs."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 flex flex-col justify-center items-center">
      <div className="container auto">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find quick answers to common queries about our car repair services in Dubai
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <AccordionTrigger className="flex w-full items-center justify-between px-6 py-4 text-left font-medium hover:no-underline [&[data-state=open]>svg:rotate-180">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="mb-8 rounded-xl bg-primary/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our customer support team is available 24/7 to assist you with any inquiries about our car repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-12 px-8 text-lg">
                Contact Us Now
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/10">
                Call +971 56 870 3512
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}