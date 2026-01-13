import React from 'react';

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon: Icon,
}) {
  const variants = {
    primary:
      'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-pink-md hover:shadow-pink-lg active:from-pink-600 active:to-pink-700 btn-glow',
    secondary:
      'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800 active:bg-pink-100 dark:active:bg-pink-900/50',
    ghost:
      'bg-transparent text-pink-600 dark:text-pink-400 active:bg-pink-50 dark:active:bg-pink-900/30',
    pink:
      'bg-pink-600 text-white shadow-pink active:bg-pink-700',
    danger:
      'bg-rose-500 text-white shadow-sm active:bg-rose-600',
    soft:
      'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 active:bg-pink-200 dark:active:bg-pink-900/60',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-2xl font-medium transition-all duration-200
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
