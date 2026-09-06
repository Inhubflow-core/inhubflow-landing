'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/providers/language';

interface ChatMessage {
  id: string;
  sender_type: 'visitor' | 'ai' | 'human';
  sender_name: string;
  message: string;
  created_at: string;
}

interface ChatSession {
  id: string;
  status: 'ai_active' | 'human_takeover' | 'resolved';
  needs_human: boolean;
  visitor_name?: string;
}

const TEXTS = {
  es: {
    widgetTitle: 'InHubFlow Live Concierge',
    onlineStatus: 'En línea • Respuesta inmediata',
    humanConnected: 'Asesor Roberto conectado en vivo',
    welcomeMessage: '¡Hola! 👋 Soy el Asistente SDR de InHubFlow. ¿En qué puedo orientarte hoy sobre cómo automatizar tus ventas B2B y prospección en LinkedIn?',
    inputPlaceholder: 'Escribe tu consulta aquí...',
    sendBtn: 'Enviar',
    quickQuestions: [
      '¿Cuáles son los planes y precios?',
      '¿Cómo funciona el Asistente SDR con IA?',
      '¿Es seguro para mi cuenta de LinkedIn?',
      'Quiero hablar con un asesor',
    ],
    typingAI: 'InHubFlow Concierge está escribiendo...',
    typingHuman: 'Roberto está escribiendo...',
    poweredBy: 'Impulsado por InHubFlow AI Suite',
    askHumanChip: 'Hablar con asesor humano',
  },
  'pt-BR': {
    widgetTitle: 'InHubFlow Live Concierge',
    onlineStatus: 'Online • Resposta imediata',
    humanConnected: 'Consultor Roberto conectado ao vivo',
    welcomeMessage: 'Olá! 👋 Sou o Assistente SDR do InHubFlow. Como posso te orientar hoje sobre como acelerar suas vendas B2B e prospecção no LinkedIn?',
    inputPlaceholder: 'Digite sua mensagem aqui...',
    sendBtn: 'Enviar',
    quickQuestions: [
      'Quais são os planos e preços?',
      'Como funciona o Assistente SDR de IA?',
      'É seguro para minha conta do LinkedIn?',
      'Quero falar com um consultor',
    ],
    typingAI: 'InHubFlow Concierge está digitando...',
    typingHuman: 'Roberto está digitando...',
    poweredBy: 'Tecnologia InHubFlow AI Suite',
    askHumanChip: 'Falar com consultor humano',
  },
  en: {
    widgetTitle: 'InHubFlow Live Concierge',
    onlineStatus: 'Online • Instant reply',
    humanConnected: 'Advisor Roberto connected live',
    welcomeMessage: 'Hello! 👋 I am InHubFlow\'s AI SDR Concierge. How can I help you automate your B2B sales pipeline and LinkedIn prospecting today?',
    inputPlaceholder: 'Type your message here...',
    sendBtn: 'Send',
    quickQuestions: [
      'What are the plans and pricing?',
      'How does the AI SDR Assistant work?',
      'Is it safe for my LinkedIn account?',
      'I want to speak with an advisor',
    ],
    typingAI: 'InHubFlow Concierge is typing...',
    typingHuman: 'Roberto is typing...',
    poweredBy: 'Powered by InHubFlow AI Suite',
    askHumanChip: 'Talk to human advisor',
  },
};

