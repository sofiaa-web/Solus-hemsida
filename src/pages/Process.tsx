import { PageLayout, Section } from "@/src/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Ensamhet",
    desc: "Ofrivillig ensamhet och social isolering är ett växande folkhälso- och samhällsproblem i Sverige som i dag drabbar unga vuxna och äldre särskilt hårt. Folkhälsomyndigheten definierar social isolering som ensamboende som träffar bekanta, anhöriga eller vänner högst två gånger i månaden, och enligt SCB lever omkring trehundratusen svenskar under dessa förhållanden.\n\nHälsokonsekvenserna av långvarig ensamhet är omfattande och ökar risken för hjärt-kärlsjukdomar, psykisk ohälsa och demens, med en negativ effekt på livslängden som forskning jämför med rökning. Eftersom ämnet dessutom är starkt förknippat med skam drar sig många för att söka hjälp.",
    details: "För att kunna designa en lösning måste vi först förstå problemets vidd. Här utforskas varför ensamhet har blivit en av vår tids största utmaningar.",
    link: "/process/ensamhet"
  },
  {
    title: "Litteraturundersökning och omvärldsanalys",
    desc: (
      <div className="space-y-6">
        <p>
          Arbetet med litteraturundersökningen och omvärldsanalysen har <span className="font-bold text-solus-text">gett Solus en tydlig teoretisk och praktisk grund</span> att stå på. Processen har resulterat i avgörande designprinciper genom att visa <span className="font-bold text-solus-text">att textbaserade gränssnitt skapar störst psykologisk trygghet</span>, minskar den kognitiva belastningen och underlättar kommunikation kring sårbarheter jämfört med röstbaserade system.
        </p>
      </div>
    ),
    details: (
      <div className="space-y-6">
        <p className="text-solus-muted font-light leading-relaxed">
          Genom en <span className="font-bold text-solus-text">omvärldsanalys och kartläggning</span> av området identifieras både etablerade mänskliga stödfunktioner och framväxande tekniska alternativ som adresserar ensamhet. Analysen sträcker sig från röststyrda sällskapsrobotar för äldre till forskningsnätverk och nationella stödlinjer. <span className="font-bold text-solus-text">Syftet är att synliggöra marknadens begränsningar och identifiera inom vilka områden det finns utrymme för nya, innovativa designlösningar.</span>
        </p>
      </div>
    ),
    link: "/process/01"
  },
  {
    title: "Syfte och koncept",
    desc: (
      <div className="space-y-6">
        <p>
          <span className="font-bold text-solus-text">Syftet är att genom design skapa en avsiktlig förändring för individer som lever i ofrivillig ensamhet.</span> Litteraturundersökningen och omvärldsanalysen bidrog med värdefull kunskap som synliggjorde en specifik kunskapslucka och ett underliggande behov på marknaden. 
        </p>
        <p>
          Med utgångspunkt i detta utvecklades konceptet Solus. Solus är en AI-driven coach utformad för att hjälpa ensamma och socialt isolerade människor att stödja dem i att våga ta det allra första steget ut ur sin ensamhet.
        </p>
        <p>
          Genom att integrera handlingsplanen EASE vilar Solus på kunskap och en grund som stöds av Folkhälsomyndigheten och Socialstyrelsen. Målet är att Solus ska fungera som en coach och inte en kompanjon, vilket innebär att framgången mäts i att användaren till slut känner sig redo att avsluta tjänsten.
        </p>
      </div>
    ),
    details: null,
    link: "/process/02"
  },
  {
    title: "Metod",
    desc: (
      <div className="space-y-6">
        <p>
          För att utveckla Solus till ett tryggt och effektivt verktyg har arbetet utgått från en <span className="font-bold text-solus-text">användarcentrerad och iterativ designmetodik</span>. Genom att kombinera akademisk forskning med praktisk formgivning har designbesluten kontinuerligt testats och förfinats.
        </p>
        <p>
          En central metod har varit att översätta teoretiska ramverk – som folkhälsodata och EASE-handlingsplanen – till konkreta interaktionsmönster som sänker användarens kognitiva och emotionella trösklar.
        </p>
      </div>
    ),
    details: (
      <div className="space-y-6">
        <p className="text-solus-muted font-light leading-relaxed">
          Arbetet har präglats av att snabbt visualisera idéer och testa dem. Genom att iterera gränssnittet i flera steg – från enkla skisser till interaktiva prototyper – har feedback från surrogattester kunnat integreras löpande.
        </p>
        <p className="text-solus-muted font-light leading-relaxed">
          Metodvalet har fokuserat på att säkerställa högsta möjliga användbarhet och att skapa en känsla av psykologisk trygghet i gränssnittets design.
        </p>
      </div>
    ),
    link: "/tester"
  },
  {
    title: "Användartester och målgrupp",
    desc: (
      <div className="space-y-6">
        <p>
          Ofrivillig ensamhet och social isolering är ett växande folkhälso- och samhällsproblem i Sverige som i dag drabbar unga vuxna och äldre särskilt hårt. Målgruppen för detta projekt är därför uppdelad i två specifika åldersgrupper som på olika sätt drabbas hårt av ofrivillig ensamhet: unga vuxna (18–25 år) och äldre (70+ år).
        </p>
      </div>
    ),
    details: (
      <div className="space-y-6">
        <p className="text-solus-muted font-light leading-relaxed">
          Eftersom målgrupperna var svåra att rekrytera, skapades två personas, Saga (20 år) och Leif (79 år), som bygger på data från Folkhälsomyndigheten. Genom att testa hemsidans gränssnitt mot dessa AI-personas skapades en bild av hur ett verkligt användartillfälle skulle kunna se ut, vilket gav viktiga insikter om samtalen och tonläget.
        </p>
        <p className="text-solus-muted font-light leading-relaxed">
          Som ett komplement genomfördes surrogattester, vilket innebär att utomstående personer fick testa Solus för att samla in teknisk kritik och identifiera brister i användarvänlighet och flöden.
        </p>
      </div>
    ),
    link: "/tester"
  },
  {
    title: "Resultat",
    desc: "Solus utvecklades inledningsvis med hjälp av Google AI Studio och förfinades sedan iterativt direkt i GitHub. Solus är publicerad via Vercel och är integrerad med Groqs API.",
    details: "Finslipning av mikromotioner och visuell hierarki för att säkerställa högsta kvalitet.",
    link: "/process/03"
  }
];

