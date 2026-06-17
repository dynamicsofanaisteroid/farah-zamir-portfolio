import Link from "next/link"

export default function SkillsContractPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-4">Skills Contract & Risk Analysis</h1>
      <p className="text-lg text-slate-600 mb-10">Technical AI Governance • Agent Safety</p>

      {/* We'll build the content here together */}
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 italic">
          [Content coming soon — we'll write this together]
        </p>
      </div>
    </div>
  )
}