import { Button } from "@/components/ui/button"
import { BookAppointmentButton } from "../Shared/BookAppintmentButton/BookAppointmentButton"


export function HomeBanner() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-[url('/images/car-service-banner.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-2xl space-y-6 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Best Car Service and Car Repair in Dubai
          </h1>
          <p className="text-lg text-muted-foreground">
            Your On-Demand Car Savior Anywhere, Anytime!
          </p>
          <div className="flex gap-4">
            <BookAppointmentButton size="lg" />
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}