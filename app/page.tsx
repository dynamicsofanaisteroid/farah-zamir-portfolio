import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Space_Grotesk, Inter } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-[#f9f5f0]`}>

      {/* Navigation */}
      <nav className="bg-[#1a4a1f] text-white">
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

          {/* LEFT — Bio */}
          <div className="md:col-span-3">

            <h1 className="font-sans text-[54px] leading-[1.05] tracking-[-2.8px] font-semibold text-[#2c211f] mb-8">
              Building evaluation infrastructure<br />and governance for agentic AI.
            </h1>

            <div className="space-y-6 text-[17px] leading-relaxed text-[#4a3a35]">
              <p>
                I design and build production-grade evaluation systems and governance frameworks for agentic AI. 
                My work focuses on making AI systems measurable, auditable, and safe before they scale.
              </p>

              <p>
                Before moving into AI, I spent nearly eight years in archives, libraries, and public sector 
                information management. That experience shaped how I think about technology: systems should be 
                understandable, accountable, and built to last.
              </p>

              <p>
                Today my research explores sustainable and neuro-inspired AI infrastructure, with a focus on 
                embedding governance and energy proportionality into the architecture from the start.
              </p>
            </div>

            {/* Design Principles */}
            <div className="mt-12 border-l-2 border-[#c9b28a] pl-6">
              <p className="text-xs uppercase tracking-[2px] text-[#8b6a5a] mb-4">Design principles</p>
              <ul className="space-y-2.5 text-[15.5px] text-[#4a3a35]">
                <li>Governance before automation</li>
                <li>Evaluation before deployment</li>
                <li>Human oversight by default</li>
                <li>Systems should be explainable and auditable</li>
              </ul>
            </div>

          </div>

          {/* RIGHT — Card */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl border border-[#e6d9c8] p-8 sticky top-8 shadow-sm">

              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-[#8b6a5a] mb-3">Current focus</p>
                <ul className="text-[15px] leading-7 text-[#4a3a35]">
                  <li>Production AI evaluation</li>
                  <li>Agent governance &amp; safety</li>
                  <li>Technical AI governance</li>
                  <li>Sustainable AI infrastructure</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full bg-[#1a4a1f] hover:bg-[#133614] text-white py-[22px] text-[15px]">
                  <Link href="/projects">View Technical Projects</Link>
                </Button>

                <Button asChild className="w-full bg-[#1a4a1f] hover:bg-[#133614] text-white py-[22px] text-[15px]">
                  <Link href="/research">Research Interests</Link>
                </Button>

                <Button asChild variant="outline" className="w-full border-[#2c211f] text-[#2c211f] hover:bg-[#2c211f] hover:text-white py-[22px] text-[15px]">
                  <a href="/Farah_Zamir_CV.pdf" target="_blank">Download CV</a>
                </Button>
              </div>

            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-[#e6d9c8]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">

            <div>
              <div className="text-[42px] font-semibold tracking-[-1.5px] text-[#2c211f]">7M+</div>
              <div className="text-sm text-[#4a3a35] mt-1.5">Production telemetry spans analysed</div>
            </div>

            <div>
              <div className="text-[42px] font-semibold tracking-[-1.5px] text-[#2c211f]">2</div>
              <div className="text-sm text-[#4a3a35] mt-1.5">Governance frameworks developed</div>
            </div>

            <div>
              <div className="text-[42px] font-semibold tracking-[-1.5px] text-[#2c211f]">8 yrs</div>
              <div className="text-sm text-[#4a3a35] mt-1.5">Information governance experience</div>
            </div>

            <div>
              <div className="text-[42px] font-semibold tracking-[-1.5px] text-[#2c211f]">AI</div>
              <div className="text-sm text-[#4a3a35] mt-1.5">Evaluation · Governance · Public Good</div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}