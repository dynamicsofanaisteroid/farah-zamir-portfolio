import Link from "next/link"

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-4">Research</h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-12">
        Research proposals and exploratory work in technical AI governance, 
        agent safety, and sustainable AI infrastructure.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Synapse Warehouse */}
        <div className="border rounded-xl p-6 hover:shadow-sm transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Synapse Warehouse</h3>
          <p className="text-slate-600 mb-4">
            A research proposal for neuro-inspired, energy-proportional AI infrastructure. 
            Explores event-driven spiking agents, cryptographic audit trails, and minimal-resource 
            systems inspired by the efficiency of the human brain.
          </p>
          <span className="text-sm text-slate-500">Sustainable AI • Technical Governance • Research Proposal</span>
        </div>

        {/* ERA Technical AI Governance Proposal */}
        <div className="border rounded-xl p-6 hover:shadow-sm transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Technical AI Governance Proposal</h3>
          <p className="text-slate-600 mb-4">
            Proposed solution addressing open problems in Technical AI Governance. 
            Draws on production experience with agent governance, evaluation, and pre-execution 
            safeguards. Developed as part of fellowship applications in the ERA TechGov track.
          </p>
          <span className="text-sm text-slate-500">Technical AI Governance • ERA Fellowship • Research</span>
        </div>

      </div>
    </div>
  )
}