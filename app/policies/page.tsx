import type { Metadata } from "next";
import type { ReactNode } from "react";
import { clubEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Refund, complaint, code of conduct, conflict of interest, and safe sport policies for Soft Serve Volleyball Club.",
};

const sections = [
  { href: "#refunds", label: "Refunds" },
  { href: "#complaints", label: "Complaints" },
  { href: "#conduct", label: "Conduct" },
  { href: "#conflict", label: "Conflict" },
  { href: "#safe-sport", label: "Safe sport" },
  { href: "#recruiting", label: "Recruiting" },
] as const;

export default function PoliciesPage() {
  return (
    <main className="bg-cream">
      <section className="px-6 pb-16 pt-28 text-center md:pt-32">
        <p className="text-[17px] font-semibold tracking-tight text-pink">
          Volleyball BC
        </p>
        <h1 className="mt-3 text-[48px] font-semibold tracking-[-0.035em] text-ink sm:text-[64px]">
          Policies
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[19px] leading-8 text-muted">
          Posted for athletes and families before they join. We uphold the
          Volleyball BC Code of Conduct and Ethics and supporting policies.
        </p>
        <ul className="mx-auto mt-10 flex max-w-[720px] flex-wrap justify-center gap-x-6 gap-y-3 text-[15px]">
          {sections.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                className="text-blue transition-opacity hover:opacity-80"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-[680px]">
          <h2 className="text-[32px] font-semibold tracking-[-0.03em] sm:text-[40px]">
            The club
          </h2>
          <p className="mt-6 text-[17px] leading-8 text-white/65">
            Soft Serve Volleyball Club is a youth club preparing for the 2027
            indoor club season. Our organizational status will appear on the
            Volleyball BC club listing.
          </p>
          <p className="mt-5 text-[17px] leading-8 text-white/65">
            The U16 travel team is the program we register and sanction with
            Volleyball BC. All athletes and team staff on that team register as
            Volleyball BC members. We do not currently run other programs
            outside that sanctioning.
          </p>
        </div>
      </section>

      <PolicyBlock
        id="refunds"
        eyebrow="Financial"
        title="Refunds and penalties"
        tone="cream"
      >
        <p>
          This policy is posted so families know how refunds, fines, and other
          financial penalties work before they commit. It does not list fees.
        </p>
        <p>
          Volleyball BC membership fees are non-refundable. Tryout fees are
          non-refundable.
        </p>
        <p>
          Before a written team offer is accepted, a program registration may
          be withdrawn for a refund minus any processing cost. After an offer
          is accepted, or after the athlete has paid any portion of club fees,
          there is no refund. Withdrawal for documented injury or illness may
          receive a pro-rated refund. A doctor’s note can be requested.
        </p>
        <p>
          If the club cancels a program before it starts, fees for that program
          are refunded minus processing cost. If the club cancels after it
          starts, the unused portion is pro-rated.
        </p>
        <p>
          Late payments and other financial penalties are stated in writing at
          the time of the offer. A committed athlete is responsible for the
          season financial obligation unless this policy says otherwise.
          Volleyball BC does not settle club fee disputes.
        </p>
        <p>
          Refund requests must be sent in writing to{" "}
          <MailLink />.
        </p>
      </PolicyBlock>

      <PolicyBlock
        id="complaints"
        eyebrow="Resolution"
        title="Complaints"
        tone="sky"
      >
        <p>
          Point of contact for club complaints: <MailLink />.
        </p>
        <p>
          Write with the people involved, what happened, and what you are
          asking the club to do. We acknowledge written club complaints within
          seven days.
        </p>
        <p>
          A club director who is not the athlete’s head coach reviews the
          matter. If the complaint involves the primary club contact, write to{" "}
          <a
            href="mailto:reporting@volleyballbc.org"
            className="text-blue"
          >
            reporting@volleyballbc.org
          </a>
          .
        </p>
        <p>
          Club-specific issues follow this process. Issues about Volleyball BC
          bylaws, rules, or procedures go to Volleyball BC at the same
          reporting address.
        </p>
        <p>
          Maltreatment, misconduct, discrimination, violence, bullying, or
          harassment is reported to{" "}
          <a
            href="https://www.itpsport.ca/"
            className="text-blue"
            target="_blank"
            rel="noreferrer"
          >
            ITP Sport
          </a>
          , the independent third party for safe sport. Do not wait on the
          club process for those reports.
        </p>
        <p>
          The club tells Volleyball BC at{" "}
          <a
            href="mailto:reporting@volleyballbc.org"
            className="text-blue"
          >
            reporting@volleyballbc.org
          </a>{" "}
          of any disciplinary sanction we impose on a person registered with
          Volleyball BC. We uphold sanctions that Volleyball BC, Volleyball
          Canada, or ITP Sport notify us about.
        </p>
      </PolicyBlock>

      <PolicyBlock id="conduct" eyebrow="Behaviour" title="Codes of conduct" tone="white">
        <h3>Athletes</h3>
        <p>
          Train and compete with respect for teammates, opponents, officials,
          and staff. Follow coach direction. Speak up if something is unsafe.
          No bullying, harassment, or abuse. Represent the club on the road the
          same way you do at home.
        </p>
        <h3>Coaches</h3>
        <p>
          Put athlete safety and development first. Keep professional
          boundaries with youth. Complete required screening and education
          before working with athletes. No recruiting from other clubs. Model
          the conduct you ask of the roster.
        </p>
        <h3>Parents and guardians</h3>
        <p>
          Support the program and the officials. Raise concerns through the
          complaint process, not during a match. Do not contact athletes from
          another club to recruit. Honour financial and travel commitments
          once an offer is accepted.
        </p>
        <p>
          These codes sit alongside the{" "}
          <a
            href="https://volleyballbc.org/policies/"
            className="text-blue"
            target="_blank"
            rel="noreferrer"
          >
            Volleyball BC Code of Conduct and Ethics
          </a>
          .
        </p>
      </PolicyBlock>

      <PolicyBlock
        id="conflict"
        eyebrow="Governance"
        title="Conflict of interest"
        tone="cream"
      >
        <p>
          A conflict exists when a personal, family, or financial interest
          could affect a decision about athletes, staff, playing time, money,
          or discipline.
        </p>
        <p>
          Directors, coaches, and staff must disclose a conflict as soon as
          they know it. They step back from that decision. The remaining club
          leadership records the disclosure and the outcome.
        </p>
        <p>
          Families may raise a suspected conflict through the complaint
          process.
        </p>
      </PolicyBlock>

      <PolicyBlock
        id="safe-sport"
        eyebrow="Safety"
        title="Safe sport and screening"
        tone="sky"
      >
        <p>
          Persons in authority, including coaches, staff, and club leadership,
          complete Volleyball BC screening before they work with athletes.
          That includes a criminal record check every three years, a Screening
          Disclosure Form each year, and the CAC Safe Sport module.
        </p>
        <p>
          They are not covered by Volleyball BC insurance, and they do not take
          part in club activity, until that check is approved.
        </p>
        <p>
          Report abuse or maltreatment to{" "}
          <a
            href="https://www.itpsport.ca/"
            className="text-blue"
            target="_blank"
            rel="noreferrer"
          >
            ITP Sport
          </a>
          . Club and Volleyball BC policy links live on the{" "}
          <a
            href="https://volleyballbc.org/policies/"
            className="text-blue"
            target="_blank"
            rel="noreferrer"
          >
            Volleyball BC policies page
          </a>
          .
        </p>
      </PolicyBlock>

      <PolicyBlock id="recruiting" eyebrow="Season" title="Recruiting" tone="white">
        <p>
          Volleyball BC has a zero-tolerance recruiting policy. Club
          representatives, including coaches, staff, parents, and athletes, do
          not contact athletes from another club to recruit.
        </p>
        <p>
          Once an athlete has registered with a club, paid any portion of club
          fees, or signed a club agreement, they are committed to that club for
          the season. Tryout fees are not club fees.
        </p>
        <p>
          Report recruiting concerns to{" "}
          <a href="mailto:youth@volleyballbc.org" className="text-blue">
            youth@volleyballbc.org
          </a>{" "}
          or the Technical Director at{" "}
          <a href="mailto:td@volleyballbc.org" className="text-blue">
            td@volleyballbc.org
          </a>
          . Read the full policy on the{" "}
          <a
            href="https://volleyballbc.org/policies/"
            className="text-blue"
            target="_blank"
            rel="noreferrer"
          >
            Volleyball BC website
          </a>
          .
        </p>
      </PolicyBlock>
    </main>
  );
}

function MailLink() {
  return (
    <a href={`mailto:${clubEmail}`} className="text-blue">
      {clubEmail}
    </a>
  );
}

function PolicyBlock({
  id,
  eyebrow,
  title,
  tone,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  tone: "cream" | "sky" | "white";
  children: ReactNode;
}) {
  const background = {
    cream: "bg-cream",
    sky: "bg-sky",
    white: "bg-white",
  }[tone];

  return (
    <section id={id} className={`${background} px-6 py-20 md:py-24`}>
      <div className="mx-auto max-w-[680px]">
        <p className="text-[15px] font-semibold tracking-tight text-pink">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-[32px] font-semibold tracking-[-0.03em] text-ink sm:text-[40px]">
          {title}
        </h2>
        <div className="policy-copy mt-6">{children}</div>
      </div>
    </section>
  );
}
