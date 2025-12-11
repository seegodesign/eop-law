import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'David Martinez',
    title: 'CEO, Tech Innovations Inc.',
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Jennifer Wilson',
    title: 'Private Client',
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Robert Chang',
    title: 'Property Developer',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 mb-6">
            <span className="text-accent-foreground">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-primary mb-6">What Our Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote size={48} className="text-accent mb-6" />
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-6">
                <div className="text-primary mb-1">{testimonial.author}</div>
                <div className="text-muted-foreground">{testimonial.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}