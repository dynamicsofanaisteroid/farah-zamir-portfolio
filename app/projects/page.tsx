import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-4">Projects</h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-12">
        A selection of my work in AI evaluation, governance frameworks, and technical AI governance research.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Project 1: Skills Contract & Risk Analysis*/}
        <div className="border rounded-xl p-6 hover:shadow-sm transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Skills Contract & Risk Analysis</h3>
          <p className="text-slate-600 mb-4">
            A pre-execution governance framework for Databricks Agent Skills. 
            Identified critical vulnerabilities in widely-used toolkits and built a structured contract 
            to prevent malicious or destructive operations.
          </p>
          <span className="text-sm text-slate-500">Technical AI Governance • Agent Safety</span>
        </div>

        {/* Project 2: AI Evaluation Harness */}
        <div className="border rounded-xl p-6 hover:shadow-sm transition-shadow">
          <h3 className="text-xl font-semibold mb-3">AI Evaluation Harness</h3>
          <p className="text-slate-600 mb-4">
            Designed and delivered a governance-first evaluation system for a production agentic AI system at Virgin Atlantic. 
            Processes millions of conversational spans with embedded privacy controls, human oversight, and full auditability.
          </p>
          <span className="text-sm text-slate-500">Production AI • LLM Evaluation • Governance</span>
        </div>

        {/* Project 3: Synapse Warehouse */}
        <div className="border rounded-xl p-6 hover:shadow-sm transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Synapse Warehouse</h3>
          <p className="text-slate-600 mb-4">
            Research proposal for neuro-inspired, energy-proportional AI infrastructure. 
            Explores event-driven spiking agents, cryptographic audit trails, and minimal-resource agent systems 
            inspired by the human brain’s efficiency.
          </p>
          <span className="text-sm text-slate-500">Sustainable AI • Technical Governance • Research</span>
        </div>

        {/* Project 4: ERA Technical AI Governance Proposal */}
        <div className="border rounded-xl p-6 hover:shadow-sm transition-shadow">
          <h3 className="text-xl font-semibold mb-3">Technical AI Governance Proposal</h3>
          <p className="text-slate-600 mb-4">
            Proposed solution to open problems in Technical AI Governance, drawing on production experience 
            with agent governance and evaluation. Developed for fellowship applications in the ERA TechGov track.
          </p>
          <span className="text-sm text-slate-500">Technical AI Governance • ERA Fellowship</span>
        </div>

      </div>
    </div>
  )
}