"use client";

import Image from "next/image";
import ImgAbout2 from "@/public/team-engineers-server-hub-working-together-investigate-breach-alerts.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Rocket, Globe } from "lucide-react";

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
        <span className="text-afrix-green">A PROPOS DE </span> NOUS
      </h2>

      <div className="w-full flex flex-col md:flex-row px-[10%] gap-16 relative overflow-hidden">
        <div className=" w-full lg:w-1/2 rounded md:rounded-bl-[5rem]  overflow-hidden">
          {" "}
          <Image
            src={ImgAbout2}
            alt="portrait about"
            className="object-cover scale-x-[-1]"
          />
        </div>

        <div className=" full md:w-1/2 md:flex flex-col justify-center  text-slate-200">
          <h2 className=" text-2xl md:text-4xl text-afrix-blue  font-semibold">
            Des Compétences Techniques au Service de l’Innovation
          </h2>
          <div>
            <p className="my-4 font-semibold">
              Notre équipe s’appuie sur une solide expertise technique et des
              formations professionnelles en technologies modernes pour
              concevoir des solutions numériques fiables et performantes.
            </p>
            <p className="my-4">
              Grâce à notre engagement pour l’innovation et l’apprentissage
              continu, nous développons des solutions qui accompagnent
              efficacement la transformation digitale des entreprises.
            </p>
          </div>
          <Link href="#">
            <Button
              variant={"default"}
              size={"lg"}
              className="w-36 md:w-45 p-6 mt-8 md:mt-0  bg-afrix-blue  hover:bg-afrix-blue/80 cursor-pointer"
            >
              Savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
