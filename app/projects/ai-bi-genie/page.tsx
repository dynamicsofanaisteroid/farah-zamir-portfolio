import Link from "next/link"

export default function AiBiGeniePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">AI/BI Genie</h1>
      <p className="text-lg text-slate-600 mb-10">Company-Wide Self-Service Analytics • Governance-First Rollout</p>

      {/* The Problem */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38]">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">The Problem</h2>
        
        <p>
          Teams across Virgin Atlantic needed faster access to data insights, but existing analytics workflows were slow, 
          inconsistent, and heavily dependent on central data teams. Ad-hoc requests created bottlenecks, and there was 
          no standardised way to build governed, self-service AI analytics tools.
        </p>

        <p>
          When early versions of Databricks AI/BI Genie became available, several teams began experimenting independently. 
          This led to inconsistent quality, weak governance, and duplicated effort. There was a clear need for both a 
          high-quality production Genie *and* a repeatable, governed process that others could follow.
        </p>
      </div>

      {/* What I Built */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">What I Built</h2>
        
        <p>
          I designed and delivered a production-grade <strong>AI/BI Genie</strong> for market and commercial analytics from the ground up. 
          The tool achieved <strong>100% benchmark accuracy</strong> before rollout and was adopted as the organisational standard across Virgin Atlantic.
        </p>

        <p>
          More importantly, I created the <strong>“Make Your Own Genie Kit”</strong> — a comprehensive, reusable framework that enables other teams 
          to build their own governed Genies consistently. This included templates, documentation, SQL examples, benchmark questions, 
          feedback processes, and handoff materials. The kit was integrated into the company’s DevOps Wiki and became the internal standard.
        </p>
      </div>

      {/* Key Approach & Innovations */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Key Approach & Innovations</h2>
        
        <p>
          Rather than treating Genie development as a one-off technical exercise, I focused on building <strong>repeatable, governed processes</strong> 
          that could scale across the organisation.
        </p>

        <div className="space-y-4 pl-4">
          <div>
            <strong className="text-[#301f1f]">Governance-First Design</strong><br />
            Every Genie was built with clear instructions, benchmark testing, version control, and feedback loops from day one — 
            not added as an afterthought.
          </div>
          <div>
            <strong className="text-[#301f1f]">“Make Your Own Genie Kit”</strong><br />
            A complete enablement package (templates, SQL patterns, documentation, and rollout frameworks) that allowed non-specialists 
            to build high-quality, governed Genies without starting from scratch.
          </div>
          <div>
            <strong className="text-[#301f1f]">Standardised Rollout & Handoff</strong><br />
            Created consistent processes for testing, feedback collection, version control, and knowledge transfer to support teams, 
            reducing risk and improving long-term maintainability.
          </div>
        </div>
      </div>

      {/* Impact & Why It Matters */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Impact & Why It Matters</h2>
        
        <p>
          The Genie and accompanying kit removed a significant bottleneck in analytics access while maintaining strong governance standards. 
          Teams could now self-serve insights safely, and the central data team could focus on higher-value work rather than repetitive requests.
        </p>

        <p>
          By creating reusable frameworks instead of one-off solutions, this work helped establish a more scalable, governed approach to 
          AI-powered analytics across the organisation — something that became increasingly important as more teams began adopting Genie technology.
        </p>
      </div>

      {/* Artifacts */}
      <div className="mt-12 pt-8 border-t border-[#e8d7b5]">
        <h2 className="text-xl font-semibold tracking-tight text-[#301f1f] mb-4">Artifacts</h2>
        <p className="text-[15.5px] text-[#571e38] mb-4">
          Key materials from this work (generalised for public sharing):
        </p>
        <ul className="text-[15.5px] text-[#571e38] space-y-1.5">
          <li>• <a href="https://github.com/dynamicsofanaisteroid/farah-zamir-portfolio" target="_blank" className="underline hover:text-[#1e5721]">GitHub Repository</a> (generalised templates and examples)</li>
          <li>• “Make Your Own Genie Kit” – structured framework and documentation</li>
          <li>• Feedback & Version Control processes</li>
          <li>• Benchmarking and QA methodology</li>
        </ul>
      </div>
    </div>
  )
}