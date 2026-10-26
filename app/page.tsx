import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ClinicCta } from "@/components/clinic-cta";
import {
  clubEmail,
  clubName,
  coaches,
  sectionEyebrowClass,
  sectionTitleClass,
  tryoutFormUrl,
  u14TryoutFormUrl,
} from "@/lib/site";

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

const tryoutActions = [
  { label: "U14 tryout", href: u14TryoutFormUrl },
  { label: "U16 tryout", href: tryoutFormUrl },
] as const;

const teamCards = [
  {
    age: "U14",
    href: "/u14",
    line: "Entry into competitive play.",
  },
  {
    age: "U16",
    href: "/u16",
    line: "The elite performance standard.",
  },
] as const;

export default function Home() {
  return (
    <main id="top">
      <Hero />

      <section id="tryouts" className="bg-ink px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px]">
          <p className={`text-center ${sectionEyebrowClass}`}>2026/2027</p>
          <h2 className={`mt-2 text-center text-white ${sectionTitleClass}`}>
            Club tryouts
          </h2>
          <p className="mx-auto mt-5 max-w-md text-center text-[19px] leading-7 text-white/55">
            Register for the age group. Dates, gym, and payment are on the form
            and the team page.
          </p>
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            {tryoutActions.map((action) => (
              <ClinicCta
                key={action.label}
                href={action.href}
                external
                className="w-full sm:w-auto"
              >
                {action.label}
              </ClinicCta>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="flex min-h-[42vh] flex-col items-center justify-center bg-cream px-6 py-24 text-center text-ink"
      >
        <p className={sectionEyebrowClass}>{clubName}</p>
        <h2 className={`mt-3 ${sectionTitleClass}`}>Club Teams</h2>
        <div className="mt-14 grid w-full max-w-[720px] gap-4 sm:grid-cols-2">
          {teamCards.map((team) => (
            <Link
              key={team.age}
              href={team.href}
              className="rounded-3xl bg-ink px-8 py-12 text-left text-white transition-opacity hover:opacity-90"
            >
              <p className="text-[15px] font-semibold tracking-tight text-pink">
                2026/2027
              </p>
              <h3 className="mt-2 text-[40px] font-bold tracking-[-0.04em]">
                {team.age}
              </h3>
              <p className="mt-3 text-[17px] leading-7 text-white/55">
                {team.line}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="coaches" className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px]">
          <p className={`text-center ${sectionEyebrowClass}`}>2026 / 2027</p>
          <h2 className={`mt-2 text-center text-ink ${sectionTitleClass}`}>
            Coaches
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
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
          className="mt-8 inline-flex h-12 max-w-full items-center break-all rounded-full bg-white px-5 text-[15px] font-bold text-ink-soft transition-opacity hover:opacity-85 sm:px-6 sm:text-[17px]"
        >
          {clubEmail}
        </a>
      </section>
    </main>
  );
}
