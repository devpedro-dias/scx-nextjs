import { cn } from "@/lib/utils";
import {
  IconPlaneTilt,
  IconShieldCheck,
  IconShip,
  IconRoad,
  IconReportSearch,
  IconMessage
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import MagicButton from "./Button";
import Arrow from "./Arrow";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureProps extends Feature {
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = featureRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
        delay: index * 0.3,
      }
    );
}, [index]);

  return (
    <div
      ref={featureRef}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-scx-accent",
        (index === 0 || index === 4) && "lg:border-l dark:border-scx-accent",
        index < 3 && "lg:border-b dark:border-scx-accent",
        index === 3 && "lg:border-l lg:border-r-0 dark:border-scx-accent"
      )}
      style={{ boxSizing: 'border-box' }}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400" ref={iconRef}>
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-scx-accent text-xl" ref={titleRef}>
          {title}
        </span>
      </div>
      <p className="text-base text-scx-default max-w-md relative z-10 px-10 subtitle" ref={descriptionRef}>
        {description}
      </p>
    </div>
  );
};

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Frete Aéreo",
      description:
        "Serviços consolidados de frete aéreo para destinos globais, com uma rede internacional robusta e uma equipe de profissionais de classe mundial, garantindo retirada, desembaraço aduaneiro, entrega e distribuição de mercadorias com eficiência e segurança.",
      icon: <IconPlaneTilt />,
    },
    {
      title: "Frete Marítimo",
      description:
        "Serviços de frete marítimo personalizados com tarifas competitivas e tempos de trânsito rápidos. Nossa experiência em FCL, LCL e desembaraço aduaneiro garante uma movimentação eficiente e segura de suas mercadorias, atendendo todas as suas necessidades de forma profissional e confiável.",
      icon: <IconShip />,
    },
    {
      title: "Transporte Rodoviário",
      description: "Proporcionamos transporte rodoviário seguro e eficiente em todo o país. Utilizamos monitoramento via satélite e veículos selecionados para garantir a qualidade e a segurança das entregas porta a porta, com seguro completo para todas as cargas transportadas.",
      icon: <IconRoad />,
    },
    {
      title: "Desembaraço Aduaneiro",
      description: "Prestamos serviços completos de desembaraço aduaneiro, integrando transporte rodoviário e armazenamento às operações de importação e exportação. Nossa equipe de especialistas garante uma gestão eficiente e transparente, cumprindo todas as etapas do processo para evitar custos e atrasos, proporcionando segurança e tranquilidade aos nossos clientes.",
      icon: <IconReportSearch />,
      
    },
    {
      title: "Seguro de Carga",
      description:
        "Concedemos seguro de carga para garantir tranquilidade e segurança no transporte de suas mercadorias, cobrindo perdas ou danos em todos os meios de transporte. Ideal para importadores e exportadores, nosso seguro adapta-se às condições de venda e protege seus bens contra imprevistos, assegurando a estabilidade das operações de comércio exterior.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Fale Conosco",
      description:
        "Se você está interessado em nossa tarifa, solicite uma cotação. Responderemos em 24 horas. Esteja ciente de que também oferecemos soluções para sua melhor logística.",
      icon: <IconMessage />,
    },
  ];

  return <FeaturesGrid features={features} />;
}

export default FeaturesSectionDemo;
