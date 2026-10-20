import type { Metadata } from "next";
import { ClinicCta } from "@/components/clinic-cta";
import {
  clubName,
  paymentsEmail,
  sectionEyebrowClass,
  sectionTitleClass,
  siteUrl,
  u13Training,
  u13TryoutFormUrl,
  u13Tryouts,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "U13 Club Team",
  description: `${clubName} U13 club pathway in South Surrey. Tryouts ${u13Tryouts.day} ${u13Tryouts.dates}.`,
  alternates: { canonical: `${siteUrl}/u13` },
};

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

export default function U13Page() {
  return (
    <main id="top">
      <section className="bg-cream px-6 pb-20 pt-28 text-center md:pt-32">
        <p className={sectionEyebrowClass}>U13. 2026/2027.</p>
        <h1 className={`mt-3 text-ink ${sectionTitleClass}`}>
          Entry into competitive play
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[21px] font-medium leading-8 tracking-tight text-ink/55">
          Letting youth athletes love the game.
        </p>
      </section>

      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[720px]">
          <h2 className={`text-ink ${sectionTitleClass}`}>The pathway</h2>
          <p className="mt-8 text-[19px] leading-8 text-ink/70">
            Our U13 pathway focuses on establishing strong technical
            fundamentals, high-volume ball touches, and developing a deep
            passion for organized volleyball. Athletes entering club play will
            build a solid foundation across all core skills: serving, setting,
            passing, and attacking, while learning footwork precision, court
            movement, and key volleyball concepts.
          </p>
          <p className="mt-5 text-[19px] leading-8 text-ink/70">
            Youth physical literacy and functional movement are integrated into
            every practice to help young athletes build coordination, agility,
            balance, and court awareness safely. Every drill is structured to
            maximize active repetitions, boost athletic confidence, and teach
            proper mechanics from day one.
          </p>
          <p className="mt-5 text-[19px] leading-8 text-ink/70">
            In addition to our local coaching team, athletes will receive
            technical guidance under an elite coach from Prague, introducing
            young players early to European technical standards, clean ball
            control, and strong positional habits.
          </p>
          <p className="mt-5 text-[19px] leading-8 text-ink/70">
            And most importantly, letting our youth athletes love the game.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[980px] text-center">
          <p className={sectionEyebrowClass}>U13</p>
          <h2 className={`mt-2 text-ink ${sectionTitleClass}`}>
            Coaching team
          </h2>
          <div className="mx-auto mt-12 max-w-md rounded-3xl bg-white px-8 py-16">
            <p className="text-[24px] font-bold tracking-[-0.02em] text-ink">
              Coming soon
            </p>
            <p className="mt-3 text-[17px] leading-7 text-ink/55">
              Local staff plus technical guidance from Prague.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-white md:py-28">
        <div className="mx-auto max-w-[720px]">
          <p className={sectionEyebrowClass}>2026/2027</p>
          <h2 className={`mt-2 ${sectionTitleClass}`}>
            Entry into competitive play
          </h2>
          <p className="mt-8 text-[19px] leading-8 text-white/65">
            The U13 program is designed specifically for young athletes
            transitioning into organized club volleyball. We emphasize strong
            sport habits, positive communication, and tactical court
            understanding in a supportive, high-energy environment. This
            foundational season provides young players with the essential
            athletic tools, technical mechanics, and competitive confidence
            required to progress through the Super Nova development pathway,
            while being exposed to high level play in tournaments.
          </p>
          <p className="mt-5 text-[19px] leading-8 text-white/65">
            Starting club volleyball at U13 gives young athletes a crucial head
            start by installing rock-solid foundational mechanics before
            high-pressure competition sets in. As team rosters and match play
            become exponentially more competitive in the U14, U15, and U16 age
            divisions, early exposure allows players to adapt smoothly to the
            speed and tactical demands of club-level volleyball. By building
            technical proficiency and court confidence early on, athletes
            position themselves to stand out during high-stakes tryouts and
            transition seamlessly into advanced team systems.
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
          <div className="mx-auto mt-12 grid max-w-[640px] gap-4 sm:grid-cols-2">
            {u13Training.map((session) => (
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
        <div className="mx-auto max-w-[520px]">
          <article className="rounded-3xl bg-cream px-8 py-11">
            <p className={sectionEyebrowClass}>Required</p>
            <h2 className="mt-2 text-[32px] font-bold tracking-[-0.03em] text-ink sm:text-[40px]">
              Tryouts
            </h2>
            <dl className="mt-8 space-y-4 text-[17px]">
              <div>
                <dt className="font-semibold text-ink">When</dt>
                <dd className="mt-1 text-ink/55">
                  {u13Tryouts.day} {u13Tryouts.dates}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Time</dt>
                <dd className="mt-1 text-ink/55">{u13Tryouts.time}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Where</dt>
                <dd className="mt-1 text-ink/55">
                  {u13Tryouts.location}
                  <br />
                  {u13Tryouts.address}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Who</dt>
                <dd className="mt-1 text-ink/55">{u13Tryouts.ages}</dd>
              </div>
            </dl>
            <p className="mt-8 text-[17px] leading-7 break-words text-ink/55">
              Tryout fee {u13Tryouts.fee} to{" "}
              <a
                href={`mailto:${paymentsEmail}`}
                className="break-all font-semibold text-ink"
              >
                {paymentsEmail}
              </a>
              . Put the athlete&apos;s name in the e-transfer notes.
              Registration is required.
            </p>
            <div className="mt-8">
              <ClinicCta href={u13TryoutFormUrl} external>
                Fill the tryout form
              </ClinicCta>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
