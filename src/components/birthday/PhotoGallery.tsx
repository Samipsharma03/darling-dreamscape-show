import { motion } from "motion/react";
import photo1 from "../../assets/photo-1.jpg";
import photo2 from "../../assets/photo-2.jpg";
import photo3 from "../../assets/photo-3.jpg";

// Swap these with her real pictures (drop them in src/assets and update the imports).
const photos = [
  { src: photo1, caption: "every sunset is better with you", w: 1024, h: 1024 },
  { src: photo2, caption: "our little moments", w: 1024, h: 1024 },
  { src: photo3, caption: "you, in full bloom", w: 1024, h: 1280 },
];

export default function PhotoGallery() {
  return (
    <section className="relative px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center font-display text-4xl italic text-accent sm:text-5xl"
      >
        Moments I keep
      </motion.h2>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {photos.map((p, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.94, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: (i % 2) * 0.15 }}
            whileHover={{ scale: 1.03, rotate: i % 2 ? 1 : -1 }}
            className={`group relative overflow-hidden rounded-3xl glass-card shadow-[var(--shadow-glow)] ${
              i === 2 ? "sm:col-span-2" : ""
            }`}
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              width={p.w}
              height={p.h}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-5 text-center font-display text-lg italic text-foreground">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
