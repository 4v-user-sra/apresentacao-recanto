import { crmMetrics, saloonOffers, deliveryOffers, crmProjectionData } from '../data';
import { FadeIn } from './FadeIn';
import { Users, Store, Smartphone, MessageCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

        {/* Projeção de Retorno */}
        <FadeIn delay={0.4}>
          <div className="bg-brand-white/5 border border-brand-white/10 p-8 md:p-10 rounded-[12px]">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3 space-y-6 w-full">
                <h4 className="text-brand-white font-bold text-3xl font-heading mb-4">Projeção de Retorno</h4>
                <p className="text-brand-white/80 font-medium leading-relaxed">
                  Considerando a média de mercado para conversão de base quente (16,63%) e o ticket médio atual de R$ 81,00, esta é a projeção escalonada do disparo inicial de 500 leads via API do WhatsApp.
                </p>
                <div className="bg-brand-white/10 p-5 rounded-lg border border-brand-white/10 mt-6">
                  <div className="text-brand-white/60 text-xs font-bold uppercase mb-1">Custo Total (500 Envios)</div>
                  <div className="text-brand-coral font-bold text-3xl">R$ 175,00</div>
                  <div className="text-brand-white/50 text-xs mt-1 font-medium">500 leads × R$ 0,35</div>
                </div>
                <div className="bg-brand-white/10 p-5 rounded-lg border border-brand-white/10">
                  <div className="text-brand-white/60 text-xs font-bold uppercase mb-1">Receita Estimada (500 Envios)</div>
                  <div className="text-green-400 font-bold text-3xl">R$ 6.723,00</div>
                  <div className="text-brand-white/50 text-xs mt-1 font-medium">~83 conversões × R$ 81,00</div>
                </div>
              </div>
              
              <div className="lg:w-2/3 w-full h-[350px] bg-brand-white rounded-[12px] p-6 shadow-xl">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={crmProjectionData}
                    margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="step" axisLine={false} tickLine={false} tick={{fill: '#6B2520', fontWeight: 'bold'}} dy={15} />
                    <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#232323'}} tickFormatter={(value) => `R$ ${value}`} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ fontWeight: 'bold' }}
                      formatter={(value: any, name: string) => [`R$ ${value}`, name]}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                    <Line yAxisId="left" type="monotone" dataKey="receita" name="Receita Estimada" stroke="#22C55E" strokeWidth={4} dot={{r: 6, strokeWidth: 2}} activeDot={{r: 8}} />
                    <Line yAxisId="left" type="monotone" dataKey="custo" name="Custo de Envio" stroke="#EC3237" strokeWidth={4} dot={{r: 6, strokeWidth: 2}} activeDot={{r: 8}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
