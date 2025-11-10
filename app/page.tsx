export default function Page() {
  return (
    <div className="stack-xl">
      <header className="hero">
        <h1>What is an AI Agent?</h1>
        <p className="lede">
          An AI agent is a software system that can perceive, reason, and act
          toward goals autonomously within an environment.
        </p>
      </header>

      <section className="card">
        <h2>Key characteristics</h2>
        <ul>
          <li>
            <strong>Perception</strong>: gathers information (e.g., text, APIs, sensors) about its
            environment.
          </li>
          <li>
            <strong>Reasoning</strong>: interprets context, plans steps, and makes decisions.
          </li>
          <li>
            <strong>Action</strong>: executes tools or operations to achieve goals.
          </li>
          <li>
            <strong>Learning/Memory</strong>: can adapt over time with feedback and stored knowledge.
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>Typical architecture</h2>
        <ol>
          <li>Input and context (prompts, goals, constraints)</li>
          <li>Planner/Policy (decides next best action)</li>
          <li>Tooling (APIs, databases, code execution)</li>
          <li>Memory (short-term context, long-term knowledge)</li>
          <li>Feedback loop (evaluate results, iterate or stop)</li>
        </ol>
      </section>

      <section className="card">
        <h2>Common use cases</h2>
        <ul>
          <li>Customer support assistants and triage agents</li>
          <li>Research and data analysis copilots</li>
          <li>Workflow automation (ETL, ops, back-office tasks)</li>
          <li>Software engineering assistants (issue triage, code changes, PRs)</li>
          <li>Personal productivity (scheduling, email, reminders)</li>
        </ul>
      </section>

      <section className="card">
        <h2>Why they matter</h2>
        <p>
          Agents turn language models into goal-directed systems that can reliably
          complete tasks, reducing manual effort and enabling new automation.
        </p>
      </section>

      <section className="faq card">
        <h2>FAQ</h2>
        <details>
          <summary>Are agents the same as chatbots?</summary>
          <p>
            Not exactly. A chatbot focuses on conversation; an agent focuses on
            achieving goals using reasoning, tools, and feedback loops. A chatbot
            can be part of an agent, but an agent is more capable.
          </p>
        </details>
        <details>
          <summary>Do agents always need tools?</summary>
          <p>
            No, but tools (APIs, search, code) typically make agents more
            effective by letting them act beyond plain text generation.
          </p>
        </details>
        <details>
          <summary>How is safety handled?</summary>
          <p>
            Use guardrails like constrained tools, input/output validation, rate
            limits, audits, and human-in-the-loop for critical actions.
          </p>
        </details>
      </section>
    </div>
  );
}
