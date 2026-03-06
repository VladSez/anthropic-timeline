import { CopyLinkButton } from "./components/copy-link-button";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  summary: string;
  source: string;
  sourceLabel: string;
}

const events = [
  {
    id: "anthropic-ceo-openai-military-claims",
    date: "2026-03-04T14:40:05-08:00",
    title:
      "Anthropic CEO Dario Amodei calls OpenAI’s messaging around military deal ‘straight up lies’, report says",
    summary:
      "Anthropic CEO Dario Amodei strongly criticized OpenAI and its CEO, Sam Altman, calling OpenAI’s communications about their recent Department of Defense (DoD) deal 'straight up lies.' In a memo to staff, Amodei referred to OpenAI’s actions as 'safety theater,' asserting Anthropic had refused a DoD deal over concerns about mass surveillance and autonomous weaponry. Despite Anthropic’s insistence on explicit safeguards, the DoD ultimately signed with OpenAI, which claimed similar protections. Amodei accused Altman of misleadingly portraying himself as a peacemaker. Critics noted the definition of 'lawful use' could shift with changing law, and public perception sided with Anthropic, as ChatGPT uninstalls spiked after the OpenAI-DoD agreement.",
    source:
      "https://techcrunch.com/2026/03/04/anthropic-ceo-dario-amodei-calls-openais-messaging-around-military-deal-straight-up-lies-report-says/",
    sourceLabel: "TechCrunch",
  },
  {
    id: "anthropic-revenue-pentagon-feud",
    date: "2026-03-03T23:18:23.563Z",
    title: "Anthropic nears $20 billion revenue run rate amid Pentagon feud",
    summary:
      "Anthropic is on pace for an annual revenue run rate approaching $20 billion, more than doubling since late 2025 due to strong adoption of its AI products, including Claude Code. The company's valuation stands at $380 billion after recent viral success with its products. However, a recent clash with the Pentagon over AI safeguards—culminating in Defense Secretary Hegseth designating Anthropic a supply-chain risk—has halted Anthropic’s US government sales and may impact relationships with other firms. Anthropic called the move 'legally unsound' and is prepared to challenge it in court. While the business impact is uncertain, Anthropic’s main app recently topped Apple's download charts, signaling growing public support amid the standoff.",
    source:
      "https://m.economictimes.com/tech/artificial-intelligence/anthropic-nears-20-billion-revenue-run-rate-amid-pentagon-feud/amp_articleshow/129001605.cms",
    sourceLabel: "The Economic Times",
  },
  {
    id: "openai-clarifies-dow-deal-civil-liberties",
    date: "2026-03-03T01:15:25.000Z",
    title:
      "Sam Altman: We’re Updating Our Agreement with the U.S. Department of Defense to Clarify Our Principles",
    summary:
      "Sam Altman shares an internal update outlining key amendments to OpenAI's agreement with the Department of War (DoW). The deal now explicitly bars intentional use of OpenAI's AI systems for domestic surveillance of U.S. persons or nationals, including tracking with commercially acquired data, emphasizing protection of civil liberties. The DoW affirms OpenAI's services will not be used by DoW intelligence agencies (e.g., NSA) without further contract modifications. Altman stresses OpenAI’s commitment to democratic processes, technical safety, and learning from communication missteps. He also advocates for Anthropic to get equal treatment and announces an upcoming All Hands meeting for further discussion.",
    source: "https://x.com/sama/status/2028640354912923739",
    sourceLabel: "Sam Altman on X",
  },
  {
    id: "treasury-terminates-anthropic",
    date: "2026-03-02T15:57:31.000Z",
    title:
      "U.S. Treasury ordered by President Trump to terminate use of Anthropic products",
    summary:
      "Acting on President Trump's directive, the U.S. Treasury announces it is immediately terminating the use of all Anthropic products, including Claude. The department emphasizes that government tools must serve the public interest and states that no private company will dictate national security terms.",
    source:
      "https://x.com/secscottbessent/status/2028499953283117283?s=12&t=_RN2fQnPTv5buAq00Oxwaw",
    sourceLabel: "Sec. Scott Bessent on X",
  },
  {
    id: "aws-middle-east-outage",
    date: "2026-03-02T11:09:55.000Z",
    title: "AWS outage in Middle East after air strike; Claude also down",
    summary: `An air strike causes a significant AWS outage in the Middle East, resulting in the loss of a second availability zone and Amazon S3 failures. On the same day, Claude's services went down as well. This incident highlights the vulnerability of cloud infrastructure and AI services to regional instability. AWS outage: https://www.reuters.com/world/middle-east/amazons-cloud-unit-reports-fire-after-objects-hit-uae-data-center-2026-03-01 Claude incident: https://status.claude.com/incidents/0ghc53zpsfmt`,
    source: "https://x.com/initjean/status/2028427577799401621",
    sourceLabel: "Jean inits on X",
  },
  {
    id: "us-iran-anthropic-ai-strikes",
    date: "2026-03-01T01:51:00.000Z",
    title:
      "US uses Anthropic AI, B-2 bombers and suicide drones in Iran strikes",
    summary:
      "According to a source familiar with the situation, the Pentagon employed Anthropic's artificial intelligence, including Claude tools, during a strike on Iran. The attack occurred a day after the U.S. designated Anthropic a supply chain risk and announced the termination of its government partnerships. The precise role of the AI in the operation is unclear, as both the Pentagon and Anthropic declined to comment. Anthropic's AI has been widely deployed across the intelligence community and armed services, notably through a classified cloud partnership with Amazon.",
    source:
      "https://www.reuters.com/business/aerospace-defense/us-deploys-suicide-drones-tomahawk-missiles-iran-strikes-2026-03-01/",
    sourceLabel: "Reuters",
  },
  {
    id: "altman-ama-dow",
    date: "2026-03-01T00:13:41.000Z",
    title:
      "Sam Altman AMA: I'd like to answer questions about our work with the DoW and our thinking over the past few days.",
    summary:
      "Sam Altman opens an AMA to discuss OpenAI's partnership with the Department of War (DoW) and recent events. He answers questions about the timing of OpenAI's announcement in relation to Anthropic's deadline, stating that discussions with the DoW have been ongoing for a while and offering to clarify OpenAI's reasoning and process over recent days.",
    source:
      "https://x.com/sama/status/2027900042720498089?s=12&t=_RN2fQnPTv5buAq00Oxwaw",
    sourceLabel: "Sam Altman on X",
  },
  {
    id: "openai-pentagon-safeguards",
    date: "2026-02-28T20:38:59.000Z",
    title:
      "OpenAI details Pentagon AI deployment agreement with enhanced safeguards",
    summary:
      "OpenAI and the Pentagon announce an AI deployment deal with strict safeguards: prohibiting domestic mass surveillance, autonomous weapons, and high-stakes automated decisions. OpenAI emphasizes stronger protections than Anthropic's prior agreement and opposes Anthropic’s blacklisting, urging equal terms for all labs.",
    source:
      "https://x.com/openai/status/2027846012107456943?s=12&t=_RN2fQnPTv5buAq00Oxwaw",
    sourceLabel: "OpenAI on X",
  },
  {
    id: "amodei-cbs-interview",
    date: "2026-02-28T11:44:00.000Z",
    title:
      "Full interview: Anthropic CEO responds to Trump order, Pentagon clash",
    summary:
      "Anthropic CEO Dario Amodei gives an exclusive interview to CBS News, hours after the U.S. Defense Secretary declared Anthropic a national security supply chain risk, barring military contractors from partnering with the company. Amodei calls the government’s move 'retaliatory and punitive,' and reiterates that Anthropic drew 'red lines' on mass surveillance and autonomous weapons because 'we believe that crossing those lines is contrary to American values, and we wanted to stand up for American values.'",
    source: "https://www.youtube.com/watch?v=MPTNHrq_4LU",
    sourceLabel: "CBS News on YouTube",
  },
  {
    id: "openai-dow-classified",
    date: "2026-02-28T02:56:35.000Z",
    title:
      "OpenAI agrees with Dept. of War to deploy models in classified network",
    summary:
      "OpenAI strikes deal with Pentagon to supply AI to classified military networks. Altman says the same red lines at the heart of Anthropic's dispute are enshrined in OpenAI's new partnership: \"Two of our most important safety principles are prohibitions on domestic mass surveillance and human responsibility for the use of force, including for autonomous weapon systems.\"",
    source: "https://x.com/sama/status/2027578652477821175",
    sourceLabel: "Sam Altman on X",
  },
  {
    id: "anthropic-statement-hegseth",
    date: "2026-02-28T01:24:31.000Z",
    title:
      "Anthropic: Statement on the comments from Secretary of War Pete Hegseth",
    summary:
      "Anthropic summarizes that after months of negotiations with the Department of War, talks broke down over two issues: their refusal to allow mass domestic surveillance or the use of their AI in fully autonomous weapons. They stress that these exceptions haven't impacted any government mission, and argue that current AI isn't reliable enough for weapons use and that domestic surveillance threatens fundamental rights. Anthropic calls the supply chain risk designation unprecedented for an American company, insists it will not alter their stance, and intends to challenge it in court. They assure customers that individual and commercial access will not be affected, and that the new restrictions would only apply to Department of War contracts.",
    source: "https://www.anthropic.com/news/statement-comments-secretary-war",
    sourceLabel: "Anthropic",
  },

  {
    id: "dow-supply-chain-risk",
    date: "2026-02-27T22:14:43.000Z",
    title: "Dept. of War: Anthropic is a supply chain risk",
    summary:
      "Secretary of War Pete Hegseth denounces Anthropic for limiting military access to its models, calling their stance a betrayal and incompatible with American principles. Announces Anthropic will be barred from defense contracts, labeling them a national security risk. Contractors have six months to transition away.",
    source: "https://x.com/SecWar/status/2027507717469049070?s=20",
    sourceLabel: "Secretary of War Pete Hegseth on X",
  },
  {
    id: "us-blacklists-anthropic",
    date: "2026-02-27T21:47:00.000Z",
    title: "U.S. government blacklists Anthropic",
    summary:
      "Trump directs all federal agencies to immediately cease use of Anthropic technology. Defense Secretary Hegseth designates Anthropic a supply chain risk to national security — an action historically reserved for U.S. adversaries, never before applied to an American company.",
    source:
      "https://www.theguardian.com/us-news/2026/feb/27/trump-anthropic-ai-federal-agencies",
    sourceLabel: "The Guardian",
  },
  {
    id: "openai-110b-raise",
    date: "2026-02-27T14:12:04.000Z",
    title: "OpenAI raises $110B on $730B pre-money valuation",
    summary:
      "OpenAI has raised $110 billion in funding from Amazon, NVIDIA, and SoftBank. The company expresses gratitude for partner support and emphasizes ongoing work to provide valuable tools.",
    source: "https://x.com/sama/status/2027386252555919386",
    sourceLabel: "Sam Altman on X",
  },
  {
    id: "amodei-statement-dow",
    date: "2026-02-26T22:36:32.000Z",
    title:
      "Statement from Dario Amodei on our discussions with the Department of War",
    summary:
      "Dario Amodei, Anthropic CEO, reiterates commitment to supporting U.S. national security and highlights the company's proactive deployment of AI models for military and intelligence use. Amodei explains that Anthropic refuses to support two specific use cases—mass domestic surveillance and fully autonomous weapons—on democratic and safety grounds. He details the pressure and threats from the Department of War to remove these safeguards, including blacklisting and 'supply chain risk' labeling, but affirms Anthropic will not compromise. Anthropic expresses willingness to cooperate with a smooth transition if offboarded, while maintaining hope to continue supporting U.S. defense with responsible safeguards in place.",
    source: "https://x.com/AnthropicAI/status/2027150818575528261",
    sourceLabel: "Anthropic on X",
  },
  {
    id: "anthropic-ditches-safety-promise",
    date: "2026-02-25T19:29:00.000Z",
    title:
      "Anthropic ditches its core safety promise in the middle of an AI red line fight with the Pentagon",
    summary:
      "Anthropic has replaced its strict Responsible Scaling Policy with a more flexible, nonbinding safety framework, citing the need to stay competitive as AI development accelerates. The change comes amid pressure from the Pentagon to loosen safeguards, though Anthropic says the revision is unrelated. The new ‘Frontier Safety Roadmap’ swaps hard commitments for public goals, aiming for transparency and adaptability, but critics worry this could weaken AI safety standards. Anthropic insists it will not allow its AI to be used for weapons or mass surveillance, despite outside pressures.",
    source:
      "https://edition.cnn.com/2026/02/25/tech/anthropic-safety-policy-change",
    sourceLabel: "CNN",
  },
  {
    id: "pentagon-threatens-anthropic-pariah",
    date: "2026-02-24T16:38:00.000Z",
    title:
      "Pentagon threatens to make Anthropic a pariah if it refuses to drop AI guardrails",
    summary:
      "Defense Secretary Hegseth tells Anthropic CEO Dario Amodei the Pentagon will terminate their $200M contract and blacklist the company if it doesn't lift restrictions on its AI model for all lawful military uses by Friday. Hegseth also threatens to invoke the Defense Production Act, compelling Anthropic to work with the Pentagon. Anthropic refuses to drop guardrails against AI-controlled weapons and mass domestic surveillance, citing reliability and legal concerns. The Pentagon asserts their request is legal and necessary. The dispute could block Anthropic from government and defense business, benefiting competitors like Musk's xAI. Meeting between Hegseth and Amodei described as cordial; talks ongoing.",
    source:
      "https://edition.cnn.com/2026/02/24/tech/hegseth-anthropic-ai-military-amodei",
    sourceLabel: "CNN",
  },
] as const satisfies TimelineEvent[];

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center overflow-x-hidden bg-background px-8 py-16 sm:px-6 sm:py-24">
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

        <ol className="relative border-l border-zinc-300/80">
          {events.map((event, i) => {
            const isFirst = i === 0;

            return (
              <li
                key={event.id}
                id={event.id}
                className="mb-12 ml-6 scroll-mt-8 last:mb-0"
              >
                <div className="absolute -left-[5px] mt-1.5 flex h-2.5 w-2.5 items-center justify-center">
                  {isFirst && (
                    <span className="absolute h-full w-full animate-ping rounded-full bg-zinc-400 opacity-75" />
                  )}
                  <span
                    className={`relative h-2.5 w-2.5 rounded-full border border-border ${
                      isFirst ? "bg-zinc-900" : "bg-zinc-400"
                    }`}
                  />
                </div>
                <time
                  className={`text-sm font-medium ${
                    isFirst ? "text-zinc-800" : "text-zinc-500"
                  }`}
                  dateTime={event.date}
                >
                  {new Date(event.date).toLocaleString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "UTC",
                  })}{" "}
                  UTC
                </time>
                <h2 className="mt-1 text-lg font-semibold leading-snug text-pretty">
                  {event.title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted text-pretty">
                  {event.summary}
                </p>
                <div className="mt-2 flex items-center gap-1 text-sm text-muted flex-wrap">
                  <span className="font-medium text-zinc-700">Source:</span>
                  <a
                    href={event.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-[#63666a] underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {event.sourceLabel}
                  </a>
                </div>
                <div className="mt-3">
                  <CopyLinkButton eventId={event.id} />
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-20 rounded-lg border border-border bg-zinc-50 px-6 py-5">
          <p className="text-sm leading-relaxed text-muted">
            Have an event to add?{" "}
            <a
              href="https://github.com/VladSez/anthropic-timeline"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-[#63666a] underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Submit a pull request on GitHub
            </a>{" "}
            - contributions are welcome.
          </p>
        </div>

        <footer className="mt-8 border-t border-border pt-6 text-sm text-muted">
          {new Date().getFullYear()} &middot; created by{" "}
          <a
            href="https://x.com/vladsazonau"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-[#63666a] underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Vlad Sazonau
          </a>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-balance">
              Check out my other project:{" "}
              <a
                href="https://easyinvoicepdf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-[#63666a] underline-offset-4 transition-colors hover:decoration-foreground"
              >
                EasyInvoicePDF.com
              </a>{" "}
              &ndash; a free and open-source invoice generator.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
