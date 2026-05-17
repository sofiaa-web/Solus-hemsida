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
             <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-10">Filosofi</div>
             <h2 className="text-5xl font-serif mb-10 text-white">Människan i centrum</h2>
             <p className="text-gray-300 leading-relaxed font-light mb-8 text-2xl max-w-2xl">
               Solus är designad för att vara en "mellan-yta". När världen känns för stor eller för tyst, finns Solus där för att initiera de små samtalen som ofta är grundstenen i mänsklig gemenskap.
             </p>
             <p className="text-gray-300 leading-relaxed font-light text-2xl">
               Designen vilar på tre pelare: <span className="text-white font-medium">Närvaro</span>, <span className="text-white font-medium">Trygghet</span> och <span className="text-white font-medium">Inkludering</span>.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 py-12">
            <div className="space-y-6">
               <h3 className="text-2xl font-medium">Typografi & Färg</h3>
               <p className="text-solus-muted text-sm leading-relaxed font-light">
                 **Cormorant Garamond** har valts för att framkalla en känsla av tidlöshet och expertis, kombinerat med **Inter** för tydlighet och modernitet. Färgskalan är medvetet dämpad för att inte överstimulera användaren – en motvikt till den rådande "attention economy"-designen.
               </p>
               <div className="flex gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full bg-solus-bg border border-solus-accent/20" />
                  <div className="w-12 h-12 rounded-full bg-solus-accent" />
                  <div className="w-12 h-12 rounded-full bg-solus-text" />
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm" />
               </div>
            </div>
            <div className="space-y-6">
               <h3 className="text-2xl font-medium">AI med hjärta</h3>
               <p className="text-solus-muted text-sm leading-relaxed font-light">
                 Till skillnad från de flesta AI-assistenter som fokuserar på effektivitet och att "lösa uppgifter", fokuserar Solus på reflektion och emotionellt stöd. Målet är att användaren ska känna sig sedd, inte bara servad.
               </p>
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

      <Section className="py-24 border-t border-solus-accent/10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="sticky top-32">
            <h2 className="text-4xl font-serif mb-6">Grafisk design<span className="text-solus-accent">.</span></h2>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-solus-muted font-light leading-relaxed">
              Den grafiska identiteten för Solus är framtagen för att spegla balansen mellan det tekniskt avancerade och det djupt mänskliga. Genom ett medvetet val av form, färg och rörelse skapas en miljö där användaren känner sig välkomnad och trygg.
            </p>
            <p className="text-lg text-solus-muted font-light leading-relaxed">
              Fokus har legat på att skapa ett visuellt lugn som kontrasterar mot dagens ofta brusiga digitala landskap. Varje element, från logotyps form till de subtila animationerna, tjänar syftet att sänka tröskeln för interaktion och främja reflektion.
            </p>
            <div className="flex justify-end pt-4">
              <Link 
                to="/grafisk-design"
                className="inline-flex items-center gap-2 group text-solus-accent hover:text-solus-text transition-colors"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Läs mer</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
