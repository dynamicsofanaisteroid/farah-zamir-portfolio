import Link from "next/link"

export default function EvaluationHarnessPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">AI Evaluation Harness</h1>
      <p className="text-lg text-slate-600 mb-10">Production LLM Evaluation • Governance-First Design</p>

      {/* The Problem */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38]">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">The Problem</h2>
        
        <p>
          Virgin Atlantic’s AI Concierge handles customer queries across web, IVR, and contact centre channels. 
          While volume metrics (sessions, response times, escalation rates) were available, there was no 
          systematic way to measure <strong>quality</strong> — whether the agent was actually helping customers, 
          whether its routing decisions were appropriate, or where it was creating friction.
        </p>

        <p>
          Existing monitoring tools treated observability spans as isolated events. This made it impossible to 
          evaluate full customer journeys or assess whether the agent’s decision to escalate (or not escalate) 
          was the right call. Without a reliable measurement layer, product decisions were based on intuition 
          rather than evidence.
        </p>
      </div>

      {/* What I Built */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">What I Built</h2>
        
        <p>
          I designed and delivered a <strong>governance-first LLM-as-a-Judge evaluation harness</strong> that 
          scores real customer conversations across 11 quality dimensions. The system processes 7M+ DataDog 
          telemetry spans, reconstructs complete customer journeys, and produces structured, auditable insights 
          about where the agent succeeds and where it fails.
        </p>

        <p>
          The harness was built as a reusable, extensible platform (not a one-off script), with a Product Adapter 
          pattern that allows it to evaluate other AI products in the future by swapping schema, taxonomy, and 
          escalation signals.
        </p>
      </div>

      {/* Key Innovations */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Key Innovations</h2>
        
        <p>
          Several design decisions make this harness more robust and trustworthy than typical evaluation setups:
        </p>

        <div className="space-y-4 pl-4">
          <div>
            <strong className="text-[#301f1f]">Three-Column Escalation Model</strong><br />
            Instead of asking the judge “was the response good?”, the harness measures whether the <em>routing decision</em> was appropriate. It captures three factual and inferred signals: which routing agents were considered, where the customer was actually sent, and whether that decision was correct given the conversation context.
          </div>
          <div>
            <strong className="text-[#301f1f]">Factual Grounding for the Judge</strong><br />
            The LLM judge receives structured telemetry signals (escalation actions, outcomes) alongside the conversation text. This dramatically reduces hallucination and produces more defensible assessments than text-only evaluation.
          </div>
          <div>
            <strong className="text-[#301f1f]">Span-to-Conversation Translation + Noise Filtering</strong><br />
            Raw observability data contains fragments, system prompts, and internal routing spans. The harness filters these natively in Spark before evaluation, so the judge sees clean, complete customer journeys rather than noise.
          </div>
          <div>
            <strong className="text-[#301f1f]">Product Adapter Pattern</strong><br />
            A small configuration block controls product name, taxonomy, and escalation signals. This makes the harness reusable across different AI products without rewriting core logic.
          </div>
        </div>
      </div>

      {/* Results & Insights */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Results & Key Insights</h2>
        
        <p>
          In a baseline run of 200 real customer conversations, the harness surfaced a clear and actionable finding:
        </p>

        <div className="bg-white border border-[#e8d7b5] rounded-xl p-6 my-6">
          <p className="font-medium text-[#301f1f] mb-2">Core Insight: Under-escalation is a quantified risk.</p>
          <p>
            46.5% of sessions had no escalation. This cohort had the <strong>lowest average quality score (3.54/5)</strong> 
            and the <strong>highest frustration rate (14%)</strong>. In contrast, sessions routed to topic-specific 
            queues scored 4.0–4.5 with zero frustration.
          </p>
          <p className="mt-3 text-sm">
            The routing logic itself is sound. The problem is the agent’s <em>confidence threshold</em> for escalating — 
            it is too conservative. This is a tunable parameter with a measurable outcome.
          </p>
        </div>

        <p>
          Additional findings included strong brand tone (4.55/5) but weaker helpfulness/correctness (3.75/5), 
          and clear performance differences across booking-related intents — valuable signals for prioritising 
          knowledge base and RAG improvements.
        </p>
      </div>

      {/* Impact & Why It Matters */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Impact & Why It Matters</h2>
        
        <p>
          This work demonstrates how to build <strong>trustworthy, governance-aware evaluation infrastructure</strong> 
          for production agentic systems. By grounding the LLM judge in factual telemetry signals and enforcing 
          clear data contracts, the harness produces defensible, auditable results rather than opaque scores.
        </p>

        <p>
          The three-column escalation model is particularly relevant for organisations integrating AI agents with 
          contact centre systems. It moves evaluation beyond “was the response good?” to “was the routing decision 
          appropriate?” — a question with direct operational and financial consequences.
        </p>
      </div>

      {/* Artifacts */}
      <div className="mt-12 pt-8 border-t border-[#e8d7b5]">
        <h2 className="text-xl font-semibold tracking-tight text-[#301f1f] mb-4">Artifacts</h2>
        <p className="text-[15.5px] text-[#571e38] mb-4">
          Full technical documentation, notebooks, session plans, and handover materials are available in the repository:
        </p>
        <ul className="text-[15.5px] text-[#571e38] space-y-1.5">
          <li>• <a href="https://github.com/dynamicsofanaisteroid/farah-zamir-portfolio" target="_blank" className="underline hover:text-[#1e5721]">GitHub Repository</a></li>
          <li>• Complete Evaluation Harness notebook (F03) with end-to-end pipeline</li>
          <li>• F01 Pipeline Skill (data contract and normalisation layer)</li>
          <li>• Detailed session plan and technical decision records</li>
          <li>• Baseline results and escalation analysis (n=200)</li>
        </ul>
      </div>
    </div>
  )
}