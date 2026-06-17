import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4f0]">

      {/* Navigation */}
      <nav className="bg-[#1e5721] text-white">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-serif text-4xl tracking-[-1.5px]">
            Farah Zamir
          </Link>

          <div className="flex gap-8 text-sm font-medium tracking-wide text-white/90">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/research">Research</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-20">

        <div className="grid md:grid-cols-5 gap-x-16 gap-y-12">

          {/* LEFT COLUMN — Bio */}
          <div className="md:col-span-3">

            <h1 className="text-[56px] leading-[1.05] tracking-[-2.5px] font-semibold text-[#301f1f] mb-8">
              Building evaluation infrastructure<br />and governance for agentic AI.
            </h1>

            <div className="space-y-6 text-[17px] leading-relaxed text-[#571e38]">
              <p>
                I design and build production-grade evaluation systems and governance frameworks for agentic AI. 
                My work focuses on making AI systems measurable, auditable, and safe before they scale.
              </p>

              <p>
                Before moving into AI, I spent nearly eight years in archives, libraries, and public sector 
                information management. That background gave me a deep appreciation for provenance, accountability, 
                and building systems that can withstand scrutiny over time.
              </p>

              <p>
                Today, my research explores sustainable and neuro-inspired AI infrastructure, with a focus on 
                embedding governance and energy proportionality into the architecture itself.
              </p>
            </div>

            {/* Design Principles */}
            <div className="mt-12 border-l-2 border-[#d9c6a0] pl-6">
              <p className="text-xs uppercase tracking-[2px] text-[#8b6a5a] mb-4">Design principles</p>
              <ul className="space-y-2.5 text-[15.5px] text-[#571e38]">
                <li>Governance before automation</li>
                <li>Evaluation before deployment</li>
                <li>Human oversight by default</li>
                <li>Systems should be explainable and auditable</li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN — Card */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl border border-[#e7d9c5] p-8 sticky top-8">

              <div>
                <p className="text-xs uppercase tracking-widest text-[#8b6a5a] mb-3">Current focus</p>
                <ul className="text-[15px] leading-7 text-[#571e38] mb-8">
                  <li>Production AI evaluation</li>
                  <li>Agent governance &amp; safety</li>
                  <li>Technical AI governance</li>
                  <li>Sustainable AI infrastructure</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full bg-[#1e5721] hover:bg-[#16451a] text-white py-6 text-[15px]">
                  <Link href="/projects">View Technical Projects</Link>
                </Button>

                <Button asChild className="w-full bg-[#1e5721] hover:bg-[#16451a] text-white py-6 text-[15px]">
                  <Link href="/research">Research Interests</Link>
                </Button>

                <Button asChild variant="outline" className="w-full border-[#301f1f] text-[#301f1f] hover:bg-[#301f1f] hover:text-white py-6 text-[15px]">
                  <a href="/Farah_Zamir_CV.pdf" target="_blank">Download CV</a>
                </Button>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-[#e7d9c5]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">

            <div>
              <div className="text-4xl font-semibold text-[#301f1f] tracking-tight">7M+</div>
              <div className="text-sm text-[#571e38] mt-2">Production telemetry spans analysed</div>
            </div>

            <div>
              <div className="text-4xl font-semibold text-[#301f1f] tracking-tight">2</div>
              <div className="text-sm text-[#571e38] mt-2">Governance frameworks developed</div>
            </div>

            <div>
              <div className="text-4xl font-semibold text-[#301f1f] tracking-tight">8 yrs</div>
              <div className="text-sm text-[#571e38] mt-2">Information governance experience</div>
            </div>

            <div>
              <div className="text-4xl font-semibold text-[#301f1f] tracking-tight">AI</div>
              <div className="text-sm text-[#571e38] mt-2">Evaluation · Governance · Public Good</div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}