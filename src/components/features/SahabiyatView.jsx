import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, BookOpen, Users, Sparkles, Heart } from 'lucide-react';
import { Card, Badge } from '../ui';
import { sahabiyatDatabase } from '../../data';

export function SahabiyatView({ onBack }) {
  const [selectedStory, setSelectedStory] = useState(null);

  if (selectedStory) {
    return (
      <StoryDetail story={selectedStory} onBack={() => setSelectedStory(null)} />
    );
  }

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
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center shadow-pink">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-pink-900 dark:text-pink-100 flex items-center gap-2">
                Stories of Sahabiyat
                <Sparkles className="w-4 h-4 text-pink-400" />
              </h1>
              <p className="text-sm text-pink-400">Women of the Prophet's ﷺ era</p>
            </div>
          </div>
          <p className="text-pink-500 dark:text-pink-400 text-sm leading-relaxed">
            The remarkable women who shaped early Islam. Their stories of courage, scholarship, and
            faith.
          </p>
        </Card>

        {/* Stories List */}
        <div className="space-y-4 stagger-children">
          {sahabiyatDatabase.map((story) => (
            <Card
              key={story.id}
              className="p-4"
              onClick={() => setSelectedStory(story)}
              variant="glass"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-pink">
                  <span className="text-2xl font-arabic text-white">
                    {story.arabic.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-pink-900 dark:text-pink-100">
                    {story.name}
                  </h3>
                  <p className="text-sm text-pink-400">{story.title}</p>
                  <p className="text-xs text-pink-500 dark:text-pink-400 mt-1">
                    {story.summary}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-pink-300 dark:text-pink-600" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryDetail({ story, onBack }) {
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

        {/* Hero Card */}
        <Card className="p-6 mb-6 text-center" variant="glass">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mb-4 shadow-pink-lg animate-breathe">
            <span className="text-3xl font-arabic text-white">
              {story.arabic.charAt(0)}
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-pink-900 dark:text-pink-100 mb-1">
            {story.name}
          </h1>
          <p className="text-lg text-pink-700 dark:text-pink-200 font-arabic arabic-hero" dir="rtl">
            {story.arabic}
          </p>
          <Badge variant="rose" className="mt-3">
            {story.title}
          </Badge>
          <p className="text-xs text-pink-400 mt-2">{story.era}</p>
        </Card>

        {/* Story */}
        <Card className="p-5 mb-6" variant="glass">
          <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-4">
            Her Story
          </h2>
          <div className="text-pink-700 dark:text-pink-300 leading-relaxed whitespace-pre-line text-sm font-elegant">
            {story.story}
          </div>
        </Card>

        {/* Lessons */}
        <Card className="p-5 mb-6" variant="glass">
          <h2 className="text-sm font-semibold text-pink-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-500" />
            Lessons from Her Life
          </h2>
          <div className="space-y-3">
            {story.lessons.map((lesson, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-pink-sm">
                  <span className="text-xs font-medium text-white">
                    {i + 1}
                  </span>
                </div>
                <p className="text-pink-700 dark:text-pink-300 text-sm">{lesson}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Sources */}
        <Card className="p-4" variant="pink">
          <div className="flex items-center gap-2 text-pink-500">
            <BookOpen className="w-4 h-4" />
            <p className="text-xs">Sources: {story.sources.join(', ')}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
