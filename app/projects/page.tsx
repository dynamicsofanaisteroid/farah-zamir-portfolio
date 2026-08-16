import Link from "next/link"
import {
  ShieldCheck,
  Gauge,
  Sparkles,
  Wheat,
  Code2,
  Terminal,
  Database,
  Infinity as InfinityIcon,
  SquareTerminal,
  Bot,
  Plug,
} from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-4">Projects</h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-12">
        A selection of my work getting AI systems off the ground — proven production-applied
        governance solutions and creative applications of agentic AI.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Skills Contract */}
        <Link
          href="/projects/skills-contract"
          className="group flex flex-col border border-slate-200 rounded-2xl p-6 hover:border-[#1e5721] hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-[#1e5721] bg-[#eaf3ea] rounded-full px-2.5 py-1 whitespace-nowrap">Technical AI Governance</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1e5721] transition-colors">Skills Contract &amp; Risk Analysis</h3>
          <p className="text-slate-600 text-[15px] leading-relaxed flex-1">
            A pre-execution governance framework for Databricks Agent Skills, built solo before integrating the
            toolkit any further. Found a path to <strong className="text-slate-800">destructive SQL via valid
            permissions</strong> — no auth bypass required — in a widely-used toolkit, and built a structured
            contract to block it.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <Code2 className="w-3 h-3" /> GitHub Copilot
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <Database className="w-3 h-3" /> Databricks
            </span>
          </div>
        </Link>

        {/* AI Evaluation Harness */}
        <Link
          href="/projects/evaluation-harness"
          className="group flex flex-col border border-slate-200 rounded-2xl p-6 hover:border-[#1e5721] hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-[#1e5721] bg-[#eaf3ea] rounded-full px-2.5 py-1 whitespace-nowrap">LLM Evaluation</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1e5721] transition-colors">AI Evaluation Harness</h3>
          <p className="text-slate-600 text-[15px] leading-relaxed flex-1">
            Sole engineer on a governance-first evaluation harness for a live agentic AI system at Virgin
            Atlantic. Processes <strong className="text-slate-800">7M+ conversational spans</strong> with
            embedded privacy controls, human oversight, and full auditability.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <Terminal className="w-3 h-3" /> Codex
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <Database className="w-3 h-3" /> Databricks
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <InfinityIcon className="w-3 h-3" /> Azure DevOps
            </span>
          </div>
        </Link>

        {/* AI/BI Genie */}
        <Link
          href="/projects/ai-bi-genie"
          className="group flex flex-col border border-slate-200 rounded-2xl p-6 hover:border-[#1e5721] hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-[#1e5721] bg-[#eaf3ea] rounded-full px-2.5 py-1 whitespace-nowrap">Internal Tooling</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1e5721] transition-colors">AI/BI Genie (Company-wide)</h3>
          <p className="text-slate-600 text-[15px] leading-relaxed flex-1">
            Solo-built an internal AI-powered analytics tool from scratch on Databricks, on top of complex
            aviation data tables. Achieved <strong className="text-slate-800">100% benchmark accuracy</strong>{" "}
            before rollout — selected as the team&apos;s flagship example and adopted as the organisational standard.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <Database className="w-3 h-3" /> Databricks Assistant
            </span>
          </div>
        </Link>

        {/* Buero Bull */}
        <Link
          href="/projects/buero-bull"
          className="group flex flex-col border border-slate-200 rounded-2xl p-6 hover:border-[#1e5721] hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center shrink-0">
              <Wheat className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-[#1e5721] bg-[#eaf3ea] rounded-full px-2.5 py-1 whitespace-nowrap">Public-Good Tooling</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1e5721] transition-colors">Buero Bull</h3>
          <p className="text-slate-600 text-[15px] leading-relaxed flex-1">
            A solo-built, in-production guidance layer translating UK farm compliance and grants rules into
            plain English for English farmers. Fills a fixed process-page template —{" "}
            <strong className="text-slate-800">never freeform chat</strong> — with visible verification dates.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <SquareTerminal className="w-3 h-3" /> Claude Code
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <Plug className="w-3 h-3" /> Claude API
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
              <Bot className="w-3 h-3" /> Grok
            </span>
          </div>
        </Link>

      </div>
    </div>
  )
}
