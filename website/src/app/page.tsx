import { libreBaskerville } from "./layout";
import SecondScreen from "@/components/SecondScreen";
import ThirdScreen from "@/components/ThirdScreen";
import FourthScreen from "@/components/FourthScreen";
import FifthScreen from "@/components/FifthScreen";
import ScrollingCardsMarquee from "@/components/ScrollingCardsMarquee";

export default function Home() {
  return (
    <>
    <section className="relative h-screen w-full overflow-hidden bg-neutral-800 text-white">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-neutral-800/50" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-between px-4 py-6 text-center">
        <div className="mt-2 text-xs tracking-wide">LEARN WHY WE CREATED ZOVU</div>

        <div className="flex flex-col items-center">
          <h1
            className={`${libreBaskerville.variable} font-[700] text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl`}
            style={{ fontFamily: "var(--font-libre-baskerville)" }}
          >
            We offer One Solution
            <br />
            for your whole Restaurant
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs">Contact Sales</span>
            <input
              className="h-9 w-[280px] rounded bg-white/95 px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
              placeholder="your@workemail.com"
            />
          </div>
          <div className="mt-10 h-6 w-px bg-white/80" />
        </div>

        <p className="mb-2 text-[10px] text-neutral-300">
          Replace fragmented tools with one platform—faster setup, lower cost.
        </p>
      </div>
    </section>
    <div className="bg-white">
      {/* Second screen */}
      {/* @ts-expect-error Server Component boundary for client component import */}
      <SecondScreen />
    </div>
    {/* Third screen placeholder */}
    {/* @ts-expect-error Server Component boundary for client component import */}
    <ThirdScreen />
    {/* Fourth screen carousel */}
    {/* @ts-expect-error Server Component boundary for client component import */}
    <FourthScreen />
    {/* Fifth screen */}
    {/* @ts-expect-error Server Component boundary for client component import */}
    <FifthScreen />
    {/* Scrolling cards marquee */}
    <ScrollingCardsMarquee
      items={[
        { title: "Inventory sync", subtitle: "Real-time stock across outlets", imageSrc: "/images/tab1.jpg" },
        { title: "Seamless reservations", subtitle: "POS-native table view", imageSrc: "/images/tab2.jpg" },
        { title: "Customer insights", subtitle: "Drive repeat visits", imageSrc: "/images/tab1.jpg" },
        { title: "Unified menu", subtitle: "Everywhere at once", imageSrc: "/images/tab2.jpg" },
        { title: "Kitchen display", subtitle: "Faster ticket times", imageSrc: "/images/tab1.jpg" },
      ]}
      speedMs={26000}
    />
    </>
  );
}
