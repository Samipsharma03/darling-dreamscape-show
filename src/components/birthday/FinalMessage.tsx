import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function FinalMessage() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const message = `You are the person I think about when the world goes quiet.
The one who makes ordinary days feel like something worth remembering.
I don't know where this road leads, but I know I want you in every chapter ahead.
Happy birthday, my bhadruu. You deserve the entire universe.`;

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-blush/6 blur-[150px]" />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mx-auto max-w-2xl rounded-3xl glass-card px-8 py-14 shadow-[var(--shadow-glow)] md:rounded-[2rem] md:px-14 md:py-20"
      >
        {/* Top accent line */}
        <div className="mx-auto mb-8 h-[1px] w-20 bg-gradient-to-r from-transparent via-blush to-transparent" />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 text-5xl text-rose md:text-6xl"
        >
          &#10084;
        </motion.div>

        <p className="whitespace-pre-line font-display text-xl italic leading-relaxed text-foreground md:text-2xl lg:text-3xl">
          {message}
        </p>

        <div className="mx-auto mt-8 h-[1px] w-20 bg-gradient-to-r from-transparent via-blush to-transparent" />

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8 text-xs uppercase tracking-[0.5em] text-secondary md:text-sm"
        >
          hoping for more
        </motion.p>
      </motion.div>
    </section>
  );
}
