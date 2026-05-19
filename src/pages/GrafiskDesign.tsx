import { PageLayout, Section } from "@/src/components/Layout";
import { motion } from "motion/react";

export default function GrafiskDesign() {
  const colors = [
    { name: "Solus Text", hex: "#1A1A1A", desc: "Används för rubriker och brödtext för maximal läsbarhet." },
    { name: "Solus Accent", hex: "#D4A373", desc: "En varm, jordnära ton som guidar användaren och markerar interaktion." },
    { name: "Solus Background", hex: "#FAF9F6", desc: "En mjuk benvit nyans som minskar ögontrötthet." },
    { name: "Solus Muted", hex: "#707070", desc: "Används för sekundär information och hjälptexter." },
  ];

  return (
    <PageLayout>
      <Section className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text mb-8">
            Grafisk identitet<span className="text-solus-accent">.</span>
          </h1>
          <p className="text-2xl text-solus-muted font-light leading-relaxed max-w-2xl">
            En visuell balans mellan teknisk precision och mänsklig empati.
          </p>
        </motion.div>
      </Section>

      <div className="space-y-32 mb-32">
        <Section id="typography" className="scroll-mt-32 pt-12 border-t border-solus-accent/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif text-solus-text mb-6">Typografi</h2>
              <p className="text-lg text-solus-muted font-light leading-relaxed mb-8">
                Valet av typografi är fundamentalt för Solus röst. Genom att kombinera en klassisk serif med en modern sans-serif skapas en känsla av både expertis och tillgänglighet.
              </p>
            </div>
            <div className="space-y-12">
              <div className="p-12 bg-white border border-solus-accent/10">
                <span className="text-xs font-bold tracking-[0.2em] text-solus-accent uppercase mb-4 block">Display & Rubriker</span>
                <h3 className="text-6xl font-serif text-solus-text">Cormorant Garamond</h3>
                <p className="text-solus-muted mt-4 font-light italic">Vald för sin tidlösa elegans och auktoritet.</p>
              </div>
              <div className="p-12 bg-white border border-solus-accent/10">
                <span className="text-xs font-bold tracking-[0.2em] text-solus-accent uppercase mb-4 block">Gränssnitt & Brödtext</span>
                <h3 className="text-4xl font-sans font-normal text-solus-text">Inter</h3>
                <p className="text-solus-muted mt-4 font-light">Vald för sin exceptionella läsbarhet i digitala miljöer.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="colors" className="scroll-mt-32 pt-12 border-t border-solus-accent/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif text-solus-text mb-6">Färgskala</h2>
              <p className="text-lg text-solus-muted font-light leading-relaxed mb-8">
                Färgpaletten är medvetet dämpad och harmonisk. Den är utformad för att skapa en miljö som känns trygg och icke-dömande, långt ifrån den intensitet som ofta förknippas med modern teknik.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color) => (
                <div key={color.name} className="space-y-4">
                  <div 
                    className="aspect-square w-full border border-solus-accent/10" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <h4 className="font-bold text-sm tracking-widest text-solus-text uppercase">{color.name}</h4>
                    <p className="text-xs text-solus-muted font-mono uppercase mt-1">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="concept" className="scroll-mt-32 pt-12 border-t border-solus-accent/10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif text-solus-text mb-6">Visuellt koncept</h2>
            <p className="text-xl text-solus-muted font-light leading-relaxed mb-6">
              Solus visuella identitet undviker de typiska klichéerna kring AI – blått ljus, futuristiska linjer och tomma ytor. Istället hämtas inspiration från psykologens kontor och redaktionell design.
            </p>
            <p className="text-xl text-solus-muted font-light leading-relaxed">
              Resultatet är ett gränssnitt som känns mer som ett verktyg för reflektion än en maskin. Genom att prioritera negativ rymd och subtila övergångar ges användaren plats att andas och tänka.
            </p>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
}
