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
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38]">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">The Problem</h2>
        
        <p>
          Agent Skills are powerful, but largely unregulated. In platforms like Databricks, skills are 
          essentially markdown files that teach an AI assistant what it can do and how to do it. There is 
          no built-in validation, approval process, or provenance tracking before a skill is loaded and used.
        </p>

        <p>
          While auditing an open-source AI developer toolkit (<code>ai-dev-kit</code>) for use in a production 
          project, I discovered that several skills had significantly broader and riskier capabilities than 
          expected. One skill in particular taught the assistant to perform DDL operations — creating, modifying, 
          and potentially dropping tables — with no guardrails, no PII handling guidance, no audit logging, 
          and no scope boundaries.
        </p>

        <p>
          More concerningly, I identified a structural vulnerability: <strong>malicious skills</strong> can be 
          written as innocent-looking markdown files. Because skills generate code that the <em>user</em> then 
          executes (rather than the assistant executing directly), many platform safeguards are bypassed. 
          The audit log simply shows “user ran code” — with no record that the code originated from an external, 
          untrusted source.
        </p>
      </div>

      {/* What I Built */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">What I Built</h2>
        
        <p>
          I designed and built the <strong>Skills Contract</strong> — a pre-execution governance framework that 
          forces the AI assistant to evaluate any skill against a structured set of safety constraints 
          <em>before</em> it is used.
        </p>

        <p>
          The core principle is simple: <strong>safety constraints must live in the architecture, not in the conversation.</strong> 
          Conversational context can be lost or compressed during long sessions. A persistent, machine-readable 
          contract that is loaded fresh at the start of every interaction provides a much more reliable layer of protection.
        </p>
      </div>

      {/* How It Works */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">How It Works</h2>
        
        <p>
          The Skills Contract is a Databricks notebook that the assistant must read and apply before executing 
          any user-created or external skill. It evaluates skills across six risk categories:
        </p>

        <div className="space-y-4 pl-4">
          <div>
            <strong className="text-[#301f1f]">1. Data Access Guardrails</strong><br />
            Enforces read-only operations by default and requires explicit justification for any destructive actions. Table scope must be clearly bounded before execution.
          </div>
          <div>
            <strong className="text-[#301f1f]">2. PII & Sensitive Fields</strong><br />
            Requires fields to be classified as SAFE, REVIEW, or RESTRICTED before any data extraction. RESTRICTED fields are blocked from output by default.
          </div>
          <div>
            <strong className="text-[#301f1f]">3. Audit Logging</strong><br />
            Mandates that an MLflow experiment is active before any execution begins. Pipeline metadata, schema assessments, and results must be logged as artifacts.
          </div>
          <div>
            <strong className="text-[#301f1f]">4. Permission & Token Scope</strong><br />
            Requires documentation of actual token permissions and enforces clear boundaries between development and production environments.
          </div>
          <div>
            <strong className="text-[#301f1f]">5. Context Window Safety</strong><br />
            The contract is reloaded fresh at the start of every session. Long-running executions trigger mid-session constraint checks.
          </div>
          <div>
            <strong className="text-[#301f1f]">6. Pre-Execution Sign-Off</strong><br />
            Produces a structured JSON artifact (logged to MLflow) that confirms all critical checks passed before the skill is allowed to run.
          </div>
        </div>
      </div>

      {/* Validation & Results */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Validation & Results</h2>
        
        <p>
          I validated the framework by running it against four skills — two I built myself and two taken 
          unmodified from the open-source <code>ai-dev-kit</code>.
        </p>

        <div className="bg-white border border-[#e8d7b5] rounded-xl p-6 my-6">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span><strong>F01 Evaluation Pipeline</strong> (governance-first design)</span>
              <span className="text-emerald-600 font-medium">✅ APPROVED</span>
            </div>
            <div className="flex justify-between items-center">
              <span><strong>Notebook Runner</strong> (orchestration tool)</span>
              <span className="text-amber-600 font-medium">⚠️ CONDITIONAL</span>
            </div>
            <div className="flex justify-between items-center">
              <span><strong>MLflow GenAI Evaluation</strong> (documentation only)</span>
              <span className="text-emerald-600 font-medium">✅ N/A</span>
            </div>
            <div className="flex justify-between items-center">
              <span><strong>Spark Declarative Pipelines</strong> (unmodified from ai-dev-kit)</span>
              <span className="text-red-600 font-medium">🔴 BLOCKED</span>
            </div>
          </div>
        </div>

        <p>
          The Spark Declarative Pipelines skill failed five of six critical checks. The framework caught 
          the absence of PII handling, audit logging, scope boundaries, and execution sign-off — serious 
          risks that would have been invisible without structured evaluation.
        </p>
      </div>

      {/* Impact & Why It Matters */}
      <div className="space-y-6 text-[15.5px] leading-relaxed text-[#571e38] mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#301f1f] mt-8 mb-4">Impact & Why It Matters</h2>
        
        <p>
          The Skills Contract provides a practical, Databricks-native layer of governance that the platform 
          itself does not currently enforce. It shifts safety from an after-the-fact user responsibility 
          (“review the code before you run it”) to an architectural requirement that happens before execution.
        </p>

        <p>
          As agent skills become more powerful and widely adopted in enterprise environments, the absence of 
          pre-execution governance creates real operational, compliance, and security risks — including the 
          potential for malicious skills to bypass existing platform safeguards.
        </p>
      </div>

      {/* Artifacts */}
      <div className="mt-12 pt-8 border-t border-[#e8d7b5]">
        <h2 className="text-xl font-semibold tracking-tight text-[#301f1f] mb-4">Artifacts</h2>
        <p className="text-[15.5px] text-[#571e38] mb-4">
          All materials are available in the public GitHub repository:
        </p>
        <ul className="text-[15.5px] text-[#571e38] space-y-1.5">
          <li>• <a href="https://github.com/dynamicsofanaisteroid/farah-zamir-portfolio" target="_blank" className="underline hover:text-[#1e5721]">GitHub Repository</a> (Skills Contract notebook, validation analysis, risk brief template)</li>
          <li>• Skills Contract validation notebook (full technical assessment)</li>
          <li>• Risk analysis of ai-dev-kit Spark Declarative Pipelines skill</li>
          <li>• Pre-execution sign-off template and examples</li>
        </ul>
      </div>
    </div>
  )
}