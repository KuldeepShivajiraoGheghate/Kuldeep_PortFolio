import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Card, CardContent } from './ui/card';
import { Rocket, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mission Log
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-violet-400 hidden md:block" />

          <div className="space-y-8">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Icon */}
                <div className="absolute left-6 top-6 w-6 h-6 bg-cyan-400 rounded-full border-4 border-[#050816] hidden md:flex items-center justify-center z-10">
                  <Rocket className="w-3 h-3 text-[#050816]" />
                </div>

                <div className="md:ml-20">
                  <Card className="bg-gradient-to-br from-[#0B1026]/80 to-[#0B1026]/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-violet-400 text-sm mb-3">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start text-gray-300"
                          >
                            <span className="text-cyan-400 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
