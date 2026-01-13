import React from 'react';
import { Home, Search, Bookmark, Circle, Settings } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'search', icon: Search, label: 'Search' },
  { id: 'dhikr', icon: Circle, label: 'Dhikr' },
  { id: 'saved', icon: Bookmark, label: 'Saved' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-4 left-4 right-4 z-40">
      <div className="max-w-lg mx-auto">
        <div className="pill-nav rounded-2xl py-2 px-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex flex-col items-center py-2 px-4 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30'
                      : 'text-neutral-400 dark:text-neutral-500 hover:text-pink-400'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-transform ${
                      isActive ? 'scale-110' : ''
                    } ${item.id === 'dhikr' && isActive ? 'fill-current' : ''}`}
                  />
                  <span className={`text-xs mt-1 font-medium ${isActive ? 'text-pink-600 dark:text-pink-400' : ''}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
