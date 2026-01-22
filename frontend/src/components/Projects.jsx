import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#0B1026]/80 to-[#0B1026]/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-gray-400">{project.year}</p>
                  {project.status === 'Ongoing' && (
                    <Badge className="w-fit bg-violet-500/20 text-violet-400 border border-violet-400/30">
                      {project.status}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                    {project.github && (
                      <Button
                        onClick={() => window.open(project.github, '_blank')}
                        variant="outline"
                        size="sm"
                        className="border-violet-400 text-violet-400 hover:bg-violet-400/10"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#0B1026] border border-cyan-400/30 text-white max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-cyan-400">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.year}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2">
                  {selectedProject.description.map((desc, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-2">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
