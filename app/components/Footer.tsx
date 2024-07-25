import Link from "next/link";
import Grid from "./Grid";
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandLinkedin, IconBrandTwitter, IconBrandTwitterFilled } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="mt-2 overflow-hidden">
      <Grid />
      <footer className="bg-gray-800 text-white md:py-32 z-0">
        <div className="container mx-auto px-4 text-scx-accent">
          <div className="flex flex-col items-center lg:flex-row justify-between gap-4 text-center  lg:items-start  lg:text-left">
            {/* Navegação */}
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
                  <a className="hover:underline cursor-default">(13) 3321-5574</a>
                </li>
                <li>
                  <a
                    href="mailto:scx@scxagenciamentos.com"
                    className="hover:underline"
                  >
                    scx@scxagenciamentos.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div className="flex-1 min-w-[200px] mb-6 z-0">
              <h2 className="text-lg font-semibold mb-4 lg:text-2xl">Redes Sociais</h2>
              <ul className="flex space-x-4 text-scx-default">
                <li>
                  <a
                    href="https://www.linkedin.com/in/scxagenciamentos-5a060b109?trk=nav_responsive_tab_profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scx-default hover:text-scx-accent"
                  >
                    <IconBrandLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/SCXAGENCIAMENTOS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-scx-default hover:text-scx-accent"
                  >
                    <IconBrandFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/SCXAGENCIAMENTO"
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
