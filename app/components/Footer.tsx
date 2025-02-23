"use client"
import Link from "next/link";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="mt-2 overflow-hidden">
      <footer className="bg-gray-800 text-white md:py-32 mt-[26rem] sm:mt-[20rem] md:mt-[28rem] lg:mt-36 z-0 overflow-hidden">
        <div className="container mx-auto px-4 text-scx-accent overflow-hidden">
          <div className="flex flex-col items-center xl:flex-row justify-between gap-4 text-center xl:items-start xl:text-left overflow-hidden">
            <div className="flex-1 min-w-[200px] mb-6 z-0">
              <h2 className="text-lg font-semibold mb-4 lg:text-2xl">Navegação</h2>
              <ul className="space-y-2 text-scx-default">
                <li>
                  <Link href="/home" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:underline">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:underline">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div className="flex-1 min-w-[200px] mb-6 z-0">
              <h2 className="text-lg font-semibold mb-4 lg:text-2xl">Contato</h2>
              <ul className="space-y-2 text-scx-default">
                <li>
                  <a className="hover:underline cursor-default">(00) 0000-0000</a>
                </li>
                <li>
                  <a
                    href="mailto:example@example.com"
                    className="hover:underline"
                  >
                    example@example.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div className="flex-1 min-w-[200px] mb-6 z-0">
              <h2 className="text-lg font-semibold mb-4 lg:text-2xl">Redes Sociais</h2>
              <ul className="flex justify-center xl:justify-start space-x-4 text-scx-default">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scx-default hover:text-scx-accent"
                  >
                    <IconBrandLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scx-default hover:text-scx-accent"
                  >
                    <IconBrandFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scx-default hover:text-scx-accent"
                  >
                    <IconBrandTwitter />
                  </a>
                </li>
              </ul>
            </div>

            {/* Informações Adicionais */}
            <div className="flex-1 min-w-[200px] mb-6 z-0">
              <h2 className="text-lg font-semibold mb-4 lg:text-2xl">
                Informações Adicionais
              </h2>
              <ul className="space-y-2 text-scx-default">
                <li>
                  <a
                    href="https://portalunico.siscomex.gov.br/portal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline lg:text-lg"
                  >
                    Portal Siscomex
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bcb.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline lg:text-lg"
                  >
                    Banco Central
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.br/mdic/pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline lg:text-lg"
                  >
                    Mdic
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.br/receitafederal/pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline lg:text-lg"
                  >
                    Receita Federal
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.br/anvisa/pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline lg:text-lg"
                  >
                    Anvisa
                  </a>
                </li>
                <li>
                  <a
                    href="https://sistemasweb.agricultura.gov.br/pages/SIGVIG.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline lg:text-lg"
                  >
                    Sigvig
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.br/pt-br/orgaos/instituto-nacional-de-metrologia-qualidade-e-tecnologia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline lg:text-lg"
                  >
                    Inmetro
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative text-center mt-8 text-gray-400 z-0">
            <p className="">
              &copy; 2013-2024 SCX Agenciamentos Marítimos. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
