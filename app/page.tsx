import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4f0]">
      {/* Dark Header - Simpler */}
      <nav className="bg-[#1e5721] text-white">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-serif text-4xl tracking-tight text-white">
            Farah Zamir
          </Link>

          <div className="flex gap-8 text-sm font-medium text-white/90">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/research" className="hover:text-white transition-colors">Research</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-12">
        <div className="grid md:grid-cols-5 gap-x-12 gap-y-10 items-start">
          
          {/* Left Column - Main Bio (Bigger text) */}
          <div className="md:col-span-3">
            <h1 className="text-6xl font-semibold tracking-tighter text-[#301f1f] leading-none mb-6">
              Hey, I&apos;m{" "}
              <span className="relative inline-block">
                Farah.
                <span className="absolute -bottom-1 left-0 w-[105%] h-[9px] bg-[#571e38] -rotate-[3deg] rounded-sm"></span>
                <span className="absolute -top-2 -right-1 text-2xl text-[#571e38]">✧</span>
              </span>
            </h1>

            <div className="space-y-6 text-[16.5px] leading-relaxed text-[#571e38]">
              <p>
                I&apos;m an <span className="font-semibold underline decoration-[#571e38]/70">AI engineer</span> that builds production-grade evaluation infrastructure and governance frameworks for Agentic AI systems. My background is in national archives and information preservation; I&apos;ve worked at the House of Lords, the National Science and Media Museum, and most recently, Virgin Atlantic, where I built and deployed governance systems for live agentic AI, including evaluation harnesses and pre-execution safeguards.
              </p>

              <p>
                My goals are in <span className="font-semibold underline decoration-[#571e38]/70">environmental conservation</span>, and my lodestar is to build AI systems that are safe, auditable, and accountable.
              </p>

              <p>
                My main research interest is in <span className="font-semibold underline decoration-[#571e38]/70">AI for Public Good</span>. My research proposal, the <Link href="/research" className="font-semibold underline decoration-[#571e38]/70 hover:text-[#1e5721]">Synapse Warehouse</Link>, proposes a Neuro-AI Infrastructure inspired by the human brain&apos;s architecture, moving away from the massive, irreversible resource consumption risks posed by global AI usage.
              </p>
            </div>
          </div>

          {/* Right Column - CTAs (Smaller / Secondary) */}
          <div className="md:col-span-2 space-y-5 pt-1">
            <div>
              <p className="text-sm text-[#571e38] mb-2">Find out more about my work history and experience here:</p>
              <Button asChild className="w-full bg-black hover:bg-[#301f1f] text-white py-5 text-sm">
                <a href="/Farah_Zamir_CV.pdf" target="_blank">Download CV</a>
              </Button>
            </div>

            <div>
              <p className="text-sm text-[#571e38] mb-2">Interested in my project work? I have examples of my Production Governance and AI Evaluation work here:</p>
              <Button asChild className="w-full bg-[#1e5721] hover:bg-[#16451a] text-white py-5 text-sm">
                <Link href="/projects">Explore Projects</Link>
              </Button>
            </div>

            <div>
              <p className="text-sm text-[#571e38] mb-2">My research proposal, as well as any other work I&apos;ve written, is available here:</p>
              <Button asChild className="w-full bg-[#1e5721] hover:bg-[#16451a] text-white py-5 text-sm">
                <Link href="/research">Research Interests</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-[#571e38] mb-5 text-[15px]">
            You can find examples of my work, long-form writing, and code here. I&apos;m always open to opportunities in technical AI governance and Agentic AI particularly — shoot me an email or reach out via any of the links below.
          </p>

          <Button asChild className="bg-[#1e5721] hover:bg-[#16451a] text-white px-8 mb-8">
            <Link href="/contact">Talk to Me</Link>
          </Button>

          <div className="flex justify-center gap-3">
            <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors">
              Substack
            </a>
            <a href="https://github.com/dynamicsofanaisteroid" target="_blank" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:dynamicsofanaisteroid@gmail.com" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}