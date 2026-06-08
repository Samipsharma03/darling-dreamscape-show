import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import bgHero from "../../assets/bg-hero.jpg";

const NAME = "Prativa";

export default function Hero({ onBegin }: { onBegin: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
        <img
          src={bgHero}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </motion.div>

      <motion.div style={{ opacity: bgOpacity }} className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-6 text-xs uppercase tracking-[0.7em] text-secondary"
        >
          Happy Birthday
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
          className="text-gradient-romance text-8xl font-medium leading-none sm:text-9xl md:text-[12rem]"
        >
          {NAME}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="my-6 h-[1px] w-48 bg-gradient-to-r from-transparent via-blush to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="max-w-lg font-display text-2xl italic text-accent sm:text-3xl"
        >
          my bhadruu, the one who fills my thoughts
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          whileHover={{ scale: 1.06, boxShadow: "0 0 40px oklch(0.78 0.14 350 / 0.6)" }}
          whileTap={{ scale: 0.96 }}
          onClick={onBegin}
          className="mt-14 rounded-full px-12 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-shadow duration-500 cursor-pointer"
          style={{ background: "var(--gradient-romance)" }}
        >
          This is for you &#9825;
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          scroll gently
        </motion.div>
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-[1px] bg-gradient-to-b from-blush to-transparent"
        />
      </motion.div>
    </section>
  );
}
