import Image from "next/image";

export function Hero() {
  return (
    <section className="hero relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-cream px-6 pb-20 pt-24">
      <div className="relative z-10 mx-auto grid w-full max-w-[1080px] items-center gap-6 md:grid-cols-2 md:gap-10">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="hero-line hero-line-1 mb-4 text-[17px] font-semibold tracking-tight text-pink">
            Soft Serve Volley Club
          </p>
          <h1 className="hero-line hero-line-2 font-bold leading-[0.9] tracking-[-0.05em] text-ink-soft">
            <span className="block text-[72px] sm:text-[96px] lg:text-[112px]">
              2027
            </span>
            <span className="mt-1 block text-[40px] sm:text-[56px] lg:text-[64px]">
              club season
            </span>
          </h1>
          <p className="hero-line hero-line-5 mx-auto mt-6 max-w-sm text-[22px] font-medium leading-8 tracking-[-0.02em] text-ink/70 md:mx-0 sm:text-[24px] sm:leading-9">
            Developing youth for athletic performance.
          </p>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[420px] md:order-2 md:max-w-[480px]">
          <div className="hero-stage" aria-hidden="true">
            <div className="hero-glow hero-glow-pink" />
            <div className="hero-glow hero-glow-blue" />
          </div>
          <Image
            src="/ssv-logo.png"
            alt="Soft Serve Volley Club"
            width={720}
            height={720}
            sizes="(min-width: 768px) 480px, 80vw"
            priority
            className="hero-logo relative z-10 h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
