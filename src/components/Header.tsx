"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Frame = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Só aplica sticky/ocultar em telas menores que md
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 40) {
          setShowHeader(false); // rolando para baixo
        } else {
          setShowHeader(true); // rolando para cima
        }
        setLastScrollY(currentScrollY);
      } else {
        setShowHeader(true); // sempre mostra em md+
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => setShowMenuItems(true), 200); // 200ms = tempo da borda
      return () => clearTimeout(timer);
    } else {
      setShowMenuItems(false);
    }
  }, [menuOpen]);

  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Localização", href: "#localizacao" },
  ];

  // Função para scroll suave compensando o header fixo
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const header = document.getElementById("main-header");
        const headerRect = header?.getBoundingClientRect();
        const headerHeight = header ? header.offsetHeight : 0;
        const topOffset = headerRect?.top ?? 0;
        const targetPosition =
          (target as HTMLElement).getBoundingClientRect().top +
          window.pageYOffset;
        window.scrollTo({
          top: targetPosition - headerHeight - topOffset - 120,
          behavior: "smooth",
        });
      }
      setShowMenuItems(false);
      setTimeout(() => setMenuOpen(false), 100);
    }
  };

  return (
    <motion.header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow"
      initial={{ opacity: 0, y: -100 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`
        z-50 flex flex-col md:flex-row max-w-[954px] 2xl:max-w-[1280px] w-[calc(100%-20px)] md:w-[calc(100%-64px)]
        justify-between px-5 py-3 bg-[#000000f3] items-center
        fixed left-1/2 -translate-x-1/2
        ${showHeader ? "translate-y-0 top-6" : "-translate-y-full"}
        lg:absolute lg:translate-y-0
        ${menuOpen ? "md:mt-0 mt-[-12px]" : ""}
        ${menuOpen ? "rounded-2xl" : "rounded-full"}
        transition-[border-radius,max-height,transform] duration-300 ease-in-out
      `}
        style={{
          willChange: "border-radius, max-height, transform",
          maxHeight: menuOpen ? "500px" : "64px",
          transition:
            "border-radius 200ms cubic-bezier(0.4,0,0.2,1), max-height 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Barra superior mobile: logo à esquerda, menu burguer à direita */}
        <div className="w-full flex items-center justify-between md:justify-start md:w-auto">
          <div className="inline-flex items-center gap-3 transition-all duration-300">
            <Image
              className="w-auto h-7 md:h-8"
              alt="Admissão logo symbol"
              width={207.32}
              height={32}
              src="/images/logo-marca-white.png"
            />
          </div>
          {/* Menu burguer só no mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
              onClick={() => {
                if (!menuOpen) {
                  setMenuOpen(true);
                } else {
                  setShowMenuItems(false);
                  setTimeout(() => setMenuOpen(false), 100);
                }
              }}
              aria-label="Abrir menu"
            >
              <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
              <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all" />
              <span className="block w-6 h-0.5 bg-white rounded transition-all" />
            </button>
          </div>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:inline-flex gap-10 items-center">
          {navItems.map((item, index) => (
            <a
              key={`nav-item-${index}`}
              href={item.href}
              className="font-semibold font-sans text-primary-contrast text-xs sm:text-sm hover:underline transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Dropdown do menu mobile, centralizado abaixo da barra superior */}
        <div
          className={`md:hidden flex flex-col items-center justify-center w-full transition-opacity duration-200 ${
            showMenuItems ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${menuOpen ? "" : "h-0"}`}
          style={{
            minHeight: menuOpen ? `${navItems.length * 30}px` : "0",
            maxHeight: menuOpen ? `${navItems.length * 40}px` : "0",
            transition:
              "min-height 400ms cubic-bezier(0.4,0,0.2,1), max-height 400ms cubic-bezier(0.4,0,0.2,1), opacity 200ms",
            overflow: "hidden",
          }}
        >
          {showMenuItems &&
            navItems.map((item, index) => (
              <a
                key={`nav-item-mobile-${index}`}
                href={item.href}
                className="font-semibold font-sans text-primary-contrast text-sm sm:text-base w-full text-center cursor-pointer hover:underline mb-2 last:mb-0"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Frame;
