import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top Header */}
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

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Hey, I’m Farah 👋</h2>
        
        <div className="max-w-3xl space-y-5 text-[20.5px] leading-relaxed text-slate-700">
          <p>
            I’m an AI Engineer focused on building evaluation infrastructure and governance frameworks for agentic AI systems. 
            My work centres on creating systems that are not only effective, but genuinely safe, auditable, and sustainable at scale.
          </p>
          <p>
            Before entering AI, I spent nearly eight years in cultural heritage and public sector information management. 
            I worked with national archival standards, sensitive data protection, and long-term preservation at institutions including 
            the Parliamentary Archives and the Science Museum Group. I’m still a librarian at heart — this background gave me a deep 
            appreciation for accountability, risk, and building systems designed to stand up to scrutiny over time.
          </p>
          <p>
            At Virgin Atlantic, I designed and delivered a governance-first AI Evaluation Harness for a live agentic AI system, 
            processing millions of conversational interactions while embedding privacy controls, human oversight, and full auditability from the start. 
            I also created the Skills Contract, a pre-execution governance framework that identified and mitigated significant risks in agent tooling.
          </p>
          <p>
            I’m particularly interested in technical AI governance, agent safety, and sustainable AI infrastructure. 
            I’m currently developing ideas around neuro-inspired, energy-proportional agent systems that prioritise minimal resource use, 
            strong auditability, and built-in safeguards.
          </p>
        </div>
      </div>

      {/* My Approach + Illustration */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-t bg-slate-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">My Approach</h2>
          <p className="text-[15.5px] text-slate-700 mb-6">
            I believe strong AI systems are built with intention, not speed.
          </p>

          {/* Illustration - Replace with your actual image */}
          <div className="mb-6">
            <img 
              src="/approach-illustration.png" 
              alt="Illustration showing protective layers around AI - and new ways of thinking about AI governance" 
              className="w-full max-w-[520px] mx-auto rounded-xl border border-slate-200"
            />
          </div>

          <p className="text-sm text-slate-600">
            I’m drawn to opportunities where I can combine engineering experience with a preservation-oriented mindset 
            to help organisations deploy AI responsibly — especially in high-stakes or public-interest contexts.
          </p>
        </div>
      </div>

      {/* Key Work - Strengthened */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Key Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">AI Evaluation Harness</div>
            <p className="text-slate-600">
              Designed and delivered a governance-first evaluation harness for a live agentic AI system at Virgin Atlantic. 
              Processes millions of conversational spans with built-in privacy controls, human oversight, and full auditability.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">Skills Contract &amp; Risk Audit</div>
            <p className="text-slate-600">
              Conducted a full risk audit of a widely-deployed Databricks agent toolkit and built a pre-execution governance framework. 
              Blocked production use on five of six critical risk criteria and escalated findings to senior leadership.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">AI/BI Genie (Company-wide)</div>
            <p className="text-slate-600">
              Designed and shipped an internal AI/BI analytics tool from scratch. Achieved 100% benchmark accuracy before rollout 
              and saw it adopted as the organisational standard across Virgin Atlantic.
            </p>
          </div>
          <div className="p-5 border rounded-xl">
            <div className="font-medium mb-2">OpenAI Alpha Skills Review</div>
            <p className="text-slate-600">
              Invited by Virgin Atlantic’s VP of Data &amp; AI to join a confidential OpenAI alpha channel for agent skills development. 
              Personally flagged governance risks and worked directly with OpenAI technical partners.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Section */}
<div className="max-w-4xl mx-auto px-6 py-10 border-t">
  <h2 className="text-2xl font-semibold tracking-tight mb-6">Explore</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Link 
      href="/projects" 
      className="block p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:border-teal-200 hover:shadow-md transition-all duration-200"
    >
      <div className="font-medium mb-1 text-slate-900">Projects</div>
      <p className="text-sm text-slate-600">
        Full case studies of the AI Evaluation Harness and Skills Contract.
      </p>
    </Link>

    <Link 
      href="/research" 
      className="block p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:bg-white hover:border-teal-200 hover:shadow-md transition-all duration-200"
    >
      <div className="font-medium mb-1 text-slate-900">Research</div>
      <p className="text-sm text-slate-600">
        Synapse Warehouse and work in technical AI governance.
      </p>
    </Link>
  </div>
</div>
    </div>
  )
}