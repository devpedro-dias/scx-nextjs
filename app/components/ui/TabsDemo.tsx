import { useGSAP } from "@gsap/react";
import { AccordionItem, Tabs } from "./Tabs";
import gsap from "gsap";

export default function TabsDemo() {
  const servicesItems = [
    {
      title: "Frete Aéreo",
      descriptions: [
        { title: "Serviços de embalagem;", 
          details: "Nossos serviços de embalagem garantem que todas as mercadorias sejam acondicionadas de forma segura e adequada para o transporte. Utilizamos materiais de alta qualidade e técnicas avançadas de embalagem para proteger os produtos contra danos durante o transporte, assegurando que cheguem em perfeitas condições ao destino final."
        },
        { title: "Serviço de porta a porta;", 
          details: "Nosso serviço de porta a porta garante a coleta e entrega direta das mercadorias no destino final, proporcionando conveniência e eficiência. Este serviço elimina a necessidade de intermediários, reduzindo o tempo e os custos associados ao transporte."
        },
        { title: "Transporte de mercadorias perigosas;", 
          details: "Especializamo-nos no transporte de mercadorias perigosas, seguindo rigorosos padrões de segurança. Nossos profissionais são treinados para manusear e transportar materiais perigosos de acordo com as regulamentações internacionais, garantindo a segurança durante todo o processo."
        },
        { title: "Transporte de mercadorias perecíveis;", 
          details: "Oferecemos soluções especializadas para o transporte de mercadorias perecíveis, assegurando que produtos sensíveis, como alimentos e flores, cheguem ao destino em perfeitas condições. Utilizamos tecnologias de controle de temperatura e monitoramento para manter a qualidade dos produtos."
        },
        { title: "Transporte de produtos farmacêuticos;", 
          details: "Para a indústria farmacêutica, disponibilizamos soluções de transporte específicas que mantêm a integridade dos produtos durante todo o processo. Utilizamos embalagens especiais e condições controladas de temperatura para garantir que medicamentos e produtos biológicos sejam entregues de forma segura e eficaz."
        },
        { title: "Transporte direto e consolidado de importação e exportação;", 
          details: "Oferecemos transporte direto e consolidado para importação e exportação, otimizando a logística e reduzindo custos. O transporte consolidado permite que várias remessas sejam combinadas em um único envio, tornando o processo mais econômico."
        },
      ],
      imageSrc: "/png/images-fr-aereo/airplane-circle.png",
    },
    {
      title: "Frete Marítimo",
      descriptions: [
        { title: "Break Bulk;", 
          details: "Break bulk é usado para descrever um tipo de transporte especial para mercadorias de grandes dimensões. Este tipo de carga muitas vezes equivale a itens de grande porte ou de formato irregular, como maquinários pesados, peças de construção, veículos, entre outros, ou seja, cargas especiais em tamanho e peso."
        },
        { title: "Ro-Ro;", 
          details: "Uma definição mais acurada seria navio de “carga rolante”, ou seja, aquela que embarca e desembarca do navio rolando, seja em cima de suas próprias rodas (ou lagartas), seja em cima de um equipamento específico para isso. "
        },
        { title: "Carga de projeto;", 
          details: "Carga de projeto são todas aquelas cujas medidas, dimensões e peso são fora dos padrões para o embarque em contêineres convencionais. Normalmente são cargas como reatores, turbinas, transformadores, geradores, guindastes, plataformas, usinas completas, pás eólicas e equipamentos de grande porte."
        },
        { title: "Porta a porta;", 
          details: "Door to Door vem do inglês “Porta a Porta” e se trata de uma operação completa, na qual a empresa de logística é responsável pelo processo desde a coleta do produto com a organização que a contratou até a entrega para o cliente final."
        },
        { title: "FCL / (Full Container Loads) Carga completa no container;", 
          details: "FCL significa Full Container Load (contêiner totalmente carregado), ou seja, é quando o importador ou exportador utilizará totalmente o container. Isso significa acesso a todo o espaço disponível dentro da unidade. Além disso, ao utilizar o FCL, será pago um valor fixo pelo frete do contêiner."
        },
        { title: "LCL / (Less than Container Loads) Carga menos do que de contêineres;", 
          details: "O envio less than container load é uma opção de transporte de carga pelo mar quando você não possui volumes suficientes para justificar o custo de um contêiner inteiro. Transportar sua carga desta forma significa compartilhar o espaço do contêiner com a carga de um ou mais remetentes.",
        },
      ],
      imageSrc: "/png/images-fr-marit/navio-IA-circle.png",
    },
    {
      title: "Transporte Rodoviário",
      descriptions: [
        { title: "Expedição;", 
          details: "A expedição é conduzida com agilidade e precisão, assegurando que as mercadorias sejam entregues no destino final dentro do prazo estabelecido. Utilizamos sistemas de rastreamento avançados para monitorar o progresso das entregas, oferecendo aos clientes a tranquilidade de saber onde suas mercadorias estão em tempo real."
        },
        { title: "Recebimento;", 
          details: "Nosso serviço de recebimento garante que todas as mercadorias sejam cuidadosamente inspecionadas e registradas ao chegar ao nosso centro de distribuição. Este processo inicial é crucial para assegurar a integridade e a precisão das informações sobre os produtos, permitindo um controle eficiente desde o primeiro momento."
        },
        { title: "Armazenagem;", 
          details: "Oferecemos soluções de armazenagem em instalações modernas e seguras, projetadas para acomodar uma vasta gama de produtos. Nossos espaços de armazenagem são organizados de maneira estratégica para otimizar o uso do espaço e garantir fácil acesso aos itens, mantendo a qualidade e a segurança das mercadorias."
        },
        { title: "Movimentação;", 
          details: "A movimentação interna das mercadorias é realizada de forma eficiente e segura, utilizando equipamentos modernos e técnicas avançadas. Este serviço é essencial para garantir que os produtos estejam sempre no local certo, na hora certa, facilitando o fluxo contínuo dentro do armazém."
        },
        { title: "Picking & Packing;", 
          details: "Nosso serviço de picking & packing assegura que os pedidos sejam separados e embalados de acordo com as especificações do cliente. Utilizamos processos padronizados para garantir precisão e rapidez, garantindo que os produtos estejam prontos para expedição em perfeitas condições."
        },
        { title: "Gestão de estoques (VMI);", 
          details: "Nosso serviço de gestão de estoques (VMI) oferece uma abordagem proativa para o monitoramento e reabastecimento de produtos. Trabalhamos em estreita colaboração com nossos clientes para prever a demanda e manter os níveis de estoque ideais, evitando rupturas e garantindo a continuidade das operações."
        },
      ],
      imageSrc: "/png/images-transp-rod/truck-circle.png",
    },
    {
      title: "Desembaraço Aduaneiro",
      descriptions: [
        { title: "Regime Aduaneiro Especial;", 
          details: "Fornecemos suporte na utilização de regimes aduaneiros especiais, como drawback e admissão temporária, para maximizar benefícios fiscais."
        },
        { title: "Consultoria em Comércio Exterior;", 
          details: "Oferecemos consultoria especializada para ajudar empresas a otimizar suas operações de importação e exportação, garantindo conformidade e eficiência."
        },
        { title: "Elaboração e Conferência de Documentos Necessários;", 
          details: "Preparamos e revisamos toda a documentação exigida para o desembaraço aduaneiro, garantindo precisão e conformidade."
        },
        { title: "LPCO (Licenças, Permissões, Certificados e Outros Documentos);", 
          details: "Gerenciamos a obtenção de LPCOs, essenciais para a legalidade e liberação de mercadorias no comércio exterior."
        },
        { title: "Classificação Tarifária - NCM (Nomenclatura Comum do Mercosul);", 
          details: "Auxiliamos na correta classificação tarifária de mercadorias, assegurando a aplicação das taxas e regulamentações adequadas."
        },
        { title: "Registros DUIMP (Declaração Única de Importação) e DU-E (Declaração Única de Exportação);", 
          details: "Realizamos o registro e acompanhamento de DUIMP e DU-E, assegurando um processo de importação e exportação ágil e transparente."
        },
      ],
      imageSrc: "/png/images-des-adu/desembaraco-circle.png",
    },
    {
        title: "Seguro de Carga",
          descriptions: [
            { title: "Proporcionar tranquilidade durante o transporte de mercadorias;", 
              details: "Seguro de carga garante a segurança e proteção financeira das mercadorias durante o transporte."
            },
            { title: "Importância para importadores e exportadores no Brasil e no exterior;", 
              details: "Essencial para mitigar riscos e assegurar operações internacionais eficientes e seguras."
            },
            { title: "Cobertura para proprietários e terceiros (autônomos ou transportadoras);", 
              details: "Oferece proteção tanto para os proprietários das cargas quanto para terceiros envolvidos no transporte."
            },
            { title: "Abrangência para transportes marítimos, aéreos, terrestres ou aquaviários;", 
              details: "Cobre diversos modos de transporte, garantindo flexibilidade e segurança em todas as operações logísticas."
            },
            { title: "Coberturas incluem custos FOB, frete, despesas, lucros esperados e impostos;", 
              details: "Inclui uma ampla gama de coberturas, protegendo contra perdas financeiras em várias áreas do transporte."
            },
          ],
          imageSrc: "/png/images-seguro-carga/insurance.png",
        },
      ];
  

  const tabs = servicesItems.map((service) => ({
    title: service.title,
    value: service.title.toLowerCase().replace(/ /g, "-"),
    content: 
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-xl text-white">
        <AccordionItem title={service.title} descriptions={service.descriptions} />
    </div>
  }));

  useGSAP(() => {
    gsap.fromTo('#tabs-anim',{
      y: -300,
      opacity: 0,
      ease: "power3.inOut",
      duration: 1.2,
    },
    { 
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.4,
    })
  }, []);

  return (
    <div className="h-[20rem] md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-center my-40 z-0" id="tabs-anim">
      <Tabs
        tabs={servicesItems.map(item => ({
          title: item.title,
          value: item.title,
          content: <AccordionItem title={item.title} descriptions={item.descriptions} imageSrc={item.imageSrc} />
        }))}
      />
    </div>
  );
}
