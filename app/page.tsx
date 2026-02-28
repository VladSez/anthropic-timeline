interface TimelineEvent {
  date: string;
  title: string;
  summary: string;
  source: string;
  sourceLabel: string;
}

const events = [
  {
    date: "2026-02-28T02:56:35.000Z",
    title:
      "OpenAI agrees with Dept. of War to deploy models in classified network",
    summary:
      "OpenAI strikes deal with Pentagon to supply AI to classified military networks. Altman says the same red lines at the heart of Anthropic's dispute are enshrined in OpenAI's new partnership: \"Two of our most important safety principles are prohibitions on domestic mass surveillance and human responsibility for the use of force, including for autonomous weapon systems.\"",
    source: "https://x.com/sama/status/2027578652477821175",
    sourceLabel: "Sam Altman on X",
  },
  {
    date: "2026-02-28T01:24:31.000Z",
    title:
      "Anthropic: Statement on the comments from Secretary of War Pete Hegseth",
    summary:
      "Anthropic summarizes that after months of negotiations with the Department of War, talks broke down over two issues: their refusal to allow mass domestic surveillance or the use of their AI in fully autonomous weapons. They stress that these exceptions haven't impacted any government mission, and argue that current AI isn't reliable enough for weapons use and that domestic surveillance threatens fundamental rights. Anthropic calls the supply chain risk designation unprecedented for an American company, insists it will not alter their stance, and intends to challenge it in court. They assure customers that individual and commercial access will not be affected, and that the new restrictions would only apply to Department of War contracts.",
    source: "https://www.anthropic.com/news/statement-comments-secretary-war",
    sourceLabel: "Anthropic",
  },

  {
    date: "2026-02-27T22:14:43.000Z",
    title: "Dept. of War: Anthropic is a supply chain risk",
    summary:
      "Secretary of War Pete Hegseth denounces Anthropic for limiting military access to its models, calling their stance a betrayal and incompatible with American principles. Announces Anthropic will be barred from defense contracts, labeling them a national security risk. Contractors have six months to transition away.",
    source: "https://x.com/SecWar/status/2027507717469049070?s=20",
    sourceLabel: "Secretary of War Pete Hegseth on X",
  },
  {
    date: "2026-02-27T21:47:00.000Z",
    title: "U.S. government blacklists Anthropic",
    summary:
      "Trump directs all federal agencies to immediately cease use of Anthropic technology. Defense Secretary Hegseth designates Anthropic a supply chain risk to national security — an action historically reserved for U.S. adversaries, never before applied to an American company.",
    source:
      "https://www.theguardian.com/us-news/2026/feb/27/trump-anthropic-ai-federal-agencies",
    sourceLabel: "The Guardian",
  },
  {
    date: "2026-02-27T14:12:04.000Z",
    title: "OpenAI raises $110B on $730B pre-money valuation",
    summary:
      "OpenAI has raised $110 billion in funding from Amazon, NVIDIA, and SoftBank. The company expresses gratitude for partner support and emphasizes ongoing work to provide valuable tools.",
    source: "https://x.com/sama/status/2027386252555919386",
    sourceLabel: "Sam Altman on X",
  },
  {
    date: "2026-02-26T22:36:32.000Z",
    title:
      "Statement from Dario Amodei on our discussions with the Department of War",
    summary:
      "Dario Amodei, Anthropic CEO, reiterates commitment to supporting U.S. national security and highlights the company's proactive deployment of AI models for military and intelligence use. Amodei explains that Anthropic refuses to support two specific use cases—mass domestic surveillance and fully autonomous weapons—on democratic and safety grounds. He details the pressure and threats from the Department of War to remove these safeguards, including blacklisting and 'supply chain risk' labeling, but affirms Anthropic will not compromise. Anthropic expresses willingness to cooperate with a smooth transition if offboarded, while maintaining hope to continue supporting U.S. defense with responsible safeguards in place.",
    source: "https://x.com/AnthropicAI/status/2027150818575528261",
    sourceLabel: "Anthropic on X",
  },
] as const satisfies TimelineEvent[];

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background px-8 py-16 sm:px-6 sm:py-24">
      <main className="w-full max-w-2xl">
        <header className="mb-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Timeline: Anthropic, OpenAI, and U.S. Government / Defense
            Developments
          </h1>
          <p className="mt-3 text-muted">
            Events and milestones highlighting interactions between Anthropic,
            OpenAI, and U.S. government and defense policy.
          </p>
        </header>

        <ol className="relative border-l border-border">
          {events.map((event, i) => (
            <li key={i} className="mb-12 ml-6 last:mb-0">
              <div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-border bg-accent" />
              <time className="text-sm font-medium text-muted">
                {typeof event.date === "string"
                  ? new Date(event.date).toLocaleString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </time>
              <h2 className="mt-1 text-lg font-semibold leading-snug text-pretty">
                {event.title}
              </h2>
              <p className="mt-2 leading-relaxed text-muted text-pretty">
                {event.summary}
              </p>
              <a
                href={event.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {event.sourceLabel}
              </a>
            </li>
          ))}
        </ol>

        <footer className="mt-20 border-t border-border pt-6 text-sm text-muted">
          {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
