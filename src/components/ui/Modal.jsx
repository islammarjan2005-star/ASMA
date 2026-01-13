import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, subtitle, icon: Icon, children }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[85vh] overflow-hidden animate-slide-up shadow-pink-xl border border-pink-100 dark:border-pink-900/30">
        {/* Header */}
        <div className="sticky top-0 z-10 p-5 border-b border-pink-100 dark:border-pink-900/30 flex items-center justify-between bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-pink">
                <Icon className="w-5 h-5 text-white" />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-pink-900 dark:text-pink-100">{title}</h3>
              {subtitle && (
                <p className="text-xs text-pink-400 dark:text-pink-500">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 active:bg-pink-50 dark:active:bg-pink-900/30 rounded-xl transition-colors text-pink-400 hover:text-pink-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[60vh]">{children}</div>
      </div>
    </div>
  );
}
