import { motion } from "motion/react";

// Place her videos in public/videos/ and list them here.
const VIDEO_SRC = "/videos/her.mp4";

export default function VideoSection() {
  return (
    <section className="relative px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center font-display text-4xl italic text-accent sm:text-5xl"
      >
        Us, in motion
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-3xl glass-card p-2 shadow-[var(--shadow-glow)]"
      >
        <video
          controls
          playsInline
          className="aspect-video w-full rounded-2xl bg-black/40 object-cover"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </motion.div>

      <p className="mt-5 text-center text-sm text-muted-foreground">
        Add her video as <code className="text-blush">public/videos/her.mp4</code> to bring this to life.
      </p>
    </section>
  );
}
