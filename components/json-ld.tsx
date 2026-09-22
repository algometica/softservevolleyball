import { clinic, clubEmail, clubName, instagramUrl, siteUrl } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: clubName,
    alternateName: ["Soft Serve Volleyball Club", "SSV", "Soft Serve"],
    url: siteUrl,
    email: clubEmail,
    logo: `${siteUrl}/ssv-logo.png`,
    image: `${siteUrl}/ssv-logo.png`,
    sport: "Volleyball",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "British Columbia",
    },
    sameAs: [instagramUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: clubName,
    url: siteUrl,
  };

  const event = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${clubName} 2 day clinic`,
    description:
      "Volleyball club prep clinic for U15 and U16 athletes. Skill work and scrimmage in South Surrey.",
    url: `${siteUrl}/clinic`,
    image: `${siteUrl}/clinic-flyer.jpg`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: "2026-11-15T19:00:00-08:00",
    endDate: "2026-11-22T21:00:00-08:00",
    location: {
      "@type": "Place",
      name: clinic.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "South Surrey",
        addressRegion: "BC",
        addressCountry: "CA",
      },
    },
    organizer: {
      "@type": "SportsOrganization",
      name: clubName,
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/clinic`,
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
      />
    </>
  );
}
