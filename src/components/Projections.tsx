import { chartData } from '../data';
import { FadeIn } from './FadeIn';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Projections() {
  return (
    <section className="py-32 px-8 bg-brand-coral relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-brand-accent rounded-bl-[120px] mix-blend-multiply opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-dark rounded-tr-[120px] mix-blend-multiply opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-4 text-brand-white font-bold tracking-widest uppercase text-sm">Estimativas e Metas</div>
          <h2 className="text-brand-white mb-16 text-4xl md:text-[54px] leading-tight">Projeções de Aceleração</h2>
        </FadeIn>

        <div className="bg-brand-white rounded-[12px] p-8 md:p-12 shadow-2xl">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B2520', fontWeight: 'bold'}} dy={15} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#232323'}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#EC3237'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '30px' }} />
                <Line yAxisId="left" type="monotone" dataKey="clicks" name="Cliques / Mês" stroke="#232323" strokeWidth={4} dot={{r: 6, strokeWidth: 2}} activeDot={{r: 8}} />
                <Line yAxisId="right" type="monotone" dataKey="routes" name="Solicitações de Rota" stroke="#EC3237" strokeWidth={4} dot={{r: 6, strokeWidth: 2}} activeDot={{r: 8}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 text-center text-brand-graphite/60 text-sm font-medium">
            Estimativas construídas a partir de CPC médio de R$ 1,20–1,60 e CTR médio de ~7%.
          </div>
        </div>
      </div>
    </section>
  );
}
