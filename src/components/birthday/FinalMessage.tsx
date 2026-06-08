import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function FinalMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const message = `You are the person I think about when the world goes quiet.
The one who makes ordinary days feel like something worth remembering.
I don't know where this road leads, but I know I want you in every chapter ahead.
Happy birthday, my bhadruu. You deserve the entire universe.`;

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
      {/* Ambient glow behind the card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[500px] w-[500px] rounded-full bg-blush/8 blur-[120px]" />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-3xl rounded-[2rem] glass-card px-10 py-16 shadow-[var(--shadow-glow)] md:px-16 md:py-20"
      >
        {/* Top decorative line */}
        <div className="mx-auto mb-10 h-[1px] w-24 bg-gradient-to-r from-transparent via-blush to-transparent" />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-10 text-6xl text-rose"
        >
          &#10084;
        </motion.div>

        <p className="whitespace-pre-line font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl md:text-4xl">
          {message}
        </p>

        <div className="mx-auto mt-10 h-[1px] w-24 bg-gradient-to-r from-transparent via-blush to-transparent" />

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10 text-sm uppercase tracking-[0.5em] text-secondary"
        >
          hoping for more
        </motion.p>
      </motion.div>
    </section>
  );
}
