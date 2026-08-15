import Link from "next/link"
import { Gauge, ShieldCheck, Sparkles, Wheat, KeyRound, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top Header */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <div>
          <h1 className="text-6xl font-semibold tracking-[-2px] leading-none">Farah Zamir</h1>
          <p className="text-xl text-slate-600 tracking-tight mt-1">AI Engineer · Automation, Evaluation &amp; Governance</p>

          <div className="mt-3 text-sm text-slate-500 flex flex-wrap gap-x-4">
            <a href="mailto:dynamicsofanaisteroid@gmail.com" className="hover:text-[#1e5721] transition-colors">dynamicsofanaisteroid@gmail.com</a>
            <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e5721] transition-colors">LinkedIn</a>
            <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e5721] transition-colors">Substack</a>
            <a href="https://github.com/dynamicsofanaisteroid" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e5721] transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: '#1e5721' }}>
          Hey, I’m Farah ✮⋆˙
        </h2>

        <div className="max-w-3xl space-y-5 text-[15.5px] leading-[1.7] text-slate-700">
          <p>
           I’m an AI Engineer focused on building evaluation infrastructure, automation, and governance frameworks for agentic AI systems. My work centres on creating
          systems that are not only effective, but genuinely safe, auditable, and
          sustainable at scale.
          </p>
          <p>
            At Virgin Atlantic, I designed and delivered a governance-first AI Evaluation
          Harness for a live agentic AI system, processing millions of conversational
          interactions while embedding privacy controls, human oversight, and full
          auditability from the start. I also created the Skills Contract, a pre-execution
          governance framework that identified and mitigated significant risks in agent
          tooling.
          </p>
          <p>
            Alongside that, I like building things end-to-end myself — most recently Buero
          Bull, a retrieval-grounded app that translates UK farm compliance and grants
          guidance into plain English for English farmers. I think the same discipline that
          makes production AI systems safe — structured outputs, auditable pipelines, honest
          failure modes — is also what makes them genuinely useful, and I care about applying
          that where it does public good.
          </p>
        </div>
      </div>

      {/* My Approach + Illustration */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-t bg-slate-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ color: '#1e5721' }}>
            My Approach
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-slate-700 mb-6">
            I believe strong AI systems are built with intention, not speed.
          </p>
          {/* Illustration */}
          <div className="mb-6">
            <img
              src="/approach-illustration.png"
              alt="Illustration showing range of AI evaluation and governance activities"
              className="w-full max-w-[520px] mx-auto rounded-xl border border-slate-200"
            />
          </div>

          <p className="text-sm text-slate-600">
            I’m particularly interested in technical AI governance, agent safety, and sustainable AI infrastructure. I’m currently
            developing ideas around neuroinspired, energy-proportional agent systems that prioritise minimal resource use,
            strong auditability, and built-in safeguards.
          </p>
        </div>
      </div>

      {/* Key Work */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold tracking-tight mb-2" style={{ color: '#1e5721' }}>
          Key Work
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Selected outcomes — rows with an arrow link through to the full write-up.
        </p>

        <div className="border border-slate-200 rounded-2xl divide-y divide-slate-200 overflow-hidden">
          <Link
            href="/projects/evaluation-harness"
            className="group flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center">
              <Gauge className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[15px] tracking-tight">AI Evaluation Harness</div>
              <p className="text-sm text-slate-600">7M+ conversational spans, scored across 11 quality dimensions.</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#1e5721] group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          <Link
            href="/projects/skills-contract"
            className="group flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[15px] tracking-tight">Skills Contract &amp; Risk Audit</div>
              <p className="text-sm text-slate-600">Blocked 5 of 6 risk checks on a widely-used agent toolkit.</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#1e5721] group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          <Link
            href="/projects/ai-bi-genie"
            className="group flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[15px] tracking-tight">AI/BI Genie</div>
              <p className="text-sm text-slate-600">100% benchmark accuracy, adopted company-wide.</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#1e5721] group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          <Link
            href="/projects/buero-bull"
            className="group flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center">
              <Wheat className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[15px] tracking-tight">Buero Bull</div>
              <p className="text-sm text-slate-600">Solo-built RAG app, ~2,000 GOV.UK guidance chunks, in production.</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#1e5721] group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          <div className="flex items-center gap-4 px-5 py-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[15px] tracking-tight">OpenAI Alpha Skills Review</div>
              <p className="text-sm text-slate-600">Invited into a confidential OpenAI alpha for agent skills development.</p>
            </div>
            <span className="text-[11px] uppercase tracking-wide text-slate-400 shrink-0">No write-up</span>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-t">
        <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: '#1e5721' }}>
          Explore
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/projects"
            className="block p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:border-[#1e5721] hover:shadow-md transition-all duration-200"
          >
            <div className="font-semibold text-lg tracking-tight mb-1">Projects</div>
            <p className="text-sm text-slate-600">Full case studies across AI governance, evaluation, and applied builds.</p>
          </Link>

          <Link
            href="/research"
            className="block p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:border-[#1e5721] hover:shadow-md transition-all duration-200"
          >
            <div className="font-semibold text-lg tracking-tight mb-1">Research</div>
            <p className="text-sm text-slate-600">Synapse Warehouse and work in technical AI governance.</p>
          </Link>

          <Link
            href="/about"
            className="block p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:border-[#1e5721] hover:shadow-md transition-all duration-200"
          >
            <div className="font-semibold text-lg tracking-tight mb-1">About</div>
            <p className="text-sm text-slate-600">My background, my ethos, and what I’m working toward.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
