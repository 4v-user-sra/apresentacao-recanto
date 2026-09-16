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
            Período analisado: 17 de julho de 2026 até 14 de agosto de 2026
          </div>
        </FadeIn>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Creatives */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
              <Megaphone className="text-brand-coral w-6 h-6" />
              <h3 className="text-brand-graphite text-2xl font-bold font-heading">Criativos & Copy de Destaque</h3>
            </FadeIn>
            
            <div className="space-y-6">
              {metaCreatives.map((creative, idx) => (
                <FadeIn key={idx} delay={0.3 + (idx * 0.1)} className="bg-brand-white p-6 md:p-8 rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-graphite/5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <h4 className="text-brand-graphite font-bold text-xl">{creative.title}</h4>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1">
                        <MousePointerClick className="w-3 h-3" /> {creative.ctr}
                      </span>
                      <span className="bg-brand-graphite/10 text-brand-graphite text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {creative.metric}
                      </span>
                    </div>
                  </div>
                  <div className="bg-brand-graphite/5 p-4 rounded-lg mb-4">
                    <p className="text-brand-graphite font-medium italic">
                      {creative.copy}
                    </p>
                  </div>
                  <p className="text-brand-graphite/70 font-medium text-sm">
                    <span className="font-bold text-brand-coral">Leitura:</span> {creative.analysis}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Strategic Reading */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.4} className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
              <Lightbulb className="text-brand-coral w-6 h-6" />
              <h3 className="text-brand-graphite text-2xl font-bold font-heading">Padrões Estratégicos</h3>
            </FadeIn>
            
            <div className="space-y-8">
              {metaStrategy.map((strat, idx) => (
                <FadeIn key={idx} delay={0.5 + (idx * 0.1)} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-brand-coral"></div>
                  <h4 className="text-brand-graphite font-bold text-xl mb-3">{strat.title}</h4>
                  <p className="text-brand-graphite/80 font-medium leading-relaxed">
                    {strat.description}
                  </p>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.8} className="mt-12 bg-brand-graphite p-8 rounded-[12px] text-brand-white">
              <div className="text-brand-coral font-bold tracking-widest uppercase text-xs mb-4">Conclusão Primária</div>
              <p className="font-medium leading-relaxed opacity-90 text-lg">
                O custo por clique geral (CPC R$ 0,29) indica que a praça absorve bem a comunicação. O grande gargalo de escala não é a atenção, e sim canalizar essa demanda (cliques) para ofertas validadas de 1ª compra.
              </p>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}
