import { motion } from 'framer-motion';

const team = [
  {
    name: 'Jerome F. Elliott',
    role: 'Business, Finance & Real Estate',
    specialty: 'Jerry assists clients primarily on business and real estate matters.  His practice includes business formations, financ...',
  },
  {
    name: 'John D. Ostrander',
    role: 'Litigation',
    specialty: 'John Ostrander specializes in trial work, focusing on commercial, employment, insurance, tort and transportation litigat...',
  },
  {
    name: 'Robert J. Preston',
    role: 'Business, Tax, & Estate Planning',
    specialty: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'William A. Drew',
    role: 'Litigation and Appellate Practices',
    specialty: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-background border-t border-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 mb-6">
            <span className="text-accent-foreground">Meet Our Attorneys</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-primary mb-6">Expert Legal Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our attorneys bring decades of combined experience and unwavering dedication to every case
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[3/4] bg-gradient-to-b from-muted to-accent/20"></div>
              <div className="p-8 bg-white border-t-4 border-accent">
                <h3 className="text-2xl text-primary mb-2">{member.name}</h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}