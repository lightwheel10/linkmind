import React from 'react';
import { ExternalLink, Clock, Trash2, Link as LinkIcon } from 'lucide-react';
import { Link } from '../types';

interface Props {
  link: Link;
  viewMode: 'grid' | 'list';
  onDelete: (id: string) => void;
  onTagClick: (tag: string) => void;
}

export default function LinkCard({ link, viewMode, onDelete, onTagClick }: Props) {
  const formattedDate = new Date(link.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100 p-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={link.image}
              alt={link.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {link.title}
              </h3>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
              {link.description}
            </p>

            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {link.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => onTagClick(tag)}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onDelete(link.id)}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
      <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
        <img
          src={link.image}
          alt={link.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {link.favicon && (
              <img src={link.favicon} alt="" className="w-4 h-4 rounded-full" />
            )}
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {link.title}
            </h3>
          </div>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {link.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {link.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors duration-200"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <button
            onClick={() => onDelete(link.id)}
            className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}