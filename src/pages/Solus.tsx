import { PageLayout, Section } from "@/src/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function SolusDetails() {
  const colors = [
    { name: "Solus Text", hex: "#1A1A1A" },
    { name: "Solus Accent", hex: "#3A2B22" },
    { name: "Solus Bakgrund", hex: "#FDFCF9" },
    { name: "Solus Dämpad", hex: "#6B6B66" },
  ];

  return (
    <PageLayout>
      <Section className="mb-20">
        <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text mb-8">
           Solus<span className="text-solus-accent">.</span>
        </h1>
        
        <div className="prose prose-solus max-w-none space-y-12">
          <div className="border-t border-solus-accent/10 pt-12">
            <div className="bg-solus-accent p-16 text-white">
               <p className="leading-relaxed font-light text-2xl md:text-3xl max-w-3xl">
                 Ofrivillig ensamhet och social isolering är ett växande problem som har allvarliga konsekvenser för både den psykiska och fysiska hälsan. Att ta sig ur ensamhet på egen hand kan kännas övermäktigt. Solus sänker tröskeln för att hjälpa dig ta det allra första steget mot förändring.
               </p>
            </div>
          </div>

          <div className="py-24">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-4xl font-serif">Vad är Solus?</h3>
                <p className="text-xl text-solus-muted font-light leading-relaxed">
                  Solus är en AI-coach utvecklad för att motverka ofrivillig ensamhet och social isolering bland unga vuxna och äldre. Syftet med verktyget är att hjälpa användaren att ta det allra första steget ut ur sin ensamhet. Det textbaserade samtalsstödet är utformat för att minska det motstånd som ofta finns inför att börja prata om sin ensamhet.
                </p>
              </div>
              <div className="space-y-6 md:pt-16">
                <p className="text-xl text-solus-muted font-light leading-relaxed">
                  För att uppnå detta integreras handlingsplanen EASE, som vägleder användaren genom en strukturerad och stegvis social exponering. Solus är utformat för att fungera som en coach snarare än en kompanjon eller följeslagare. Målet är att användaren, efter en tids användning, ska ha stärkt sin sociala gemenskap och på så sätt inte längre ha behov av Solus.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white p-12 rounded-none border border-solus-accent/10">
              <h3 className="text-2xl font-bold mb-8 text-solus-accent tracking-widest">EASE</h3>
              <div className="space-y-6 text-lg leading-relaxed text-solus-muted font-light">
                <p><span className="font-bold text-solus-accent">E: Extend yourself.</span> Ta första steget till kontakt genom att hälsa, småprata och ha ögonkontakt med andra människor.</p>
                <p><span className="font-bold text-solus-accent">A: Action plan.</span> Fundera ut sammanhang där du kan träffa likasinnade och sök dig till dem, exempelvis en kör eller förening.</p>
                <p><span className="font-bold text-solus-accent">S: Selection.</span> Välj vilka du vill bli vän med och investera i detta fåtal.</p>
                <p><span className="font-bold text-solus-accent">E: Expect the best.</span> Utgå från att människor omkring dig vill dig väl.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="typography-and-colors" className="scroll-mt-32 py-32 border-t border-solus-accent/10">
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
                  <span className="text-xs font-bold tracking-[0.2em] text-solus-accent uppercase mb-3 block">Rubriker</span>
                  <h3 className="text-4xl font-serif text-solus-text">Cormorant Garamond</h3>
                </div>
                <div className="p-8 bg-white border border-solus-accent/10 rounded">
                  <span className="text-xs font-bold tracking-[0.2em] text-solus-accent uppercase mb-3 block">Brödtext</span>
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
                      <p className="text-xs text-solus-muted font-mono uppercase">{color.hex}</p>
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
