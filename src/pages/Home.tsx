import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PageLayout, Section } from "@/src/components/Layout";
import { ArrowRight } from "lucide-react";
import solusGif from "../Gif-solus-2.gif";
import solusDefinitionImg from "../solus_definition.png";

export default function Home() {
  return (
    <PageLayout>
      <Section className="flex flex-col items-center justify-center min-h-[60vh] text-center mb-20 px-6">
        <div className="space-y-8 max-w-3xl">
          <div className="inline-block px-4 py-1 bg-solus-tag-bg text-solus-accent text-[10px] font-bold tracking-[0.2em] rounded-full uppercase">
            Designprojekt 2026
          </div>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text">
            Solus<span className="text-solus-accent">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-solus-muted leading-relaxed font-light mx-auto">
            Ett första steg ut ur ensamhet
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-2xl mx-auto relative"
          >
            <img 
              src={solusGif} 
              alt="Solus Atmosphere"
              className="w-full h-auto block drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="text-xl md:text-2xl text-solus-muted leading-relaxed font-light text-left space-y-8">
              <p>
                Solus är en digital coach i form av ett textbaserat gränssnitt. Genom att kombinera ett varmt och professionellt bemötande förankrad i vetenskap och handlingsplaner, vägleder assistenten dig steg för steg mot att skapa mänskliga kontakter i den analoga världen.
              </p>
              <div className="py-4 flex justify-center">
                <img 
                  src={solusDefinitionImg} 
                  alt="Solus definition" 
                  className="max-w-full h-auto object-contain"
                  style={{ imageRendering: 'auto' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <p>
                Ofrivillig ensamhet och social isolering är ett växande problem som har allvarliga konsekvenser för både den psykiska och fysiska hälsan. Att ta sig ur ensamhet på egen hand kan kännas övermäktigt. Solus sänker tröskeln för att hjälpa dig ta det allra första steget mot förändring. 
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="mb-32">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white border border-solus-border p-8 hover:border-solus-accent transition-all">
            <div className="mb-6">
              <h3 className="font-serif text-xl font-medium text-solus-text leading-relaxed">
                Prototypen är inte tillgänglig för allmänheten på grund av driftskostnader, utan är i detta skede avsedd för examinatorn. Länk till prototypen kan eventuellt lämnas ut på förfrågan.
              </h3>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-solus-accent uppercase">Kontakt</span>
              <a 
                href="mailto:sofia.leontiou0033@stud.hkr.se" 
                className="text-solus-accent hover:underline text-sm font-medium"
              >
                sofia.leontiou0033@stud.hkr.se
              </a>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
