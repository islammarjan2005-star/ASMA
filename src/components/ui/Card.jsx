import React from 'react';

export function Card({ children, className = '', onClick, variant = 'default' }) {
  const variants = {
    default: 'bg-white/80 dark:bg-neutral-800/80 border-pink-100 dark:border-pink-900/30 shadow-pink-sm backdrop-blur-sm',
    glass: 'glass-card',
    pink: 'bg-pink-50 dark:bg-pink-900/30 border-pink-200 dark:border-pink-800',
    rose: 'bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800',
    blush: 'bg-blush-50 dark:bg-blush-900/30 border-blush-200 dark:border-blush-800',
    amber: 'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800',
    violet: 'bg-violet-50 dark:bg-violet-900/30 border-violet-200 dark:border-violet-800',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800',
  };

  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl border transition-all duration-200
        ${variants[variant]}
        ${onClick ? 'cursor-pointer active:scale-[0.98] hover:shadow-pink-md float-card' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