export default function LiveChatWidget() {
  const { locale } = useLanguage();
  const t = TEXTS[locale] || TEXTS.es;

  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<ChatSession | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Determine backend base URL
  const getBackendUrl = () => {
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      return 'http://localhost:3001';
    }
    return process.env.NEXT_PUBLIC_APP_URL || 'https://b2b.inhubflow.online';
  };

  // Obtain or generate session ID
  const getSessionId = (): string => {
    if (typeof window === 'undefined') return '';
    let sid = localStorage.getItem('inhubflow_live_chat_session_id');
    if (!sid) {
      sid = 'session_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now().toString(36);
      localStorage.setItem('inhubflow_live_chat_session_id', sid);
    }
    return sid;
  };

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages]);

  // Initial fetch and session hydration
  const fetchMessages = async (sid: string) => {
    try {
      const baseUrl = getBackendUrl();
      const res = await fetch(`${baseUrl}/api/live-chat/poll?sessionId=${encodeURIComponent(sid)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.session) {
          setSession(data.session);
        }
        if (Array.isArray(data.messages) && data.messages.length > 0) {
          setMessages(data.messages);
        }
      }
    } catch {
      // Quiet fail if network/CORS error in local preview
    }
  };

  useEffect(() => {
    const sid = getSessionId();
    if (sid) {
      fetchMessages(sid);
    }
  }, []);

  // Polling every 3.5s when widget is open or waiting for human
  useEffect(() => {
    const sid = getSessionId();
    if (!sid) return;

    if (isOpen || (session && session.needs_human)) {
      pollIntervalRef.current = setInterval(() => {
        fetchMessages(sid);
      }, 3500);
    } else {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    }

    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    };
  }, [isOpen, session?.needs_human]);

  // Send message handler
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const sid = getSessionId();
    setInputValue('');
    setIsLoading(true);

    // Optimistically add visitor message
    const tempVisitorMsg: ChatMessage = {
      id: 'temp_' + Date.now(),
      sender_type: 'visitor',
      sender_name: 'Tú',
      message: text,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, tempVisitorMsg]);

    try {
      const baseUrl = getBackendUrl();
      const res = await fetch(`${baseUrl}/api/live-chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sid,
          message: text,
          language: locale,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          const aiMsg: ChatMessage = {
            id: 'ai_' + Date.now(),
            sender_type: 'ai',
            sender_name: 'InHubFlow AI Concierge',
            message: data.reply,
            created_at: new Date().toISOString(),
          };
          setMessages((prev) => [...prev, aiMsg]);
        }
        if (data.needsHuman) {
          setSession((prev) => (prev ? { ...prev, needs_human: true } : null));
        }
      } else {
        // Fallback friendly reply if backend unavailable
        setMessages((prev) => [
          ...prev,
          {
            id: 'err_' + Date.now(),
            sender_type: 'ai',
            sender_name: 'InHubFlow Concierge',
            message: 'Hemos recibido tu consulta y nuestro equipo comercial te responderá a la brevedad. También puedes escribirnos a info@inhubflow.online.',
            created_at: new Date().toISOString(),
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: 'err_' + Date.now(),
          sender_type: 'ai',
          sender_name: 'InHubFlow Concierge',
          message: 'Gracias por tu mensaje. Un asesor de nuestro equipo revisará tu solicitud de inmediato.',
          created_at: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
      // Refresh state from database
      fetchMessages(sid);
    }
  };

  const isHumanTakeover = session?.status === 'human_takeover';

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans text-slate-800 select-none">
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="flex flex-col w-[360px] sm:w-[400px] h-[540px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 text-white px-5 py-4 flex items-center justify-between shadow-md relative">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {isHumanTakeover ? (
                  <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    R
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/40 flex items-center justify-center text-white text-lg">
                    ⚡
                  </div>
                )}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-indigo-700 rounded-full"></span>
              </div>
              <div>
                <div className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                  {isHumanTakeover ? 'Roberto (Asesor InHubFlow)' : t.widgetTitle}
                  {isHumanTakeover && (
                    <span className="bg-emerald-400/30 text-emerald-200 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-emerald-400/40">
                      EN VIVO
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-indigo-100/90 font-medium">
                  {isHumanTakeover ? t.humanConnected : t.onlineStatus}
                </div>
              </div>
            </div>

            {/* Close / Minimize Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Cerrar chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* HUMAN TAKEOVER BANNER */}
          {isHumanTakeover && (
            <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center gap-2 text-xs text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Estás hablando directamente con <strong>Roberto</strong>, fundador de InHubFlow.</span>
            </div>
          )}

          {/* MESSAGES LIST */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
            {/* Welcome message */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-indigo-200">
                AI
              </div>
              <div className="bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-sm max-w-[82%] leading-relaxed">
                {t.welcomeMessage}
              </div>
            </div>

            {/* Messages thread */}
            {messages.map((m) => {
              const isVisitor = m.sender_type === 'visitor';
              const isHuman = m.sender_type === 'human';

              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${isVisitor ? 'justify-end' : 'justify-start'}`}
                >
                  {!isVisitor && (
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border ${
                        isHuman
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                          : 'bg-indigo-100 text-indigo-600 border-indigo-200'
                      }`}
                    >
                      {isHuman ? 'R' : 'AI'}
                    </div>
                  )}

                  <div
                    className={`text-xs sm:text-sm rounded-2xl px-3.5 py-2.5 shadow-sm max-w-[82%] leading-relaxed break-words ${
                      isVisitor
                        ? 'bg-indigo-600 text-white rounded-tr-none'
                        : isHuman
                        ? 'bg-emerald-50 border border-emerald-300 text-slate-800 rounded-tl-none font-normal'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                    }`}
                  >
                    {!isVisitor && (
                      <div className="text-[10px] font-semibold mb-1 text-slate-400 uppercase tracking-wider">
                        {isHuman ? 'Roberto (Asesor InHubFlow)' : 'InHubFlow Concierge'}
                      </div>
                    )}
                    <div className="whitespace-pre-wrap">{m.message}</div>
                  </div>
                </div>
              );
            })}

            {/* Loading / Typing indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-400 italic pl-10">
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </span>
                <span>{isHumanTakeover ? t.typingHuman : t.typingAI}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* QUICK SUGGESTION CHIPS (only if fewer than 3 user messages) */}
          {messages.filter((m) => m.sender_type === 'visitor').length < 2 && (
            <div className="px-4 py-2 bg-slate-100/70 border-t border-slate-200 flex flex-wrap gap-1.5">
              {t.quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={isLoading}
                  className="text-[11px] bg-white hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full transition-all text-left shadow-xs active:scale-95 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* INPUT FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.inputPlaceholder}
              disabled={isLoading}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
              aria-label={t.sendBtn}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* BRAND FOOTER */}
          <div className="bg-slate-50 border-t border-slate-100 py-1.5 text-center text-[10px] text-slate-400">
            {t.poweredBy}
          </div>
        </div>
      )}

      {/* FLOATING TRIGGER BUTTON */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setHasUnread(false);
          }}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-white/20"
          aria-label="Abrir chat en vivo"
        >
          {/* Pulsing online badge */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>

          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            {locale === 'pt-BR' ? 'Chat ao Vivo' : locale === 'en' ? 'Live Chat' : 'Chat en Vivo'}
          </span>

          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">
            💬
          </div>

          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
              1
            </span>
          )}
        </button>
      )}
    </div>
  );
}
