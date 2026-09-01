import Image from "next/image";

const lines = [
  { text: "U16", className: "text-[64px] sm:text-[88px] lg:text-[104px]" },
  { text: "2027 season", className: "text-[36px] sm:text-[52px] lg:text-[60px]" },
  { text: "Travel team", className: "text-[36px] sm:text-[52px] lg:text-[60px]" },
] as const;

export function Hero() {
  return (
    <section className="hero relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-cream px-6 pb-24 pt-24">
      <div className="relative z-10 mx-auto grid w-full max-w-[1100px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="hero-line hero-line-1 mb-5 text-[13px] font-semibold tracking-[0.22em] text-pink uppercase">
            Soft Serve Volleyball Club
          </p>
          <h1 className="font-semibold leading-[0.95] tracking-[-0.045em] text-ink">
            {lines.map((line, index) => (
              <span
                key={line.text}
                className={`hero-line hero-line-${index + 2} block ${line.className}`}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p className="hero-line hero-line-5 mx-auto mt-7 max-w-lg text-[21px] leading-8 tracking-tight text-muted lg:mx-0 sm:text-[26px] sm:leading-9">
            Developing youth for athletic performance.
          </p>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[520px] lg:order-2 lg:max-w-none">
          <div className="hero-stage" aria-hidden="true">
            <div className="hero-glow hero-glow-pink" />
            <div className="hero-glow hero-glow-blue" />
          </div>
          <Image
            src="/ssv-logo.png"
            alt="Soft Serve Volley Club"
            width={1024}
            height={1024}
            priority
            className="hero-logo relative z-10 h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
