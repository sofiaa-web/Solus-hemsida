import { PageLayout, Section } from "@/src/components/Layout";
import { motion } from "motion/react";

export default function GrafiskDesign() {
  const colors = [
    { 
      name: "Bakgrund", 
      hex: "#FDFCF9", 
      class: "bg-solus-bg", 
      border: "border border-solus-accent/10" 
    },
    { 
      name: "Accent", 
      hex: "#3A2B22", 
      class: "bg-solus-accent" 
    },
    { 
      name: "Text", 
      hex: "#1A1A1A", 
      class: "bg-solus-text" 
    },
    { 
      name: "Kontrast", 
      hex: "#FFFFFF", 
      class: "bg-white", 
      border: "border border-solus-accent/10" 
    }
  ];

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <Section className="pt-24 pb-12">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-serif text-solus-text mb-8">
              Grafisk Profil<span className="text-solus-accent">.</span>
            </h1>
          </div>
        </Section>

        {/* Colors Section */}
        <Section className="py-24 border-t border-solus-accent/5">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-solus-text">Färger</h2>
            <p className="text-lg text-solus-muted leading-relaxed font-light">
              Färgpaletten för Solus är framtagen för att skapa en visuell miljö som andas lugn och empati. 
              De varma tonerna i bakgrunden möter den djupa accentfärgen för att skapa en tidlös känsla.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {colors.map((color, i) => (
              <div key={i} className="group">
                <div className={`aspect-square rounded-sm mb-4 ${color.class} ${color.border || ""}`} />
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-solus-text">{color.name}</div>
                  <div className="text-xs font-mono text-solus-muted">{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography Section - Redesigned Specimen */}
        <Section className="py-24 border-t border-solus-accent/5 pb-48">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-solus-text">Typografi</h2>
            <p className="text-lg text-solus-muted leading-relaxed font-light">
              Hierarki mellan typsnitt skapar riktning och tydlighet i upplevelsen. En klassisk karaktär kombineras med ett modernt uttryck för högsta möjliga tillgänglighet.
            </p>
          </div>

          <div className="space-y-32">
            {/* Serif Display */}
            <div className="relative">
              <div className="absolute -top-12 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-solus-accent">Rubriker</div>
              <div className="grid md:grid-cols-12 gap-12 items-end border-b border-solus-accent/10 pb-16">
                <div className="md:col-span-8">
                  <span className="text-7xl md:text-[140px] font-serif font-light leading-none text-solus-text">Aa</span>
                  <p className="text-4xl md:text-6xl font-serif font-light text-solus-muted mt-8 leading-tight">
                    Cormorant Garamond används för att förmedla auktoritet, värme och mänsklig närvaro.
                  </p>
                </div>
                <div className="md:col-span-4 space-y-4">
                  <p className="text-sm font-bold text-solus-text uppercase tracking-widest">Cormorant Garamond</p>
                  <p className="text-sm font-light text-solus-muted leading-relaxed">
                    Ett typsnitt som tar plats utan att skrika, perfekt för att sätta tonen i emotionella sammanhang.
                  </p>
                </div>
              </div>
            </div>

            {/* Sans Specimen */}
            <div className="relative">
              <div className="absolute -top-12 left-0 text-[10px] font-bold uppercase tracking-[0.3em] text-solus-accent">Funktionell text</div>
              <div className="grid md:grid-cols-12 gap-12 items-end border-b border-solus-accent/10 pb-16">
                <div className="md:col-span-8">
                  <span className="text-7xl md:text-[140px] font-sans font-light text-solus-text leading-none">Aa</span>
                  <p className="text-4xl md:text-6xl font-sans font-light text-solus-muted mt-8 leading-tight">
                    Inter är ryggraden i den digitala läsbarheten och det moderna uttrycket.
                  </p>
                </div>
                <div className="md:col-span-4 space-y-4">
                  <p className="text-sm font-bold text-solus-text uppercase tracking-widest">Inter</p>
                  <p className="text-sm font-light text-solus-muted leading-relaxed">
                    Inter används för all brödtext tack vare dess neutrala men moderna karaktär som fungerar sömlöst på alla digitala skärmar.
                  </p>
                </div>
              </div>

              {/* UI Elements Showcase */}
              <div className="pt-24">
                <h3 className="text-4xl md:text-5xl font-serif text-solus-text mb-12">Gränssnitt & Navigation</h3>
                <div className="flex flex-wrap gap-16 items-center">
                  <div className="text-base font-bold uppercase tracking-[0.2em] text-solus-accent bg-solus-tag-bg px-8 py-3 rounded-full">
                    Etikett
                  </div>
                  <div className="text-base font-bold uppercase tracking-[0.2em] text-solus-text border-b-2 border-solus-accent pb-1">
                    Länk
                  </div>
                  <div className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-solus-text">
                    VERSAL TEXT (KNAPPAR)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </motion.div>
    </PageLayout>
  );
}
