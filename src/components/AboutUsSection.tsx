import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { PiEngineBold } from "react-icons/pi";
import FadeInView from "@/components/animations/FadeInView";

import Image from "next/image";

interface AboutUsSectionProps {
  id?: string;
}

const AboutUsSection = ({ id }: AboutUsSectionProps) => (
  <section
    id={id}
    className="flex flex-col w-full max-w-[954px] 2xl:max-w-[1280px] gap-y-16 py-2.5 px-4 lg:px-0"
  >
    <FadeInView className="flex flex-col md:flex-row gap-3 lg:gap-12 2xl:gap-20 w-full">
      <div className="flex flex-col gap-4 w-full md:w-[403px] order-2 md:order-1">
        <div className="w-full h-[213px] shadow-md relative rounded overflow-hidden">
          <Image
            src="/images/about-us-long-img.jpeg"
            alt="Sobre nós"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex gap-2.5">
          <div className="flex-1 w-[250px] h-[220px] shadow-md relative rounded overflow-hidden">
            <Image
              src="/images/about-us-short-img-1.jpeg"
              alt="Sobre nós 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 w-[250px] h-[220px] shadow-md relative rounded overflow-hidden">
            <Image
              src="/images/about-us-short-img-2.jpeg"
              alt="Sobre nós 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full 2xl:flex-1 md:w-[500px] items-start gap-7 md:ml-12 order-1 md:order-2">
        <div className="flex flex-col gap-2 relative ">
          <Image
            src={"/images/vector.svg"}
            alt="admissao vector"
            width={420}
            height={206}
            className="absolute z-[-1] -left-32 md:-left-60 -top-10"
          />
          <h2 className="font-extrabold font-sans text-primary text-2xl sm:text-3xl leading-10">
            QUEM SOMOS
          </h2>
          <p className="font-normal font-sans text-primary tracking-wide leading-5 text-xs sm:text-sm">
            A <strong>Admissão Auto Service</strong> nasceu em Fortaleza em 2022
            para oferecer um serviço automotivo completo, técnico e humano. À
            frente está Ewerton Honorato, com mais de{" "}
            <strong>15 anos de experiência</strong> e foco em diagnósticos
            precisos e serviços bem executados.
            <br />
            <br />
            <strong>Atendemos todas as marcas</strong>, com destaque para
            Citroën, Peugeot e Renault. Usamos equipamentos modernos, peças de
            procedência e temos uma equipe atualizada e comprometida. Você
            acompanha tudo por fotos, vídeos e documentos, aprovando antes da
            execução. Transparência total, sem surpresas.
            <br />
            <br />
            <strong>Manutenção preventiva ou corretiva</strong>? Confie na
            Admissão Auto Service.
          </p>
        </div>
        <div className="flex flex-col h-40 gap-8 w-full">
          <div className="flex gap-5 w-full justify-between">
            <div className="flex items-center justify-center gap-5 flex-1">
              <TbCalendarTime style={{ fontSize: 26 }} />
              <div className="flex flex-col gap-0">
                <div className="text-shadow-sm font-normal font-sans text-black text-3xl sm:text-4xl tracking-wide leading-5">
                  15
                </div>
                <div className="pt-2 font-normal font-sans text-primary text-xs sm:text-sm tracking-wide leading-5">
                  anos de experiência
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 flex-1">
              <IoCarSportOutline style={{ fontSize: 23 }} />
              <div className="flex flex-col gap-px">
                <div className="text-shadow-sm font-normal font-sans text-black text-3xl sm:text-4xl tracking-wide leading-5">
                  +20
                </div>
                <div className="pt-2 font-normal font-sans text-primary text-xs sm:text-sm tracking-wide leading-5 whitespace-nowrap">
                  marcas atendidas
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center gap-5">
            <PiEngineBold style={{ fontSize: 23 }} />
            <div className="flex flex-col">
              <div className="text-shadow-sm font-normal font-sans text-black text-3xl sm:text-4xl tracking-wide leading-5">
                +700
              </div>
              <div className="pt-2 font-normal font-sans text-primary text-xs sm:text-sm tracking-wide leading-5 whitespace-nowrap">
                serviços realizados
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInView>
  </section>
);

export default AboutUsSection;
