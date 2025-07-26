import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegClock } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import FadeInView from "@/components/animations/FadeInView";

import Image from "next/image";
import {
  getWhatsAppLink,
  WHATSAPP_PHONE,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/utils";

import React from "react";

interface HeroSectionProps {
  id?: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  return (
    <section
      id={id}
      className="w-full max-w-none h-[500px] md:h-[686px]"
    >
      {/* Preload da imagem principal para LCP */}
      <Image
        src="/images/hero-img.jpeg"
        alt="Hero background"
        fill
        className="hidden"
        priority
      />
      {/* Overlay de gradiente escuro */}
      <div className="pointer-events-none absolute inset-0 z-10 w-full h-full" />
      <div className="w-full h-[500px] md:h-[686px] pt-20 md:pt-0 flex flex-col sm:justify-between bg-[url('/images/hero-img.jpeg')] bg-cover bg-[50%_50%] relative">
        {/* Overlay de máscara */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.2) 90%, rgba(0,0,0,0))",
          }}
        />
        <div className="absolute md:flex bg-transparent w-full h-20 z-10">
          {" "}
        </div>
        <div className="mx-auto h-full justify-center sm:h-auto p-4 sm:mt-36 items-start w-full max-w-[950px] 2xl:max-w-[1280px] flex flex-col gap-6 z-10">
          <FadeInView delay={0.2}>
            <h1 className="w-full max-w-[424px] text-center md:text-left font-extrabold font-sans text-primary-contrast text-xl sm:text-2xl md:text-3xl tracking-[0] leading-[normal]">
              Sua oficina mecânica de confiança em Fortaleza!
            </h1>
          </FadeInView>

          <FadeInView delay={0.4}>
            <p className="max-w-[490px] text-center md:text-left font-medium font-sans text-primary-contrast text-sm tracking-normal leading-normal">
              Especialistas em manutenção automotiva com mais de 15 anos de
              experiência. Qualidade, confiança e atendimento personalizado.
            </p>
          </FadeInView>

          <FadeInView delay={0.6}>
            <a
              href={getWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto self-center md:self-start"
            >
              <Button className="mt-16 sm:mt-0 inline-flex items-center justify-center gap-2.5 px-5 py-4 bg-accent-greenDark rounded-[100px] h-auto w-full md:w-auto">
                <span className="relative w-fit mt-0 font-sans font-bold shadow-sm text-primary-contrast text-xs sm:text-sm tracking-normal leading-normal">
                  ENTRAR EM CONTATO
                </span>
                <FaWhatsapp className="w-[18px] h-[18px] text-primary-contrast" />
              </Button>
            </a>
          </FadeInView>
        </div>

        <Card className="hidden md:flex bg-secondary-overlay w-full items-center justify-center gap-1 py-0 md:py-4 border-none rounded-none">
          <CardContent className="flex w-full max-w-[952px] 2xl:max-w-[1280px] justify-between mx-auto items-center p-0">
            {/* Horário de funcionamento */}

            <FadeInView delay={1} className="flex items-center gap-5">
              <FaRegClock className="w-6 h-6 text-primary-contrast" />
              <div>
                <h2 className="font-semibold font-sans text-primary-contrast text-xs sm:text-sm">
                  Horário de funcionamento
                </h2>
                <p className="font-normal font-sans text-primary-contrast text-xs sm:text-sm">
                  Segunda - Sexta
                  <br />
                  08:00 as 18:00
                </p>
              </div>
            </FadeInView>

            {/* Sapiranga */}

            <FadeInView delay={1} className="flex items-center gap-5">
              <GoHome className="w-6 h-6 text-primary-contrast" />
              <div>
                <h3 className="font-semibold font-sans text-primary-contrast text-xs sm:text-sm">
                  Sapiranga
                </h3>
                <p className="font-normal font-sans text-primary-contrast text-xs sm:text-sm">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Presidente+Arthur+Bernardes,+2116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    Av. Presidente Arthur Bernardes, 2116
                  </a>
                  <br />
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_PHONE,
                      WHATSAPP_DEFAULT_MESSAGE
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    +55 85 99609-3955
                  </a>
                </p>
              </div>
            </FadeInView>

            {/* Social Midias */}

            <FadeInView
              delay={1}
              className="min-w-72 flex h-full  items-center justify-center gap-10"
            >
              <a
                href="https://www.instagram.com/admissaoautoservice/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
              >
                <FaInstagram className="size-8 text-primary-contrast"></FaInstagram>
              </a>
              <a
                href="https://www.facebook.com/admissao.autoservicece?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition"
              >
                <FaFacebook className="size-8 text-primary-contrast"></FaFacebook>
              </a>
              <a
                href={getWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:opacity-80 transition size-8"
              >
                <FaWhatsapp className="size-8 text-primary-contrast" />
              </a>
            </FadeInView>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
