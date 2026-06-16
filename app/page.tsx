import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    // Force new deployment - social links fix 
    <div className="min-h-screen bg-white">
      {/* Navigation */}
<nav className="border-b">
  <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
    <Link href="/" className="font-semibold text-xl">Farah Zamir</Link>
    
    <div className="flex gap-6 text-sm">
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/projects" className="hover:underline">Projects</Link>
      <Link href="/research" className="hover:underline">Research</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-sm mb-6">
            AI Engineer • Technical AI Governance • Conservation & Preservation • Agentic AI 
          </div>
          
          <h1 className="text-6xl font-semibold tracking-tight mb-6">
            Hey there, I'm Farah. 
          </h1>
          
          <p className="text-2xl text-slate-600 mb-8">
            I'm an AI Engineer specializing in technical AI governance and responsible deployment of agentic systems. I'm also 
            passionate about conservation and preservation, and I love exploring the intersection of AI and environmental sustainability. Open to 
            new opportunities and collaborations in building and explaining production-grade AI systems, as well as research and development in the field of AI governance and ethics.
          </p>

          <div className="flex flex-wrap gap-4">
           <Button size="lg" asChild>
  <Link href="/projects">Explore Projects</Link>
</Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Farah_Zamir_CV.pdf" target="_blank">Download CV</a>
            </Button>
          </div>

          {/* Social Links Section */}
          <div className="flex gap-6 mt-8 text-sm text-slate-500">
            <a
              href="https://www.linkedin.com/in/farah-zamir-956659144"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://dynamicsofanaisteroid.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              Substack
            </a>
            <a
              href="https://github.com/dynamicsofanaisteroid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:dynamicsofanaisteroid@gmail.com"
              className="hover:text-slate-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


