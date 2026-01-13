import React from 'react';

export function Input({
  value,
  onChange,
  onKeyDown,
  placeholder,
  type = 'text',
  className = '',
  multiline = false,
  rows = 3,
  autoFocus = false,
}) {
  const baseClasses = `
    w-full px-4 py-3
    bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm
    border border-pink-200 dark:border-pink-800
    rounded-xl text-sm
    text-pink-900 dark:text-pink-100
    placeholder:text-pink-400 dark:placeholder:text-pink-600
    focus:outline-none focus:border-pink-500 dark:focus:border-pink-400
    focus:ring-2 focus:ring-pink-500/20
    transition-all duration-200
    shadow-pink-sm
  `;

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        rows={rows}
        autoFocus={autoFocus}
        className={`${baseClasses} resize-none ${className}`}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={`${baseClasses} ${className}`}
    />
  );
}
