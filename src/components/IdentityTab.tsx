import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Linkedin, 
  Globe, 
  Send, 
  Sparkles, 
  FileText, 
  MessageSquare,
  Award,
  ArrowRight
} from 'lucide-react';
import { CareerUniverse } from '../types/careeros';

interface IdentityTabProps {
  universe: CareerUniverse;
}

export const IdentityTab: React.FC<IdentityTabProps> = ({ universe }) => {
  const { professionalIdentity, entryAndJobSearch } = universe;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Chapter 13 • Professional Identity & Narrative
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Positioning & Professional Identity
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              How you describe yourself in the market determines whether you are viewed as an unverified beginner or a credible, production-ready builder.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs shrink-0 max-w-md">
            <div className="font-mono text-cyan-400 font-bold uppercase text-[10px] tracking-wider mb-1">
              CAREEROS Proof-of-Skill Formula:
            </div>
            <div className="text-slate-300 font-medium leading-relaxed">
              {professionalIdentity.proofOfSkillFormula}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Headline Templates */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">ATS & LinkedIn Headline Templates</h2>
            <p className="text-slate-400 text-xs">High-converting headlines highlighting your technical stack and flagship proof.</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {professionalIdentity.headlineTemplates.map((headline, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 group">
              <span className="font-mono text-slate-200 text-xs">{headline}</span>
              <button
                onClick={() => copyToClipboard(headline, `headline-${idx}`)}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {copiedKey === `headline-${idx}` ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 30-Second Elevator Pitch */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-cyan-400" />
            <h2 className="text-base font-bold text-white tracking-tight">The 30-Second Elevator Pitch</h2>
          </div>
          <button
            onClick={() => copyToClipboard(professionalIdentity.elevatorPitch30s, 'pitch')}
            className="flex items-center gap-1 text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded-lg cursor-pointer"
          >
            {copiedKey === 'pitch' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
            <span>{copiedKey === 'pitch' ? 'Copied' : 'Copy Pitch'}</span>
          </button>
        </div>
        <p className="text-slate-400">
          Use this when an interviewer asks: "Tell me about yourself" or when introducing yourself to a peer.
        </p>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm leading-relaxed font-sans italic">
          "{professionalIdentity.elevatorPitch30s}"
        </div>
      </section>

      {/* 3. LinkedIn Profile Strategy */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
        <div className="flex items-center gap-2">
          <Linkedin className="h-4 w-4 text-blue-400" />
          <h2 className="text-base font-bold text-white tracking-tight">LinkedIn Profile Optimization Blueprint</h2>
        </div>

        {/* About Section Template */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Recommended "About" Section Copy
            </span>
            <button
              onClick={() => copyToClipboard(professionalIdentity.linkedInProfileDirection.aboutSectionTemplate, 'about')}
              className="flex items-center gap-1 text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded-lg cursor-pointer"
            >
              {copiedKey === 'about' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              <span>{copiedKey === 'about' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="text-xs text-slate-300 font-sans whitespace-pre-wrap leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
            {professionalIdentity.linkedInProfileDirection.aboutSectionTemplate}
          </pre>
        </div>

        {/* Featured Section Recommendations */}
        <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            What to Pin in Your "Featured" Carousel
          </span>
          <ul className="space-y-1.5 text-slate-300">
            {professionalIdentity.linkedInProfileDirection.featuredRecommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Direct Recruiter & Manager Outreach Messaging */}
      {entryAndJobSearch.recruiterMessagingTemplates && entryAndJobSearch.recruiterMessagingTemplates.length > 0 && (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
          <div className="flex items-center gap-2">
            <Send className="h-4 w-4 text-emerald-400" />
            <h2 className="text-base font-bold text-white tracking-tight">Direct Outreach Message Templates</h2>
          </div>
          <p className="text-slate-400 text-xs">
            Personalized note for reaching out to Engineering Managers and hiring leads with your flagship demo.
          </p>

          {entryAndJobSearch.recruiterMessagingTemplates.map((tpl, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-300">{tpl.scenario}</span>
                <button
                  onClick={() => copyToClipboard(`Subject: ${tpl.subject}\n\n${tpl.message}`, `msg-${idx}`)}
                  className="flex items-center gap-1 text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded-lg cursor-pointer"
                >
                  {copiedKey === `msg-${idx}` ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedKey === `msg-${idx}` ? 'Copied' : 'Copy Message'}</span>
                </button>
              </div>
              <div className="text-[11px] font-mono text-cyan-400 bg-slate-900/80 px-2.5 py-1 rounded">
                Subject: {tpl.subject}
              </div>
              <pre className="text-xs text-slate-300 font-sans whitespace-pre-wrap leading-relaxed bg-slate-900/40 p-3 rounded border border-slate-800/60">
                {tpl.message}
              </pre>
            </div>
          ))}
        </section>
      )}

    </div>
  );
};
