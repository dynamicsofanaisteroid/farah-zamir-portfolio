import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    // Force new deployment - social links fix 
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-xl">Farah Zamir</div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-sm mb-6">
            AI Engineer • Technical AI Governance • Conservation
          </div>
          
          <h1 className="text-6xl font-semibold tracking-tight mb-6">
            Farah Zamir
          </h1>
          
          <p className="text-2xl text-slate-600 mb-8">
            Building production evaluation infrastructure and governance tools 
            for frontier AI — while drawing on a background in national-scale 
            information preservation and sensitive data protection.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">Explore Projects</a>
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
      {/* About Section */}
<section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-semibold tracking-tight mb-8">About</h2>
    
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p>
        Hi, I’m Farah. I’m an AI Engineer focused on building evaluation infrastructure and governance frameworks for agentic AI systems. My work centres on creating systems that are not only effective, but genuinely safe, auditable, and sustainable at scale.
      </p>
      
      <p>
        Before entering AI, I spent nearly eight years in cultural heritage and public sector information management. I worked with national archival standards, sensitive data protection, and long-term preservation at institutions including the Parliamentary Archives and the Science Museum Group. I’m still a librarian at heart — this background gave me a deep appreciation for accountability, risk, and building systems designed to stand up to scrutiny over time.
      </p>
      
      <p>
        At Virgin Atlantic, I designed and delivered a governance-first AI Evaluation Harness for a live agentic AI system, processing millions of conversational interactions while embedding privacy controls, human oversight, and full auditability from the start. I also created the Skills Contract, a pre-execution governance framework that identified and mitigated significant risks in agent tooling.
      </p>
      
      <p>
        I’m particularly interested in technical AI governance, agent safety, and sustainable AI infrastructure. I’m currently developing ideas around neuro-inspired, energy-proportional agent systems that prioritise minimal resource use, strong auditability, and built-in safeguards. You can read more about this in my Synapse Warehouse proposal.
      </p>
      
      <p>
        I’m drawn to opportunities where I can combine my engineering experience with a preservation-oriented mindset to help organisations deploy AI responsibly — especially in high-stakes or public-interest contexts. Outside of work, I enjoy indie video games, fishing, and walking in the woodlands I hope to help conserve one day.
      </p>
    </div>
  </div>
</section>
    </div>
  )
}
