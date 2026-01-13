import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Lock, Send, Phone, Heart, Sparkles } from 'lucide-react';
import { Card, Button, Input } from '../ui';
import { callClaude } from '../../utils/api';
import { crisisKeywords } from '../../data';

const suggestions = [
  'Is makeup permissible?',
  'Can I pray in my language?',
  'Is this cultural or Islamic?',
  'Can women lead prayer?',
  'How do I deal with anxiety?',
  'Can I work after marriage?',
];

export function AskSafely({ onBack }) {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCrisis, setShowCrisis] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleSubmit = async () => {
    if (!question.trim() || loading) return;

    // Crisis detection
    if (crisisKeywords.some((k) => question.toLowerCase().includes(k))) {
      setShowCrisis(true);
      return;
    }

    const userMessage = question.trim();
    setQuestion('');
    setConversation((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const apiMessages = [
        ...conversation.map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: userMessage },
      ];

      const response = await callClaude(apiMessages);
      setConversation((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      console.error('Ask Safely error:', err);
      const fallbackResponse = `Thank you for your question, sister. While I'm having trouble connecting right now, I want you to know that your question is valid and important.

For questions about Islamic practice, I recommend consulting a local female scholar or imam, or visiting SeekersGuidance.org or Rabata.org for women-centered guidance.

Remember: asking questions is a sign of engaged faith, not doubt. Please try again in a moment, or explore the hadith collection for related guidance.`;

      setConversation((prev) => [...prev, { role: 'assistant', content: fallbackResponse }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col animate-page-in">
      {/* Crisis Modal */}
      {showCrisis && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="p-6 max-w-sm w-full" variant="glass">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-pink-md animate-breathe">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center text-pink-900 dark:text-pink-100 mb-2">
              You Are Not Alone
            </h3>
            <p className="text-pink-500 dark:text-pink-400 text-center text-sm mb-6">
              It sounds like you may be going through something difficult. Please reach out to
              someone who can help.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="tel:988"
                className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/30 rounded-xl border border-pink-200 dark:border-pink-800"
              >
                <Phone className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                <div>
                  <p className="font-medium text-pink-900 dark:text-pink-100 text-sm">
                    988 Crisis Lifeline
                  </p>
                  <p className="text-xs text-pink-400">Call or text anytime</p>
                </div>
              </a>
              <a
                href="tel:18007997233"
                className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/30 rounded-xl border border-pink-200 dark:border-pink-800"
              >
                <Phone className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                <div>
                  <p className="font-medium text-pink-900 dark:text-pink-100 text-sm">
                    National DV Hotline
                  </p>
                  <p className="text-xs text-pink-400">1-800-799-7233</p>
                </div>
              </a>
              <a
                href="tel:18666274448"
                className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/30 rounded-xl border border-pink-200 dark:border-pink-800"
              >
                <Phone className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                <div>
                  <p className="font-medium text-pink-900 dark:text-pink-100 text-sm">
                    NASEEHA Muslim Helpline
                  </p>
                  <p className="text-xs text-pink-400">1-866-627-3342</p>
                </div>
              </a>
            </div>
            <p className="text-xs text-pink-400 text-center mb-4 italic font-elegant">
              "Say: O My servants who have transgressed against themselves, do not despair of the
              mercy of Allah." — Quran 39:53
            </p>
            <Button onClick={() => setShowCrisis(false)} className="w-full">
              Continue
            </Button>
          </Card>
        </div>
      )}

      {/* Header */}
      <div className="p-5 pt-12 max-w-lg mx-auto w-full">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-pink-400 mb-6 active:text-pink-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <Card className="p-5 mb-6" variant="glass">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center shadow-pink">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-pink-900 dark:text-pink-100 flex items-center gap-2">
                Ask Safely
                <Sparkles className="w-4 h-4 text-pink-400" />
              </h1>
              <p className="text-sm text-pink-400">Private. No judgment.</p>
            </div>
          </div>
          <p className="text-pink-500 dark:text-pink-400 text-sm leading-relaxed">
            Ask any question about your faith. I'll respond with warmth, clarity, and proper
            sources.
          </p>
        </Card>
      </div>

      {/* Conversation area */}
      <div className="flex-1 overflow-y-auto px-5 max-w-lg mx-auto w-full">
        {conversation.length === 0 && !loading && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-pink-500 uppercase tracking-wider mb-3">
              Try asking
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setQuestion(s)}
                  className="px-3 py-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-pink-200 dark:border-pink-800 rounded-xl text-sm text-pink-700 dark:text-pink-300 active:bg-pink-50 dark:active:bg-pink-900/30 transition-all duration-200 shadow-pink-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {conversation.map((msg, i) => (
          <div key={i} className={`mb-4 ${msg.role === 'user' ? 'flex justify-end' : ''}`}>
            <div
              className={`max-w-[85%] p-4 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-br-md shadow-pink'
                  : 'bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-pink-200 dark:border-pink-800 rounded-bl-md'
              }`}
            >
              <p
                className={`text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'text-white'
                    : 'text-pink-700 dark:text-pink-300'
                }`}
              >
                {msg.content}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="mb-4">
            <div className="max-w-[85%] p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-pink-200 dark:border-pink-800 rounded-2xl rounded-bl-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                <div
                  className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                />
                <div
                  className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-5 pb-28 border-t border-pink-100 dark:border-pink-900/30 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm max-w-lg mx-auto w-full">
        <div className="flex gap-3">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Type your question..."
          />
          <Button
            onClick={handleSubmit}
            disabled={!question.trim() || loading}
            variant="primary"
            className="px-4"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-pink-400 text-center mt-3">
          Educational guidance only — not a fatwa
        </p>
      </div>
    </div>
  );
}
