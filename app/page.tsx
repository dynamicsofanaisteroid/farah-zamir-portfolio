import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top Header - Arash style */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight">Farah Zamir</h1>
          <p className="text-xl text-slate-600 mt-1">AI Engineer · LLM Evaluation &amp; Governance</p>
          
          <div className="mt-3 text-sm text-slate-500 flex flex-wrap gap-x-4">
            <a href="mailto:dynamicsofanaisteroid@gmail.com" className="hover:text-slate-700">dynamicsofanaisteroid@gmail.com</a>
            <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" className="hover:text-slate-700">LinkedIn</a>
            <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" className="hover:text-slate-700">Substack</a>
            <a href="https://github.com/dynamicsofanaisteroid" target="_blank" className="hover:text-slate-700">GitHub</a>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Hey, I’m Farah 👋</h2>
        
        <div className="max-w-3xl space-y-5 text-[15.5px] leading-relaxed text-slate-700">
          <p>
            I’m an AI Engineer building production evaluation infrastructure and governance frameworks for agentic AI systems. 
            I currently work at Virgin Atlantic, where I architected and delivered a <strong>governance-first AI Evaluation Harness</strong> 
            for a live agentic system — processing millions of conversational spans while embedding privacy controls, human oversight, 
            and full auditability from the start.
          </p>
          <p>
            I also created the <strong>Skills Contract</strong>, a pre-execution governance framework that identified undocumented attack vectors 
            in a widely-deployed Databricks agent toolkit. The framework blocked production use on five of six critical risk criteria and 
            was escalated to the VP of Data &amp; AI.
          </p>
          <p>
            Before AI, I spent nearly eight years in public sector information management and digital preservation, working with national 
            archival standards at the Parliamentary Archives and Science Museum Group. This background shapes how I approach AI governance — 
            with a strong focus on provenance, accountability, and long-term risk.
          </p>
        </div>
      </div>

      {/* Key Work Highlights - Silhouetting CV achievements */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-t">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Key Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">AI Evaluation Harness</div>
            <p className="text-slate-600">
              Designed and built a standalone, governance-first evaluation harness for LLM agent systems. 
              Includes privacy-aware data contracts over 7M+ spans, version-aware governance, proxy vs human ground truth separation, 
              and MLflow-instrumented execution.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">Skills Contract &amp; Risk Audit</div>
            <p className="text-slate-600">
              Conducted a full risk audit of a Databricks ai-dev-kit and built a pre-execution governance layer. 
              Validated against four agent skills and blocked production deployment on five of six critical criteria. 
              Escalated to senior leadership.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">AI/BI Genie (Company-wide Tool)</div>
            <p className="text-slate-600">
              Designed and shipped an internal AI/BI analytics tool from scratch. Achieved 100% accuracy on benchmark evaluation 
              before rollout and was adopted as the organisational standard across Virgin Atlantic.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">OpenAI Alpha Skills Review</div>
            <p className="text-slate-600">
              Invited by Virgin Atlantic’s VP of Data &amp; AI to join a confidential OpenAI alpha channel. 
              Personally liaised with OpenAI technical partners to flag and mitigate governance risks in agent skills development.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-t">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Explore</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/projects" className="block p-6 border rounded-2xl hover:border-slate-300 transition-colors">
            <div className="font-medium mb-1">Projects</div>
            <p className="text-sm text-slate-600">Full case studies of the AI Evaluation Harness and Skills Contract.</p>
          </Link>
          <Link href="/research" className="block p-6 border rounded-2xl hover:border-slate-300 transition-colors">
            <div className="font-medium mb-1">Research</div>
            <p className="text-sm text-slate-600">Synapse Warehouse — neuro-inspired, energy-proportional governed AI infrastructure.</p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t text-sm text-slate-500">
        <p>
          I’m particularly interested in technical AI governance, agent safety, and building systems that can be trusted at scale. 
          Feel free to reach out.
        </p>
      </div>
    </div>
  )
}