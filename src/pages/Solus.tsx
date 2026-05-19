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
                  För att uppnå detta integreras handlingsplanen EASE, som vägleder användaren genom en strukturerad och stegvis social exponering. Solus är utformat för att fungera som en coach snarare än en kompanjon eller följeslagare. Systemets framgång mäts helt i användarens förmåga att till slut bygga upp tillräckligt med mod för det initiala steget mot att söka äkta, mänsklig gemenskap i det verkliga livet.
                </p>
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
