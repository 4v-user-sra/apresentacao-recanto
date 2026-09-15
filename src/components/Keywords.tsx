import { googleAdsKeywords } from '../data';
import { FadeIn } from './FadeIn';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export function Keywords() {
  return (
    <section className="py-32 px-8 bg-brand-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Search className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Volume de Busca Local</span>
          </div>
          <h2 className="text-brand-graphite mb-6 text-4xl md:text-[54px] leading-tight">Jundiaí: Raio de 10km</h2>
          <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-16">
            15 termos mapeados para a campanha de rota. O objetivo é capturar a intenção de quem já está buscando por uma pizzaria nas proximidades.
          </p>
        </FadeIn>

        {/* Data Grid: Keywords */}
        <FadeIn delay={0.2}>
          <div className="bg-brand-white rounded-[12px] overflow-hidden border border-brand-graphite/10 shadow-sm">
            <div className="grid grid-cols-12 bg-brand-graphite/5 text-brand-graphite p-6 font-bold text-sm uppercase tracking-widest border-b border-brand-graphite/10">
              <div className="col-span-12 md:col-span-5">Palavra-Chave</div>
              <div className="hidden md:block md:col-span-3">Intenção</div>
              <div className="hidden md:block md:col-span-2 text-center">Volume/Mês</div>
              <div className="hidden md:block md:col-span-2 text-center">Prioridade</div>
            </div>
            
            <div className="divide-y divide-brand-graphite/5">
              {googleAdsKeywords.map((kw, idx) => (
                <div key={idx} className="grid grid-cols-12 p-6 gap-4 items-center hover:bg-brand-graphite/[0.02] transition-colors">
                  <div className="col-span-12 md:col-span-5">
                    <div className="font-bold text-brand-graphite text-lg">{kw.term}</div>
                    <div className="md:hidden mt-2 text-sm text-brand-graphite/60 font-medium">Intenção: {kw.intent}</div>
                  </div>
                  
                  <div className="hidden md:block md:col-span-3 text-brand-graphite/80 font-medium">
                    {kw.intent}
                  </div>
                  
                  <div className="col-span-6 md:col-span-2 md:text-center text-brand-graphite font-bold font-mono">
                    <span className="md:hidden text-xs text-brand-graphite/50 uppercase tracking-widest mr-2 block">Volume</span>
                    {kw.volume}
                  </div>
                  
                  <div className="col-span-6 md:col-span-2 md:text-center">
                    <span className="md:hidden text-xs text-brand-graphite/50 uppercase tracking-widest mr-2 block">Prioridade</span>
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                      ${kw.priority === 'Alta' ? 'bg-brand-coral/10 text-brand-coral' : 
                        kw.priority === 'Média' ? 'bg-brand-accent/10 text-brand-accent' : 
                        'bg-brand-graphite/10 text-brand-graphite/70'}`}
                    >
                      {kw.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-sm text-brand-graphite/60 font-medium max-w-4xl">
            * Números serão recalibrados no Planejador de Palavras-chave assim que a conta Google Ads do cliente estiver ativa — a leitura aqui serve para dimensionar a verba, não como garantia de resultado.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
