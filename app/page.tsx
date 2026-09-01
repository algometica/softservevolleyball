import { Hero } from "@/components/hero";
import { clubEmail } from "@/lib/site";

const pillars = [
  {
    title: "Club",
    copy: "One roster. High level.",
  },
  {
    title: "Training",
    copy: "Every rep has a purpose.",
  },
  {
    title: "Travel",
    copy: "The season lives on the road.",
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <Hero />

      <section
        id="team"
        className="bg-ink px-6 py-28 text-center text-white md:py-36"
      >
        <p className="text-[17px] font-semibold tracking-tight text-pink">
          The team
        </p>
        <h2 className="mx-auto mt-4 max-w-[820px] text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[56px]">
          One team.
          <br />
          No cuts between programs.
          <br />
          No extra tracks.
        </h2>
        <p className="mx-auto mt-8 max-w-md text-[19px] leading-8 text-white/60 sm:text-[21px]">
          Club. Training. Travel. The same athletes, all season.
        </p>
      </section>

      <section id="season" className="bg-sky px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[980px]">
          <p className="text-center text-[17px] font-semibold tracking-tight text-blue">
            2027
          </p>
          <h2 className="mt-3 text-center text-[40px] font-semibold tracking-[-0.03em] text-ink sm:text-[48px]">
            The season
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[28px] bg-white px-8 py-12 text-center"
              >
                <h3 className="text-[28px] font-semibold tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[17px] leading-7 text-muted">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col items-center bg-pink-band px-6 py-28 text-center text-ink md:py-36"
      >
        <h2 className="text-[48px] font-semibold tracking-[-0.03em] sm:text-[64px]">
          Inquire
        </h2>
        <p className="mt-4 text-[21px] tracking-tight text-ink/55">
          U16 travel. 2027.
        </p>
        <a
          href={`mailto:${clubEmail}`}
          className="mt-10 inline-flex h-12 items-center rounded-full bg-ink px-6 text-[17px] font-normal text-white transition-opacity hover:opacity-85"
        >
          {clubEmail}
        </a>
      </section>
    </main>
  );
}
