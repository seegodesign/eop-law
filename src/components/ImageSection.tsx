import { motion } from 'framer-motion';

export function ImageSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 mb-8">
              <span className="text-accent-foreground">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-6xl text-primary mb-8">
              Commitment to Your Success
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand that legal matters can be complex and overwhelming. That's why we're committed to providing clear, strategic guidance every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0 text-accent-foreground text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl text-primary mb-2">Initial Consultation</h4>
                  <p className="text-muted-foreground">We listen carefully to understand your unique situation and legal needs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0 text-accent-foreground text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl text-primary mb-2">Strategic Planning</h4>
                  <p className="text-muted-foreground">Our team develops a customized legal strategy tailored to your goals.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0 text-accent-foreground text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl text-primary mb-2">Execution & Results</h4>
                  <p className="text-muted-foreground">We work diligently to achieve the best possible outcome for your case.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-[600px] lg:h-[700px] order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NjUyOTkxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business handshake"
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent/20 border-4 border-accent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}