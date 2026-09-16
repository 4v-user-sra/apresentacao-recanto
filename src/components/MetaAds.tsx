import { metaMetrics, metaCreatives, metaStrategy } from '../data';
import { FadeIn } from './FadeIn';
import { BarChart3, Megaphone, Lightbulb, MousePointerClick } from 'lucide-react';

export function MetaAds() {
  return (
    <section className="py-32 px-8 bg-brand-white border-b border-brand-graphite/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Auditoria Meta Ads</span>
          </div>
          <h2 className="text-brand-graphite mb-6 text-4xl md:text-[54px] leading-tight">Performance e Estratégia</h2>
          <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-6">
            Análise do histórico recente de anúncios focados em vendas. A leitura estratégica aponta para uma concentração de resultados em ofertas claras de aquisição.
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-coral/10 text-brand-coral font-bold px-4 py-2 rounded-lg mb-16 text-sm uppercase tracking-wider">
            Período analisado: 17 de julho de 2026 até 14 de setembro de 2026
          </div>
        </FadeIn>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {metaMetrics.map((metric, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-brand-graphite/5 border border-brand-graphite/10 p-8 rounded-[12px] h-full flex flex-col justify-center border-b-4 border-b-brand-coral">
                <div className="text-brand-coral font-heading font-bold text-4xl mb-2">{metric.value}</div>
                <div className="text-brand-graphite font-bold text-lg mb-1">{metric.label}</div>
                <div className="text-brand-graphite/60 font-medium text-sm">{metric.subtitle}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Creatives Row */}
        <div className="mb-16">
          <FadeIn delay={0.2} className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
            <Megaphone className="text-brand-coral w-6 h-6" />
            <h3 className="text-brand-graphite text-2xl font-bold font-heading">Criativos de Destaque</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metaCreatives.map((creative, idx) => (
              <FadeIn key={idx} delay={0.3 + (idx * 0.1)} className="bg-brand-white rounded-[12px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-graphite/5 flex flex-col group">
                <div className="relative h-64 overflow-hidden bg-brand-graphite/5">
                  <img 
                    src={creative.image} 
                    alt={creative.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-coral text-brand-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-md">
                    {creative.title}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-graphite/50 font-bold mb-1">Compras</div>
                      <div className="font-heading font-bold text-xl text-brand-graphite">{creative.purchases}</div>
                    </div>
                    {creative.ctr && (
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-brand-graphite/50 font-bold mb-1">CTR</div>
                        <div className="font-heading font-bold text-xl text-brand-graphite flex items-center gap-1">
                           <MousePointerClick className="w-4 h-4 text-brand-coral" /> {creative.ctr}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-brand-graphite/5 rounded-lg p-3 flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-brand-graphite/70 uppercase">Faturamento</span>
                    <span className="font-bold text-green-600 text-lg">{creative.revenue}</span>
                  </div>
                  <div className="bg-brand-graphite/5 rounded-lg p-3 flex justify-between items-center">
                    <span className="text-xs font-bold text-brand-graphite/70 uppercase">ROAS</span>
                    <span className="font-bold text-brand-coral text-lg">{creative.roas}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Strategic Reading Row */}
        <div>
          <FadeIn delay={0.4} className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
            <Lightbulb className="text-brand-coral w-6 h-6" />
            <h3 className="text-brand-graphite text-2xl font-bold font-heading">Padrões Estratégicos</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metaStrategy.map((strat, idx) => (
              <FadeIn key={idx} delay={0.5 + (idx * 0.1)} className="bg-brand-graphite/5 p-6 rounded-[12px] border-l-4 border-brand-coral">
                <h4 className="text-brand-graphite font-bold text-lg mb-3">{strat.title}</h4>
                <p className="text-brand-graphite/80 font-medium leading-relaxed text-sm">
                  {strat.description}
                </p>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.8} className="mt-12 bg-brand-graphite p-8 md:p-10 rounded-[12px] text-brand-white">
            <div className="text-brand-coral font-bold tracking-widest uppercase text-xs mb-4">Conclusão Primária</div>
            <p className="font-medium leading-relaxed opacity-90 text-xl">
              O custo por clique geral (CPC R$ 0,29) indica que a praça absorve bem a comunicação. O grande gargalo de escala não é a atenção, e sim canalizar essa demanda (cliques) para ofertas validadas de 1ª compra.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
