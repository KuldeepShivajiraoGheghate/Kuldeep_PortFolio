import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Card, CardContent } from './ui/card';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#0B1026]/80 to-[#0B1026]/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-400 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-sm">{cert.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
