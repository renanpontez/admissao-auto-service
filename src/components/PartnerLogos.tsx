"use client";
import React from "react";
import Image from "next/image";

type PartnerLogo = {
  id: number;
  src: string;
  alt: string;
};

interface PartnerLogosProps {
  partnerLogos: PartnerLogo[];
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({ partnerLogos }) => {
  return (
    <div className="w-full overflow-hidden opacity-40 max-w-[954px] 2xl:max-w-[1280px] ">
      <div className="relative w-full max-w-[954px] 2xl:max-w-[1280px] mx-auto px-4">
        <div className="flex animate-[scroll_60s_linear_infinite] w-max">
          {/* Primeira sequência */}
          {partnerLogos.map((logo) => (
            <div 
              key={`original-${logo.id}`} 
              className="flex-shrink-0 px-8" // Reduzi o espaçamento lateral
            >
              <Image
                className="h-9 w-auto 2xl:h-16 object-contain" // Mudei para w-auto para manter proporção
                alt={logo.alt}
                src={logo.src}
                width={80} // Reduzi um pouco o width
                height={36}
              />
            </div>
          ))}

          {/* Segunda sequência — idêntica à primeira */}
          {partnerLogos.map((logo) => (
            <div 
              key={`clone-${logo.id}`} 
              className="flex-shrink-0 px-8"
              aria-hidden="true" // Adicionei para acessibilidade
            >
              <Image
                className="h-9 w-auto 2xl:h-16 object-contain"
                priority
                alt={logo.alt}
                src={logo.src}
                width={80}
                height={36}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;