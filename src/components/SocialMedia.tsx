import { socialMetrics, socialTopPosts, socialInsights } from '../data';
import { FadeIn } from './FadeIn';
import { Instagram, TrendingUp, AlertCircle, ArrowRight, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

export function SocialMedia() {
  return (
    <section className="py-32 px-8 bg-brand-white border-t border-brand-graphite/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Instagram className="text-brand-coral w-8 h-8" />
            <span className="text-brand-coral font-bold tracking-widest uppercase text-sm">Social Media (Orgânico)</span>
          </div>
          <h2 className="text-brand-graphite mb-6 text-4xl md:text-[54px] leading-tight">Análise de Performance</h2>
          <p className="text-xl text-brand-graphite/80 max-w-3xl font-medium leading-relaxed mb-16">
            Desempenho do conteúdo orgânico no período. Foco em alcance, compartilhamento de promoções e construção de marca.
          </p>
        </FadeIn>

        {/* Top Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {socialMetrics.map((metric, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-brand-graphite/5 border border-brand-graphite/10 p-6 rounded-[12px] h-full flex flex-col justify-center">
                <div className="text-brand-graphite/60 font-bold text-xs uppercase tracking-widest mb-2">{metric.label}</div>
                <div className="text-brand-graphite font-heading font-bold text-3xl mb-2">{metric.value}</div>
                <div className={`text-xs font-bold ${metric.positive ? 'text-green-600' : 'text-brand-coral'}`}>
                  {metric.trend}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Top 3 Posts Showcase */}
        <FadeIn delay={0.2} className="mb-20">
          <h3 className="text-brand-graphite text-3xl font-bold font-heading mb-10 text-center">Top 3 Publicações</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialTopPosts.map((post, idx) => (
              <div key={idx} className="bg-brand-white border border-brand-graphite/10 rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-64 overflow-hidden bg-brand-graphite/5">
                  <div className="absolute top-4 left-4 bg-brand-coral text-brand-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10">
                    {post.rank}
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 bg-brand-graphite/80 backdrop-blur-sm text-brand-white text-xs font-bold px-3 py-1.5 rounded flex gap-2">
                    <span>{post.type}</span>
                    <span className="opacity-50">|</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-brand-graphite font-bold text-xl mb-6 leading-tight line-clamp-2" title={post.title}>{post.title}</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-graphite/50 font-bold mb-1">Visualizações</div>
                      <div className="font-heading font-bold text-2xl text-brand-graphite">{post.views}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-graphite/50 font-bold mb-1">Alcance</div>
                      <div className="font-heading font-bold text-2xl text-brand-graphite">{post.reach}</div>
                    </div>
                  </div>

                  <div className="bg-brand-graphite/5 rounded-lg p-3 flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-brand-graphite/70 uppercase">Engajamento</span>
                    <span className="font-bold text-brand-coral text-lg">{post.engagement}</span>
                  </div>

                  <div className="flex justify-between items-center text-brand-graphite/60 pt-4 border-t border-brand-graphite/10">
                    <div className="flex items-center gap-1.5" title="Curtidas">
                      <Heart className="w-4 h-4" /> <span className="text-sm font-bold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Comentários">
                      <MessageCircle className="w-4 h-4" /> <span className="text-sm font-bold">{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Compartilhamentos">
                      <Share2 className="w-4 h-4 text-brand-coral" /> <span className="text-sm font-bold text-brand-coral">{post.shares}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Salvamentos">
                      <Bookmark className="w-4 h-4" /> <span className="text-sm font-bold">{post.saves}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Strategic Reading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          <FadeIn delay={0.4} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
              <TrendingUp className="text-brand-coral w-6 h-6" />
              <h3 className="text-brand-graphite text-2xl font-bold font-heading">O que funcionou</h3>
            </div>
            <div className="space-y-6 flex-grow">
              {socialInsights.works.map((item, idx) => (
                <div key={idx} className="bg-brand-graphite/5 p-6 rounded-[12px] border-l-4 border-green-500">
                  <h4 className="text-brand-graphite font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-brand-graphite/80 font-medium leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-graphite/10">
              <AlertCircle className="text-brand-coral w-6 h-6" />
              <h3 className="text-brand-graphite text-2xl font-bold font-heading">O que precisa atenção</h3>
            </div>
            <div className="space-y-6 flex-grow">
              {socialInsights.attention.map((item, idx) => (
                <div key={idx} className="bg-brand-graphite/5 p-6 rounded-[12px] border-l-4 border-brand-coral">
                  <h4 className="text-brand-graphite font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-brand-graphite/80 font-medium leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>

        {/* Next Cycle Plan */}
        <FadeIn delay={0.6}>
          <div className="bg-brand-graphite text-brand-white p-8 md:p-12 rounded-[12px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral rounded-bl-[80px] mix-blend-multiply opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-8">Plano para o próximo ciclo</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {socialInsights.nextCycle.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-coral/20 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-brand-coral" />
                    </div>
                    <span className="font-medium text-brand-white/90 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
