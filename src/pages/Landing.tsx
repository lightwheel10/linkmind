import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Brain, Link as LinkIcon, Tags, Search, Share2, Sparkles } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto pt-20 pb-16 md:pt-28">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl shadow-lg">
                <Bookmark className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                LinkMind
              </h1>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
              Organize your links with the power of{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Transform your bookmarks into an intelligent knowledge base. Save, organize, and discover your links with AI-powered tagging and search.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-100/20" />
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful features for your links
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your digital knowledge effectively
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: 'AI-Powered Organization',
                description: 'Automatically categorize and tag your links using advanced AI technology'
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: 'Smart Search',
                description: 'Find any link instantly with our intelligent search system'
              },
              {
                icon: <Tags className="h-8 w-8" />,
                title: 'Automatic Tagging',
                description: 'Let AI generate relevant tags for your links automatically'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How LinkMind Works
            </h2>
            <p className="text-xl text-gray-600">
              Save and organize your links in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                icon: <LinkIcon className="h-6 w-6" />,
                title: 'Save Your Link',
                description: 'Simply paste any URL you want to save'
              },
              {
                step: '02',
                icon: <Sparkles className="h-6 w-6" />,
                title: 'AI Analysis',
                description: 'Our AI analyzes the content and suggests tags'
              },
              {
                step: '03',
                icon: <Share2 className="h-6 w-6" />,
                title: 'Organize & Share',
                description: 'Your links are organized and ready to be shared'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-bold py-2 px-4 rounded-full">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to organize your digital knowledge?
                </h2>
                <p className="text-indigo-100 text-lg">
                  Join thousands of users who are already using LinkMind
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <Link
                  to="/app"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-xl text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
                >
                  Get Started Now
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
              <Bookmark className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LinkMind
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <p className="mt-8 text-center text-gray-500">
            © {new Date().getFullYear()} LinkMind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}