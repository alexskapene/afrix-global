"use client";
import { useEffect, useRef, useState } from "react";

const counters = [
  {
    value: 5,
    prefix: "+",
    color: "text-[#ea4335]",
    label: "Annees d'experience",
  },
  {
    value: 10,
    prefix: "+",
    color: "text-[#30b43f]",
    label: "Formations disponibles",
  },
  {
    value: 500,
    prefix: "+",
    color: "text-[#3367d6]",
    label: "Apprenants formes",
  },
  {
    value: 100,
    prefix: "+",
    color: "text-[#fbbc05]",
    label: "Certificats delivres",
  },
];

function AnimatedCounter({
  target,
  prefix,
}: {
  target: number;
  prefix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className="bg-afrix-dark">
      <div
        className="w-full py-10 px-[5%] flex flex-wrap justify-around items-center gap-8"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 50%, rgba(219, 68, 55, 0.3), transparent 35%)",
        }}
      >
        {counters.map((counter) => (
          <div key={counter.label} className="text-center flex-1 min-w-35">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${counter.color}`}
            >
              <AnimatedCounter target={counter.value} prefix={counter.prefix} />
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
