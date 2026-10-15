import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ClinicCta } from "@/components/clinic-cta";
import {
  clubEmail,
  clubName,
  coaches,
  paymentsEmail,
  sectionEyebrowClass,
  sectionTitleClass,
  tryoutFormUrl,
  tryouts,
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

export default function Home() {
  return (
    <main id="top">
      <Hero />

      <section id="tryouts" className="bg-ink px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px]">
          <p className={`text-center ${sectionEyebrowClass}`}>U16. 2026/2027.</p>
          <h2 className={`mt-2 text-center text-white ${sectionTitleClass}`}>
            Club tryouts
          </h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl bg-white px-5 py-8 text-left sm:px-8 sm:py-10">
              <h3 className="text-[24px] font-bold tracking-[-0.02em] text-ink">
                The tryout
              </h3>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-[13px] font-semibold tracking-tight text-pink">
                    When
                  </dt>
                  <dd className="mt-1 text-[17px] font-semibold text-ink">
                    Thursday {tryouts.dates}, {tryouts.time}
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] font-semibold tracking-tight text-pink">
                    Where
                  </dt>
                  <dd className="mt-1 text-[17px] font-semibold text-ink">
                    {tryouts.location}
                  </dd>
                  <dd className="mt-1 text-[17px] text-ink/55">
                    {tryouts.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] font-semibold tracking-tight text-pink">
                    Who
                  </dt>
                  <dd className="mt-1 text-[17px] font-semibold text-ink">
                    {tryouts.ages}
                  </dd>
                </div>
              </dl>
            </article>

            <article className="min-w-0 rounded-3xl bg-white px-5 py-8 text-left sm:px-8 sm:py-10">
              <h3 className="text-[24px] font-bold tracking-[-0.02em] text-ink">
                How to register
              </h3>
              <ol className="mt-8 space-y-5 text-[17px] font-semibold text-ink">
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white">
                    1
                  </span>
                  Fill the form
                </li>
                <li className="flex min-w-0 items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white">
                    2
                  </span>
                  <span className="min-w-0">
                    Interac {tryouts.fee}
                    <a
                      href={`mailto:${paymentsEmail}`}
                      className="mt-1 block break-all text-[15px] font-semibold underline decoration-pink/50 underline-offset-4"
                    >
                      {paymentsEmail}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white">
                    3
                  </span>
                  We confirm by email
                </li>
              </ol>
              {tryoutFormUrl ? (
                <div className="mt-10">
                  <ClinicCta href={tryoutFormUrl} external>
                    Fill the form
                  </ClinicCta>
                </div>
              ) : null}
            </article>
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
          <div className="rounded-3xl bg-white px-8 py-12 text-left">
            <p className="text-[15px] font-semibold tracking-tight text-pink">
              2026/2027
            </p>
            <h3 className="mt-2 text-[40px] font-bold tracking-[-0.04em]">
              U13
            </h3>
            <p className="mt-3 text-[17px] text-ink/45">Coming soon</p>
          </div>
          <Link
            href="/u16"
            className="rounded-3xl bg-ink px-8 py-12 text-left text-white transition-opacity hover:opacity-90"
          >
            <p className="text-[15px] font-semibold tracking-tight text-pink">
              2026/2027
            </p>
            <h3 className="mt-2 text-[40px] font-bold tracking-[-0.04em]">
              U16
            </h3>
            <p className="mt-3 text-[17px] text-white/55">View the team</p>
          </Link>
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
