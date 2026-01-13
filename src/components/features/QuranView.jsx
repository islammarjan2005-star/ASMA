import React, { useState } from 'react';
import { ChevronLeft, BookOpen, Bookmark, Share2, Heart, ChevronDown, Sparkles } from 'lucide-react';
import { Card, Badge } from '../ui';
import { quranicVerses, verseCategories } from '../../data';
import { useApp } from '../../context/AppContext';

export function QuranView({ onBack }) {
  const { state, dispatch } = useApp();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedVerse, setExpandedVerse] = useState(null);

  const filteredVerses = selectedCategory
    ? quranicVerses.filter((v) => v.category === selectedCategory)
    : quranicVerses;

  const handleSave = (id) => {
    dispatch({ type: 'TOGGLE_SAVED_VERSE', payload: id });
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
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-pink">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-pink-900 dark:text-pink-100 flex items-center gap-2">
                Quranic Verses
                <Sparkles className="w-4 h-4 text-pink-400" />
              </h1>
              <p className="text-sm text-pink-400">Words of comfort & guidance</p>
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
          {verseCategories.map((cat) => (
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

        {/* Verses List */}
        <div className="space-y-4 stagger-children">
          {filteredVerses.map((verse) => {
            const isSaved = state.savedVerses.includes(verse.id);
            const isExpanded = expandedVerse === verse.id;

            return (
              <Card key={verse.id} className="overflow-hidden" variant="glass">
                <div className="p-5">
                  {/* Theme Badge */}
                  <Badge variant="rose" className="mb-4">
                    {verse.theme}
                  </Badge>

                  {/* Arabic */}
                  <p
                    className="text-xl text-pink-800 dark:text-pink-200 leading-loose text-right font-arabic mb-4 arabic-hero"
                    dir="rtl"
                  >
                    {verse.arabic}
                  </p>

                  {/* Translation */}
                  <p className="text-pink-700 dark:text-pink-300 leading-relaxed mb-4 italic font-elegant text-lg">
                    "{verse.translation}"
                  </p>

                  {/* Reference & Actions */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-pink-400">{verse.reference}</p>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleSave(verse.id)}
                        className={`p-2 rounded-xl transition-all duration-200 ${
                          isSaved
                            ? 'bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400'
                            : 'text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 rounded-xl text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Tafsir */}
                <div className="border-t border-pink-100 dark:border-pink-900/30">
                  <button
                    onClick={() => setExpandedVerse(isExpanded ? null : verse.id)}
                    className="w-full px-5 py-3 flex items-center justify-between text-pink-500 dark:text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors"
                  >
                    <span className="text-sm font-medium">Reflection & Tafsir</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 space-y-4 animate-fade-in">
                      <div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-xl">
                        <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-2">
                          Understanding
                        </p>
                        <p className="text-pink-700 dark:text-pink-300 text-sm leading-relaxed">
                          {verse.tafsir}
                        </p>
                      </div>

                      <div className="p-4 bg-rose-50 dark:bg-rose-900/30 rounded-xl">
                        <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2">
                          Personal Reflection
                        </p>
                        <p className="text-pink-700 dark:text-pink-300 text-sm leading-relaxed font-elegant">
                          {verse.reflection}
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
