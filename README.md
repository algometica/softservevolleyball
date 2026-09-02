# Soft Serve Volley Club

Site for the U16 club team, 2027 season. [softservevolleyclub.ca](https://softservevolleyclub.ca)

Developing youth for athletic performance.

## Stack

Next.js 16, TypeScript, Tailwind CSS.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Pages

- `/` team, season, inquire
- `/policies` club policies for Volleyball BC (linked from the footer)

## Deploy

1. Import `algometica/softservevolleyball` in [Vercel](https://vercel.com/new). Framework: Next.js. Deploy.
2. Project → Settings → Domains. Add `softservevolleyclub.ca`. Accept the `www` redirect if Vercel offers it.
3. Copy the records from that domain card. Then in Namecheap: Domain List → Manage `softservevolleyclub.ca` → **Advanced DNS**.

Keep Namecheap BasicDNS. Do not switch to Vercel nameservers unless you also want Vercel to host email DNS later.

Typical records (confirm against the Vercel card):

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | value on the Vercel card, often `76.76.21.21` | Automatic |
| CNAME | `www` | value on the Vercel card, often `cname.vercel-dns.com` | Automatic |

Delete Namecheap parking records, old A/CNAME rows for `@` or `www`, and any CAA records. Turn **DNSSEC** off if it is on.

Vercel issues SSL after DNS propagates. That can take a few minutes or a few hours.
