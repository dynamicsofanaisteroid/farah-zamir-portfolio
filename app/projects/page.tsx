import Link from "next/link"
import { ArrowRight } from "lucide-react"   // ← Add this line
export default function ProjectsPage() {
  return (
<div className="grid gap-8 md:grid-cols-2">

  {/* Skills Contract Card */}
  <Link href="/projects/skills-contract" className="block border rounded-xl p-6 hover:shadow-sm transition-shadow">
    <h3 className="text-xl font-semibold mb-3">Skills Contract & Risk Analysis</h3>
    <p className="text-slate-600 mb-4">
      A pre-execution governance framework for Databricks Agent Skills 
      Identified critical vulnerabilities in widely-used toolkits and built a structured contract 
      to prevent malicious or destructive operations. 
    </p>
    <span className="text-sm text-slate-500">Technical AI Governance • Agent Safety</span>
  </Link>

  {/* AI Evaluation Harness Card */}
  <Link href="/projects/evaluation-harness" className="block border rounded-xl p-6 hover:shadow-sm transition-shadow">
    <h3 className="text-xl font-semibold mb-3">AI Evaluation Harness</h3>
    <p className="text-slate-600 mb-4">
      Designed and delivered a pioneer governance-first Evaluation Harness, providing quality & metrics for a production agentic AI system - and other AI products - at Virgin Atlantic. 
      Processes millions of conversational spans with embedded privacy controls, human oversight, and full auditability.
    </p>
    <span className="text-sm text-slate-500">Production AI • LLM Evaluation • Governance</span>
  </Link>

  {/* AI/BI Genie Card */}
  <Link href="/projects/ai-bi-genie" className="block border rounded-xl p-6 hover:shadow-sm transition-shadow">
    <h3 className="text-xl font-semibold mb-3">AI/BI Genie (Company-wide)</h3>
    <p className="text-slate-600 mb-4">
      Designed and shipped an internal AI-powered analytics LLM tool from scratch, using the Databricks platform on top of complex aviation data tables. Achieved 100% benchmark accuracy 
      before rollout. Accompanied by a DIY Genie Kit & Version Log that were adopted as organisational standards across Virgin Atlantic.
    </p>
    <span className="text-sm text-slate-500">Production AI • Internal Tooling • Governance</span>
  </Link>

    </div>
  )
}