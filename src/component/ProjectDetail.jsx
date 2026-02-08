import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, FileText, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-outfit">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Geri Dön
        </Link>
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-white/5 mb-10 border border-white/10 shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  Proje Detayı
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Documents Section */}
              {project.documents && project.documents.length > 0 && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h2 className="text-xl font-bold mb-4">Belgeler</h2>
                  <div className="space-y-3">
                    {project.documents.map((doc, idx) => (
                      <a 
                        key={idx}
                        href={doc.link}
                        className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <FileText className="w-4 h-4 mr-3 text-gray-400" />
                        <span>{doc.name}</span>
                        <ExternalLink className="w-4 h-4 ml-auto text-gray-500" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sticky top-8">
                <h3 className="text-lg font-bold mb-4">Linkler</h3>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700 rounded-xl transition-all group"
                >
                  <Github className="w-5 h-5 mr-2 group-hover:text-white transition-colors" />
                  GitHub Reposu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
