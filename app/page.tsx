import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4f0]">
      {/* Dark Header */}
      <nav className="bg-[#1e5721] text-white">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-serif text-4xl tracking-[-1.5px] text-white">
            Farah Zamir
          </Link>

          <div className="flex gap-8 text-sm font-medium tracking-wide text-white/90">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/research" className="hover:text-white transition-colors">Research</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-16">
        <div className="grid md:grid-cols-5 gap-x-16 gap-y-14 items-start">
          
          {/* Left Column - Main Bio */}
<div className="md:col-span-3">
 <h1 className="text-[64px] font-semibold tracking-[-3px] text-[#301f1f] leading-none mb-8">
  Hey, I&apos;m{" "}
  <span className="relative inline-block">
    Farah.
    {/* Cleaner brush stroke */}
    <span className="absolute -bottom-[1px] left-[3px] w-[90%] h-[5.5px] bg-[#571e38] -rotate-[2deg] rounded-sm"></span>
    {/* Star */}
    <span className="absolute -top-1 -right-1 text-2xl text-[#571e38]">✧</span>
  </span>
</h1>

<div className="space-y-7 text-[17px] leading-relaxed tracking-[-0.3px] text-[#571e38]">
  <p>
    I&apos;m an <span className="font-semibold underline decoration-[#571e38]/70 underline-offset-[3px] mr-1">AI engineer</span> that builds production-grade evaluation infrastructure and governance frameworks for Agentic AI systems. My background is in national archives and information preservation; I&apos;ve worked at the House of Lords, the National Science and Media Museum, and most recently, Virgin Atlantic, where I built and deployed governance systems for live agentic AI, including evaluation harnesses and pre-execution safeguards.
  </p>

  <div className="space-y-7 text-[17px] leading-relaxed tracking-[-0.3px] text-[#571e38]">
    <p>
      I&apos;m an <span className="font-semibold underline decoration-[#571e38]/70 underline-offset-2">AI engineer</span> that builds production-grade evaluation infrastructure and governance frameworks for Agentic AI systems. My background is in national archives and information preservation; I&apos;ve worked at the House of Lords, the National Science and Media Museum, and most recently, Virgin Atlantic, where I built and deployed governance systems for live agentic AI, including evaluation harnesses and pre-execution safeguards.
    </p>

    <p>
      My goals are in <span className="font-semibold underline decoration-[#571e38]/70 underline-offset-2">environmental conservation</span>, and my lodestar is to build AI systems that are safe, auditable, and accountable.
    </p>

    <p>
      My main research interest is in <span className="font-semibold underline decoration-[#571e38]/70 underline-offset-2">AI for Public Good</span>. My research proposal, the <Link href="/research" className="font-semibold underline decoration-[#571e38]/70 hover:text-[#1e5721] underline-offset-2">Synapse Warehouse</Link>, proposes a Neuro-AI Infrastructure inspired by the human brain&apos;s architecture, moving away from the massive, irreversible resource consumption risks posed by global AI usage.
    </p>
  </div>
</div>
</div>

          {/* Right Column - CTAs with white background */}
          <div className="md:col-span-2">
            <div className="bg-white border border-[#e8d7b5] rounded-2xl p-6 space-y-8">
              <div>
                <p className="text-[15.5px] text-[#571e38] mb-3 leading-snug">
                  Find out more about my work history and experience here:
                </p>
                <Button asChild className="bg-black hover:bg-[#301f1f] text-white px-6 py-[17px] text-sm tracking-wide rounded-lg w-full justify-center">
                  <a href="/Farah_Zamir_CV.pdf" target="_blank">Download CV</a>
                </Button>
              </div>

              <div>
                <p className="text-[15.5px] text-[#571e38] mb-3 leading-snug">
                  Interested in my project work? I have examples of my Production Governance and AI Evaluation work here:
                </p>
                <Button asChild className="bg-[#1e5721] hover:bg-[#16451a] text-white px-6 py-[17px] text-sm tracking-wide rounded-lg w-full justify-center">
                  <Link href="/projects">Explore Projects</Link>
                </Button>
              </div>

              <div>
                <p className="text-[15.5px] text-[#571e38] mb-3 leading-snug">
                  My research proposal, as well as any other work I&apos;ve written, is available here:
                </p>
                <Button asChild className="bg-[#1e5721] hover:bg-[#16451a] text-white px-6 py-[17px] text-sm tracking-wide rounded-lg w-full justify-center">
                  <Link href="/research">Research Interests</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-[#571e38] mb-6 text-[15px] leading-relaxed">
            You can find examples of my work, long-form writing, and code here. I&apos;m always open to opportunities in technical AI governance and Agentic AI particularly — shoot me an email or reach out via any of the links below.
          </p>

          <Button asChild className="bg-[#1e5721] hover:bg-[#16451a] text-white px-8 mb-8 tracking-wide">
            <Link href="/contact">Talk to Me</Link>
          </Button>

          <div className="flex justify-center gap-3">
            <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors tracking-wide">
              LinkedIn
            </a>
            <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors tracking-wide">
              Substack
            </a>
            <a href="https://github.com/dynamicsofanaisteroid" target="_blank" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors tracking-wide">
              GitHub
            </a>
            <a href="mailto:dynamicsofanaisteroid@gmail.com" 
               className="px-5 py-1.5 text-sm border border-[#571e38] text-[#571e38] rounded-full hover:bg-[#571e38] hover:text-white transition-colors tracking-wide">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}