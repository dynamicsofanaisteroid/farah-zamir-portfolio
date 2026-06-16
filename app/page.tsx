import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4f0]">
{/* Dark Header */}
<nav className="bg-[#1e5721] text-white">
  <div className="max-w-5xl mx-auto px-6 py-5">
    <div className="flex items-end justify-between">
      {/* Logo + Title */}
      <div>
        <Link href="/" className="font-serif text-4xl tracking-tight text-white">
          Farah Zamir
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex gap-8 text-sm font-medium text-white/90">
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="/research" className="hover:text-white transition-colors">Research</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-semibold tracking-tighter text-[#301f1f] leading-none mb-2">
            Hey, I&apos;m{" "}
            <span className="relative inline-block">
              Farah.
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#571e38] -rotate-2 rounded-sm opacity-80"></span>
              <span className="absolute -top-1 -right-2 text-2xl">✧</span>
            </span>
          </h1>

          <p className="text-2xl text-[#571e38] leading-snug mt-6 max-w-2xl">
            I'm an AI engineer that builds production- grade evaluation infrastucture + governance frameworks for Agentic AI systems. My background is in national archives and information preservation; I've worked at the House of Lords, the National Science and Media Museum, and most recently, Virgin Atlantic, where I built and deployed governance systems for live agentic AI, including evaluation harnesses and pre-execution safeguards. You can find out more about my work in the Projects tab above.
          <br/>
          My goals are in environmental conservation, and my lodestar is to build AI systems that are safe, auditable, and accountable. I write about my work and research interests on my <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" className="underline text-[#571e38] hover:text-[#1e5721] transition-colors">Substack</a>.
          <br/> 
          My main research interest is in AI for Public Good. My research proposal, the Synapse Warehouse, proposes a Neuro-AI Infrastructure inspired by the human brain's architecture, moving away from the massive, irreversible resource consumption risks posed by global AI usage - linked in the Research tab above.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Button asChild size="lg" className="bg-[#1e5721] hover:bg-[#16451a] text-white px-8 text-base">
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#1e5721] hover:bg-[#16451a] text-white px-8 text-base">
              <Link href="/contact">Talk to Me</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#1e5721] hover:bg-[#16451a] text-white px-8 text-base">
              <Link href="/research">Research Interests</Link>
            </Button>
          </div>

          {/* Social Links - Right aligned */}
          <div className="flex gap-3 mt-10 justify-start">
            <a 
              href="https://www.linkedin.com/in/farah-zamir-956659144" 
              target="_blank"
              className="px-4 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-md hover:bg-[#571e38] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://dynamicsofanaisteroid.substack.com/" 
              target="_blank"
              className="px-4 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-md hover:bg-[#571e38] hover:text-white transition-colors"
            >
              Substack
            </a>
            <a 
              href="https://github.com/dynamicsofanaisteroid" 
              target="_blank"
              className="px-4 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-md hover:bg-[#571e38] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:dynamicsofanaisteroid@gmail.com"
              className="px-4 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-md hover:bg-[#571e38] hover:text-white transition-colors"
            >
              Email
            </a>
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