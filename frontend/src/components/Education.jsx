import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Badge } from './ui/badge';

const Education = () => {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-[#0B1026]/80 to-[#0B1026]/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/20 transition-all">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    {resumeData.education.degree}
                  </CardTitle>
                  <p className="text-cyan-400 font-medium mb-1">
                    {resumeData.education.institution}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {resumeData.education.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">CGPA:</span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {resumeData.education.cgpa}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="w-5 h-5 text-violet-400" />
                    <span className="text-gray-300 font-medium">Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.education.coursework.map((course, index) => (
                      <Badge
                        key={index}
                        className="bg-violet-500/20 text-violet-400 border border-violet-400/30"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
