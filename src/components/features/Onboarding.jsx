import React, { useState } from 'react';
import { Feather, CheckCircle, Shield, BookOpen, Lock, Sparkles, Heart } from 'lucide-react';
import { Button } from '../ui';

const steps = [
  {
    title: 'Asma',
    subtitle: 'أسماء',
    description: 'A safe space to understand your faith with clarity and compassion.',
    icon: Feather,
  },
  {
    title: 'Our Promise',
    points: [
      { icon: CheckCircle, text: 'All hadith verified for authenticity' },
      { icon: BookOpen, text: 'Female scholars cited throughout' },
      { icon: Sparkles, text: 'AI-powered guidance with real sources' },
      { icon: Lock, text: 'Your questions remain private' },
    ],
  },
];

export function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const currentStep = steps[step];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 animate-page-in">
      <div className="w-full max-w-sm animate-fade-in">
        {step === 0 ? (
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-pink-lg animate-breathe">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-semibold text-pink-900 dark:text-pink-100 mb-2 tracking-tight">
              {currentStep.title}
            </h1>
            <p className="text-lg text-pink-400 mb-4 font-arabic">{currentStep.subtitle}</p>
            <p className="text-pink-500 dark:text-pink-400 leading-relaxed mb-12 font-elegant text-lg">
              {currentStep.description}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-pink-900 dark:text-pink-100 mb-8 text-center tracking-tight flex items-center justify-center gap-2">
              {currentStep.title}
              <Sparkles className="w-5 h-5 text-pink-400" />
            </h2>
            <div className="space-y-3 mb-12">
              {currentStep.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-pink-200 dark:border-pink-800 animate-slide-up shadow-pink-sm"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <point.icon className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <p className="text-pink-700 dark:text-pink-300">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={() => (step === 0 ? setStep(1) : onComplete())}
          className="w-full"
        >
          {step === 0 ? 'Begin' : 'Continue'}
        </Button>

        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step
                  ? 'w-8 bg-gradient-to-r from-pink-500 to-pink-600'
                  : 'w-1.5 bg-pink-200 dark:bg-pink-800'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