export default function Process() {
  return (
    <PageLayout>
      <Section className="mb-20">
        <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text mb-8">Designprocessen<span className="text-solus-accent">.</span></h1>

        
        <div className="flex flex-wrap gap-4">
          {steps.map((step, idx) => (
            <button 
              key={idx}
              onClick={() => document.getElementById(`step-${idx}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-solus-tag-bg text-solus-accent text-[10px] font-bold tracking-[0.2em] rounded-full uppercase hover:bg-solus-accent hover:text-white transition-all cursor-pointer"
            >
              {step.title}
            </button>
          ))}
        </div>
      </Section>

      <div className="space-y-32">
        {steps.map((step, idx) => (
          <div key={step.title} id={`step-${idx}`} className="scroll-mt-32">
            {step.title === "Ensamhet" ? (
              <Section className="border-t border-solus-accent/10 pt-12">
                <h2 className="text-3xl font-medium mb-12">{step.title}</h2>
                <div className="md:columns-2 gap-16 text-lg leading-relaxed text-solus-muted font-light">
                  <p className="mb-6 break-inside-avoid">
                    Ofrivillig ensamhet och social isolering är ett växande <span className="font-bold text-solus-text">folkhälso- och samhällsproblem</span> i Sverige som i dag drabbar <span className="font-bold text-solus-text">unga vuxna</span> och <span className="font-bold text-solus-text">äldre</span> särskilt hårt. Folkhälsomyndigheten definierar social isolering som ensamboende som träffar bekanta, anhöriga eller vänner högst två gånger i månaden, och enligt SCB lever omkring <span className="font-bold text-solus-text">300 000</span> svenskar under dessa förhållanden.
                  </p>
                  <p className="break-inside-avoid">
                    Hälsokonsekvenserna av långvarig ensamhet är omfattande och ökar risken för <span className="font-bold text-solus-text">hjärt-kärlsjukdomar</span>, <span className="font-bold text-solus-text">psykisk ohälsa</span> och <span className="font-bold text-solus-text">demens</span>, med en negativ effekt på livslängden som forskning jämför med rökning. Eftersom ämnet dessutom är starkt förknippat med skam drar sig många för att söka hjälp.
                  </p>
                </div>
                <div className="flex justify-end mt-8">
                  <Link 
                    to={step.link}
                    className="inline-flex items-center gap-2 group text-solus-accent hover:text-solus-text transition-colors"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Lär dig mer om ensamhet</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Section>
            ) : (
              <Section className="grid md:grid-cols-2 gap-12 items-start border-t border-solus-accent/10 pt-12">
                <div className="sticky top-32">
                  <h2 className="text-3xl font-medium mb-6">{step.title}</h2>
                  <div className="text-lg leading-relaxed text-solus-muted font-light">
                    {step.desc}
                  </div>
                </div>
                <div className="space-y-6">
                  {step.details && (
                    <div className={typeof step.details === 'string' ? "bg-white/40 p-8 rounded-2xl border border-solus-accent/5" : "text-lg"}>
                      {typeof step.details === 'string' ? (
                        <>
                          <p className="text-solus-muted font-light leading-relaxed mb-6">
                            {step.details}
                          </p>
                          <div className="aspect-video bg-solus-bg rounded-lg border border-solus-accent/10 flex items-center justify-center text-solus-accent/40 text-sm">
                            Processbild / Sketch
                          </div>
                        </>
                      ) : (
                        <div className="text-solus-muted font-light leading-relaxed">
                          {step.details}
                        </div>
                      )}
                    </div>
                  )}

                  {step.title === "Syfte och koncept" && (
                    <div className="bg-white p-12 rounded-none border border-solus-accent/10 mb-8">
                      <h3 className="text-2xl font-bold mb-8 text-solus-accent tracking-widest">EASE</h3>
                      <div className="space-y-6 text-lg leading-relaxed text-solus-muted font-light">
                        <p><span className="font-bold text-solus-accent">E: Extend yourself.</span> Ta första steget till kontakt genom att hälsa, småprata och ha ögonkontakt med andra människor.</p>
                        <p><span className="font-bold text-solus-accent">A: Action plan.</span> Fundera ut sammanhang där du kan träffa likasinnade och sök dig till dem, exempelvis en kör eller förening.</p>
                        <p><span className="font-bold text-solus-accent">S: Selection.</span> Välj vilka du vill bli vän med och investera i detta fåtal.</p>
                        <p><span className="font-bold text-solus-accent">E: Expect the best.</span> Utgå från att människor omkring dig vill dig väl.</p>
                      </div>
                    </div>
                  )}
                  {step.title !== "Syfte och koncept" && step.title !== "Metod" && (
                    <div className="flex justify-end pt-2">
                      <Link 
                        to={step.link}
                        className="inline-flex items-center gap-2 group text-solus-accent hover:text-solus-text transition-colors"
                      >
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Läs mer</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              </Section>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
