import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, FileText, ExternalLink, X } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Proje bulunamadı
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-outfit pb-20">
      {/* Hero Image Background */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-4 md:left-8 z-20">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-colors border border-white/10 hover:bg-black/60">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 shadow-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              {project.title}
            </h1>
            
            {/* Tags - Centered */}
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 leading-loose text-lg whitespace-pre-line text-left mb-6">
                {project.detailedDescription}
              </p>
              
              {/* GitHub Button - Small */}
              {project.github && (
                <div className="flex justify-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white/5 border border-blue-500/30 hover:border-blue-500 rounded-lg transition-all text-sm text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub'da Görüntüle
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Documents Section */}
          {project.documents && project.documents.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Proje Belgeleri
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.documents.map((doc, idx) => (
                  <a 
                    key={idx}
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all"
                  >
                    <FileText className="w-5 h-5 mr-3 text-blue-400" />
                    <span className="flex-1 text-gray-300 group-hover:text-white transition-colors">{doc.name}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Image Gallery (if project has gallery) */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Proje Görselleri
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {project.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Büyütülmüş görsel"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
