import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, Settings, Check, Heart } from 'lucide-react';
import { Card, Button } from '../ui';
import { useApp } from '../../context/AppContext';

const dhikrOptions = [
  { name: 'SubhanAllah', arabic: 'سُبْحَانَ اللَّهِ', meaning: 'Glory be to Allah' },
  { name: 'Alhamdulillah', arabic: 'الْحَمْدُ لِلَّهِ', meaning: 'Praise be to Allah' },
  { name: 'Allahu Akbar', arabic: 'اللَّهُ أَكْبَرُ', meaning: 'Allah is the Greatest' },
  { name: 'La ilaha illallah', arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ', meaning: 'There is no god but Allah' },
  { name: 'Astaghfirullah', arabic: 'أَسْتَغْفِرُ اللَّهَ', meaning: 'I seek forgiveness from Allah' },
  { name: 'La hawla wa la quwwata', arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', meaning: 'There is no power except with Allah' },
];

const goalOptions = [33, 99, 100, 1000];

export function DhikrCounter({ onBack }) {
  const { state, dispatch } = useApp();
  const [selectedDhikr, setSelectedDhikr] = useState(dhikrOptions[0]);
  const [showSettings, setShowSettings] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const progress = (state.dhikrCount / state.dhikrGoal) * 100;

  const handleTap = () => {
    if (state.hapticFeedback && navigator.vibrate) {
      navigator.vibrate(10);
    }

    const newCount = state.dhikrCount + 1;
    if (newCount >= state.dhikrGoal) {
      setShowComplete(true);
      setTimeout(() => setShowComplete(false), 2000);
    }

    dispatch({ type: 'INCREMENT_DHIKR' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_DHIKR' });
  };

  return (
    <div className="min-h-screen flex flex-col animate-page-in">
      {/* Header */}
      <div className="p-5 pt-12 max-w-lg mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-pink-400 active:text-pink-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-xl text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="px-5 max-w-lg mx-auto w-full mb-6 animate-fade-in">
          <Card className="p-5" variant="glass">
            <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-4">Settings</h3>

            {/* Goal Selection */}
            <div className="mb-4">
              <p className="text-sm text-pink-500 dark:text-pink-400 mb-2">Goal</p>
              <div className="flex flex-wrap gap-2">
                {goalOptions.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => dispatch({ type: 'SET_DHIKR_GOAL', payload: goal })}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      state.dhikrGoal === goal
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-pink'
                        : 'bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            {/* Dhikr Selection */}
            <div>
              <p className="text-sm text-pink-500 dark:text-pink-400 mb-2">Dhikr</p>
              <div className="space-y-2">
                {dhikrOptions.map((dhikr) => (
                  <button
                    key={dhikr.name}
                    onClick={() => setSelectedDhikr(dhikr)}
                    className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${
                      selectedDhikr.name === dhikr.name
                        ? 'bg-pink-50 dark:bg-pink-900/30 border-2 border-pink-500 shadow-pink-sm'
                        : 'bg-white/50 dark:bg-neutral-800/50 border-2 border-transparent'
                    }`}
                  >
                    <p className="font-medium text-pink-900 dark:text-pink-100 text-sm">
                      {dhikr.name}
                    </p>
                    <p className="text-xs text-pink-400">{dhikr.meaning}</p>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Main Counter Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 max-w-lg mx-auto w-full">
        {/* Completion Animation */}
        {showComplete && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-heart-burst shadow-pink-xl">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
        )}

        {/* Arabic Text */}
        <p className="text-3xl text-pink-800 dark:text-pink-200 font-arabic text-center mb-2 arabic-hero" dir="rtl">
          {selectedDhikr.arabic}
        </p>
        <p className="text-pink-500 dark:text-pink-400 text-sm mb-8 font-elegant">{selectedDhikr.meaning}</p>

        {/* Counter Circle */}
        <button
          onClick={handleTap}
          className="relative w-56 h-56 rounded-full flex items-center justify-center active:scale-95 transition-transform"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="112"
              cy="112"
              r="100"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-pink-100 dark:text-pink-900/50"
            />
            <circle
              cx="112"
              cy="112"
              r="100"
              fill="none"
              stroke="url(#pinkGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 100}
              strokeDashoffset={2 * Math.PI * 100 * (1 - progress / 100)}
              className="transition-all duration-200"
              style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.4))' }}
            />
            <defs>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Circle */}
          <div className="w-44 h-44 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-pink-lg flex flex-col items-center justify-center">
            <span className="text-5xl font-light text-pink-600 dark:text-pink-400">
              {state.dhikrCount}
            </span>
            <span className="text-sm text-pink-400">/ {state.dhikrGoal}</span>
          </div>
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="mt-8 flex items-center gap-2 px-4 py-2 text-pink-400 active:text-pink-600 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="text-sm font-medium">Reset</span>
        </button>
      </div>

      {/* History */}
      {state.dhikrHistory.length > 0 && (
        <div className="p-5 pb-28 max-w-lg mx-auto w-full">
          <Card className="p-4" variant="glass">
            <h3 className="text-sm font-semibold text-pink-700 dark:text-pink-300 mb-3">
              Today's Progress
            </h3>
            <div className="flex gap-2 flex-wrap">
              {state.dhikrHistory.slice(-10).map((entry, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-pink-sm"
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
