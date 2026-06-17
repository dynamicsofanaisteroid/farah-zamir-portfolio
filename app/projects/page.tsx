import Link from "next/link"
import { ArrowRight } from "lucide-react"   // ← Add this line
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

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* Skills Contract Card */}
<Link 
  href="/projects/skills-contract" 
  className="block border rounded-xl p-6 hover:shadow-sm transition-shadow group"
>
  <h3 className="text-xl font-semibold mb-3">Skills Contract & Risk Analysis</h3>
  <p className="text-slate-600 mb-4">
    A pre-execution governance framework for Databricks Agent Skills. 
    Identified critical vulnerabilities in widely-used toolkits and built a structured contract 
    to prevent malicious or destructive operations.
  </p>
  
  <div className="flex items-center justify-between">
    <span className="text-sm text-slate-500">Technical AI Governance • Agent Safety</span>
    
    {/* Arrow icon added here */}
    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
  </div>
</Link>

      </div>
    </div>
  )
}