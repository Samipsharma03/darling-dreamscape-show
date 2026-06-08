import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const NAME = "Prativa";

export default function Hero({ onBegin }: { onBegin: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blush/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-lavender/10 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/8 blur-[100px]" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
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
          className="text-gradient-romance text-7xl font-medium leading-none sm:text-8xl md:text-9xl lg:text-[10rem]"
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
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={onBegin}
          className="mt-14 cursor-pointer rounded-full px-12 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-shadow duration-500 hover:shadow-[0_0_50px_oklch(0.78_0.14_350/0.5)]"
          style={{ background: "var(--gradient-romance)" }}
        >
          This is for you &#9825;
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          scroll gently
        </span>
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-blush/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
