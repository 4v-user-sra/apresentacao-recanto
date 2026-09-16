import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="bg-brand-coral pt-32 pb-40 px-8 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Flat Shapes acting as Collages */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-dark rounded-bl-[120px] mix-blend-multiply opacity-80"></div>
      <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] bg-brand-accent rounded-tr-[120px] mix-blend-multiply opacity-90"></div>
      <div className="absolute top-40 -left-20 w-[150px] h-[150px] bg-brand-white rounded-full opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-brand-white mb-8 text-7xl md:text-[90px] leading-tight"
            >
              Recanto da Pizza
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-white/90 text-xl md:text-2xl max-w-2xl leading-relaxed italic font-serif"
            >
              Performance dos últimos 60 dias, Reativação de Base de leads, Google Meu Negócio, Desempenho do Social Media
            </motion.p>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              {/* Decorative flat offset to simulate collage without box-shadow */}
              <div className="absolute inset-0 bg-brand-accent rounded-[12px] translate-x-4 translate-y-4 -z-10"></div>
              
              <img 
                src="https://i.imgur.com/FiKhMQB.jpeg" 
                alt="Imagem de Campanha" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-[12px] border-4 border-brand-white"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
