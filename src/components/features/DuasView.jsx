import React, { useState } from 'react';
import { ChevronLeft, Heart, Share2, BookOpen, ChevronDown, Volume2, Sparkles } from 'lucide-react';
import { Card, Badge } from '../ui';
import { duasDatabase, duaCategories } from '../../data';
import { useApp } from '../../context/AppContext';

export function DuasView({ onBack }) {
  const { state, dispatch } = useApp();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedDua, setExpandedDua] = useState(null);

  const filteredDuas = selectedCategory
    ? duasDatabase.filter((d) => d.category === selectedCategory)
    : duasDatabase;

  const handleSave = (id) => {
    dispatch({ type: 'TOGGLE_SAVED_DUA', payload: id });
  };

  return (
    <div className="min-h-screen pb-28 animate-page-in">
      <div className="p-5 pt-12 max-w-lg mx-auto">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-pink-400 mb-6 active:text-pink-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <Card className="p-5 mb-6" variant="glass">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center shadow-pink">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-pink-900 dark:text-pink-100 flex items-center gap-2">
                Daily Duas
                <Sparkles className="w-4 h-4 text-pink-400" />
              </h1>
              <p className="text-sm text-pink-400">Supplications for every moment</p>
            </div>
          </div>
        </Card>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 hide-scrollbar">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              !selectedCategory
                ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-pink'
                : 'bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-800'
            }`}
          >
            All
          </button>
          {duaCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-pink'
                  : 'bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Duas List */}
        <div className="space-y-4 stagger-children">
          {filteredDuas.map((dua) => {
            const isSaved = state.savedDuas.includes(dua.id);
            const isExpanded = expandedDua === dua.id;

            return (
              <Card key={dua.id} className="overflow-hidden" variant="glass">
                <div className="p-5">
                  {/* Time Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="pink">{dua.time}</Badge>
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-xl text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors">
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleSave(dua.id)}
                        className={`p-2 rounded-xl transition-all duration-200 ${
                          isSaved
                            ? 'bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400'
                            : 'text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Arabic */}
                  <p
                    className="text-xl text-pink-800 dark:text-pink-200 leading-loose text-right font-arabic mb-4 arabic-hero"
                    dir="rtl"
                  >
                    {dua.arabic}
                  </p>

                  {/* Transliteration */}
                  <p className="text-pink-500 dark:text-pink-400 text-sm italic mb-3">
                    {dua.transliteration}
                  </p>

                  {/* Translation */}
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed mb-3 font-elegant text-lg">
                    "{dua.translation}"
                  </p>

                  {/* Source */}
                  <p className="text-xs text-pink-400">{dua.source}</p>
                </div>

                {/* Expandable Section */}
                <div className="border-t border-pink-100 dark:border-pink-900/30">
                  <button
                    onClick={() => setExpandedDua(isExpanded ? null : dua.id)}
                    className="w-full px-5 py-3 flex items-center justify-between text-pink-500 dark:text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 animate-fade-in">
                      <div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                        <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-2">
                          Why This Dua
                        </p>
                        <p className="text-pink-700 dark:text-pink-300 text-sm leading-relaxed">
                          {dua.benefit}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
