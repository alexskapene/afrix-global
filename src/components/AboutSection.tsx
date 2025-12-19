"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* TITRE */}
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-semibold tracking-wide">A PROPOS DE NOUS</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Découvrez Afrix Global</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* IMAGE BLOCK */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Bordure 2 couleurs autour du bloc */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-blue-500 blue-400 blue-700 blur-sm"></div>

            {/* Image principale */}
            <div className="relative w-full md:w-96 h-80 md:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <Image
                src="/images/service1.jpg"
                alt="Afrix Global"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Petite image superposée droite */}
            <div className="absolute -bottom-5 -right-0 w-36 h-52 md:w-44 md:h-56 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Petite image superposée gauche */}
            <div className="absolute -bottom-5 -left-0 w-36 h-52 md:w-44 md:h-56 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="/images/service4.jpg"
                alt="Service"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Afrix-Global est une organisation dédiée à la formation et à l'insertion professionnelle
              dans le secteur du numérique. Nous offrons des programmes innovants adaptés aux besoins
              du marché digital.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Notre mission est de fournir des opportunités d'apprentissage accessibles, pratiques et
              orientées vers l'emploi. Nous collaborons avec des entreprises et des experts du secteur
              pour garantir des formations alignées aux exigences actuelles du marché.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
