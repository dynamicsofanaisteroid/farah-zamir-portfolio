import Link from "next/link"

export default function OxfordCollegeMatchmakerPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">Oxford College Matchmaker</h1>
      <p className="text-lg text-slate-600 mb-10">Personal Prototype • Power Platform: Copilot Studio, Power Automate, Power Apps</p>

      {/* The Problem */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38]">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">The Problem</h2>

        <p>
          PL-900 covers Power Platform in theory, but I wanted to know whether the same governance
          instincts that shape my Python and Databricks work — keep AI narrowly scoped, keep a human in
          the loop, make failure honest rather than silent — would hold up on a completely different,
          low-code toolchain. I picked a small, contained problem to test it on: given a free-form
          description of what someone wants from an Oxford college, recommend one from a structured
          dataset.
        </p>
      </div>

      {/* What I Built */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">What I Built</h2>

        <p>
          A three-layer prototype across the three Power Platform tools most commonly named in
          automation/AI engineering job criteria. <strong>Copilot Studio</strong> handles the
          conversational layer only — it captures a free-form request (e.g. “I want a college with a
          great library and halal food”) into a single variable and never touches the data store
          directly. <strong>Power Automate</strong> does the actual retrieval: a null-safe filter against
          a SharePoint list of Oxford colleges (ranking, qualitative pros/cons, feature flags like prayer
          room or halal food availability), returning one matched college. <strong>Power Apps</strong>{" "}
          provides the human oversight gate — a reviewer sees the record and explicitly approves or
          resets it; nothing gets marked “Recommended” without a person doing it.
        </p>
      </div>

      {/* Key Approach & Innovations */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Key Approach &amp; Innovations</h2>

        <div className="space-y-4 pl-4">
          <div>
            <strong className="text-[#301f1f]">AI Confined to Interpretation, Not Execution</strong><br />
            Generative AI in Copilot Studio only extracts intent from messy natural language into a clean
            variable. All retrieval, filtering, and status changes run through deterministic Power
            Automate logic and a structured Power Apps interface — the same “thin AI” principle as the
            Skills Contract and Buero Bull, applied to a Microsoft-native toolchain instead of
            Python/Databricks.
          </div>
          <div>
            <strong className="text-[#301f1f]">Defensive Expression Writing Against Real Data</strong><br />
            SharePoint generates internal field names that don’t match the display column (<code>field_1</code>,
            not “Pros”), and real rows had blank cells that broke naive <code>contains</code> matching.
            Built null-safe filters (<code>not(empty(...))</code> before <code>contains(...)</code>) and
            used direct expressions instead of nested <code>Apply to each</code> loops to keep the
            round-trip fast (~640ms observed) and avoid response-binding failures back to Copilot Studio.
          </div>
          <div>
            <strong className="text-[#301f1f]">Human-in-the-Loop Approval, Not a Suggestion</strong><br />
            The Power Apps layer isn’t a status display, it’s the actual authority: an Approve button
            patches the record, a Reset clears it for repeat testing, and no AI process can set that
            field itself.
          </div>
          <div>
            <strong className="text-[#301f1f]">Debugging a Toolchain I Hadn’t Used Before</strong><br />
            Diagnosed and fixed invisible-whitespace OData 400 errors, regional formula syntax
            differences (comma vs. semicolon), and property-targeting issues (<code>OnSelect</code> vs.
            other) using Power Automate’s run history rather than guesswork.
          </div>
        </div>
      </div>

      {/* Impact & Why It Matters */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Impact &amp; Why It Matters</h2>

        <p>
          This is a personal prototype, built in a few days on a personal Microsoft 365 trial — not
          production or enterprise experience. It doesn’t demonstrate solution ALM, multi-environment
          strategy, or DLP policy configuration, which is where a lot of real Power Platform governance
          work actually lives. What it does demonstrate is that the same design judgment — narrow AI
          scope, deterministic execution, a real human approval gate, honest handling of messy data —
          travels to a toolchain I’d never built in before. That’s the more useful signal than the
          specific tool names.
        </p>
      </div>

      {/* Screenshots */}
      <div className="mt-12 pt-8 border-t border-[#e8d7b5]">
        <h2 className="text-xl font-semibold tracking-tight text-[#301f1f] mb-6">Screenshots</h2>

        <div className="space-y-10">
          <div>
            <img
              src="/oxford-college-matchmaker-copilot.webp"
              alt="Copilot Studio conversation: user asks to find a college, agent asks what features they want, user replies 'Library?', agent returns a top recommendation of Corpus Christi College"
              className="w-full rounded-xl border border-slate-200"
            />
            <p className="text-sm text-slate-500 mt-2">
              Copilot Studio — free-form request extracted into a single variable, no data access from this layer.
            </p>
          </div>

          <div>
            <img
              src="/oxford-college-matchmaker-flow.webp"
              alt="Power Automate flow diagram: When an agent calls the flow, Initialize variable, Get items, Filter array, For each, Respond to the agent"
              className="w-full max-w-sm mx-auto rounded-xl border border-slate-200"
            />
            <p className="text-sm text-slate-500 mt-2">
              The hardened Power Automate flow — null-safe filter against the SharePoint list, direct
              response back to Copilot Studio.
            </p>
          </div>

          <div>
            <img
              src="/oxford-college-matchmaker-powerapps.webp"
              alt="Power Apps interface showing the Oxford College Ranking list with Balliol selected, its Title, Pros, Cons, and feature fields, and Approve Match / Reset buttons at the bottom"
              className="w-full rounded-xl border border-slate-200"
            />
            <p className="text-sm text-slate-500 mt-2">
              Power Apps — the human oversight gate. Approve Match and Reset are the only things that can
              change a record’s status.
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-8">
          Fully operational end-to-end as of the latest hardening pass, running in a personal environment
          — not publicly deployed.
        </p>
      </div>
    </div>
  )
}
