import { gmnStrategy } from '../data';
import { FadeIn } from './FadeIn';
import { MapPin } from 'lucide-react';

export function GMN() {
  return (
    <section className="py-32 px-8 bg-brand-graphite border-t-4 border-brand-coral">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-brand-coral w-8 h-8" />
                <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Google Meu Negócio</span>
              </div>
              <h2 className="text-brand-white mb-6 text-4xl md:text-[54px] leading-tight">Descoberta Orgânica</h2>
              <p className="text-xl text-brand-white/80 font-medium leading-relaxed">
                Perfil bem nutrido reduz custo de aquisição no Google Ads e aumenta a chance de aparecer no Mapa quando alguém busca pizzaria por perto. Um bloco de ações é dedicado só à ofensiva de terça a quinta.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {gmnStrategy.map((strat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="bg-brand-white/5 border border-brand-white/10 rounded-[12px] p-8 hover:border-brand-coral transition-colors duration-300">
              <div className="text-brand-coral text-xs font-bold uppercase tracking-widest mb-2">{strat.subtitle}</div>
              <h3 className="text-brand-white text-3xl font-heading font-bold mb-6">{strat.title}</h3>
              
              <ul className="space-y-4">
                {strat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-brand-coral mt-2 shrink-0"></div>
                    <span className="text-brand-white/80 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
