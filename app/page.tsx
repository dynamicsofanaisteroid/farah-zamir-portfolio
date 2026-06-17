import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top Header */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <div>
          <h1 className="text-6xl font-semibold tracking-[-2px] leading-none">Farah Zamir</h1>
          <p className="text-xl text-slate-600 tracking-tight mt-1">AI Engineer · LLM Evaluation &amp; Governance</p>
          
          <div className="mt-3 text-sm text-slate-500 flex flex-wrap gap-x-4">
            <a href="mailto:dynamicsofanaisteroid@gmail.com" className="hover:text-[#7bbd83] transition-colors">dynamicsofanaisteroid@gmail.com</a>
            <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" className="hover:text-[#7bbd83] transition-colors">LinkedIn</a>
            <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" className="hover:text-[#7bbd83] transition-colors">Substack</a>
            <a href="https://github.com/dynamicsofanaisteroid" target="_blank" className="hover:text-[#7bbd83] transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: '#7bbd83' }}>
          Hey, I’m Farah ✮⋆˙
        </h2>
        
        <div className="max-w-3xl space-y-6 text-[15.5px] leading-[1.7] text-slate-700">
          <p>
           Iʼm an AI Engineer focused on building evaluation infrastructure and governance frameworks for agentic AI systems. My work centres on creating
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
        </div>
      </div>

      {/* My Approach + Illustration */}
      <div className="max-w-4xl mx-auto px-6 py-14 border-t bg-slate-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ color: '#7bbd83' }}>
            My Approach
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-slate-700 mb-6">
            I believe strong AI systems are built with intention, not speed. 
          </p>
          {/* Illustration */}
          <div className="mb-8">
            <img 
              src="/approach-illustration.png" 
              alt="Illustration showing range of AI evaluation and governance activities" 
              className="w-full max-w-[520px] mx-auto rounded-xl border border-slate-200"
            />
          </div>

          <p className="text-sm text-slate-600">
            Iʼm particularly interested in technical AI governance, agent safety, and sustainable AI infrastructure. Iʼm currently
            developing ideas around neuroinspired, energy-proportional agent systems that prioritise minimal resource use,
            strong auditability, and built-in safeguards.          
          </p>
        </div>
      </div>

      {/* Key Work */}
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: '#7bbd83' }}>
          Key Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-6 border border-slate-200 rounded-2xl">
            <div className="font-semibold text-lg tracking-tight mb-2">AI Evaluation Harness</div>
            <p className="text-slate-600">
              Designed and delivered a governance-first evaluation harness for a live agentic AI system at Virgin Atlantic. 
              Processes millions of conversational spans with built-in privacy controls, human oversight, and full auditability.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-2xl">
            <div className="font-semibold text-lg tracking-tight mb-2">Skills Contract &amp; Risk Audit</div>
            <p className="text-slate-600">
              Conducted a full risk audit of a widely-deployed Databricks agent toolkit and built a pre-execution governance framework. 
              Blocked production use on five of six critical risk criteria and escalated findings to senior leadership.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-2xl">
            <div className="font-semibold text-lg tracking-tight mb-2">AI/BI Genie (Company-wide)</div>
            <p className="text-slate-600">
              Designed and shipped an internal AI/BI analytics tool from scratch. Achieved 100% benchmark accuracy before rollout 
              and saw it adopted as the organisational standard across Virgin Atlantic.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-2xl">
            <div className="font-semibold text-lg tracking-tight mb-2">OpenAI Alpha Skills Review</div>
            <p className="text-slate-600">
              Invited by Virgin Atlantic’s VP of Data &amp; AI to join a confidential OpenAI alpha channel for agent skills development. 
              Personally flagged governance risks and worked directly with OpenAI technical partners.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="max-w-4xl mx-auto px-6 py-14 border-t">
        <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: '#7bbd83' }}>
          Explore
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <Link href="/projects" className="p-6 border border-slate-200 rounded-2xl hover:border-[#7bbd83] transition-colors">
            <div className="font-semibold text-lg tracking-tight mb-2">Projects</div>
            <p className="text-slate-600">
              See curated examples of AI evaluation and governance work, research summaries, and tooling.
            </p>
          </Link>
          <Link href="/writing" className="p-6 border border-slate-200 rounded-2xl hover:border-[#7bbd83] transition-colors">
            <div className="font-semibold text-lg tracking-tight mb-2">Writing</div>
            <p className="text-slate-600">
              Read essays and notes on safety, evaluation, and sustainable agent design.
            </p>
          </Link>
          <Link href="/contact" className="p-6 border border-slate-200 rounded-2xl hover:border-[#7bbd83] transition-colors">
            <div className="font-semibold text-lg tracking-tight mb-2">Contact</div>
            <p className="text-slate-600">
              Get in touch to discuss collaborations, advisory roles, or speaking opportunities.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
