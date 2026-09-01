# Soft Serve Volleyball Club

Site for the U16 travel team, 2027 season. [softservevolleyclub.ca](https://softservevolleyclub.ca)

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

Import this repo in Vercel. Then add `softservevolleyclub.ca` in the project and point Namecheap at Vercel (Vercel nameservers, or an `A` record to `10.0.1.2` and `www` CNAME to `cname.vercel-dns.com`).
