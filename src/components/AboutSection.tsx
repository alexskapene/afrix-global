"use client";

import Image from "next/image";
import { Rocket, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col justify-center gap-8 lg:gap-[3vw] items-center py-16 lg:py-8 bg-afrix-dark"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 100%, rgba(244, 180, 0, 0.3), transparent 25%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        <span className="text-afrix-green">A PROPOS</span> DE NOUS
      </h2>

      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
        {/* Left - Images */}
        <div className="w-full lg:w-1/2 relative min-h-87.5 sm:min-h-12.5 lg:min-h-125">
          {/* Image 1 - Main */}
          <div className="absolute left-[10%] top-0 w-[65%] h-[85%] rounded-2xl overflow-hidden">
            <Image
              src="/about_1.jpg"
              alt="Formation Afrix Global"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 - Overlapping */}
          <div className="absolute right-0 bottom-0 w-[65%] h-[50%] rounded-2xl overflow-hidden">
            <Image
              src="/about_2.jpg"
              alt="Equipe Afrix Global"
              fill
              className="object-cover"
            />
          </div>

          {/* Green badge - +1000 */}
          <div className="absolute right-[10%] top-[35%] w-35 h-25 lg:w-[12vw] lg:h-[8vw] bg-afrix-green rounded-2xl flex flex-col justify-center items-center z-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-white m-0">
              +1000
            </h1>
            <p className="text-white text-sm lg:text-base m-0">
              Membres actifs
            </p>
          </div>

          {/* Logo circle */}
          <div className="absolute left-0 top-[30%] w-17.5 h-17.5 lg:w-[8vw] lg:h-[8vw] bg-afrix-dark rounded-full border-2 border-afrix-blue overflow-hidden flex items-center justify-center z-10">
            <Image
              src="/logo.png"
              alt="Logo Afrix"
              width={80}
              height={80}
              className="object-contain w-full"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-[3vw] font-medium text-white leading-tight">
            Decouvrez Afrix Global
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed text-justify">
            {
              "Chez Afrix Global, nous utilisons l'education et la technologie comme leviers d'impact pour creer des opportunites d'emploi et d'avenir. Nous formons les jeunes et les moins jeunes aux competences numeriques essentielles, afin de renforcer leur employabilite, stimuler l'entrepreneuriat et repondre aux besoins reels du marche du travail. A travers des formations pratiques et des solutions digitales adaptees a notre contexte, nous contribuons a batir une communaute plus competente, connectee et capable de transformer les defis locaux en opportunites durables."
            }
          </p>

          <div className="flex flex-col gap-6 mt-4">
            {/* Mission */}
            <div className="flex items-center gap-5">
              <Rocket className="w-10 h-10 lg:w-12 lg:h-12 text-afrix-yellow shrink-0" />
              <p className="text-white/80 text-sm sm:text-base">
                {
                  "Afrix Global a pour mission de rendre l'education accessible, de developper des competences cles et de favoriser l'employabilite des talents africains dans l'economie digitale."
                }
              </p>
            </div>

            {/* Vision */}
            <div className="flex items-center gap-5">
              <Globe className="w-10 h-10 lg:w-12 lg:h-12 text-afrix-red shrink-0" />
              <p className="text-white/80 text-sm sm:text-base">
                {
                  "Afrix Global vise a construire un avenir educatif inclusif et innovant, ou la technologie favorise l'apprentissage, l'entrepreneuriat et l'autonomisation des talents africains."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
