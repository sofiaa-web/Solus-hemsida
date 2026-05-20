import { PageLayout, Section } from "@/src/components/Layout";
import SagaImg from "@/src/components/Saga.png";
import LeifImg from "@/src/components/Leif.png";

export default function UserTesting() {
  const sections = [
    {
      id: "malgrupp",
      title: "Målgrupp",
      intro: (
        <>
          Ofrivillig ensamhet och social isolering är ett växande <span className="font-bold text-solus-text">folkhälso- och samhällsproblem</span> i Sverige som i dag drabbar unga vuxna och äldre särskilt hårt. <span className="font-bold text-solus-text">Målgruppen</span> för detta projekt är därför uppdelad i två specifika åldersgrupper som på olika sätt drabbas hårt av <span className="font-bold text-solus-text">ofrivillig ensamhet: unga vuxna (18–25 år) och äldre (70+ år)</span>.
        </>
      ),
      quotes: [],
      insightsTitle: "",
      insights: [
        { title: "Unga vuxna (18–25 år) – Den digitalt isolerade generationen", text: "En generation som är ständigt uppkopplad och har vuxit upp med smartphonen som en central del av livet, men som trots det upplever en utbredd social brist och psykisk ohälsa." },
        { title: "Äldre (70+ år) – Den fysiskt isolerade gruppen", text: "För den äldre målgruppen handlar isoleringen oftast om yttre, strukturella livsförändringar. Det handlar om den ensamhet som uppstår efter pensionering, vid förlust av en livskamrat och nära vänner, eller på grund av fysisk sjukdom och minskad rörlighet. När de naturliga sätten att träffa människor försvinner blir det svårt att på egen hand hitta en ny gemenskap." }
      ]
    },
    {
      id: "personas",
      title: "Personas",
      intro: (
        <>
          På grund av svårigheter med att rekrytera deltagare ur målgrupperna skapades <span className="font-bold text-solus-text">två AI-personas: Saga, 20 år, och Leif, 79 år.</span> Dessa har tilldelats specifika identiteter, egenskaper och livssituationer som speglar ofrivillig ensamhet. För att säkerställa hög relevans och trovärdighet är båda karaktärerna strikt grundade i data från Folkhälsomyndighetens kartläggning av ensamhet.
        </>
      ),
      quotes: [
        { 
          text: `"Jag behöver någon som finns där när tystnaden i lägenheten blir för hög."`, 
          sub: "— Saga, 20 år",
          image: SagaImg 
        },
        { 
          text: `”Sönerna har fullt upp med sina egna jobb och familjer. Jag förstår ju det, så jag väntar hellre på att de ska ringa mig.”`, 
          sub: "— Leif, 79 år",
          image: LeifImg 
        }
      ],
      extraText: (
        <>
          <span className="font-bold text-solus-text">Genom att testa Solus mot AI-personas</span> har projektet fått en uppfattning om hur ett verkligt användartillfälle på hemsidan skulle eventuellt kunnat se ut för en person ur målgruppen. Metoden gjorde det <span className="font-bold text-solus-text">möjligt att simulera interaktionen och pröva designen mot karaktärernas specifika förutsättningar.</span> Testerna gav viktiga <span className="font-bold text-solus-text">insikter</span> om hur samtalen och tonläget fungerar i praktiken. Att bedöma själva innehållet i dialogerna mellan en persona och Solus blir dock subjektivt, eftersom det i slutändan handlar om kvalificerade gissningar kring hur en verklig person ur målgruppen faktiskt skulle uppleva bemötandet.
        </>
      ),
      insightsTitle: "",
      insights: []
    },
    {
      id: "surrogat",
      title: "Surrogat",
      intro: (
        <>
          Då projektets primära målgrupp byttes ut mot AI-personas för användartester, valdes <span className="font-bold text-solus-text">metoden surrogattest som en kompletering</span>. Ett surrogattest innebär att man använder <span className="font-bold text-solus-text">ställföreträdare för att simulera och utvärdera ett gränssnitt</span> när de faktiska slutanvändarna inte finns tillgängliga.
          <br /><br />
          Syftet med testet var primärt att få ett <span className="font-bold text-solus-text">mänskligt perspektiv</span> på hur Solus fungerar rent praktiskt och att samla in teknisk kritik. Genom att låta personer navigera hemsidan och interagera med systemet kunde kritiska synpunkter kring användarvänlighet, flöden och teknisk funktionalitet identifieras. Detta gav <span className="font-bold text-solus-text">värdefulla insikter om systemets stabilitet och logik</span> som inte hade gått att förutse på egen hand, vilket har varit avgörande för att optimera webbplatsen inför framtida möten med den faktiska målgruppen.
        </>
      ),
      quotes: [],
      insightsTitle: "",
      insights: []
    }
  ];

  return (
    <PageLayout>
      <Section className="mb-20">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] text-solus-text mb-8">Användartester och målgrupp<span className="text-solus-accent">.</span></h1>


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
              {section.intro && (
                <p className="text-lg text-solus-muted font-light leading-relaxed max-w-2xl whitespace-pre-line">
                  {section.intro}
                </p>
              )}
            </Section>

            {section.quotes.length > 0 && (
              <Section className="grid md:grid-cols-2 gap-8 mb-16">
                {section.quotes.map((quote: any, idx) => (
                  <div key={idx} className="bg-white border border-solus-border overflow-hidden group hover:border-solus-accent transition-all flex flex-col">
                    {quote.image && (
                      <div className="aspect-[4/5] w-full overflow-hidden">
                        <img 
                          src={quote.image} 
                          alt={quote.sub} 
                          className="w-full h-full object-cover transition-all duration-700" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div className="p-12">
                      <h3 className="font-serif text-3xl font-medium text-solus-text mb-6">{quote.text}</h3>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-solus-accent uppercase">{quote.sub}</p>
                    </div>
                  </div>
                ))}
              </Section>
            )}

            {(section as any).extraText && (
              <Section className="mb-16">
                <p className="text-lg text-solus-muted font-light leading-relaxed max-w-2xl">
                  {(section as any).extraText}
                </p>
              </Section>
            )}

            <Section className="space-y-12">
              {section.insightsTitle && (
                <h2 className="text-3xl font-medium">{section.insightsTitle}</h2>
              )}
              <div className={`grid gap-12 ${section.insights.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {section.insights.map((insight, idx) => (
                  <div key={idx} className={`space-y-6 ${(section.id === 'malgrupp' || section.id === 'surrogat') ? 'bg-white p-12 border border-solus-accent/10' : ''}`}>
                    <h4 className={`font-bold ${(section.id === 'malgrupp' || section.id === 'surrogat') ? 'text-2xl text-solus-text' : 'uppercase tracking-widest text-base text-solus-accent'}`}>
                      {insight.title}
                    </h4>
                    <p className="text-solus-muted font-light text-lg leading-relaxed">
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
