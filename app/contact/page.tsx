import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-8">Contact</h1>

      <div className="space-y-6 text-lg text-slate-700">
        <p>
          I’m always happy to chat about AI governance, technical AI safety, or responsible deployment of agentic systems.
        </p>
        
        <p>
          Feel free to reach out via email or connect with me on the platforms below.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        <a 
          href="mailto:dynamicsofanaisteroid@gmail.com" 
          className="block text-lg hover:underline"
        >
          dynamicsofanaisteroid@gmail.com
        </a>
        
        <div className="flex flex-col gap-3 text-lg">
          <a href="https://www.linkedin.com/in/farah-zamir-956659144" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="https://dynamicsofanaisteroid.substack.com/" target="_blank" className="hover:underline">Substack</a>
          <a href="https://github.com/dynamicsofanaisteroid" target="_blank" className="hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  )
}