import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-semibold text-2xl tracking-tight text-slate-900">
            Farah Zamir
          </Link>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
            <Link href="/research" className="hover:text-slate-900 transition-colors">Research</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
            AI Engineer • Technical AI Governance • Conservation &amp; Preservation
          </div>

          <h1 className="text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-none">
            Hey, I&apos;m Farah.
          </h1>

          <p className="text-2xl text-slate-600 leading-snug mb-10">
            I build production-grade evaluation infrastructure and governance frameworks 
            for agentic AI systems — with a background in national-scale information 
            preservation and a focus on making AI auditable, responsible, and sustainable.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800 text-white px-8">
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-slate-300 hover:bg-white">
              <a href="/Farah_Zamir_CV.pdf" target="_blank">Download CV</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10 text-sm text-slate-500">
            <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" className="hover:text-teal-700 transition-colors">LinkedIn</a>
            <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" className="hover:text-teal-700 transition-colors">Substack</a>
            <a href="https://github.com/dynamicsofanaisteroid" target="_blank" className="hover:text-teal-700 transition-colors">GitHub</a>
            <a href="mailto:dynamicsofanaisteroid@gmail.com" className="hover:text-teal-700 transition-colors">Email</a>
          </div>
        </div>
      </div>

      {/* Quick Highlights */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-slate-900">Production Governance</h3>
            <p className="text-slate-600 text-sm">Built and deployed governance systems for live agentic AI at Virgin Atlantic, including evaluation harnesses and pre-execution safeguards.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-slate-900">Technical AI Governance</h3>
            <p className="text-slate-600 text-sm">Focused on practical mechanisms for agent safety, auditability, and responsible deployment of frontier AI systems.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-slate-900">Preservation Mindset</h3>
            <p className="text-slate-600 text-sm">Background in national archives and information preservation informs a long-term, accountable approach to building AI systems.</p>
          </div>
        </div>
      </div>
    </div>
  )
}