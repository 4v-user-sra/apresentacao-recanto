import { nextStepsTimeline } from '../data';
import { FadeIn } from './FadeIn';

export function NextSteps() {
  return (
    <section className="py-32 px-8 bg-brand-graphite text-brand-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-4 text-brand-coral font-bold tracking-widest uppercase text-sm">Próximos Passos</div>
          <h2 className="text-brand-white mb-6 text-4xl md:text-[54px] leading-tight">Cronograma de Ação</h2>
          <p className="text-xl text-brand-white/80 mb-20 max-w-3xl font-medium leading-relaxed">
            As ações definidas para dar o pontapé inicial no tráfego de busca e otimização orgânica.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {nextStepsTimeline.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="relative">
              {idx < nextStepsTimeline.length - 1 && (
                <div className="hidden md:block absolute top-8 left-16 right-0 h-[2px] bg-brand-white/10 -z-10"></div>
              )}
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-[12px] bg-brand-coral text-brand-white flex items-center justify-center font-heading font-bold text-3xl mb-8 relative">
                  {idx + 1}
                </div>
                <h3 className="text-brand-white text-2xl mb-3 font-heading font-bold">{step.time}</h3>
                <p className="text-brand-white/80 font-medium leading-relaxed text-lg">
                  {step.action}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
