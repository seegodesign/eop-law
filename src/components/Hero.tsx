import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://eoplaw.wpenginepowered.com/wp-content/uploads/2017/04/MarinaBackground.jpg"
          alt="Law office"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 bg-accent/20 border border-accent mb-12">
            <span className="text-accent">Excellence in Legal Practice Since 1985</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 max-w-5xl mx-auto"
          style={{ fontSize: 'var(--text-hero)', lineHeight: '1.1', fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Trusted Legal Partner
        </motion.h1>

        <motion.p
          className="text-lg text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Dedicated to protecting your rights and delivering exceptional legal representation across all practice areas
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="group px-10 py-5 bg-accent text-accent-foreground hover:bg-white transition-all flex items-center gap-3 min-w-[240px] justify-center">
            <span>Get Started</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-primary transition-all min-w-[240px]">
            Our Services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>
            <div className="text-4xl md:text-5xl text-accent mb-2">500+</div>
            <div className="text-white/80">Cases Won</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-accent mb-2">98%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-accent mb-2">30</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl text-accent mb-2">10</div>
            <div className="text-white/80">Expert Attorneys</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}