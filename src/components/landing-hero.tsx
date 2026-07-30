import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import Image from "next/image";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= DOWNLOAD CV =================
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Faqeer Hussain Resume.pdf";
    link.download = "Faqeer Hussain Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ================= HIRE ME =================
  const handleHireMe = () => {
    const phone = "923091419331";
    const message = encodeURIComponent(
      "Hi Faqeer, I want to discuss a project with you.",
    );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <motion.section
      ref={ref}
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
      className="mb-20 mt-0 flex min-h-[calc(100vh-200px)] items-center px-6 py-6 sm:px-14 sm:py-16 md:mt-10 md:min-h-[calc(100vh-140px)] md:px-20 md:py-20 lg:py-0"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div className="space-y-8">
            <AnimatePresence>
              <FadeUp duration={0.6}>
                <h1 className="bg-gradient-to-br from-zinc-900 via-blue-700 to-blue-900 bg-clip-text text-5xl font-bold leading-none text-transparent dark:from-white dark:via-blue-400 dark:to-blue-500 sm:text-7xl md:text-8xl">
                  Faqeer Hussain
                </h1>

                <p className="mt-4 text-2xl font-semibold text-zinc-700 dark:text-zinc-300 md:text-3xl">
                  Full Stack Developer
                </p>
              </FadeUp>

              <FadeUp duration={0.7} delay={0.15}>
                <div className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                  Full Stack Developer with 3 years of experience building
                  scalable web and mobile applications using React.js, Next.js,
                  Node.js, Express.js, MongoDB, and React Native. Passionate
                  about creating responsive UIs, REST APIs, real-time features,
                  and high-performance applications.
                </div>
              </FadeUp>

              <FadeUp duration={0.7} delay={0.3}>
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Download Button */}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownloadCV}
                    className="group flex items-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 font-semibold text-white shadow-lg shadow-zinc-900/30 transition-all duration-300 hover:bg-black dark:bg-white dark:text-zinc-900"
                  >
                    Download CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v-4m0 0l4 4m-4-4l4-4m12 4v4m0 0l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </motion.button>

                  {/* Hire Me Button */}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleHireMe}
                    className="rounded-2xl border-2 border-zinc-900 px-8 py-4 font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
                  >
                    Hire Me
                  </motion.button>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>

          {/* RIGHT IMAGE */}

          <FadeUp
            duration={0.8}
            delay={0.2}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 -rotate-6 rounded-[3rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/faqeer.png"
                  alt="Faqeer Hussain"
                  width={480}
                  height={580}
                  priority
                  className="w-full max-w-[420px] rounded-3xl object-cover md:max-w-none"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </motion.section>
  );
}
