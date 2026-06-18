import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-10">About</h1>

      <div className="space-y-6 text-slate-700 leading-relaxed text-[15px]">
        <p>
          Hi, I’m Farah! I’m an AI Engineer focused on building evaluation infrastructure and governance frameworks for agentic AI systems. My work centres on creating systems that are not only effective, but genuinely safe, auditable, and sustainable at scale.
        </p>
        
        <p>
          🏛️ Before entering AI, I spent nearly eight years in cultural heritage and public sector information management. I worked with national archival standards, sensitive data protection, and long-term preservation at institutions including the Parliamentary Archives and the Science Museum Group. I’m still a librarian at heart - and my background makes me dedicated to conservation, preservation, and building systems designed to stand up to scrutiny over time.         </p>
        
        <p>
          At Virgin Atlantic, I designed and delivered a governance-first AI Evaluation Harness for a live agentic AI system, processing millions of conversational interactions while embedding privacy controls, human oversight, and full auditability from the start. I also created the Skills Contract, a pre-execution governance framework that identified and mitigated significant risks in agent tooling.
        </p>
        
        <p>
          I’m particularly interested in technical AI governance, agent safety, and sustainable AI infrastructure. I’m currently developing ideas around neuro-inspired, energy-proportional agent systems that prioritise minimal resource use, strong auditability, and built-in safeguards. You can read more about this in my Synapse Warehouse proposal.
        </p>
        
        <p>
          My goal is to further my knowledge through AI Fellowships dedicated to using AI for Public Good; including preventing risks posed by AI, as well as exploring ways I can apply my engineering experience with a preservation-oriented mindset to help organisations deploy AI responsibly - especially in high-stakes or public-interest contexts. Outside of work, I enjoy indie video games, fishing, and walking in the woodlands I hope to help conserve one day.
        </p>
      </div>
    </div>
  )
}