import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, RefreshCw, MessageSquareCode } from 'lucide-react';
import { LanguageOption } from '../types/careeros';
import { askCareerCoach } from '../services/careerosApi';

interface CareerCoachDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profession: string;
  language: LanguageOption;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  time: string;
}

export const CareerCoachDrawer: React.FC<CareerCoachDrawerProps> = ({
  isOpen,
  onClose,
  profession,
  language
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      content: language === 'te-en'
        ? `Namaste! Nenu nee CAREEROS AI Coach ni. ${profession} lo nee career ni confuse avvakunda clarity tho step-by-step build cheddam. Ee profession gurinchi reality check kavala, leka project & interview preparation lo help kavala?`
        : language === 'te'
        ? `నమస్కారం! నేను మీ CAREEROS AI కెరీర్ కోచ్‌ని. ${profession} రంగంలో మీ వృత్తిపరమైన లక్ష్యాలను సాధించడానికి నేను సిద్ధంగా ఉన్నాను. మీరు ప్రారంభించడానికి దేనిపై దృష్టి పెట్టాలనుకుంటున్నారు?`
        : `Welcome to CAREEROS AI Coach. I am your specialized career strategist for ${profession}. I focus on reality, verified skills, and proof of work. What career decision or roadblock are you facing today?`,
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    language === 'te-en' ? 'Daily reality ela untundi?' : language === 'te' ? 'దైనందిన వాస్తవికత ఎలా ఉంటుంది?' : 'What is the unromanticized daily reality?',
    language === 'te-en' ? 'Flagship project ela start cheyyali?' : language === 'te' ? 'ఫ్లాగ్‌షిప్ ప్రాజెక్ట్ ఎలా నిర్మించాలి?' : 'How do I start my Flagship Project?',
    language === 'te-en' ? 'Naku coding background lekapothe?' : language === 'te' ? 'నేపథ్యం లేకపోతే ఎలా మారాలి?' : 'How do I pivot from a non-tech background?',
    language === 'te-en' ? '10 hours per week saripotunda?' : language === 'te' ? 'వారానికి 10 గంటలు సరిపోతుందా?' : 'Can I succeed with only 10 hours/week?'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      content: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await askCareerCoach(
        profession,
        [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
        language,
        `Active target profession: ${profession}`
      );

      const aiMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'model',
        content: response.reply || 'Let us continue taking action.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-white">CAREEROS AI Coach</h3>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.2 rounded border border-cyan-800/40">
                {language.toUpperCase()}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Strategist for {profession}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${
                  isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                }`}
              >
                {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
              </div>
              <div
                className={`max-w-[82%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${
                  isUser
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-950/90 text-slate-200 border border-slate-800 rounded-tl-none'
                }`}
              >
                {msg.content}
                <div className={`text-[9px] mt-1.5 font-mono ${isUser ? 'text-blue-200' : 'text-slate-500'}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
            <RefreshCw className="h-3.5 w-3.5 animate-spin text-cyan-400" />
            <span>Formulating strategic guidance...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/40">
        <div className="text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Suggested Questions</div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white px-2.5 py-1 rounded-lg border border-slate-700/60 whitespace-nowrap transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-3 border-t border-slate-800 bg-slate-950">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Ask anything about ${profession}...`}
            className="flex-1 bg-slate-900 border border-slate-700 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 transition-all cursor-pointer shadow-md shadow-cyan-500/20"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
