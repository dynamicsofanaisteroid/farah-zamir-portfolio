import Link from "next/link"

export default function BueroBullPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">Buero Bull</h1>
      <p className="text-lg text-slate-600 mb-10">Solo-Built, In Production • Plain-English Guidance for UK Farm Compliance &amp; Grants</p>

      {/* The Problem */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38]">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">The Problem</h2>

        <p>
          English farmers manage compliance and funding across a fragmented set of GOV.UK, RPA, DEFRA, and
          BCMS-style pages — scheme rules, movement reporting, cross compliance, and grant eligibility, each
          written in its own acronyms and updated on its own schedule. Getting it wrong has real consequences:
          missed deadlines, ineligible claims, and evenings lost re-reading the same portal.
        </p>

        <p>
          There was no single place that answered “what do I legally need to do, and by when” or “what funding
          actually applies to my farm” in plain language, grounded in what’s currently published — rather than
          what a general-purpose chatbot half-remembers from training data.
        </p>
      </div>

      {/* What I Built */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">What I Built</h2>

        <p>
          I designed and built <strong>Buero Bull</strong>, a retrieval-grounded web application that answers
          both questions directly. The frontend is Next.js/TypeScript, the backend is FastAPI/Python, retrieval
          runs over a ChromaDB corpus of ingested GOV.UK farming guidance, and the Claude API fills structured
          page templates rather than holding an open conversation.
        </p>

        <p>
          Every answer is either a grounded response built from retrieved, verified GOV.UK content, or an
          honest “we don’t have that — here’s the RPA / GOV.UK / helpline route.” There’s no confidence score
          standing in for an answer the corpus doesn’t actually contain.
        </p>
      </div>

      {/* Key Approach & Innovations */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Key Approach &amp; Innovations</h2>

        <div className="space-y-4 pl-4">
          <div>
            <strong className="text-[#301f1f]">Two Fixed Schemas, Not Chat</strong><br />
            Compliance queries fill a step-by-step process-page schema — what this is, before you start, how to
            do it, the deadline, what happens if you miss it. Grants queries fill a different schema built around
            eligibility and payment — what it pays, stacking rules with other supplements, how to apply. Same
            discipline either way: the model fills a fixed template, it doesn’t hold an open conversation.
          </div>
          <div>
            <strong className="text-[#301f1f]">Three-Mode Search</strong><br />
            A query resolves as an exact code lookup (“BN5” goes straight to its page), a ranked list for
            ambiguous terms that span multiple guidance pages (“hedge”), or an amalgamated process page assembled
            from several corpus sources for compound, situational queries (“moved cattle today”). The same
            three-way resolution runs behind both the compliance search and the separate grants search.
          </div>
          <div>
            <strong className="text-[#301f1f]">Farm-Type-Aware Grants Matching</strong><br />
            Farm type is set once and reused everywhere — the grants view splits into a General feed of current
            schemes and a My Farm Type feed matched to that profile, with a full breakdown available for each
            matched scheme, so the farmer isn’t re-stating their situation on every visit.
          </div>
          <div>
            <strong className="text-[#301f1f]">Scheduled Freshness Pipeline</strong><br />
            A daily job tracks the three main schemes (SFI26, Countryside Stewardship Higher Tier, and Capital
            Grants) against their GOV.UK Content API timestamps, re-ingests on real changes, and only generates a
            “what’s changed” card when the change is material — not on a cosmetic date roll. Non-GOV.UK schemes
            (e.g. water company environmental grants) are already in the ingestion pipeline on a separate, clearly
            labelled track, ready to widen freshness tracking beyond the three core schemes.
          </div>
          <div>
            <strong className="text-[#301f1f]">Honest Failure Modes</strong><br />
            A fetch failure never produces a fake “verified today.” If the model or an upstream source is
            unavailable, the app falls back to official links and the RPA helpline rather than inventing steps.
          </div>
        </div>
      </div>

      {/* Impact & Why It Matters */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Impact &amp; Why It Matters</h2>

        <p>
          Buero Bull was scoped and built solo, iteratively, from a written product spec that separates what’s
          built now from what’s designed for later — the same requirements-gathering muscle as translating a
          non-technical stakeholder’s needs into a phased, achievable build.
        </p>

        <p>
          It’s a personal project, not a funded product, and I don’t have user or usage numbers to cite yet.
          The corpus currently sits at just under 2,000 ingested chunks of GOV.UK guidance. What it demonstrates
          is the pattern: retrieval grounded in published sources, structured output instead of open chat, and a
          pipeline that’s honest about what it does and doesn’t know — applied to a genuinely public-good problem,
          in a domain where the difference between a right and a wrong answer has real consequences for someone’s
          farm.
        </p>
      </div>

      {/* Screenshots */}
      <div className="mt-12 pt-8 border-t border-[#e8d7b5]">
        <h2 className="text-xl font-semibold tracking-tight text-[#301f1f] mb-6">Screenshots</h2>

        <div className="space-y-10">
          <div>
            <img
              src="/buero-bull-home.webp"
              alt="Buero Bull home page, showing the compliance search bar, quick-search chips, the four main sections, and a grants feed filtered to the user's farm type"
              className="w-full rounded-xl border border-slate-200"
            />
            <p className="text-sm text-slate-500 mt-2">
              Home — compliance search up top, grants and funding below it, already filtered to a saved farm type.
            </p>
          </div>

          <div>
            <img
              src="/buero-bull-compliance.webp"
              alt="Buero Bull compliance process page for 'moved cattle today', showing a structured step-by-step page with deadlines, sources checked, and verification dates"
              className="w-full rounded-xl border border-slate-200"
            />
            <p className="text-sm text-slate-500 mt-2">
              Compliance process page for a compound, situational query — “moved cattle today.”
            </p>
          </div>

          <div>
            <img
              src="/buero-bull-grant.webp"
              alt="Buero Bull grant page for BN5 Hedgerow Laying, showing payment rate, stacking table for supplements, eligibility checklist, and how to apply steps"
              className="w-full rounded-xl border border-slate-200"
            />
            <p className="text-sm text-slate-500 mt-2">
              Grant page for BN5 — Hedgerow Laying, reached via an exact code search or the farm-type feed.
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-8">
          In production for personal use, not yet public — no live URL or repository to link yet.
        </p>
      </div>
    </div>
  )
}
