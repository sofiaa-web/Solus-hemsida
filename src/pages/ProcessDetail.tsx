import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PageLayout, Section } from "@/src/components/Layout";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StepSection {
  title: string;
  shortContent: React.ReactNode;
  fullContent: React.ReactNode;
}

interface StepContent {
  title: string;
  subtitle: string;
  body: string;
  sections?: StepSection[];
}

const stepContent: Record<string, StepContent> = {
  "ensamhet": {
    title: "00",
    subtitle: "Ensamhet",
    body: "Ensamhet är en av vår tids största utmaningar för folkhälsan. Det är inte bara en individuell känsla av isolering, utan en strukturell utmaning som kräver nya sätt att tänka kring digital gemenskap. Genom att förstå ensamhet kan vi designa verktyg som hjälper människor att ta första steget ur den.",
    sections: [
      {
        title: "Ensamhet – ett hot mot vår hälsa",
        shortContent: "Forskningen från Karolinska Institutet visar att ofrivillig ensamhet har en stor effekt på hälsan och kan vara lika skadligt som rökning.",
        fullContent: (
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Ensamhet som hälsofara</h4>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    Forskningen från Karolinska Institutet visar att <span className="font-bold">ofrivillig ensamhet har en stor effekt på hälsan och kan vara lika skadligt som rökning</span>, eftersom människan evolutionärt är programmerad att söka gemenskap för sin överlevnad. Långvarig ensamhet försämrar direkt våra kognitiva funktioner och vår koncentrationsförmåga, samtidigt som det självupplevda välbefinnandet sjunker drastiskt, vilket gör att samhället aktivt måste motverka isolering. För att bryta detta mönster lyfts den amerikanska handlingsplanen <span className="font-bold">EASE</span> fram som en konkret metod. 
                  </p>
                  <div className="pt-4 space-y-3">
                    <p className="font-bold text-base">EASE</p>
                    <ul className="space-y-2">
                      <li><span className="font-bold">E: Extend yourself.</span> Ta första steget till kontakt genom att hälsa, småprata och ha ögonkontakt med andra människor.</li>
                      <li><span className="font-bold">A: Action plan.</span> Fundera ut sammanhang där du kan träffa likasinnade och sök dig till dem, exempelvis en kör eller förening.</li>
                      <li><span className="font-bold">S: Selection.</span> Välj vilka du vill bli vän med och investera i detta fåtal.</li>
                      <li><span className="font-bold">E: Expect the best.</span> Utgå från att människor omkring dig vill dig väl.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    Karolinska Institutet – Ensamhet: ett hot mot vår hälsa
                    <br />
                    <a href="https://ki.se/forskning/popularvetenskap-och-dialog/popularvetenskapliga-teman/tema-relationer-identitet-och-sexualitet/ensamhet-ett-hot-mot-var-halsa" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      ki.se/forskning/popularvetenskap...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-12 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Ensamhet – förekomst, konsekvenser och åtgärder</h4>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    Den internationella forskningen visar att ofrivillig ensamhet är en omfattande hälsofara som ökar risken för hjärtinfarkt, stroke, demens och förtida död. Studier fastställer att ofrivillig isolering orsakar en kronisk stress i kroppen och har ett tydligt samband med psykisk ohälsa som depression och ångest. Riskfaktorerna skiljer sig mellan åldersgrupper där unga ofta påverkas av stora livsomställningar eller mobbning medan äldre drabbas särskilt hårt av att förlora en partner eller att leva ensamstående. Personer med funktionsnedsättningar är en extra utsatt grupp som rapporterar en högre förekomst av ensamhet än befolkningen i övrigt. 
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    Folkhälsomyndigheten (2024). Ensamhet – förekomst, konsekvenser och åtgärder: en kartläggning.
                    <br />
                    <a href="https://www.folkhalsomyndigheten.se/publikationer-och-material/publikationsarkiv/e/ensamhet-forekomst-konsekvenser-och-atgarder-en-kartlaggning/" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      folkhalsomyndigheten.se/publikationer...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "SCB",
        shortContent: "Statistik från SCB bekräftar att ofrivillig ensamhet är en utbredd samhällsutmaning som berör miljontals svenskar i olika livsskeden.",
        fullContent: (
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Mer än var tredje över 60 bor ensam</h4>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    SCB visar att av de drygt 2,6 miljoner människor i Sverige som är 60 år eller äldre bor <span className="font-bold">närmare 35 procent</span>, vilket motsvarar ungefär 900 000 personer, ensamma. Denna grupp består till största delen av personer som är skilda, änkor eller änklingar.
                  </p>
                  <p>
                    Statistiken belyser dock stora skillnader mellan könen, eftersom det bor nästan dubbelt så många ensamma kvinnor som män i denna åldersgrupp. SCB visar också att äldre som bor ensamma i högre utsträckning är barnlösa jämfört med de som delar hushåll. 
                  </p>
                  <p>
                    Detta mönster är särskilt tydligt bland ensamboende män där nästan 35 procent saknar barn, jämfört med knappt 20 procent av kvinnorna. Totalt finns det 225 000 personer över 60 år som både bor ensamma och saknar barn.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    SCB – Mer än var tredje över 60 bor ensam
                    <br />
                    <a href="https://www.scb.se/hitta-statistik/redaktionellt/mer-an-var-tredje-over-60-bor-ensam/" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      scb.se/hitta-statistik...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Fyra procent är socialt isolerade</h4>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    SCB visar att ungefär <span className="font-bold">fyra procent</span> av befolkningen i Sverige, vilket motsvarar runt 300 000 personer, beräknas vara <span className="font-bold">socialt isolerade</span>. Det innebär att de bor ensamma och träffar anhöriga, vänner eller bekanta som mest någon gång i kvartalet. 
                  </p>
                  <p>
                    Statistiken visar att den sociala isoleringen är mycket ovanlig bland unga mellan 16 och 24 år, där andelen bara är en procent, men att den ökar markant efter ålderspensionen. Bland personer mellan 75 och 84 år är cirka tio procent socialt isolerade, och bland de som är 85 år och äldre stiger siffran till 15 procent.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    SCB – Fyra procent är socialt isolerade
                    <br />
                    <a href="https://www.scb.se/hitta-statistik/artiklar/2019/fyra-procent-ar-socialt-isolerade/" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      scb.se/hitta-statistik...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Hundratusentals personer saknar en nära vän</h4>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    SCB visar att uppskattningsvis <span className="font-bold">664 000 personer</span> i Sverige, vilket motsvarar ungefär 7,5 procent av befolkningen från 16 år och uppåt, helt saknar en nära vän. 
                  </p>
                  <p>
                    Det finns tydliga könsskillnader i statistiken då drygt nio procent av männen uppger att de saknar en nära vän, jämfört med sex procent av kvinnorna, en skillnad som är som mest märkbar i åldersgrupperna 20 till 29 år samt 40 till 49 år. 
                  </p>
                  <p>
                    SCB visar även att det är mer än dubbelt så vanligt att utrikesfödda personer saknar en nära vän jämfört med inrikesfödda, med andelar på 13 respektive 6 procent. Dessutom syns ett tydligt mönster kopplat till utbildningsnivå, då andelen utan en nära vän är tolv procent bland personer med förgymnasial utbildning men sjunker till fem procent bland de som har en eftergymnasial utbildning.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    SCB – Hundratusentals personer saknar en nära vän
                    <br />
                    <a href="https://www.scb.se/pressmeddelande/hundratusentals-personer-saknar-en-nara-van/" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      scb.se/pressmeddelande...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  "01": {
    title: "01",
    subtitle: "Litteraturundersökning och omvärldsanalys",
    body: "I denna fas ligger fokus på att förstå kärnan i problemet. Ensamhetens anatomi utforskas tillsammans med hur digitala verktyg kan överbrygga klyftan mellan isolation och gemenskap utan att ersätta mänsklig kontakt.",
    sections: [
      {
        title: "Forskning",
        shortContent: (
          <div className="space-y-4">
            <p>
              Forskning från Karolinska Institutet visar att ofrivillig ensamhet har en stor effekt på hälsan och kan vara lika skadligt som rökning. För att mäta ensamhet används UCLA Loneliness Scale, och för att bryta isoleringen lyfts den amerikanska handlingsplanen EASE fram som en konkret metod för social återhämtning.
            </p>
            <p>
              Studier av digital teknik ger värdefulla insikter om varför textbaserade gränssnitt skapar bäst psykologisk trygghet samtidigt som de dolda riskerna med AI-kompanjoner problematiseras. Forskningen visar att användare föredrar att skriva framför att prata när de delar sårbarheter, men varnar samtidigt för att virtuella relationer kan leda till emotionella abstinenssymptom och fördjupad isolering offline.
            </p>
          </div>
        ),
        fullContent: (
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Ensamhet – ett hot mot vår hälsa</h4>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    Forskningen från Karolinska Institutet visar att <span className="font-bold">ofrivillig ensamhet har en stor effekt på hälsan och kan vara lika skadligt som rökning</span>, eftersom människan evolutionärt är programmerad att söka gemenskap för sin överlevnad. Långvarig ensamhet försämrar direkt våra kognitiva funktioner och vår koncentrationsförmåga, samtidigt som det självupplevda välbefinnandet sjunker drastiskt, vilket gör att samhället aktivt måste motverka isolering. För att bryta detta mönster lyfts den amerikanska handlingsplanen <span className="font-bold">EASE</span> fram som en konkret metod. 
                  </p>
                  <div className="pt-4 space-y-3">
                    <p className="font-bold text-base">EASE</p>
                    <ul className="space-y-2">
                      <li><span className="font-bold">E: Extend yourself.</span> Ta första steget till kontakt genom att hälsa, småprata och ha ögonkontakt med andra människor.</li>
                      <li><span className="font-bold">A: Action plan.</span> Fundera ut sammanhang där du kan träffa likasinnade och sök dig till dem, exempelvis en kör eller förening.</li>
                      <li><span className="font-bold">S: Selection.</span> Välj vilka du vill bli vän med och investera i detta fåtal.</li>
                      <li><span className="font-bold">E: Expect the best.</span> Utgå från att människor omkring dig vill dig väl.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    Karolinska Institutet – Ensamhet: ett hot mot vår hälsa
                    <br />
                    <a href="https://ki.se/forskning/popularvetenskap-och-dialog/popularvetenskapliga-teman/tema-relationer-identitet-och-sexualitet/ensamhet-ett-hot-mot-var-halsa" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      ki.se/forskning/popularvetenskap...
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Faran med AI-kompanjoner</h4>
                <p className="text-base text-solus-text">
                  Psykologisk sårbarhet och osäker anknytning
                </p>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    Social isolering och "emotionell abstinens": Liu, Lo, Wen, Sun och Wei diskuterar ingående huruvida AI-kompanjoner utgör en "dold fara".
                  </p>
                  <p>
                    Studien rapporterar att vissa användare utvecklar ett så starkt beroende av den virtuella relationen att de uppvisar "emotionella abstinenssymptom" (emotional withdrawal), vilket allvarligt påverkar deras förmåga till mänsklig interaktion.
                  </p>
                  <p>
                    <span className="font-bold text-solus-text">AI-kompanjoner kan oavsiktligt förstärka användarens isolering</span> genom att erbjuda en flyktväg från utmanande sociala situationer offline.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    Liu, T., Lo, T.-Y., Wen, K.-H., Sun, Y. & Wei, Z.-Q. (2026). Pathways of long-term AI virtual companion app use on users’ attachment emotions: a case study of Chinese users. 
                    <span className="italic"> Frontiers in Psychology, 16</span>, artikel 1687686. 
                    <br />
                    <a href="https://doi.org/10.3389/fpsyg.2025.1687686" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      doi:10.3389/fpsyg.2025.1687686
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Chatt vs Röstbaserad kommunikation</h4>
                <p className="text-base text-solus-text">
                  Användare föredrar ett textbaserat gränssnitt framför ett röstbaserat när det ska kommunicera och dela negativa upplevelser eller söka socialt-emotionellt stöd.
                </p>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    Psykologisk trygghet: Ett textbaserat gränssnitt erbjuder en större känsla av anonymitet, vilket minskar rädslan för att bli dömd när man delar med sig av känsliga ämnen eller sårbarheter
                  </p>
                  <p>
                    Minskad kognitiv belastning: Vid röstbaserad kommunikation finns det en större mängd icke-verbal information som måste bearbetas samtidigt som det verbala innehållet, vilket kan leda till trötthet. Genom att skriva kan användaren lättare fokusera på innehållet i sitt budskap
                  </p>
                  <p>
                    Fokus på innehåll: För motiv som rör kognitivt stöd (att få råd och nya perspektiv på en negativ händelse) är informationsinnehållet viktigast, och röst- eller visuella ledtrådar kan då uppfattas som distraherande snarare än hjälpsamma.
                  </p>
                </div>
                <div className="pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-solus-accent">Insikt: </span>
                  <span className="text-sm text-solus-text">Att arbeta med textbaserat gränssnitt är mer relevant än röstgränssnitt för detta projekt</span>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    Nozaki, Y. (2025). Sharing motives shape interface preferences for social sharing of emotion with conversational AI. 
                    <span className="italic"> Computers in Human Behavior: Artificial Humans, 6</span>, artikel 100229. 
                    <br />
                    <a href="https://doi.org/10.1016/j.chbah.2025.100229" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                      doi:10.1016/j.chbah.2025.100229
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-serif font-semibold text-solus-text">Ett mått på ensamhet</h4>
                <div className="space-y-4 text-base text-solus-text">
                  <p>
                    Denna rapport behandlar framtagandet och valideringen av UCLA Loneliness Scale, ett instrument utvecklat av Russell m.fl. (1978) för att erbjuda ett enkelt och tillförlitligt mått på generell ensamhet. Instrumentet skapades som ett mer lätthanterligt alternativ till tidigare omfattande mätmetoder och består av 20 påståenden som besvaras på en fyrgradig skala. Rapporten redogör för skalans uppbyggnad samt dess vetenskapliga reliabilitet och validitet.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 lg:pl-8">
                <div className="sticky top-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                  <p className="text-xs text-solus-muted leading-relaxed">
                    Russell, D., Peplau, L. A. & Ferguson, M. L. (1978). Developing a Measure of Loneliness. 
                    <span className="italic"> Journal of Personality Assessment, 42</span>(3), s. 290–294.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Allmänna källor",
        shortContent: "Denna del belyser hur skiftet mot en alltmer skärm- och AI-baserad tillvaro påverkar den psykiska hälsan och formar vår sociala samvaro. Innehållet visar hur generativ AI kan erbjuda en tillfällig lindring mot ensamhet genom att ge en känsla av att bli hörd, men varnar samtidigt för de dolda riskerna med virtuella relationer. Slutsatsen är att smarttelefoner och AI-kompanjoner riskerar att fördjupa den sociala isoleringen, tränga undan mänsklig interaktion och skapa en generation som är ständigt uppkopplad men djupt ensam.",
        fullContent: (
          <div className="space-y-24">
            <div className="pt-6 border-t border-solus-accent/10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent mb-8">Artiklar</h3>
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-solus-text">Kan generativ AI lindra den globala ensamhetskrisen?</h4>
                  <div className="space-y-4 text-base text-solus-text">
                    <p>
                      Artikeln lyfter fram forskning av Julian De Freitas som visar att AI-kompanjoner kan lindra ofrivillig ensamhet, åtminstone på kort sikt. Eftersom mänskliga stödfunktioner är svåra att skala upp för att möta den växande ensamhetskrisen, erbjuder generativ AI ett billigt och lättillgängligt alternativ. Studier visar att effekten inte bara handlar om att få prata av sig, utan om att användaren upplever en känsla av att bli "hörd" och mött med empati och förståelse. Forskarna understryker dock att AI-konversationer ger en tillfällig lindring i stunden och inte bör ses som en långsiktig ersättning för mänskliga relationer eller terapi.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 lg:pl-8">
                  <div className="sticky top-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                    <p className="text-xs text-solus-muted leading-relaxed">
                      Feeling Lonely? An Attentive Listener Is an AI Prompt Away | Harvard Business School
                      <br />
                      <a href="https://www.library.hbs.edu/working-knowledge/feeling-lonely-an-attentive-listener-is-an-ai-prompt-away" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                        https://www.library.hbs.edu/working-knowledge/feeling-lonely-an-attentive-listener-is-an-ai-prompt-away
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-solus-accent/10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent mb-8">Video</h3>
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-solus-text">Replika - Att ersätta verkliga relationer med virtuella karaktärer</h4>
                  <div className="space-y-4 text-base text-solus-text">
                    <p>
                      Eugenia Kuyda är grundare till Replika, en app som låter användare skapa digitala AI-kompanjoner som sällskap. Trots att tekniken skapades för att <span className="font-bold">lindra ensamhet</span> uttrycker hon nu <span className="font-bold">djup oro över de negativa effekterna</span> och sina framtida rädslor kring AI-kompanjoner, som hon ser som en av mänsklighetens farligaste uppfinningar.
                    </p>
                    <p>
                      Hennes största farhåga är att dessa digitala följeslagare blir så felfria att vi helt tappar viljan att interagera med riktiga människor. Eftersom mänskliga relationer kräver ansträngning riskerar vi att isolera oss med maskiner och sakta dö på insidan. 
                    </p>
                    <p>
                      Problemet förstärks av att <span className="font-bold">AI-företag medvetet designar tekniken för att maximera skärmtid</span>, vilket skapar osunda och medberoende relationer. Detta är extra skadligt för barn och tonåringar som riskerar att <span className="font-bold">ersätta verkliga relationer med virtuella karaktärer</span>.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 lg:pl-8">
                  <div className="sticky top-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                    <p className="text-xs text-solus-muted leading-relaxed">
                      Replika Founder: AI Companions Are a Danger to Humanity | TED Eugenia Kuyda
                      <br />
                      <a href="https://www.youtube.com/watch?v=-w4JrIxFZRA" target="_blank" rel="noopener noreferrer" className="text-solus-accent hover:underline mt-2 block">
                        https://www.youtube.com/watch?v=-w4JrIxFZRA
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-solus-accent/10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent mb-8">Litteratur</h3>
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-solus-text">The Anxious Generation - Jonathan Haidt</h4>
                  <div className="space-y-4 text-base text-solus-text">
                    <p>
                      Jonathan Haidt analyserar hur barndomen genomgick en genomgripande förändring mellan åren 2010 och 2015, en period han benämner som den stora omkopplingen (The Great Rewiring ). Övergången från en lekbaserad till en skärmbaserad tillvaro har resulterat i en epidemi av psykisk ohälsa, med kraftigt ökade nivåer av ångest och depression hos generationen född efter 1995. Denna utveckling har lett till en omfattande social deprivation eftersom den fysiska samvaron med vänner minskade dramatiskt när smartphonen blev norm. Haidt belyser hur tekniken har skapat en generation som är ständigt uppkopplad, men samtidigt mer ensam och isolerad än någonsin.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 lg:pl-8">
                  <div className="sticky top-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                    <p className="text-xs text-solus-muted leading-relaxed">
                      Haidt, J. (2024). The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness. New York: Penguin Press.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Omvärldsanalys",
        shortContent: (
          <>
            Genom en kartläggning av marknadens befintliga landskap identifieras både etablerade mänskliga stödfunktioner och framväxande tekniska alternativ som adresserar ensamhet. Analysen spänner över allt från röststyrda sällskapsrobotar för äldre till forskningsnätverk och nationella stödlinjer, i syfte att undersöka var begränsningarna ligger och inom vilka områden det finns utrymme för nya, innovativa designlösningar.
            <div className="h-8" />
            <hr className="border-solus-accent/20" />
            <div className="h-8" />
          </>
        ),
        fullContent: (
          <div className="space-y-12">
            {[
              {
                name: "ElliQ",
                desc: "ElliQ är en AI-driven sällskapsrobot framtagen för äldre som bor hemma. Roboten är utformad för att hjälpa äldre att åldras på ett hälsosamt sätt och erbjuder daglig konversation, påminnelser om mediciner och hälsouppföljning.",
                extra: "Syftet är att motverka ensamhet och ge trygghet åt både användaren och dennes anhöriga. ElliQ är en fristående röstaktiverad enhet som inte kräver en separat telefon eller dator, och den är personligt anpassad för en enskild användare. Företaget bakom produkten är Intuition Robotics, med säte i San Francisco. Notera: Den är för närvarande dyr och inte tillgänglig utanför USA.",
                url: "https://elliq.com/"
              },
              {
                name: "Hjälplinjen",
                desc: "Hjälplinjen är en nationell stödlinje för psykisk ohälsa och suicidprevention som öppnade i december 2024. Linjen drivs av Region Stockholm med stöd från Folkhälsomyndigheten.",
                extra: "Den bemannas av sjuksköterskor, psykologer, socionomer och beteendevetare, och syftet är att verka både hälsofrämjande och förebyggande samt stödjande i akut kris. Hjälplinjen vänder sig till vuxna över 18 år samt deras anhöriga. Den tillhör inte sjukvården och den som kontaktar linjen kan inte bli patient där.",
                url: "https://hjalplinjen.se/"
              },
              {
                name: "Karolinska Institutet",
                desc: "Enabling Voices Network är ett multidisciplinärt forskningsnätverk som undersöker hur AI kan minska social isolering och ensamhet hos personer med förvärvade kommunikationssvårigheter.",
                extra: "Riksbankens jubileumsfond har beviljat nätverket ett initieringsbidrag för att lägga grunden för ett större forskningsprojekt. Nätverket består av forskare från Sverige, Danmark och Storbritannien inom lingvistik, kognitionsvetenskap, psykologi och logopedi. Ansvarig forskare är professor Christina Samuelsson vid Karolinska Institutet.",
                url: "https://nyheter.ki.se/enabling-voices-network-hur-kan-ai-minska-social-isolering-for-personer-med-forvarvade-kommunikationssvarigheter"
              },
              {
                name: "Pi",
                desc: "Pi är en AI-driven kompanjon utvecklad av Inflection AI, med fokus på emotionellt intelligent och människocentrerad AI. Pi beskrivs som den första emotionellt intelligenta AI:n.",
                extra: "Pi är utformad för att vara nyfiken och vänlig, alltid redo att lyssna och samtala. Användaren kan prata med Pi om allt från stora livsbeslut till vardagliga tankar. Fokus ligger inte på att utföra uppgifter utan på att erbjuda ett genuint, tålmodigt och icke-dömande samtal.",
                url: "https://hey.pi.ai/"
              },
              {
                name: "Replika",
                desc: "Replika är en AI-driven kompanjon lanserad 2017 vars uttalade syfte är att motverka ensamhet och ge emotionellt stöd genom att erbjuda ett icke-dömande sällskap.",
                extra: "Plattformen ökade kraftigt i popularitet under pandemin när många sökte sällskap. Möjligheten att nå Replika när som helst upplevs av många som en buffert mot ensamhet. Kritiker menar dock att AI-kompanjoner riskerar att bli en krycka som hindrar användare från att söka de mänskliga relationer som egentligen behövs.",
                url: "https://replika.com/"
              },
              {
                name: "Saner.AI",
                desc: "Saner.AI är en AI-driven produktivitetsassistent framtagen för personer med ADHD samt kunskapsarbetare som har svårt att hantera stora mängder information.",
                extra: "Verktyget hjälper användaren att organisera sin kunskap utan att bli överväldigad, med målet att minska den mentala belastningen. Plattformen samlar information från e-post, Drive och Slack. En central del är AI-assistenten Skai, som lär sig av användarens anteckningar och organiserar dem automatiskt.",
                url: "https://www.saner.ai/"
              },
              {
                name: "Äldrelinjen",
                desc: "Minds Äldrelinje är en telefonlinje för äldre som känner ensamhet eller har psykiska besvär. Linjen startades 2012 och bemannas av utbildade volontärer.",
                extra: "Volontärernas mål är att lyssna och stötta när livet känns svårt. Samtalen kan handle om oro, ångest och relationer, men också om vardagligheter. Volontärerna är anonyma och har genomgått Minds utbildning om psykisk ohälsa och det medmänskliga samtalet.",
                url: "https://mind.se/stod-kunskap/prata-eller-chatta-med-volontar/aldrelinjen/"
              }
            ].map((item, idx) => (
              <div key={idx} className="grid md:grid-cols-12 gap-8 pt-6 border-t border-solus-accent/10 first:border-0 first:pt-0">
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-solus-text">{item.name}</h4>
                  <div className="space-y-4 text-base text-solus-text">
                    <p>{item.desc}</p>
                    <p>{item.extra}</p>
                  </div>
                </div>
                <div className="md:col-span-4 lg:pl-8">
                  <div className="sticky top-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-solus-accent block mb-3">Källa</span>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-solus-accent hover:underline break-all"
                    >
                      {item.url}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    ]
  },
  "02": {
    title: "02",
    subtitle: "Syfte, idegenerering och koncept",
    body: "Baserat på insikterna från forskningen skapas visionen för Solus genom målgruppsanalys och konceptutveckling. Här formuleras designprinciper och konceptuella lösningar som adresserar de identifierade behoven hos användarna.",
    sections: [
      {
        title: "Syfte",
        shortContent: "Syftet med Solus är att skapa en brygga mellan digital isolation och mänsklig gemenskap.",
        fullContent: (
          <div className="space-y-4">
            <p>
              Syftet med Solus är att adressera den växande utmaningen med ofrivillig ensamhet genom att erbjuda ett tryggt och kravlöst digitalt utrymme för stöd och utveckling. Genom att kombinera empatisk AI-teknik med beprövade metoder för social träning syftar tjänsten till att stärka användarens emotionella välbefinnande och minska de barriärer som hindrar mänsklig kontakt.
            </p>
            <p>
              Målet är inte att ersätta mänskliga relationer, utan att fungera som en katalysator för att återknyta kontakten med omvärlden. Genom att erbjuda en icke-dömande samtalspartner kan Solus hjälpa användaren att bearbeta känslor av isolering och bygga upp det mod som krävs för att söka gemenskap i den fysiska världen.
            </p>
          </div>
        )
      },
      {
        title: "Idégenerering",
        shortContent: "I idégenereringsfasen utforskades olika typer av digitala interventioner för att motverka social isolering.",
        fullContent: (
          <div className="space-y-4">
            <p>
              Genom workshops och brainstorming-sessioner genererades ett brett spektrum av idéer, från röststyrda sällskapsenheter till gamifierade sociala nätverk. En central del av processen var att identifiera de viktigaste smärtpunkterna hos målgruppen och utforska hur teknik kan användas för att lindra snarare än att förstärka känslan av ensamhet.
            </p>
            <p>
              Fokus skiftade tidigt från enkla informationssidor till en mer interaktiv och personcentrerad lösning. Idéerna utvärderades utifrån kriterier som tillgänglighet, etik och emotionell resonans, vilket ledde fram till insikten att en textbaserad AI-kompanjon erbjöd den bästa balansen mellan närhet och personlig integritet.
            </p>
          </div>
        )
      },
      {
        title: "Koncept",
        shortContent: "Solus-konceptet bygger på en empatisk AI-assistent utformad för att ge emotionellt stöd och främja socialt självförtroende.",
        fullContent: (
          <div className="space-y-4">
            <p>
              Huvudkonceptet för Solus är en personlig assistant som finns tillgänglig närhelst användaren känner sig ensam eller socialt osäker. Genom att använda avancerad språkteknologi kan Solus föra meningsfulla samtal som anpassar sig efter användarens humör och behov, utan att någonsin kännas påträngande eller dömande.
            </p>
            <p>
              Konceptet inkluderar även guidade övningar baserade på kognitiv beteendeterapi (KBT) och EASE-metoden, vilket ger användaren konkreta verktyg för att stegvis öka sin sociala interaktion. Genom att fokusera på en minimalistisk och rogivande design skapas en miljö där användaren kan känna sig trygg att utforska sina känslor och växa i sin egen takt.
            </p>
          </div>
        )
      }
    ]
  },
  "03": {
    title: "03",
    subtitle: "Resultat och reflektion",
    body: "De sista 5 procenten utgör en avgörande del av upplevelsen. Mikromotioner, typografiska hierarkier och laddningstider justeras för en sömlös upplevelse.",
    sections: [
      {
        title: "Kvalitetssäkring",
        shortContent: "En grundlig genomgång av alla systemets delar genomförs för att garantera stabilitet och prestanda i alla lägen.",
        fullContent: "Kvalitetssäkringsprocessen fokuserar på både teknisk prestanda och den emotionella kvaliteten i användarens möte med applikationen."
      },
      {
        title: "Implementering",
        shortContent: "De sista tekniska pusselbitarna faller på plats för att skapa en helhet som känns både robust och sofistikerad.",
        fullContent: "Infrastrukturen har skalats för att kunna välkomna en växande användarbas med bibehållen snabbhet och lyhördhet."
      },
      {
        title: "Framtidsutsikter",
        shortContent: "Fokus ligger nu på framtida expansion och hur Solus kan fortsätta att utvecklas i takt med användarnas behov.",
        fullContent: "Framtida utveckling innefattar utforskande av nya sätt att integrera Solus i vardagen på ett sätt som ytterligare minskar känslan av ensamhet."
      }
    ]
  }
};

function SectionItem({ section, index, forceExpanded = false }: { section: StepSection; index: number; forceExpanded?: boolean; key?: React.Key }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const showFull = isExpanded || forceExpanded;

  return (
    <div id={`section-${index}`} className="pt-12 border-t border-solus-accent/10 scroll-mt-24 group">
      <h3 className="text-3xl font-medium mb-6 text-solus-text">{section.title}</h3>
      
      <div className="relative">
        <div className="text-lg text-solus-muted leading-relaxed font-light">
          {section.shortContent}
        </div>

        <AnimatePresence>
          {showFull && (
            <motion.div
              initial={forceExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="overflow-hidden"
            >
              <div className="text-lg text-solus-muted leading-relaxed font-light mt-4">
                {section.fullContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!forceExpanded && (
          <div className="flex justify-end mt-8">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group/btn"
            >
              <div className="w-10 h-10 rounded-full border border-solus-accent/20 flex items-center justify-center group-hover/btn:border-solus-accent transition-colors">
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-500 text-solus-accent ${isExpanded ? 'rotate-180' : ''}`} 
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProcessDetail() {
  const { id } = useParams<{ id: string }>();
  const content = id ? stepContent[id] : null;

  if (!content) {
    return (
      <PageLayout>
        <Section>
          <h1 className="text-4xl font-serif">Sidan kunde inte hittas.</h1>
          <Link to="/process" className="text-solus-accent mt-4 inline-block italic">Tillbaka till processen</Link>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Section>
        <Link 
          to="/process" 
          className="inline-flex items-center gap-2 text-solus-muted hover:text-solus-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Tillbaka till processen</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`${id === '01' ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-7xl md:text-9xl'} font-serif leading-[0.85] text-solus-text mb-12`}>
            {content.subtitle}<span className="text-solus-accent">.</span>
          </h1>
          <div>
            
            {content.sections && (
              <div className="flex flex-wrap gap-4 mb-16">
                {content.sections.map((section, index) => (
                  <button 
                    key={index}
                    onClick={() => document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-2 bg-solus-tag-bg text-solus-accent text-[10px] font-bold tracking-[0.2em] rounded-full uppercase hover:bg-solus-accent hover:text-white transition-all cursor-pointer"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            )}

            <div className="space-y-12">
              <p className="text-xl text-solus-muted leading-relaxed font-light mb-16">
                {content.body}
              </p>

              {content.sections && content.sections.map((section, index) => (
                <SectionItem 
                  key={index} 
                  section={section} 
                  index={index} 
                  forceExpanded={id === '02'}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </PageLayout>
  );
}
