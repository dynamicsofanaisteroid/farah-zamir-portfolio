import Link from "next/link"

export default function ResearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">Research</h1>
      <p className="text-lg text-slate-600 mb-10 max-w-2xl">
        My research focuses on technical AI governance, with a particular interest in building 
        systems that are not only capable, but safe, auditable, and sustainable at scale.
      </p>

      {/* Synapse Warehouse */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mb-4">Synapse Warehouse</h2>
        <p className="text-[15.5px] leading-relaxed text-[#571e38] mb-4">
          A proposed neuro-inspired, energy-proportional AI infrastructure designed to reduce 
          the massive, irreversible resource consumption risks posed by current monolithic AI systems. 
          The architecture draws from the human brain’s ability to perform complex reasoning on 
          approximately 20 watts, while embedding strong governance and auditability from the ground up.
        </p>
        <Link 
          href="/research/synapse-warehouse" 
          className="inline-block text-sm font-medium text-[#1e5721] hover:underline"
        >
          Read the full proposal →
        </Link>
      </div>

      {/* ERA-related work */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mb-4">ERA Institute Technical AI Governance</h2>
        <p className="text-[15.5px] leading-relaxed text-[#571e38] mb-4">
          I am particularly interested in the technical AI governance track, including compute governance, 
          structured model access, safety cases for frontier models, and robust evaluation methods. 
          I am currently preparing to contribute to one of the open technical problems listed by the ERA Institute.
        </p>
        <p className="text-sm text-slate-500 mb-4">
          More updates coming soon.
        </p>
      </div>
    </div>
  )
}
