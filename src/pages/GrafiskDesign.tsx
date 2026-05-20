import { PageLayout, Section } from "@/src/components/Layout";
import { motion } from "motion/react";

export default function GrafiskDesign() {
  const colors = [
    { name: "Solus Text", hex: "#1A1A1A" },
    { name: "Solus Accent", hex: "#3A2B22" },
    { name: "Solus Background", hex: "#FDFCF9" },
    { name: "Solus Muted", hex: "#6B6B66" },
  ];

  return (
    <PageLayout>
      <Section className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text mb-8">
            Grafisk identitet<span className="text-solus-accent">.</span>
          </h1>
        </motion.div>
      </Section>

      <Section id="typography-and-colors" className="scroll-mt-32 pt-12 border-t border-solus-accent/10 mb-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Header column */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-serif text-solus-text mb-6">Typografi och färgskala</h2>
            <p className="text-lg text-solus-muted font-light leading-relaxed">
              Solus grafiska profil formas av varma, dämpade toner och elegant typografi utformad för att skapa en trygg och professionell känsla.
            </p>
          </div>

          {/* Typography & Colors container */}
          <div className="md:col-span-8 space-y-12">
            {/* Fonts Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white border border-solus-accent/10 rounded">
                <span className="text-xs font-bold tracking-[0.2em] text-solus-accent uppercase mb-3 block">Display & Rubriker</span>
                <h3 className="text-4xl font-serif text-solus-text">Cormorant Garamond</h3>
              </div>
              <div className="p-8 bg-white border border-solus-accent/10 rounded">
                <span className="text-xs font-bold tracking-[0.2em] text-solus-accent uppercase mb-3 block">Gränssnitt & Brödtext</span>
                <h3 className="text-3xl font-sans font-normal text-solus-text">Inter</h3>
              </div>
            </div>

            {/* Colors Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {colors.map((color) => (
                <div key={color.name} className="space-y-3">
                  <div 
                    className="aspect-square w-full border border-solus-accent/10 rounded" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <h4 className="font-bold text-[11px] tracking-wider text-solus-text uppercase leading-tight">{color.name}</h4>
                    <p className="text-xs text-solus-muted font-mono uppercase mt-0.5">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
