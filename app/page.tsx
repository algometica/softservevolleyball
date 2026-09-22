import Image from "next/image";
import { Hero } from "@/components/hero";
import { clubEmail, sectionEyebrowClass, sectionTitleClass } from "@/lib/site";

const coaches = [
  {
    name: "Jaida",
    src: "/coach-jaida.jpg",
    alt: "U16 Coach Jaida, Soft Serve Volley Club",
  },
  {
    name: "Nicole",
    src: "/coach-nicole.jpg",
    alt: "U16 Coach Nicole, Soft Serve Volley Club",
  },
] as const;

const pillars = [
  {
    title: "Team",
    copy: "Disciplined athletes committed to competitive excellence.",
  },
  {
    title: "Peak performance",
    copy: "High level skill refinement paired with athletic conditioning to build the best skill set.",
  },
  {
    title: "Travel",
    copy: "High-exposure competition to test athletes at the highest level.",
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <Hero />

      <section
        id="team"
        className="flex min-h-[42vh] flex-col items-center justify-center bg-ink px-6 py-24 text-center text-white"
      >
        <p className={sectionEyebrowClass}>Soft Serve Volley Club</p>
        <h2 className={`mt-3 ${sectionTitleClass}`}>Club Teams</h2>
      </section>

      <section id="coaches" className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px]">
          <p className={`text-center ${sectionEyebrowClass}`}>2026 / 2027</p>
          <h2 className={`mt-2 text-center text-ink ${sectionTitleClass}`}>
            Coaches
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
            {coaches.map((coach) => (
              <article
                key={coach.name}
                className="overflow-hidden rounded-3xl bg-cream"
              >
                <Image
                  src={coach.src}
                  alt={coach.alt}
                  width={1024}
                  height={1024}
                  className="h-auto w-full"
                  sizes="(min-width: 640px) 470px, 100vw"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="season" className="bg-cream px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px]">
          <h2 className={`text-center text-ink ${sectionTitleClass}`}>
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
        <h2 className={sectionTitleClass}>Inquire</h2>
        <p className="mt-3 text-[21px] font-medium tracking-tight text-ink/55">
          2027.
        </p>
        <a
          href={`mailto:${clubEmail}`}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-6 text-[17px] font-bold text-ink-soft transition-opacity hover:opacity-85"
        >
          {clubEmail}
        </a>
      </section>
    </main>
  );
}
