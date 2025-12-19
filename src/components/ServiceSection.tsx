"use client";
import { useEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ServicesSection() {

  const sectionRef = useRef(null);

  // Animation au scroll
  useEffect(() => {
    const section = sectionRef.current as HTMLElement | null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
  }, []);

  const services = [
    {
      img: "/images/service1.jpg",
      icon: "/logo.png",
      title: "Développement Web",
      text: "Formation en développement web (HTML, CSS, Javascript, PHP, React JS, Vue JS, Django)",
    },
    {
      img: "/images/service2.jpg",
      icon: "/logo.png",
      title: "Développement Mobile",
      text: "Développement d'application mobile (Flutter et React Native)",
    },
    {
      img: "/images/service3.jpg",
      icon: "/logo.png",
      title: "Marketing Digital",
      text: "Formation sur les fondamentaux du Marketing Digital (Social Media Marketing, Content Marketing, Marketing d’Influence, ...)",
    },
    {
      img: "/images/service4.jpg",
      icon: "/logo.png",
      title: "Consultation informatique",
      text: "Des solutions sur mesure pour un avenir digital optimisé",
    },
    {
      img: "/images/service5.jpg",
      icon: "/logo.png",
      title: "Communication visuelle",
      text: "Apprentissage des outils Adobe (Photoshop, Premiere Pro, Lightroom, Illustrator, XD, ...)",
    },
    {
      img: "/images/service6.jpg",
      icon: "/logo.png",
      title: "Rédaction de Contenu",
      text: "Nous vous aidons à créer du contenu percutant et personnalisé pour attirer, engager et convertir votre audience",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative py-16 bg-gray-100">
      {/* TRIANGLE ANIMÉ À DROITE */}
      <div 
        className="
          absolute right-0 top-0 
          w-0 h-0 
          border-t-[350px] border-t-transparent
          border-l-[350px] border-l-gray-400/50 
          opacity-70 
          animate-[floatTriangle_8s_ease-in-out_infinite]
        "
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-semibold tracking-wide">NOS SERVICES</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Ce que nous offrons</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden p-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="p-0 relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute -bottom-6 left-6 p-1 w-16 h-16 rounded-full bg-white shadow-lg border-2 border-white flex items-center justify-center overflow-hidden">
                  <img
                    src={service.icon}
                    alt="Service icon"
                    className="w-full h-full object-cover rounded-full border-2 border-gray-400"
                  />
                </div>
              </CardHeader>

              <CardContent className="pt-10 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">{service.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
