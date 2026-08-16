import Link from "next/link"
import {
  GraduationCap,
  SquareTerminal,
  Terminal,
  Bot,
  Code2,
  Database,
  Infinity as InfinityIcon,
  Plug,
  Network,
  Workflow,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-6">About</h1>

      <div className="inline-flex items-center gap-2 text-sm font-medium text-[#1e5721] bg-[#eaf3ea] rounded-full px-3 py-1.5 mb-8">
        <GraduationCap className="w-4 h-4 shrink-0" />
        Currently: Level 6 AI Engineering Apprenticeship, Cambridge Spark — expected Jan 2027
      </div>

      <div className="space-y-6 text-slate-700 leading-relaxed text-[15px]">
        <p>
          Hi, I’m Farah! I’m an AI Engineer focused on building evaluation infrastructure, automation, and governance frameworks for agentic AI systems — most recently as an AI Engineer at Virgin Atlantic, and currently building Buero Bull independently. My work centres on creating systems that are not only effective, but genuinely safe, auditable, and sustainable at scale.
        </p>

        <p>
          🏛️ Before entering AI, I spent nearly eight years in cultural heritage and public sector information management — the Parliamentary Archives, the National Science and Media Museum, and five years running metadata and resource records at Watford Central Library. I’m still a librarian at heart, and it’s why I care about conservation, preservation, and building systems designed to stand up to scrutiny over time.
        </p>

        <p>
          I’m particularly interested in technical AI governance, agent safety, and sustainable AI infrastructure. I’m currently developing ideas around neuro-inspired, energy-proportional agent systems that prioritise minimal resource use, strong auditability, and built-in safeguards. You can read more about this in my Synapse Warehouse proposal.
        </p>

        {/* Experience */}
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mt-10 mb-5">Experience</h2>

        <div className="space-y-7">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <div className="font-semibold text-slate-900">AI Engineer — Virgin Atlantic</div>
              <div className="text-sm text-slate-500 whitespace-nowrap">Oct 2025 – Jun 2026</div>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              No other AI specialists on the team — sole engineer on all three initiatives below.
            </p>
            <ul className="mt-2 space-y-1.5 text-[15px] text-slate-700 list-disc pl-5">
              <li>Translated a broad mandate for AI-programme-wide evaluation into a working AI Evaluation Harness, architected solo end-to-end — including a privacy-aware Spark pipeline over 7M+ observability spans.</li>
              <li>Diagnosed a telemetry parsing issue that cut NULL rates from ~80% to ~20%, then cut downstream validation from ~23 minutes to sub-minute.</li>
              <li>Proactively audited an agent-skills toolkit before integrating it, found a path to destructive SQL via valid permissions with no audit trail, and built the Skills Contract governance framework in response — applied it to every skill built afterward.</li>
              <li>Built AI/BI Genie solo end-to-end, from stakeholder outreach to a reusable enablement kit — selected as the team’s flagship example, and became the informal specialist other teams turned to.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <div className="font-semibold text-slate-900">Buero Bull — Independent Project</div>
              <div className="text-sm text-slate-500 whitespace-nowrap">2026 – Present</div>
            </div>
            <ul className="mt-2 space-y-1.5 text-[15px] text-slate-700 list-disc pl-5">
              <li>Solo-built a full-stack RAG service (Next.js/TypeScript, FastAPI, ChromaDB, Claude API) turning GOV.UK farming guidance into compliance search and grant navigation.</li>
            </ul>
            <Link href="/projects/buero-bull" className="inline-block text-sm font-medium text-[#1e5721] hover:underline mt-1.5">
              Full write-up →
            </Link>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <div className="font-semibold text-slate-900">AI Chatbot Trainer — Data Annotation AI</div>
              <div className="text-sm text-slate-500 whitespace-nowrap">Mar 2025 – Oct 2025</div>
            </div>
            <ul className="mt-2 space-y-1.5 text-[15px] text-slate-700 list-disc pl-5">
              <li>Evaluated GPT and Claude outputs for accuracy, tone, safety, and instruction adherence — hands-on, RLHF-adjacent evaluation work.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <div className="font-semibold text-slate-900">Database Assistant — Sue Ryder</div>
              <div className="text-sm text-slate-500 whitespace-nowrap">Oct 2024 – Mar 2025</div>
            </div>
            <ul className="mt-2 space-y-1.5 text-[15px] text-slate-700 list-disc pl-5">
              <li>Managed sensitive donor and financial data in Raiser’s Edge CRM: batch processing, validation, error handling.</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <div className="font-semibold text-slate-900">Library Assistant — Watford Central Library</div>
              <div className="text-sm text-slate-500 whitespace-nowrap">Sept 2019 – Aug 2024</div>
            </div>
            <ul className="mt-2 space-y-1.5 text-[15px] text-slate-700 list-disc pl-5">
              <li>Maintained metadata and resource records (SPYDUS, Dewey Decimal) for a high-volume public library service.</li>
            </ul>
          </div>

          <p className="text-sm text-slate-500">
            Earlier: Collection Care &amp; Records Management Assistant, Parliamentary Archives (2017–18) · National Science and Media Museum (2016–17).
          </p>
        </div>

        {/* How I Build */}
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mt-10 mb-4">How I Build</h2>

        <p>
          I’m not a traditionally trained software engineer — I’m a technical person who likes building things, and I lean on AI coding assistants to move fast while staying hands-on with the parts that matter: architecture, data contracts, and the judgment calls a model shouldn’t make alone. In practice that means reproducing defects with live probes before patching, and re-reading current repository state after concurrent agent edits rather than trusting stale context.
        </p>

        <div className="flex flex-wrap gap-3 my-6">
          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <SquareTerminal className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">Claude Code</span>
          </div>

          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">Codex</span>
          </div>

          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Bot className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">Grok</span>
          </div>

          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">GitHub Copilot</span>
          </div>

          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">Databricks</span>
          </div>

          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <InfinityIcon className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">Azure DevOps</span>
          </div>

          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Plug className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">APIs</span>
          </div>

          <div className="group flex items-center gap-2 border border-slate-200 rounded-full pl-2 pr-4 py-2 hover:border-[#1e5721] hover:bg-[#eaf3ea] transition-colors">
            <div className="w-7 h-7 rounded-full bg-[#eaf3ea] text-[#1e5721] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Network className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">MCP &amp; connectors</span>
          </div>

          <div className="group flex items-center gap-2 border border-dashed border-slate-300 rounded-full pl-2 pr-4 py-2">
            <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Workflow className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-500">Power Platform / Copilot Studio</span>
            <span className="text-[10px] uppercase tracking-wide text-slate-400 ml-0.5">learning</span>
          </div>
        </div>

        <p>
          Comfortable with Python and SQL at a beginner-to-intermediate level and Excel at an intermediate level. I’ve built and shipped production Spark pipelines, evaluation harnesses, and Genies on Databricks, alongside work in Azure DevOps. Before AI, working daily inside systems like Raiser’s Edge and SPYDUS is probably why I still think in terms of provenance, retention, and audit trails first.
        </p>

        {/* Goals / Direction - Highlighted */}
<div className="mt-8 bg-[#f0f7f0] border border-[#1e5721] rounded-xl p-6">
  <p className="text-[15.5px] leading-relaxed text-slate-700">
    My goal is to apply my engineering experience — with a preservation-oriented, public-good mindset —
    to help organisations make complex information easier to navigate without obscuring provenance,
    uncertainty, or human responsibility. That’s the throughline across agricultural administration,
    cultural heritage, public libraries, and higher education: preventing avoidable risks, keeping systems
    auditable, and making sure the people who rely on them can trust what they’re being told.
  </p>

  <p className="text-[15.5px] leading-relaxed text-slate-600 mt-4">
    Outside of work, I enjoy indie video games, cooking up a storm, and walking in the woodlands I hope to help conserve one day. 🌳
  </p>
</div>      </div>
    </div>
  )
}
