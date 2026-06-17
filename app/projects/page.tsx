import Link from "next/link"

export default function SkillsContractPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/projects" className="text-sm text-slate-500 hover:text-slate-900 mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">Skills Contract & Risk Analysis</h1>
      <p className="text-lg text-slate-600 mb-10">Technical AI Governance • Agent Safety</p>

      {/* The Problem */}
      <div className="prose prose-slate max-w-none mb-12">
        <h2>The Problem</h2>
        <p>
          Agent Skills are powerful — but largely unregulated. In Databricks (and similar platforms), 
          skills are markdown files that teach an AI assistant patterns and capabilities. There is no 
          built-in validation, approval gate, or provenance tracking before a skill is loaded and used.
        </p>
        <p>
          While auditing an open-source AI developer toolkit (<code>ai-dev-kit</code>) for production use, 
          I discovered that several skills had significantly broader and riskier capabilities than expected. 
          One skill in particular taught the assistant to perform DDL operations (creating and modifying tables) 
          with no guardrails, no PII handling guidance, no audit logging, and no scope boundaries.
        </p>
        <p>
          More concerningly, I identified a structural vulnerability: <strong>malicious skills</strong> can be 
          written as innocent-looking markdown files. Because skills generate code that the <em>user</em> then 
          executes (rather than the assistant executing directly), platform safeguards are often bypassed. 
          The audit log simply shows “user ran code” — with no record that the code originated from an external, 
          untrusted skill.
        </p>
      </div>

      {/* What I Built */}
      <div className="prose prose-slate max-w-none mb-12">
        <h2>What I Built</h2>
        <p>
          I designed and implemented the <strong>Skills Contract</strong> — a pre-execution governance framework 
          that forces the AI assistant to evaluate any skill against a structured set of safety constraints 
          <em>before</em> it is used.
        </p>
        <p>
          The core principle: <strong>safety constraints must live in the architecture, not in the conversation.</strong> 
          Conversational context can be lost or compressed over long sessions. A persistent, machine-readable 
          contract loaded fresh at the start of every interaction provides a more reliable layer of protection.
        </p>
      </div>

      {/* How It Works */}
      <div className="prose prose-slate max-w-none mb-12">
        <h2>How It Works</h2>
        <p>
          The Skills Contract is a Databricks notebook that the assistant must read and apply before executing 
          any user-created or external skill. It evaluates skills across six risk categories:
        </p>
        <ol>
          <li><strong>Data Access Guardrails</strong> — Enforces read-only operations by default and bounds table scope.</li>
          <li><strong>PII & Sensitive Fields</strong> — Requires classification and redaction of sensitive fields before extraction.</li>
          <li><strong>Audit Logging</strong> — Mandates MLflow experiment initialization and artifact logging before any execution begins.</li>
          <li><strong>Permission & Token Scope</strong> — Documents actual permissions in use and enforces phase boundaries (dev vs production).</li>
          <li><strong>Context Window Safety</strong> — Reloads the contract fresh every session and triggers mid-session checks on long executions.</li>
          <li><strong>Pre-Execution Sign-Off</strong> — Produces a structured JSON artifact (logged to MLflow) confirming that all critical checks passed.</li>
        </ol>
        <p>
          I validated the framework by running it against four skills — two I built myself and two taken 
          unmodified from the open-source toolkit.
        </p>
      </div>

      {/* Validation & Results */}
      <div className="prose prose-slate max-w-none mb-12">
        <h2>Validation & Results</h2>
        <p>
          The Skills Contract successfully differentiated risk levels across the four skills tested:
        </p>
        <ul>
          <li><strong>F01 Evaluation Pipeline</strong> (governance-first design) — ✅ <strong>APPROVED</strong></li>
          <li><strong>Notebook Runner</strong> (orchestration tool) — ⚠️ <strong>CONDITIONAL</strong></li>
          <li><strong>MLflow GenAI Evaluation</strong> (documentation-only) — ✅ <strong>N/A</strong> (negligible risk)</li>
          <li><strong>Spark Declarative Pipelines</strong> (unmodified from ai-dev-kit) — 🔴 <strong>BLOCKED</strong></li>
        </ul>
        <p>
          The Spark Declarative Pipelines skill failed five of six critical checks. The framework caught 
          the absence of PII handling, audit logging, scope boundaries, and execution sign-off — risks that 
          would have been invisible without structured evaluation.
        </p>
      </div>

      {/* Impact & Why It Matters */}
      <div className="prose prose-slate max-w-none mb-12">
        <h2>Impact & Why It Matters</h2>
        <p>
          The Skills Contract provides a practical, Databricks-native layer of governance that the platform 
          itself does not currently enforce. It shifts safety from an after-the-fact user responsibility 
          (“review the code before you run it”) to an architectural requirement that happens before execution.
        </p>
        <p>
          This work sits at the intersection of technical AI governance and responsible deployment. As agent 
          skills become more powerful and widely adopted in enterprise environments, the absence of 
          pre-execution governance creates real operational, compliance, and security risks — including the 
          potential for malicious skills to bypass existing platform safeguards.
        </p>
      </div>

      {/* Artifacts */}
      <div className="prose prose-slate max-w-none">
        <h2>Artifacts</h2>
        <p>
          All materials are available in the public GitHub repository:
        </p>
        <ul>
          <li><a href="https://github.com/dynamicsofanaisteroid/farah-zamir-portfolio" target="_blank">GitHub Repository</a> (Skills Contract notebook, validation analysis, risk brief template)</li>
          <li>Skills Contract validation notebook (full technical assessment)</li>
          <li>Risk analysis of ai-dev-kit Spark Declarative Pipelines skill</li>
          <li>Pre-execution sign-off template and examples</li>
        </ul>
      </div>
    </div>
  )
}