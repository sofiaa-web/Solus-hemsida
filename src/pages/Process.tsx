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
    desc: "Utforskande av ensamhet som samhällsproblem och teknologins roll i det.",
    details: "Genom omfattande litteratursstudier och intervjuer identifierades behovet av en mer 'empatisk' assistent.",
    link: "/process/01"
  },
  {
    title: "Syfte, idegenerering och koncept",
    desc: "Baserat på insikterna från forskningen skapas visionen för Solus genom målgruppsanalys och konceptutveckling.",
    details: "Här formuleras designprinciper och konceptuella lösningar som adresserar de identifierade behoven hos användarna.",
    link: "/process/02"
  },
  {
    title: "Användartester och iteration",
    desc: "Validering av designbeslut genom direkta användartester.",
    details: "Analys av feedback för att förstå hur användare interagerar med Solus och var förbättringar behövs.",
    link: "/tester"
  },
  {
    title: "Resultat och reflektion",
    desc: "Slutgiltig justering av detaljer och förberedelse för lansering.",
    details: "Finslipning av mikromotioner och visuell hierarki för att säkerställa högsta kvalitet.",
    link: "/process/03"
  }
];

export default function Process() {
  return (
    <PageLayout>
      <Section className="mb-20">
        <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text mb-8">Designprocessen<span className="text-solus-accent">.</span></h1>
        <p className="text-xl text-solus-muted font-light leading-relaxed max-w-3xl mb-12">
          Att designa för empati kräver en process som sätter människan i centrum. Från den första insikten till den slutgiltiga prototypen.
        </p>
        
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
                  <p className="text-lg leading-relaxed whitespace-pre-line">{step.desc}</p>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/40 p-8 rounded-2xl border border-solus-accent/5">
                    <p className="text-solus-muted font-light leading-relaxed mb-6">
                      {step.details}
                    </p>
                    <div className="aspect-video bg-solus-bg rounded-lg border border-solus-accent/10 flex items-center justify-center text-solus-accent/40 text-sm">
                      Processbild / Sketch
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Link 
                      to={step.link}
                      className="inline-flex items-center gap-2 group text-solus-accent hover:text-solus-text transition-colors"
                    >
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Läs mer</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Section>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
