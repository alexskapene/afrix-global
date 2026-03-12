"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  { image: "/images/event1.jpg", title: "Tech Summit 2026" },
  { image: "/images/event2.jpg", title: "Workshop Digital" },
  { image: "/images/event3.jpg", title: "Hackathon Afrix" },
];

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? events.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === events.length - 1 ? 0 : i + 1));
  return (
    <section
      id="events"
      className="w-full min-h-[80vh] pt-8  bg-afrix-dark  flex flex-col items-center gap-12"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 100%, rgba(66, 133, 244, 0.3), transparent 25%), radial-gradient(circle at 100% 0%, rgba(15, 157, 88, 0.3), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        NOS <span className="text-afrix-yellow">EVENEMENTS</span>
      </h2>

      <div className="relative w-full max-w-250 flex items-center justify-center">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all"
          aria-label="Previous event"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Event card */}
        <div className="w-full overflow-hidden rounded-2xl bg-red-500">
          <div className="relative w-full h-62.5 sm:h-75 lg:h-100 group overflow-hidden rounded-2xl">
            <Image
              src={events[currentIndex].image || "/placeholder.svg"}
              alt={events[currentIndex].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <Button
                variant="outline"
                className="rounded-full border-white/40 bg-white/20 text-white backdrop-blur-md hover:bg-white/35 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 font-semibold px-7 py-3"
              >
                Voir plus
              </Button>
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all"
          aria-label="Next event"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
