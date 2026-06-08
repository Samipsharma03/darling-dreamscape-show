import { motion } from "motion/react";

export default function FinalMessage() {
  const message = `From the bottom of my heart, I'm yours — today and every day after.
Thank you for being the person watching over my dreams,
the calm in my chaos, and the reason every ordinary day feels like a celebration.
Happy birthday, my bhadruu. Here's to us, always.`;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-2xl rounded-[2rem] glass-card px-8 py-14 shadow-[var(--shadow-glow)]"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mb-8 text-5xl"
        >
          ❤
        </motion.div>
        <p className="whitespace-pre-line font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
          {message}
        </p>
        <p className="mt-10 text-sm uppercase tracking-[0.4em] text-secondary">
          with all my love
        </p>
      </motion.div>
    </section>
  );
}
