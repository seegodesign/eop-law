import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 mb-8">
              <span className="text-accent-foreground">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-6xl text-primary mb-8">
              Schedule Your Consultation
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Ready to discuss your legal needs? Our team is here to help. Contact us today for a confidential consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl text-primary mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 503.224.7112</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl text-primary mb-2">Email</h4>
                  <p className="text-muted-foreground">contact@eoplaw.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl text-primary mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    707 SW Washington St., Suite 1500<br />
                    Portland, OR 97205
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl text-primary mb-2">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-accent/20 p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl mb-8">Send us a message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-6 py-4 border placeholder focus:outline-none focus:border-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 border placeholder focus:outline-none focus:border-accent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-6 py-4 border placeholder focus:outline-none focus:border-accent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-6 py-4 border placeholder focus:outline-none focus:border-accent resize-none"
                  placeholder="Tell us about your legal needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-accent text-accent-foreground hover:bg-white transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}