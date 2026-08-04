"use client"

import { Star, Quote } from "lucide-react"
import { REVIEWS } from "@/lib/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonios() {
  return (
    <section className="py-20 bg-keytek-bg">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4">
            Opiniones de nuestros clientes
          </h2>
          <p className="text-keytek-text-muted text-lg">
            La satisfacción y tranquilidad de quienes confían en nosotros es nuestro mayor logro. Conoce algunas experiencias.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {REVIEWS.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full border border-gray-100 shadow-sm rounded-2xl bg-keytek-bg hover:shadow-md transition-shadow flex flex-col justify-between p-6">
                      <CardContent className="p-0 flex flex-col justify-between h-full">
                        {/* Rating stars & Quote */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                          <Quote className="h-8 w-8 text-keytek-blue/10 stroke-2" />
                        </div>

                        {/* Review Text */}
                        <p className="text-keytek-text-muted text-sm leading-relaxed mb-6 flex-grow italic">
                          &ldquo;{review.text}&rdquo;
                        </p>

                        {/* Author info */}
                        <div className="border-t border-gray-50 pt-4 flex items-center justify-between text-xs">
                          <div>
                            <span className="block font-bold text-keytek-text text-sm">
                              {review.name}
                            </span>
                            <span className="text-[#4FA8E0] font-medium">
                              Comuna: {review.comuna}
                            </span>
                          </div>
                          <span className="text-gray-400 font-medium">{review.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Carousel Controls */}
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 border border-gray-200 hover:bg-keytek-bg-soft text-keytek-text hover:text-keytek-blue transition-all" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 border border-gray-200 hover:bg-keytek-bg-soft text-keytek-text hover:text-keytek-blue transition-all" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  )
}
