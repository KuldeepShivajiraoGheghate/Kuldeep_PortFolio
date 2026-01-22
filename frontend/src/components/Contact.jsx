import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    { icon: Phone, label: 'Phone', value: resumeData.personal.phone, href: `tel:${resumeData.personal.phone}` },
    { icon: Mail, label: 'Email', value: resumeData.personal.email, href: `mailto:${resumeData.personal.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kuldeep-gheghate', href: resumeData.personal.linkedin },
    { icon: Globe, label: 'Google Dev', value: 'Google Dev Profile', href: resumeData.personal.googleDev },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-gradient-to-br from-[#0B1026]/80 to-[#0B1026]/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <link.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{link.label}</p>
                      <p className="text-white font-medium">{link.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-[#0B1026]/80 to-[#0B1026]/60 backdrop-blur-sm border border-cyan-400/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#0B1026]/50 border-cyan-400/30 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#0B1026]/50 border-cyan-400/30 text-white placeholder:text-gray-500 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-[#0B1026]/50 border-cyan-400/30 text-white placeholder:text-gray-500 focus:border-cyan-400 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white border-0 shadow-lg shadow-cyan-500/30"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
