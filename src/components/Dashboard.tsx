import React, { useState } from 'react';
import { Plus, Search, Grid, List } from 'lucide-react';
import AddLinkModal from './AddLinkModal';
import LinkCard from './LinkCard';
import { Link } from '../types';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [links, setLinks] = useState<Link[]>([
    {
      id: '1',
      url: 'https://www.example.com/article',
      title: 'The Future of AI in 2024',
      description: 'An insightful article about artificial intelligence trends and how they will shape our future. Exploring the latest developments in machine learning.',
      tags: ['AI', 'Technology', 'Future'],
      createdAt: new Date().toISOString(),
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      favicon: 'https://www.google.com/favicon.ico'
    }
  ]);

  const filteredLinks = links.filter(link => {
    const matchesSearch = searchTerm.toLowerCase() === '' || 
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = !selectedTag || link.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(links.flatMap(link => link.tags)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <div className="flex h-screen pt-16">
        <Sidebar 
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
          linkCount={links.length}
          links={links}
        />

        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/80 backdrop-blur-lg py-4 px-6 rounded-2xl shadow-sm border border-indigo-50 z-10">
              <div className="relative flex-1 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-indigo-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-indigo-100 rounded-xl leading-5 bg-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition-all duration-200"
                  placeholder="Search links, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-4 ml-4">
                <div className="flex items-center bg-white rounded-lg p-1 shadow-sm border border-indigo-100">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-indigo-500 text-white' : 'text-indigo-400 hover:text-indigo-600'}`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-indigo-500 text-white' : 'text-indigo-400 hover:text-indigo-600'}`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Link
                </button>
              </div>
            </div>

            <div className={
              viewMode === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }>
              {filteredLinks.map((link) => (
                <LinkCard
                  key={link.id}
                  link={link}
                  viewMode={viewMode}
                  onDelete={(id) => setLinks(links.filter(l => l.id !== id))}
                  onTagClick={(tag) => setSelectedTag(tag)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <AddLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(link) => {
          setLinks([...links, { ...link, id: Date.now().toString() }]);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}