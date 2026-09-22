import type { Metadata } from "next";
import Image from "next/image";
import { ClinicCta } from "@/components/clinic-cta";
import {
  clinic,
  clinicRegisterUrl,
  clubName,
  sectionEyebrowClass,
  sectionTitleClass,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "2 Day Clinic in South Surrey",
  description: `${clubName} 2 day volleyball clinic. Serve, set, hit, repeat. ${clinic.dates}, ${clinic.time}, ${clinic.location}. ${clinic.ages}. Limited spots.`,
  alternates: { canonical: `${siteUrl}/clinic` },
  keywords: [
    "Soft Serve Volley Club",
    "Soft Serve Volleyball Club",
    "volleyball clinic South Surrey",
    "U15 U16 volleyball clinic",
    "club tryout prep",
  ],
  openGraph: {
    title: `${clubName} 2 day clinic`,
    description: `Get ready for club tryouts. ${clinic.dates} in ${clinic.location}.`,
    url: `${siteUrl}/clinic`,
    images: [{ url: "/clinic-flyer.jpg", width: 576, height: 1024 }],
    type: "website",
  },
};

const facts = [
  { label: "Where", value: clinic.location },
  { label: "When", value: clinic.dates },
  { label: "Time", value: clinic.time },
  { label: "Ages", value: clinic.ages },
] as const;

export default function ClinicPage() {
  return (
    <main className="clinic-page relative overflow-hidden px-6 pb-24 pt-24">
      <div className="clinic-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-[640px] flex-col items-center text-center">
        <p className={sectionEyebrowClass}>{clubName}</p>
        <h1 className={`mt-3 leading-[0.95] text-white ${sectionTitleClass}`}>
          {clinic.headline}
        </h1>
        <p className="mt-5 max-w-md text-[19px] leading-8 text-white/70">
          Two nights of skill and scrimmage before tryouts.
        </p>
        <p className="mt-3 text-[15px] font-semibold text-pink-band">
          Limited spots
        </p>
        <div className="mt-8">
          <ClinicCta href={clinicRegisterUrl} external>
            Save your spot
          </ClinicCta>
        </div>

        <dl className="mt-12 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl bg-white/8 px-3 py-4 text-white"
            >
              <dt className="text-[12px] font-semibold tracking-tight text-white/45">
                {fact.label}
              </dt>
              <dd className="mt-1 text-[14px] font-semibold leading-5 sm:text-[15px]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <Image
          src="/clinic-flyer.jpg"
          alt={`${clubName} Serve Set Hit Repeat clinic flyer. ${clinic.location}. ${clinic.dates}, ${clinic.time}. ${clinic.ages}.`}
          width={576}
          height={1024}
          priority
          className="mt-12 h-auto w-full max-w-[440px] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
        />

        <p className="mt-10 max-w-sm text-[17px] leading-7 text-white/65">
          An hour of skill work. An hour of live play. Then we go again the next week.
        </p>
        <div className="mt-6">
          <ClinicCta href={clinicRegisterUrl} external>
            Register
          </ClinicCta>
        </div>
      </div>
    </main>
  );
}
