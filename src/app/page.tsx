import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesTabs from "@/components/ServicesTabs";
const ServiceSteps = dynamic(() => import("@/components/ServiceSteps"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const Footer = dynamic(() => import("@/components/Footer"));
import ContactSection from "@/components/ContactSection";
import React from "react";
import Header from "@/components/Header";
import { BiSolidZap } from "react-icons/bi";
import { FaCarSide, FaClipboardList, FaOilCan, FaRegCalendarAlt, FaSearch, FaTools } from "react-icons/fa";
import { IoMdSettings, IoMdTime } from "react-icons/io";
import { PiEngineFill } from "react-icons/pi";
import { LuHouse } from "react-icons/lu";
import InstagramTimelineSection from "@/components/InstagramTimelineSection";
import {
  getWhatsAppLink,
  WHATSAPP_PHONE,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/utils";

export default function Home() {
  const partnerLogos = [
    { id: 1, src: "/images/brands/audi.png", alt: "Partner Logo 1" },
    { id: 2, src: "/images/brands/bmw.png", alt: "Partner Logo 2" },
    { id: 3, src: "/images/brands/brand.png", alt: "Partner Logo 3" },
    { id: 4, src: "/images/brands/chery.png", alt: "Partner Logo 4" },
    { id: 5, src: "/images/brands/chevrolet.png", alt: "Partner Logo 5" },
    { id: 6, src: "/images/brands/citroen.png", alt: "Partner Logo 6" },
    { id: 7, src: "/images/brands/fiat.png", alt: "Partner Logo 7" },
    { id: 8, src: "/images/brands/ford.png", alt: "Partner Logo 8" },
    { id: 9, src: "/images/brands/honda.png", alt: "Partner Logo 9" },
    { id: 10, src: "/images/brands/huyndai.png", alt: "Partner Logo 10" },
    { id: 11, src: "/images/brands/jaguar.png", alt: "Partner Logo 11" },
    { id: 12, src: "/images/brands/jeep.png", alt: "Partner Logo 12" },
    { id: 13, src: "/images/brands/landrover.png", alt: "Partner Logo 13" },
    { id: 14, src: "/images/brands/mercedes.png", alt: "Partner Logo 14" },
    { id: 15, src: "/images/brands/mitsubishi.png", alt: "Partner Logo 15" },
    { id: 16, src: "/images/brands/nissan.png", alt: "Partner Logo 16" },
    { id: 17, src: "/images/brands/peugeot.png", alt: "Partner Logo 17" },
    { id: 18, src: "/images/brands/renault.png", alt: "Partner Logo 18" },
    { id: 19, src: "/images/brands/toyota.png", alt: "Partner Logo 19" },
    { id: 20, src: "/images/brands/volvo.png", alt: "Partner Logo 20" },
  ];

  const serviceCategories = [
    {
      id: "eletrica",
      title: "Elétrica",
      description: "Sistema elétrico completo",
      icon: <BiSolidZap style={{ fontSize: 30 }} />,
    },
    {
      id: "suspensao",
      title: "Suspensão",
      description: "Amortecedores e molas novas e originais",
      icon: <FaCarSide style={{ fontSize: 37.5 }} />,
    },
    {
      id: "motor",
      title: "Motor",
      description: "Bloco, cabeçote e Injeção eletrônica",
      icon: <PiEngineFill style={{ fontSize: 35 }} />,
    },
    {
      id: "troca-oleo",
      title: "Troca de Óleo",
      description: "Óleos e filtros de qualidade",
      icon: <FaOilCan style={{ fontSize: 37.5 }} />,
    },
    {
      id: "alinhamento",
      title: "Alinhamento",
      description: "Balanceamento e geometria",
      icon: <IoMdSettings style={{ fontSize: 30 }} />,
    },
    {
      id: "outros",
      title: "Outros",
      description: "Consulte para saber mais",
      icon: <FaTools style={{ fontSize: 30 }} />,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      title: "Agende sua visita",
      icon: <FaRegCalendarAlt className="w-7 h-5" />,
    },
    {
      id: 2,
      title: "Análise do Veículo",
      icon: <FaSearch className="w-7 h-5" />,
    },
    {
      id: 3,
      title: "Entrega do Orçamento",
      icon: <FaClipboardList className="w-7 h-5" />,
    },
    {
      id: 4,
      title: "Realização do Serviços",
      subtitle: "Monitore com vídeos",
      icon: <FaTools className="w-7 h-5" />,
    },
    {
      id: 5,
      title: "Veículo entregue",
      subtitle: "Garantia Admissão",
      icon: <FaCarSide className="w-7 h-5" />,
    },
  ];

  const faqItems = [
    {
      id: "item-1",
      question: "Quais são os sinais de que meu carro precisa de revisão em Fortaleza?",
      answer:
        "Os principais sinais incluem: ruídos estranhos, vibrações anormais, consumo excessivo de combustível, luzes de alerta no painel, dificuldade para ligar e problemas nos freios. Em Fortaleza, devido ao clima quente e proximidade do mar, é importante ficar atento também a sinais de corrosão e funcionamento do ar condicionado. Recomendamos revisões preventivas a cada 10.000 km ou 6 meses para evitar problemas maiores.",
    },
    {
      id: "item-2",
      question: "Quanto tempo dura em média uma revisão completa do carro?",
      answer:
        "O tempo de uma revisão completa pode variar de 2 a 4 horas, dependendo do modelo do veículo e dos serviços necessários. Na Admissão Auto Service, realizamos uma análise detalhada de mais de 50 itens do seu carro, incluindo parte elétrica, mecânica, suspensão e freios. Para sua comodidade, oferecemos serviço de acompanhamento em tempo real do status do serviço via WhatsApp.",
    },
    {
      id: "item-3",
      question: "Por que é importante fazer alinhamento e balanceamento regularmente em Fortaleza?",
      answer:
        "Em Fortaleza, devido às condições das vias e ao clima, é essencial realizar alinhamento e balanceamento a cada 10.000 km. Estes serviços previnem o desgaste irregular dos pneus, melhoram a estabilidade do veículo, reduzem o consumo de combustível e aumentam a segurança. Ruas irregulares e lombadas podem desalinhar seu carro mais rapidamente, por isso a importância da manutenção regular.",
    },
    {
      id: "item-4",
      question: "Qual a importância da troca de óleo e quando devo fazê-la?",
      answer:
        "A troca de óleo é fundamental para a saúde do motor do seu carro. Recomendamos a troca a cada 5.000 km para óleo mineral ou 10.000 km para óleo sintético. Na Admissão Auto Service, utilizamos óleos de alta qualidade e realizamos uma inspeção completa durante o serviço, verificando filtros, níveis e possíveis vazamentos. Um óleo em bom estado garante maior vida útil ao motor e melhor desempenho.",
    },
    {
      id: "item-5",
      question: "Como o clima de Fortaleza afeta meu carro e que cuidados devo ter?",
      answer:
        "O clima quente e a proximidade do mar em Fortaleza podem afetar diversos componentes do seu veículo. É importante manter o sistema de arrefecimento em dia, verificar regularmente a bateria (que tende a ter vida útil menor no calor), proteger a pintura contra a maresia e manter o ar condicionado sempre higienizado. Nossa oficina realiza check-ups específicos considerando estas características climáticas.",
    },
    {
      id: "item-6",
      question: "Quais são os serviços essenciais para preparar meu carro para uma viagem?",
      answer:
        "Antes de viajar, recomendamos uma revisão completa que inclui: verificação dos freios, alinhamento e balanceamento, checagem da suspensão, teste do sistema elétrico, análise dos fluidos (óleo, água, freio) e avaliação dos pneus incluindo o estepe. Na Admissão Auto Service, oferecemos um pacote específico de revisão pré-viagem que garante sua segurança na estrada.",
    },
    {
      id: "item-7",
      question: "Como funciona a garantia dos serviços realizados na oficina?",
      answer:
        "Todos os serviços realizados na Admissão Auto Service possuem garantia. Peças e componentes têm garantia de fábrica (variando de 3 meses a 1 ano, dependendo do fabricante), e nossa mão de obra tem garantia de 90 dias. Mantemos um registro detalhado de todos os serviços realizados e você recebe um certificado de garantia após cada serviço, podendo acionar nosso suporte técnico sempre que necessário.",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      title: "Horário de funcionamento",
      details: "Segunda - Sexta\n08:00 as 18:00",
      icon: <IoMdTime className="size-6" />,
    },
    {
      id: 2,
      title: "Sapiranga",
      details: (
        <>
          <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Presidente+Arthur+Bernardes,+2116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    Av. Presidente Arthur Bernardes, 2116
                  </a> <br></br>
          <a
            href={getWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            +55 85 99609-3955
          </a>
        </>
      ),
      icon: <LuHouse className="size-6" />,
    },
    
  ];

  return (
    <div className="flex flex-col items-center w-full gap-16 md:gap-20">
      <Header />

      <HeroSection id="inicio" />

      <PartnerLogos partnerLogos={partnerLogos} />

      <AboutUsSection id="sobre" />

      <ServicesTabs id="servicos" serviceCategories={serviceCategories} />

      <ServiceSteps serviceSteps={serviceSteps} />

      <InstagramTimelineSection id="instagram" />

      <FAQSection id="faq" faqItems={faqItems} />

      <div className="w-full">
        <ContactSection id="localizacao" contactInfo={contactInfo} />

        <Footer />
      </div>
    </div>
  );
}
