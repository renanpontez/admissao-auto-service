import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  getWhatsAppLink,
  WHATSAPP_PHONE,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/utils";
import FadeInView from "./animations/FadeInView";


type ContactInfo = {
  id: number;
  title: string;
  details: string | React.ReactNode;
  icon: React.ReactNode;
};

interface ContactSectionProps {
  id?: string;
  contactInfo: ContactInfo[];
}

const ContactSection = ({ id, contactInfo }: ContactSectionProps) => (
  <section id={id} className="w-full max-w-none">
    <FadeInView className="flex flex-col-reverse sm:block sm:relative sm:h-[440px]">
      {/* Container da Caixa de Texto (em desktop, vira um overlay) */}
      <div className="w-full sm:absolute sm:inset-0 sm:z-10">
        <div className="h-full max-w-[954px] 2xl:max-w-[1280px] mx-auto sm:relative sm:flex sm:justify-end">
          {/* Caixa de Texto */}
          <div className="w-full sm:w-[333px] sm:h-full bg-secondary-dark bg-opacity-90 py-6 px-8">
            <h2 className="font-bold font-sans text-primary-contrast text-xl sm:text-2xl leading-10">
              FALE CONOSCO
            </h2>
            <div className="flex flex-col pt-2 pb-6 gap-8 w-full sm:w-[241px]">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="flex items-center gap-5 text-primary-contrast"
                >
                  {info.icon}
                  <div className="flex flex-col">
                    <h3 className="font-semibold font-sans text-xs sm:text-sm">
                      {info.title}
                    </h3>
                    <p className="font-normal font-sans text-xs sm:text-sm whitespace-pre-line">
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h2 className="font-bold font-sans text-primary-contrast text-xl sm:text-2xl leading-10 mb-2">
                REDES SOCIAIS
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/admissaoautoservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition"
                >
                  <FaInstagram
                    style={{ fontSize: 28, color: "white" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/admissao.autoservicece?locale=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition"
                >
                  <FaFacebook style={{ fontSize: 28, color: "white" }} />
                </a>
                <a
                  href={getWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition"
                >
                  <FaWhatsapp style={{ fontSize: 28, color: "white" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container do Mapa */}
      <div className="relative w-full h-96 sm:h-full">
      
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0959953492616!2d-38.47481882439857!3d-3.7892769961845656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74592314bef63%3A0x4ca6480d12f201b1!2sAv.%20Pres.%20Arthur%20Bernardes%2C%202116%20-%20Lagoa%20Sapiranga%20(Coit%C3%A9)%2C%20Fortaleza%20-%20CE%2C%2060833-201!5e0!3m2!1spt-PT!2sbr!4v1753282609023!5m2!1spt-PT!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0, minHeight: 300, borderRadius: 8 }}
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </FadeInView>
  </section>
);

export default ContactSection;
