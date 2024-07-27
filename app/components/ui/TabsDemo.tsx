import { AccordionItem, Tabs } from "./Tabs";

export default function TabsDemo() {
  const services = [
    {
      title: "Frete Aéreo",
      descriptions: [
        "Serviços de embalagem;",
        "Serviço de porta a porta;",
        "Transporte de mercadorias perigosas;",
        "Transporte de mercadorias perecíveis;",
        "Transporte de produtos farmacêuticos;",
        "Transporte direto e consolidado de importação e exportação;"
      ],
    },
    {
      title: "Frete Marítimo",
      descriptions: [
        "Break Bulk;",
        "Ro-Ro;",
        "Carga de projeto;",
        "Porta a porta;",
        "FCL / (Full Container Loads) Carga completa no container;",
        "LCL / (Less than Container Loads) Carga menos do que de contêineres;"
      ],
    },
    {
      title: "Transporte Rodoviário",
      descriptions: [
        "Expedição;",
        "Recebimento;",
        "Armazenagem;",
        "Movimentação;",
        "Picking & Packing;",
        "Gestão de estoques (VMI);"
      ],
    },
    {
      title: "Desembaraço Aduaneiro",
      descriptions: [
        "Regime Aduaneiro Especial;",
        "Consultoria em Comércio Exterior;",
        "Elaboração e Conferência de Documentos Necessários;",
        "LPCO (Licenças, Permissões, Certificados e Outros Documentos);",
        "Classificação Tarifária - NCM (Nomenclatura Comum do Mercosul);",
        "Registros DUIMP (Declaração Única de Importação) e DU-E (Declaração Única de Exportação);"
      ],
    },
    {
      title: "Seguro de Carga",
      descriptions: [
        "Proporcionar tranquilidade durante o transporte de mercadorias;",
        "Importância para importadores e exportadores no Brasil e no exterior;",
        "Cobertura para proprietários e terceiros (autônomos ou transportadoras);",
        "Abrangência para transportes marítimos, aéreos, terrestres ou aquaviários;",
        "Coberturas incluem custos FOB, frete, despesas, lucros esperados e impostos;"
      ],
    },
  ];

  const tabs = services.map((service) => ({
    title: service.title,
    value: service.title.toLowerCase().replace(/ /g, "-"),
    content: 
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-xl text-white">
        <AccordionItem title={service.title} descriptions={service.descriptions} />
    </div>
  }));

  return (
    <div className="h-[20rem] md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
