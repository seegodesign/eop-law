import { motion } from 'motion/react';
import { Scale, Sparkle, TrendingUp } from 'lucide-react';

const aboutItems = [
  {
    icon: Scale,
    title: "Client-Centered Approach",
    description: "Your goals are our priority, and we tailor our strategies to your unique situation."
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Hundreds of successful cases and satisfied clients across diverse legal matters."
  },
  {
    icon: Sparkle,
    title: "Innovative Solutions",
    description: "We leverage cutting-edge legal strategies and technology to achieve optimal outcomes."
  }
];

export function About() {
  return (
    <section id="about" className="py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1742457770056-e869ac78bb72?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Portland courthouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 border-4 border-accent"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-accent/20 border border-accent mb-8">
              <span className="text-accent">About Our Firm</span>
            </div>

            <h2 className="text-4xl md:text-6xl mb-8">
              Decades of Legal Excellence
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Founded in 1995, Elliot Ostrander & Preston has built a reputation as one of the region's most trusted law firms. Our commitment to excellence and client-focused approach has earned us numerous accolades and the trust of thousands of clients.
            </p>

            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              We combine deep legal expertise with a genuine understanding of our clients' needs, delivering personalized solutions that achieve real results. Our team of seasoned attorneys brings decades of combined experience across multiple practice areas.
            </p>

            <div className="space-y-6">
                {aboutItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon size={32} className="text-accent group-hover:text-accent-foreground transition-colors" />
                  <div>
                  <h4 className="text-xl mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}