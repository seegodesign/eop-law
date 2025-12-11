import { Scale, BriefcaseBusiness, Building2, Drama, Users, FileText, Shield, Landmark, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const practices = [
  {
    icon: BriefcaseBusiness,
    title: 'Business & Finance',
    description: 'Counsel on the structuring of corporate and other business enterprises, including entity planning, debt and equity financings.',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Expert guidance in buying, selling, and developing real property, including financing, construction, and leasing issues.',
  },
  {
    icon: Users,
    title: 'Employment',
    description: 'Comprehensive legal support for employers and employees on workplace rights, compliance, and dispute resolution.',
  },
  {
    icon: FileText,
    title: 'Tax & Estate Planning',
    description: 'Comprehensive tax & Estate planning services to protect your assets and ensure your wishes are honored.',
  },
  {
    icon: Drama,
    title: 'Entertainment & New Technologies',
    description: 'Legal expertise in the rapidly evolving fields of entertainment and technology, including intellectual property protection and contract negotiation.',
  },
  {
    icon: Briefcase,
    title: 'Intellectual Property',
    description: 'Protecting your creative works and inventions through patents, trademarks, and copyrights.',
  },
  {
    icon: Shield,
    title: 'Litigation & Appellate Practices',
    description: 'Our trial attorneys find effective and efficient resolutions for personal and business disputes.',
  },
  {
    icon: Landmark,
    title: 'Insurance',
    description: 'Our attorneys provide comprehensive legal support for insurance claims and disputes.',
  },
  {
    icon: Scale,
    title: 'Affordable Housing Development & Financing',
    description: 'Our attorneys provide comprehensive legal support for affordable housing projects, including financing, compliance, and regulatory matters.',
  }
];

export function PracticeAreas() {
  return (
    <section id="practice" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 mb-6">
            <span className="text-accent-foreground">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-primary mb-6">Practice Areas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal services tailored to meet your unique needs with precision and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={index}
                className="group p-10 bg-white border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <Icon size={32} className="text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl text-primary mb-4">{practice.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {practice.description}
                </p>
                <a href="#" className="mt-6 inline-block text-accent hover:underline">
                  Read More...
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}