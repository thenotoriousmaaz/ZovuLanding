import { libreBaskerville } from "./layout";
import SecondScreen from "@/components/SecondScreen";
import ThirdScreen from "@/components/ThirdScreen";
import FourthScreen from "@/components/FourthScreen";
import FifthScreen from "@/components/FifthScreen";
import ScrollingCardsMarquee from "@/components/ScrollingCardsMarquee";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

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

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-between px-6 py-8 text-center">
        <div className="mt-2 text-sm tracking-wide md:text-base">LEARN WHY WE CREATED ZOVU</div>

        <div className="flex flex-col items-center">
          <h1
            className={`${libreBaskerville.variable} font-[700] text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl`}
            style={{ fontFamily: "var(--font-libre-baskerville)" }}
          >
            We offer One Solution
            <br />
            for your whole Restaurant
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm md:text-base">Contact Sales</span>
            <input
              className="h-11 w-[340px] rounded bg-white/95 px-3 text-base text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
              placeholder="your@workemail.com"
            />
          </div>
          {/* removed stray caret/line */}
        </div>

        <p className="mb-2 text-sm text-neutral-300 md:text-base">
          Replace fragmented tools with one platform—faster setup, lower cost.
        </p>
      </div>
    </section>
    <div className="bg-white">
      {/* Second screen */}
      <SecondScreen />
    </div>
    {/* Third screen placeholder */}
    <ThirdScreen />
    {/* Fourth screen carousel */}
    <FourthScreen />
    {/* Fifth screen */}
    <FifthScreen />
    {/* Scrolling cards marquee */}
    <ScrollingCardsMarquee
      items={[
        { title: "Casual Dining", imageSrc: "/images/casual.jpg" },
        { title: "Fine Dining", imageSrc: "/images/finedining.jpg" },
        { title: "Bars", imageSrc: "/images/bars.jpg" },
        { title: "Casual Dining", imageSrc: "/images/casual.jpg" },
        { title: "Fine Dining", imageSrc: "/images/finedining.jpg" },
      ]}
      speedMs={24000}
    />
    <PricingSection />
    {/* Footer at the very end */}
    <Footer />
    </>
  );
}
