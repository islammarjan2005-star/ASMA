import React from 'react';

export function Badge({ children, variant = 'default', icon: Icon, className = '' }) {
  const variants = {
    default: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
    pink: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
    rose: 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300',
    blush: 'bg-blush-100 dark:bg-blush-900/50 text-blush-700 dark:text-blush-300',
    amber: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300',
    violet: 'bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300',
    blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1
        rounded-full text-xs font-semibold
        ${variants[variant]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
}
