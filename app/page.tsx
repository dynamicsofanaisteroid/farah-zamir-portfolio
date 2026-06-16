import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4f0]">
      {/* Navigation */}
      <nav className="border-b border-[#e8d7b5] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="font-semibold text-3xl tracking-tight text-[#1e5721]">
              Farah Zamir
            </Link>
            <span className="text-sm text-[#571e38] tracking-wide mt-0.5">AI Engineer</span>
          </div>

          <div className="flex justify-center gap-8 text-sm font-medium text-[#301f1f] mt-4">
            <Link href="/about" className="hover:text-[#1e5721] transition-colors">About</Link>
            <Link href="/projects" className="hover:text-[#1e5721] transition-colors">Projects</Link>
            <Link href="/research" className="hover:text-[#1e5721] transition-colors">Research</Link>
            <Link href="/contact" className="hover:text-[#1e5721] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-14 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#ecf6de] text-[#1e5721] text-sm font-medium mb-6">
            AI Engineer • Technical AI Governance • Conservation &amp; Preservation
          </div>

          <h1 className="text-6xl font-semibold tracking-tighter text-[#301f1f] mb-6 leading-none">
            Hey, I&apos;m Farah.
          </h1>

          <p className="text-2xl text-[#571e38] leading-snug mb-10 max-w-2xl mx-auto">
            I build production-grade evaluation infrastructure and governance frameworks 
            for agentic AI systems — with a background in national-scale information 
            preservation and a focus on making AI auditable, responsible, and sustainable.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <Button asChild size="lg" className="bg-[#1e5721] hover:bg-[#16451a] text-white px-8">
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-[#e8d7b5] hover:bg-white">
              <a href="/Farah_Zamir_CV.pdf" target="_blank">Download CV</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10 text-sm text-[#571e38]">
            <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" className="hover:text-[#1e5721] transition-colors">LinkedIn</a>
            <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" className="hover:text-[#1e5721] transition-colors">Substack</a>
            <a href="https://github.com/dynamicsofanaisteroid" target="_blank" className="hover:text-[#1e5721] transition-colors">GitHub</a>
            <a href="mailto:dynamicsofanaisteroid@gmail.com" className="hover:text-[#1e5721] transition-colors">Email</a>
          </div>
        </div>
      </div>

      {/* Quick Highlights */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#e8d7b5] rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-[#1e5721]">Production Governance</h3>
            <p className="text-[#571e38] text-sm">Built and deployed governance systems for live agentic AI at Virgin Atlantic, including evaluation harnesses and pre-execution safeguards.</p>
          </div>
          <div className="bg-white border border-[#e8d7b5] rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-[#1e5721]">Technical AI Governance</h3>
            <p className="text-[#571e38] text-sm">Focused on practical mechanisms for agent safety, auditability, and responsible deployment of frontier AI systems.</p>
          </div>
          <div className="bg-white border border-[#e8d7b5] rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-[#1e5721]">Preservation Mindset</h3>
            <p className="text-[#571e38] text-sm">Background in national archives and information preservation informs a long-term, accountable approach to building AI systems.</p>
          </div>
        </div>
      </div>
    </div>
  )
}