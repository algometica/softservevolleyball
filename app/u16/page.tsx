import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClinicCta } from "@/components/clinic-cta";
import {
  clinic,
  clinicRegisterUrl,
  clubEmail,
  clubName,
  coaches,
  sectionEyebrowClass,
  sectionTitleClass,
  siteUrl,
  tryouts,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "U16 Club Team",
  description: `${clubName} U16 elite performance program in South Surrey. Tryouts ${tryouts.dates}. Clinic ${clinic.dates}.`,
  alternates: { canonical: `${siteUrl}/u16` },
};

const trainingDays = [
  { day: "Monday", time: "6 to 9pm" },
  { day: "Wednesday", time: "7 to 9pm" },
  { day: "Thursday", time: "7 to 9pm" },
] as const;

function LocationPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-pink"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2.2" />
    </svg>
  );
}

export default function U16Page() {
  return (
    <main id="top">
      <section className="bg-cream px-6 pb-20 pt-28 text-center md:pt-32">
        <p className={sectionEyebrowClass}>U16. 2026/2027.</p>
        <h1 className={`mt-3 text-ink ${sectionTitleClass}`}>
          The elite performance standard
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[21px] font-medium leading-8 tracking-tight text-ink/55">
          Our goal is to develop athletes.
        </p>
      </section>

      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[720px]">
          <h2 className={`text-ink ${sectionTitleClass}`}>The pathway</h2>
          <p className="mt-8 text-[19px] leading-8 text-ink/70">
            Our performance pathway focuses on personalized position training.
            Athletes will be ready to elevate their game
            through high-level training focused on skill, athleticism,
            confidence, and performance. Strength and conditioning is
            integrated into the program to help every athlete become stronger,
            fitter, faster, and more prepared to compete. Every practice is
            engineered to maximize high-quality ball touches, sharpen in-game
            decision-making, and expand court vision.
          </p>
          <p className="mt-5 text-[19px] leading-8 text-ink/70">
            In addition to our local coaches, athletes will train directly
            under an elite coach from Prague; gaining direct exposure to
            advanced international systems, precision footwork, dynamic
            ball-touch control, and high-level match strategies.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px]">
          <p className={`text-center ${sectionEyebrowClass}`}>U16</p>
          <h2 className={`mt-2 text-center text-ink ${sectionTitleClass}`}>
            Coaching team
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {coaches.map((coach) => (
              <article key={coach.name}>
                <div className="overflow-hidden rounded-3xl bg-white">
                  <Image
                    src={coach.src}
                    alt={coach.alt}
                    width={1024}
                    height={1024}
                    className="h-auto w-full"
                    sizes="(min-width: 768px) 300px, 100vw"
                  />
                </div>
                <h3 className="mt-5 text-[24px] font-bold tracking-[-0.02em] text-ink">
                  {coach.name}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-ink/55">
                  {coach.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-white md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className={sectionEyebrowClass}>2026/2027</p>
          <h2 className={`mt-2 ${sectionTitleClass}`}>Travel</h2>
          <p className="mt-8 text-[19px] leading-8 text-white/65">
            U16 team incorporates a dedicated travel schedule designed for 
            athletes committed to serious technical and physical growth. Built
            to deliver high-level game exposure, the travel calendar challenges
            players against top-tier competitive fields in the US and
            outside of North America. This pathway is designed to expose
            athletes to opportunities, refine their skills and elevate their
            athletic ceiling.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px] text-center">
          <p className={sectionEyebrowClass}>2026/2027</p>
          <h2 className={`mt-2 text-ink ${sectionTitleClass}`}>
            Club season training schedule
          </h2>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[15px] font-semibold tracking-tight text-ink">
            <LocationPin />
            South Surrey
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {trainingDays.map((session) => (
              <article
                key={session.day}
                className="rounded-3xl bg-white px-6 py-11"
              >
                <h3 className="text-[24px] font-bold tracking-[-0.02em] text-ink">
                  {session.day}
                </h3>
                <p className="mt-3 text-[17px] text-ink/55">{session.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-[980px] gap-4 md:grid-cols-2">
          <article className="rounded-3xl bg-cream px-8 py-11">
            <p className={sectionEyebrowClass}>Required</p>
            <h2 className="mt-2 text-[32px] font-bold tracking-[-0.03em] text-ink sm:text-[40px]">
              Tryouts
            </h2>
            <dl className="mt-8 space-y-4 text-[17px]">
              <div>
                <dt className="font-semibold text-ink">When</dt>
                <dd className="mt-1 text-ink/55">{tryouts.dates}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Time</dt>
                <dd className="mt-1 text-ink/55">{tryouts.time}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Where</dt>
                <dd className="mt-1 text-ink/55">{tryouts.location}</dd>
              </div>
            </dl>
            <p className="mt-8 text-[17px] leading-7 text-ink/55">
              Registration opens {tryouts.registrationOpens} on this site.
              Registration is required.
            </p>
            <a
              href={`mailto:${clubEmail}`}
              className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-6 text-[17px] font-bold text-white transition-opacity hover:opacity-85"
            >
              Inquire
            </a>
          </article>

          <article className="rounded-3xl bg-cream px-8 py-11">
            <p className={sectionEyebrowClass}>Open now</p>
            <h2 className="mt-2 text-[32px] font-bold tracking-[-0.03em] text-ink sm:text-[40px]">
              Club prep clinic
            </h2>
            <p className="mt-4 text-[17px] leading-7 text-ink/55">
              Coach-led skill work and scrimmage with other club athletes
              before tryouts. U15 and U16 welcome.
            </p>
            <dl className="mt-8 space-y-4 text-[17px]">
              <div>
                <dt className="font-semibold text-ink">When</dt>
                <dd className="mt-1 text-ink/55">{clinic.dates}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Time</dt>
                <dd className="mt-1 text-ink/55">{clinic.time}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Where</dt>
                <dd className="mt-1 text-ink/55">{clinic.location}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <ClinicCta href={clinicRegisterUrl} external>
                Register
              </ClinicCta>
            </div>
            <Link
              href="/clinic"
              className="mt-4 inline-block text-[15px] font-semibold text-ink/45 transition-colors hover:text-ink"
            >
              Clinic details
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
