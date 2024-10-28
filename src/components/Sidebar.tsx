import React from 'react';
import { Hash, Star, Clock, Archive, Trash2, Link as LinkIcon } from 'lucide-react';
import { Link } from '../types';

interface Props {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  linkCount: number;
  links: Link[];
}

export default function Sidebar({ tags, selectedTag, onTagSelect, linkCount, links }: Props) {
  return (
    <div className="fixed w-64 h-screen bg-white/80 backdrop-blur-lg border-r border-indigo-100 pt-16 overflow-y-auto">
      <div className="px-4 py-6">
        <nav className="space-y-1">
          <a
            href="#"
            className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm"
          >
            <Star className="mr-3 h-5 w-5" />
            <span className="truncate">All Links</span>
            <span className="ml-auto bg-white/20 text-white py-0.5 px-2 rounded-full text-xs">
              {linkCount}
            </span>
          </a>

          <a
            href="#"
            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
          >
            <Clock className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500" />
            <span className="truncate">Recent</span>
          </a>

          <a
            href="#"
            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
          >
            <Archive className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500" />
            <span className="truncate">Archive</span>
          </a>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-start">
              <span className="pr-3 bg-white text-sm font-medium text-indigo-500">Recent Links</span>
            </div>
          </div>

          <div className="space-y-2">
            {links.slice(0, 3).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center space-x-2">
                  <LinkIcon className="h-4 w-4 text-indigo-400" />
                  <span className="truncate">{link.title}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-start">
              <span className="pr-3 bg-white text-sm font-medium text-indigo-500">Tags</span>
            </div>
          </div>

          <div className="space-y-1">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg w-full transition-colors duration-200 ${
                  selectedTag === tag
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                <Hash className={`mr-3 h-5 w-5 ${selectedTag === tag ? 'text-white' : 'text-indigo-400'}`} />
                <span className="truncate">{tag}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}