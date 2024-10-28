import React from 'react';
import { Bookmark, Bell, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-indigo-100 fixed w-full z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg shadow-md">
                  <Bookmark className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  LinkMind
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-indigo-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-indigo-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
              <Settings className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}