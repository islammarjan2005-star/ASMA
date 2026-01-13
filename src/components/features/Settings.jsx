import React from 'react';
import {
  ChevronLeft,
  Moon,
  Sun,
  Bell,
  Vibrate,
  Trash2,
  Info,
  ExternalLink,
  Heart,
  Sparkles,
} from 'lucide-react';
import { Card, Button } from '../ui';
import { useApp } from '../../context/AppContext';

export function Settings({ onBack }) {
  const { state, dispatch } = useApp();

  const handleClearData = () => {
    if (window.confirm('This will clear all your saved content and journal entries. Continue?')) {
      localStorage.removeItem('asma-app-state');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen pb-28 animate-page-in">
      <div className="p-5 pt-12 max-w-lg mx-auto">
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-pink-400 mb-8 active:text-pink-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <h1 className="text-2xl font-semibold text-pink-900 dark:text-pink-100 mb-6 flex items-center gap-2">
          Settings
          <Sparkles className="w-5 h-5 text-pink-400" />
        </h1>

        {/* Appearance */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-wider mb-3">
            Appearance
          </p>
          <Card className="divide-y divide-pink-100 dark:divide-pink-900/30" variant="glass">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {state.darkMode ? (
                  <Moon className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                ) : (
                  <Sun className="w-5 h-5 text-pink-500" />
                )}
                <span className="text-pink-900 dark:text-pink-100">Dark Mode</span>
              </div>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
                className={`w-12 h-7 rounded-full p-1 transition-all duration-300 ${
                  state.darkMode
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 shadow-pink'
                    : 'bg-pink-200 dark:bg-pink-900/50'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    state.darkMode ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>
          </Card>
        </div>

        {/* Notifications & Haptics */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-wider mb-3">
            Experience
          </p>
          <Card className="divide-y divide-pink-100 dark:divide-pink-900/30" variant="glass">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                <span className="text-pink-900 dark:text-pink-100">Notifications</span>
              </div>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_NOTIFICATIONS' })}
                className={`w-12 h-7 rounded-full p-1 transition-all duration-300 ${
                  state.notifications
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 shadow-pink'
                    : 'bg-pink-200 dark:bg-pink-900/50'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    state.notifications ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Vibrate className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                <span className="text-pink-900 dark:text-pink-100">Haptic Feedback</span>
              </div>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_HAPTIC' })}
                className={`w-12 h-7 rounded-full p-1 transition-all duration-300 ${
                  state.hapticFeedback
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 shadow-pink'
                    : 'bg-pink-200 dark:bg-pink-900/50'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    state.hapticFeedback ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>
          </Card>
        </div>

        {/* Data */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-wider mb-3">
            Data & Privacy
          </p>
          <Card className="divide-y divide-pink-100 dark:divide-pink-900/30" variant="glass">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Info className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                <span className="text-pink-900 dark:text-pink-100">Your Data</span>
              </div>
              <p className="text-sm text-pink-500 dark:text-pink-400 ml-8">
                All your saved content and journal entries are stored locally on your device. We
                don't collect or store any personal data.
              </p>
            </div>
            <button
              onClick={handleClearData}
              className="p-4 flex items-center gap-3 w-full text-left active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors"
            >
              <Trash2 className="w-5 h-5 text-rose-500" />
              <span className="text-rose-600 dark:text-rose-400">Clear All Data</span>
            </button>
          </Card>
        </div>

        {/* Resources */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-pink-500 dark:text-pink-400 uppercase tracking-wider mb-3">
            Resources
          </p>
          <Card className="divide-y divide-pink-100 dark:divide-pink-900/30" variant="glass">
            <a
              href="https://seekersguidance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 flex items-center justify-between active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors"
            >
              <span className="text-pink-900 dark:text-pink-100">SeekersGuidance</span>
              <ExternalLink className="w-4 h-4 text-pink-400" />
            </a>
            <a
              href="https://rabata.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 flex items-center justify-between active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors"
            >
              <span className="text-pink-900 dark:text-pink-100">Rabata</span>
              <ExternalLink className="w-4 h-4 text-pink-400" />
            </a>
            <a
              href="https://yaqeeninstitute.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 flex items-center justify-between active:bg-pink-50 dark:active:bg-pink-900/30 transition-colors"
            >
              <span className="text-pink-900 dark:text-pink-100">Yaqeen Institute</span>
              <ExternalLink className="w-4 h-4 text-pink-400" />
            </a>
          </Card>
        </div>

        {/* About */}
        <Card className="p-5 text-center" variant="pink">
          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-3 shadow-pink-md animate-breathe">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-1">Asma</h3>
          <p className="text-sm text-pink-400 mb-3">Version 1.0.0</p>
          <p className="text-xs text-pink-500 dark:text-pink-400 leading-relaxed font-elegant">
            Built with love for Muslim women seeking understanding, clarity, and connection with
            their faith.
          </p>
        </Card>
      </div>
    </div>
  );
}
