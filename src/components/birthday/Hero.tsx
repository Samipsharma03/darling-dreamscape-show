import { motion } from "motion/react";

const NAME = "Prativa";

export default function Hero({ onBegin }: { onBegin: () => void }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-sm uppercase tracking-[0.5em] text-secondary"
      >
        Happy Birthday
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        className="text-gradient-romance text-7xl font-medium leading-none sm:text-8xl md:text-[10rem]"
      >
        {NAME}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="mt-6 max-w-md font-display text-2xl italic text-accent"
      >
        my bhadruu, my favorite person
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onBegin}
        className="mt-12 rounded-full px-10 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
        style={{ background: "var(--gradient-romance)" }}
      >
        Begin our story ♡
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        scroll gently ↓
      </motion.div>
    </section>
  );
}
