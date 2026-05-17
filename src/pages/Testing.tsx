import { PageLayout, Section } from "@/src/components/Layout";

export default function UserTesting() {
  const sections = [
    {
      id: "malgrupp",
      title: "Målgrupp",
      intro: "Solus vänder sig till människor som upplever ofrivillig ensamhet, oavsett livsskede. Målgruppen spänner från unga vuxna i nya städer till seniorer som söker meningsfull vardagskontakt.",
      quotes: [
        { text: `"Ensamhet ser olika ut för alla, men behovet av att bli sedd är universellt."`, sub: "— Projektets grundtes" }
      ],
      insightsTitle: "Målgruppssegment",
      insights: [
        { title: "Unga vuxna", text: "Personer som flyttat för studier eller jobb och saknar ett socialt skyddsnät." },
        { title: "Seniorer", text: "Äldre som bor kvar hemma men har begränsad social interaktion i sin vardag." },
        { title: "Anhöriga", text: "Personer som söker en trygg och stöttande miljö för sina nära." }
      ]
    },
    {
      id: "personas",
      title: "Personas",
      intro: "Genom djupintervjuer har vi format karaktärer som hjälper oss att designa med empati och precision.",
      quotes: [
        { text: `"Jag behöver någon som finns där när tystnaden i lägenheten blir för hög."`, sub: "— 'Den ensamma studenten'" },
        { text: `"Teknik ska inte vara ett hinder, det ska vara en varm utsträckt hand."`, sub: "— 'Den äldre seniorn'" }
      ],
      insightsTitle: "Psykologiska behov",
      insights: [
        { title: "Bekräftelse", text: "Behovet av att bli sedd och hörd utan att bli dömd eller avbruten." },
        { title: "Kontinuitet", text: "Vikten av att assistenten minns tidigare samtal för att bygga en långsiktig relation." },
        { title: "Trygghet", text: "Låg tröskel för interaktion och hög transparens kring dataintegritet." }
      ]
    },
    {
      id: "surrogat",
      title: "Surrogat",
      intro: "Utforskande av assistentens roll som ett emotionellt surrogat i digitala miljöer.",
      quotes: [
        { text: `"Gränsen mellan människa och maskin suddas ut när empati blir algoritmiskt."`, sub: "— Interaktionsforskare" },
        { text: `"Det är inte en ersättning för människor, det är en brygga till att våga mer."`, sub: "— Psykologutlåtande" }
      ],
      insightsTitle: "Tekniska utmaningar",
      insights: [
        { title: "Emotionell AI", text: "Utveckling av förståelse för subtila nyanser i mänskligt språk." },
        { title: "Gränssättningar", text: "Att skapa en tydlig balans mellan närvaro och för stor teknisk dominans." },
        { title: "Etik", text: "Ansvaret i att designa en tjänst som påverkar människors välmående så djupt." }
      ]
    },
    {
      id: "resultat",
      title: "Resultat",
      intro: "Resultat från kvalitativa studier och interaktionsanalyser med fokus på emotionell respons och trygghet.",
      quotes: [
        { text: `"Det kändes inte som en chatbot, det kändes som om någon faktiskt lyssnade."`, sub: "— Testdeltagare, 28 år" },
        { text: `"Jag gillade det lugna färgvalet. Det stressade mig inte som andra appar gör."`, sub: "— Testdeltagare, 45 år" }
      ],
      insightsTitle: "Viktigaste insikterna",
      insights: [
        { title: "Tonläge", text: "Användarna föredrog korta, reflekterande svar snarare än långa instruktioner." },
        { title: "Visuell feedback", text: "Subtila animationer när Solus 'lyssnar' var avgörande för att skapa en känsla av närvaro." },
        { title: "Enkelhet", text: "Eliminering av onödiga knappar och menyer minskade det kognitiva motståndet." }
      ]
    }
  ];

  return (
    <PageLayout>
      <Section className="mb-20">
        <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text mb-8">Användartester och iteration<span className="text-solus-accent">.</span></h1>
        <p className="text-xl text-solus-muted font-light leading-relaxed max-w-3xl mb-12">
          Här samlas lärdomar från mötet mellan människa och AI.
        </p>

        <div className="flex flex-wrap gap-4">
          {sections.map((section) => (
            <button 
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-solus-tag-bg text-solus-accent text-[10px] font-bold tracking-[0.2em] rounded-full uppercase hover:bg-solus-accent hover:text-white transition-all cursor-pointer"
            >
              {section.title}
            </button>
          ))}
        </div>
      </Section>

      <div className="space-y-32 mb-32">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-32 pt-12 border-t border-solus-accent/10">
            <Section className="mb-12">
              <h2 className="text-5xl md:text-7xl font-serif text-solus-text mb-6">{section.title}</h2>
              <p className="text-lg text-solus-muted font-light leading-relaxed max-w-2xl">
                {section.intro}
              </p>
            </Section>

            <Section className="grid md:grid-cols-2 gap-8 mb-16">
              {section.quotes.map((quote, idx) => (
                <div key={idx} className={`${idx === 0 ? 'bg-white border border-solus-border' : 'bg-solus-card-bg'} p-12 group hover:border-solus-accent transition-all`}>
                  <h3 className="font-serif text-3xl font-medium text-solus-text mb-6">{quote.text}</h3>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-solus-accent uppercase">{quote.sub}</p>
                </div>
              ))}
            </Section>

            <Section className="space-y-12">
              <h2 className="text-3xl font-medium">{section.insightsTitle}</h2>
              <div className="grid md:grid-cols-3 gap-12">
                {section.insights.map((insight, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="font-semibold uppercase tracking-widest text-xs text-solus-accent">{insight.title}</h4>
                    <p className="text-solus-muted font-light text-sm leading-relaxed">
                      {insight.text}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
