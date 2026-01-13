import React, { useState } from 'react';
import {
  Lock,
  Scale,
  BookOpen,
  Heart,
  Users,
  Clock,
  ChevronRight,
  Info,
  EyeOff,
  Book,
  Sparkles,
} from 'lucide-react';
import * as Icons from 'lucide-react';
import { Card } from '../ui';
import { hadithDatabase, topics } from '../../data';
import { usePrayerTimes } from '../../hooks';

export function HomeScreen({
  onSelectTopic,
  onAskSafely,
  onCultureVsIslam,
  onQuran,
  onDuas,
  onSahabiyat,
  onPrayerTimes,
}) {
  const [showPanic, setShowPanic] = useState(false);
  const { prayerTimes, getNextPrayer } = usePrayerTimes();
  const nextPrayer = getNextPrayer();

  // Daily hadith based on day of year
  const dayOfYear = Math.floor(Date.now() / 86400000);
  const dailyHadith = hadithDatabase[dayOfYear % hadithDatabase.length];

  // Panic mode - shows fake calculator
  if (showPanic) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 dark:from-neutral-900 dark:to-neutral-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-pink-lg p-6 w-full max-w-xs">
          <div className="text-right text-4xl font-light text-neutral-700 dark:text-neutral-200 mb-4 h-12 flex items-center justify-end">
            0
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              'C', '±', '%', '÷',
              '7', '8', '9', '×',
              '4', '5', '6', '−',
              '1', '2', '3', '+',
              '0', '.', '=',
            ].map((btn) => (
              <button
                key={btn}
                onClick={() => btn === 'C' && setShowPanic(false)}
                className={`p-3.5 rounded-xl text-lg font-medium transition-all duration-200 ${
                  ['÷', '×', '−', '+', '='].includes(btn)
                    ? 'bg-pink-500 text-white active:bg-pink-600'
                    : ['C', '±', '%'].includes(btn)
                    ? 'bg-pink-100 dark:bg-neutral-600 text-pink-700 dark:text-neutral-200'
                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 active:bg-pink-50 dark:active:bg-neutral-600'
                } ${btn === '0' ? 'col-span-2' : ''}`}
              >
                {btn}
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-pink-400 dark:text-pink-500 mt-4">
            Tap C to return
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-28 animate-page-in">
      <div className="p-5 pt-8 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-pink-900 dark:text-pink-100 tracking-tight flex items-center gap-2">
              Asma
              <Sparkles className="w-5 h-5 text-pink-400" />
            </h1>
            <p className="text-sm text-pink-400 dark:text-pink-500">Your safe space</p>
          </div>
          <button
            onClick={() => setShowPanic(true)}
            className="w-10 h-10 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-pink-200 dark:border-pink-800 rounded-xl flex items-center justify-center active:bg-pink-50 dark:active:bg-pink-900/30 transition-all duration-200 shadow-pink-sm"
            title="Panic button - shows calculator"
          >
            <EyeOff className="w-5 h-5 text-pink-400" />
          </button>
        </div>

        {/* Prayer Times Card */}
        {nextPrayer && prayerTimes && (
          <Card className="p-4 mb-4" onClick={onPrayerTimes} variant="glass">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-pink">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-pink-400 dark:text-pink-500">Next Prayer</p>
                  <p className="font-medium text-pink-900 dark:text-pink-100">
                    {nextPrayer.name}
                  </p>
                </div>
              </div>
              <p className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                {nextPrayer.time}
              </p>
            </div>
          </Card>
        )}

        {/* Daily Hadith */}
        <Card className="p-5 mb-6" variant="glass">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
            <p className="text-xs font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
              Today's Reflection
            </p>
          </div>
          <p className="text-pink-800 dark:text-pink-200 italic leading-relaxed mb-3 font-elegant text-lg">
            "{dailyHadith.text.substring(0, 100)}..."
          </p>
          <p className="text-xs text-pink-400">{dailyHadith.source}</p>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6 stagger-children">
          <Card className="p-4" onClick={onAskSafely} variant="glass">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mb-3 shadow-pink">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-medium text-pink-900 dark:text-pink-100 text-sm">
              Ask Safely
            </h3>
            <p className="text-xs text-pink-400">AI-powered guidance</p>
          </Card>

          <Card className="p-4" onClick={onCultureVsIslam} variant="glass">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center mb-3 shadow-pink">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-medium text-pink-900 dark:text-pink-100 text-sm">
              Culture vs Islam
            </h3>
            <p className="text-xs text-pink-400">Know the difference</p>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-3 gap-3 mb-8 stagger-children">
          <Card className="p-4 text-center" onClick={onQuran} variant="glass">
            <div className="w-10 h-10 mx-auto bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-2 shadow-pink">
              <Book className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-medium text-pink-700 dark:text-pink-300">Quran</p>
          </Card>

          <Card className="p-4 text-center" onClick={onDuas} variant="glass">
            <div className="w-10 h-10 mx-auto bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-2 shadow-pink">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-medium text-pink-700 dark:text-pink-300">Duas</p>
          </Card>

          <Card className="p-4 text-center" onClick={onSahabiyat} variant="glass">
            <div className="w-10 h-10 mx-auto bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center mb-2 shadow-pink">
              <Users className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-medium text-pink-700 dark:text-pink-300">Sahabiyat</p>
          </Card>
        </div>

        {/* Ornamental Divider */}
        <div className="ornament mb-6">
          <Heart className="w-4 h-4 text-pink-300" />
        </div>

        {/* Topics */}
        <h2 className="text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-wider mb-4">
          Explore Topics
        </h2>
        <div className="space-y-2 stagger-children">
          {topics.map((topic) => {
            const TopicIcon = Icons[topic.icon] || Icons.Circle;
            const count = hadithDatabase.filter((h) => h.topic === topic.id).length;
            return (
              <Card key={topic.id} className="p-4" onClick={() => onSelectTopic(topic)} variant="glass">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/50 rounded-xl flex items-center justify-center">
                    <TopicIcon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-pink-900 dark:text-pink-100 text-sm">
                      {topic.name}
                    </h3>
                    <p className="text-xs text-pink-400">{topic.description}</p>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-xs text-pink-400 bg-pink-100 dark:bg-pink-900/50 px-2 py-1 rounded-full">{count}</span>
                    <ChevronRight className="w-4 h-4 text-pink-300 dark:text-pink-600" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer */}
        <Card className="p-4 mt-8" variant="pink">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-pink-500 flex-shrink-0" />
            <p className="text-xs text-pink-600 dark:text-pink-400 leading-relaxed">
              Asma uses AI to provide educational guidance with Islamic sources. This is not a
              substitute for scholarly advice.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
