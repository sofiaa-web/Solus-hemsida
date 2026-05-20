import { cn } from "@/src/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-solus-border bg-white">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-[10px] tracking-[0.2em] text-gray-900 uppercase font-bold mb-2">Information</div>
            <p className="normal-case font-light text-sm leading-relaxed max-w-xl tracking-normal text-gray-500">
              Prototypen är inte tillgänglig för allmänheten på grund av interaktionskostnader, utan är i detta skede avsedd för examinatorn. Länk till prototypen kan eventuellt lämnas ut på förfrågan.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-[10px] tracking-[0.2em] text-gray-900 uppercase font-bold">Kontakt</div>
            <a 
              href="mailto:sofia.leontiou0033@stud.hkr.se" 
              className="text-sm font-light text-solus-muted hover:text-solus-accent transition-colors block lowercase"
            >
              sofia.leontiou0033@stud.hkr.se
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold border-t border-solus-border/50 pt-8 gap-4">
          <div>Digital Design</div>
          <div>Sofia Leontiou</div>
          <div>Högskolan Kristianstad</div>
        </div>
      </div>
    </footer>
  );
}
