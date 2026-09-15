import { crmMetrics, saloonOffers, deliveryOffers } from '../data';
import { FadeIn } from './FadeIn';
import { Users, Store, Smartphone, MessageCircle } from 'lucide-react';

export function CRM() {
  return (
    <section className="py-32 px-8 bg-brand-graphite border-t border-brand-white/10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Base de Dados e CRM</span>
          </div>
          <h2 className="text-brand-white mb-6 text-4xl md:text-[54px] leading-tight">Reativação de Leads</h2>
          <p className="text-xl text-brand-white/80 max-w-3xl font-medium leading-relaxed mb-16">
            Estratégia de extração e disparo via API de WhatsApp focada em leads em potencial capturados pelo Anota Aí. 
            Direcionamento híbrido para o Salão e Delivery.
          </p>
        </FadeIn>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {crmMetrics.map((metric, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-brand-white/5 border border-brand-white/10 p-8 rounded-[12px] h-full flex flex-col justify-center">
                <div className="text-brand-coral font-heading font-bold text-4xl md:text-5xl mb-2">{metric.value}</div>
                <div className="text-brand-white font-bold text-lg mb-1">{metric.label}</div>
                <div className="text-brand-white/60 font-medium text-sm">{metric.subtitle}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Saloon Offers */}
          <FadeIn delay={0.2} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-white/10">
              <Store className="text-brand-coral w-6 h-6" />
              <h3 className="text-brand-white text-2xl font-bold font-heading">Foco Salão</h3>
            </div>
            <div className="space-y-6 flex-grow">
              {saloonOffers.map((offer, idx) => (
                <div key={idx} className="bg-brand-white p-6 rounded-[12px] border-l-4 border-brand-coral shadow-lg">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="text-brand-graphite font-bold text-xl">{offer.title}</h4>
                    <span className="shrink-0 bg-brand-graphite/5 text-brand-graphite text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {offer.rule}
                    </span>
                  </div>
                  <p className="text-brand-graphite/80 font-medium leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Delivery Offers */}
          <FadeIn delay={0.3} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-white/10">
              <Smartphone className="text-brand-coral w-6 h-6" />
              <h3 className="text-brand-white text-2xl font-bold font-heading">Foco Delivery (Anota Aí)</h3>
            </div>
            <div className="space-y-6 flex-grow">
              {deliveryOffers.map((offer, idx) => (
                <div key={idx} className="bg-brand-white p-6 rounded-[12px] border-l-4 border-brand-accent shadow-lg">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="text-brand-graphite font-bold text-xl">{offer.title}</h4>
                    <span className="shrink-0 bg-brand-graphite/5 text-brand-graphite text-xs font-bold uppercase tracking-wider px-2 py-1 rounded text-right">
                      {offer.rule}
                    </span>
                  </div>
                  <p className="text-brand-graphite/80 font-medium leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Operational Flow */}
        <FadeIn delay={0.4}>
          <div className="bg-brand-coral p-8 md:p-10 rounded-[12px] flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 shrink-0 bg-brand-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-brand-white" />
            </div>
            <div>
              <h4 className="text-brand-white font-bold text-xl mb-2">Metrificação & Operação</h4>
              <p className="text-brand-white/90 font-medium leading-relaxed">
                Extração de telefones com celular válidos da base de <strong>leads potenciais</strong>. 
                Disparo via API WhatsApp configurada internamente. 
                O resgate das ofertas será monitorado através dos cupons digitais ativos no link do cardápio e pelo feedback/validação direta da equipe de salão.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
