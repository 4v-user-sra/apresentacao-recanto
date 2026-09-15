import { googleAdsPhases } from '../data';
import { FadeIn } from './FadeIn';

export function GoogleAds() {
  return (
    <section className="py-32 px-8 bg-brand-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-4 text-brand-coral font-bold tracking-widest uppercase text-sm">Plano Tático — Google Ads & GMN</div>
          <h2 className="text-brand-graphite mb-6 text-4xl md:text-[54px] leading-tight max-w-4xl">Estratégia de Investimento Local</h2>
          <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-16">
            Meta Ads já está rodando — o investimento novo vai 100% para o Google, com foco em levar rodízio para dentro do salão. Começamos com verba enxuta para validar indicadores antes de escalar.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {googleAdsPhases.map((phase, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col h-full bg-brand-graphite/5 p-10 rounded-[12px] border-t-4 border-brand-coral relative">
                <div className="absolute top-0 right-0 bg-brand-coral text-brand-white font-bold px-4 py-1 rounded-bl-[12px] text-sm uppercase tracking-wider">
                  {phase.phase}
                </div>
                <h3 className="text-brand-graphite text-3xl mb-2 leading-tight font-heading font-bold">{phase.label}</h3>
                <div className="text-brand-coral font-bold text-2xl mb-8 flex items-center gap-2">
                  {phase.budget} <span className="text-sm font-medium text-brand-graphite/50 tracking-normal">({phase.daily})</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-brand-graphite/10 pb-2">
                    <span className="text-brand-graphite/70 font-medium">Cliques (est.)</span>
                    <span className="font-bold text-brand-graphite text-lg">{phase.clicks}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-brand-graphite/10 pb-2">
                    <span className="text-brand-graphite/70 font-medium">Impressões (est.)</span>
                    <span className="font-bold text-brand-graphite text-lg">{phase.impressions}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-brand-graphite/10 pb-2">
                    <span className="text-brand-graphite/70 font-medium">Rotas (est.)</span>
                    <span className="font-bold text-brand-coral text-lg">{phase.routes}</span>
                  </div>
                </div>

                <p className="text-brand-graphite font-medium leading-relaxed opacity-90">
                  {phase.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
