import Link from "next/link"

export default function SynapseWarehousePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/research" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Research
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">Synapse Warehouse</h1>
      <p className="text-lg text-slate-600 mb-10">Neuro-Inspired, Energy-Proportional, Governed AI Infrastructure</p>

      {/* Overview */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38]">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Overview</h2>
        <p>
          The Synapse Warehouse is a proposed architectural departure from today’s monolithic, always-on AI infrastructure. 
          It draws inspiration from the human brain’s ability to perform complex reasoning on roughly 20 watts, while 
          addressing the massive, irreversible resource consumption risks posed by current global AI scaling trends.
        </p>
        <p>
          The core idea is to build an AI system that is <strong>event-driven, sparse, and governed by design</strong> — 
          activating only the compute resources a task actually requires, while embedding strong auditability, 
          provenance, and safety constraints at the architectural level.
        </p>
      </div>

      {/* Key Components */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Key Components</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-[#301f1f] mb-2">Cortex Scrim</h3>
            <p>
              An ultra-low-power orchestration layer that performs intent classification and activates only the 
              specific compute path required for a task. Early estimates suggest this could reduce idle consumption 
              by up to 90%. Research question: Which low-power neuromorphic chips (e.g. Intel Loihi 2, IBM NorthPole) 
              are best suited for this orchestration role, and why?
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#301f1f] mb-2">Spiking Agent Nodes</h3>
            <p>
              Pre-configured agents powered by event-driven “spikes,” designed using neuromorphic agent engineering principles. 
              These nodes form governed networks with built-in gating mechanisms that can enforce safety boundaries, 
              prevent misuse, and limit energy overconsumption. Research question: Can a spiking architecture provide 
              a physical “kill switch” for high-risk capabilities (e.g. biological weapons synthesis) while keeping 
              safety-critical systems online, and can it help mitigate scheming behaviour in advanced agents?
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#301f1f] mb-2">Watermarking &amp; Auditability Trail</h3>
            <p>
              Every output from a Synapse Node is cryptographically signed and watermarked, linking it to its training data, 
              guardrails, and energy consumption metadata. This creates a verifiable chain of custody that prevents 
              “AI washing” and clearly delineates where human oversight is required.
            </p>
          </div>
        </div>
      </div>

      {/* Long-term Vision */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Long-term Vision &amp; Theory of Change</h2>
        <p>
          The ultimate goal is to design and prototype the AI Governed Layer, then partner with neuromorphic hardware 
          researchers (e.g. ARM, Intel) and renewable energy providers to implement energy-efficient, follow-the-sun 
          compute solutions. By making governance and energy proportionality architectural features rather than 
          after-the-fact constraints, the Synapse approach aims to reduce both the environmental footprint and 
          catastrophic risk surface of advanced AI systems.
        </p>
      </div>

      {/* Status */}
      <div className="mt-12 pt-8 border-t border-[#e8d7b5]">
        <p className="text-sm text-slate-500 italic">
          This proposal is at an early conceptual stage. I am actively developing the technical details and 
          research questions as part of my broader work in technical AI governance.
        </p>
      </div>
    </div>
  )
}