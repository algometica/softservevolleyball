import { Hero } from "@/components/hero";
import { clubEmail } from "@/lib/site";

const pillars = [
  {
    title: "Club",
    copy: "One roster. High level.",
  },
  {
    title: "Training",
    copy: "Personalized performance training.",
  },
  {
    title: "Travel",
    copy: "Engaging in high level tournaments.",
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <Hero />

      <section
        id="team"
        className="flex min-h-[42vh] items-center justify-center bg-ink px-6 py-24 text-center text-white"
      >
        <h2 className="text-[40px] font-bold tracking-[-0.04em] sm:text-[56px]">
          U16 Travel team
        </h2>
      </section>

      <section id="season" className="bg-sky px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-center text-[40px] font-bold tracking-[-0.04em] text-ink sm:text-[48px]">
            The season
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl bg-white px-8 py-11 text-center"
              >
                <h3 className="text-[24px] font-bold tracking-[-0.02em] text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[17px] leading-7 text-ink/55">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col items-center bg-pink-band px-6 py-24 text-center text-ink md:py-28"
      >
        <h2 className="text-[48px] font-bold tracking-[-0.04em] sm:text-[56px]">
          Inquire
        </h2>
        <p className="mt-3 text-[21px] font-medium tracking-tight text-ink/55">
          U16 travel. 2027.
        </p>
        <a
          href={`mailto:${clubEmail}`}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-6 text-[17px] font-medium text-white transition-opacity hover:opacity-85"
        >
          {clubEmail}
        </a>
      </section>
    </main>
  );
}
