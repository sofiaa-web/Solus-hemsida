import { PageLayout, Section } from "@/src/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import solusDefinitionImg from "../solus_definition.png";

export default function SolusDetails() {
  return (
    <PageLayout>
      <Section className="mb-20">
        <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] text-solus-text mb-8">
           Solus<span className="text-solus-accent">.</span>
        </h1>
        
        <div className="prose prose-solus max-w-none space-y-12">
          <div className="bg-solus-accent p-16 text-white">
             <p className="leading-relaxed font-light text-2xl md:text-3xl max-w-3xl">
               Ofrivillig ensamhet och social isolering är ett växande problem som har allvarliga konsekvenser för både den psykiska och fysiska hälsan. Att ta sig ur ensamhet på egen hand kan kännas övermäktigt. Solus sänker tröskeln för att hjälpa dig ta det allra första steget mot förändring.
             </p>
          </div>

          <div className="py-24 border-t border-solus-accent/10">
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

      <Section className="py-32 border-t border-solus-accent/5">
        <div className="max-w-4xl mx-auto flex justify-center">
          <img 
            src={solusDefinitionImg} 
            alt="Solus definition" 
            className="max-w-full h-auto object-contain"
            style={{ imageRendering: 'auto' }}
            referrerPolicy="no-referrer"
          />
        </div>
      </Section>

    </PageLayout>
  );
}
