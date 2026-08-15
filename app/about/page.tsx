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
          Hi, I’m Farah! I’m an AI Engineer focused on building evaluation infrastructure, automation, and governance frameworks for agentic AI systems. My work centres on creating systems that are not only effective, but genuinely safe, auditable, and sustainable at scale.
        </p>
        
        <p>
          🏛️ Before entering AI, I spent nearly eight years in cultural heritage and public sector information management. I worked with national archival standards, sensitive data protection, and long-term preservation at institutions including the Parliamentary Archives and the Science Museum Group. I’m still a librarian at heart - and my background makes me dedicated to conservation, preservation, and building systems designed to stand up to scrutiny over time.         </p>
        
        <p>
          At Virgin Atlantic, I designed and delivered a governance-first AI Evaluation Harness for a live agentic AI system, processing millions of conversational interactions while embedding privacy controls, human oversight, and full auditability from the start. I also created the Skills Contract, a pre-execution governance framework that identified and mitigated significant risks in agent tooling.
        </p>
        
        <p>
          I’m particularly interested in technical AI governance, agent safety, and sustainable AI infrastructure. I’m currently developing ideas around neuro-inspired, energy-proportional agent systems that prioritise minimal resource use, strong auditability, and built-in safeguards. You can read more about this in my Synapse Warehouse proposal.
        </p>

        {/* How I Build */}
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mt-10 mb-4">How I Build</h2>

        <p>
          I’m not a traditionally trained software engineer — I’m a technical person who likes building things, and I lean on AI coding assistants (Claude Code, Codex, Grok, and the Databricks Assistant) to move fast while staying hands-on with the parts that matter: architecture, data contracts, and the judgment calls a model shouldn’t make alone. I’m comfortable with Python and SQL at a beginner-to-intermediate level and Excel at an intermediate level, and I’ve built and shipped production Spark pipelines, evaluation harnesses, and Genies on Databricks, alongside work in Azure DevOps. I’m also familiar with MCP servers and connector patterns as a way of extending what an agent can reach, and I’m currently working through Microsoft’s PL-900 to build toward hands-on Power Platform experience.
        </p>

        <p>
          Before AI, my archives and cultural heritage work meant working daily inside systems like Raiser’s Edge and SPYDUS — which is probably why I still think in terms of provenance, retention, and audit trails first.
        </p>

        {/* Goals / Direction - Highlighted */}
<div className="mt-8 bg-[#f0f7f0] border border-[#1e5721] rounded-xl p-6">
  <p className="text-[15.5px] leading-relaxed text-slate-700">
    My goal is to apply my engineering experience — with a preservation-oriented, public-good mindset —
    to help organisations build and operate AI responsibly, especially in high-stakes or public-interest
    contexts like the public sector and higher education. That means the same things it always has:
    preventing avoidable risks, keeping systems auditable, and making sure the people who rely on them
    can trust what they’re being told.
  </p>

  <p className="text-[15.5px] leading-relaxed text-slate-600 mt-4">
    Outside of work, I enjoy indie video games, cooking up a storm, and walking in the woodlands I hope to help conserve one day. 🌳
  </p>
</div>      </div>
    </div>
  )
}