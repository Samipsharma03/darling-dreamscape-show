import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import photo1 from "../../assets/photo-1.jpg";
import photo2 from "../../assets/photo-2.jpg";
import photo3 from "../../assets/photo-3.jpg";

const pexelsPhotos = [
  { src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800", caption: "where the light finds you", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/34950/trail-forest-sunlight-mystery.jpg?auto=compress&cs=tinysrgb&w=800", caption: "walks I wish we shared", w: 800, h: 534 },
  { src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "the ocean remembers", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "golden hours with you", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "every shade of you", w: 800, h: 534 },
  { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "the calm you bring", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "petals for you", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "sunrise thoughts", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/2851716/pexels-photo-2851716.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "dancing in the rain", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/1367104/pexels-photo-1367104.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "wild and free", w: 800, h: 534 },
  { src: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "city lights, our nights", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "my favourite flower", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "soft like the morning", w: 800, h: 534 },
  { src: "https://images.pexels.com/photos/4271932/pexels-photo-4271932.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "the warmth of your hand", w: 800, h: 533 },
  { src: "https://images.pexels.com/photos/1368264/pexels-photo-1368264.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "adventures ahead", w: 800, h: 534 },
  { src: "https://images.pexels.com/photos/2093159/pexels-photo-2093159.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "your laugh echoes here", w: 800, h: 533 },
];

const localPhotos = [
  { src: photo1, caption: "every sunset reminds me of you", w: 1024, h: 1024 },
  { src: photo2, caption: "the little moments I keep", w: 1024, h: 1024 },
  { src: photo3, caption: "you, in full bloom", w: 1024, h: 1280 },
];

const allPhotos = [...localPhotos, ...pexelsPhotos];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center font-display text-4xl italic text-accent sm:text-5xl"
      >
        Every picture is a letter to you
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-16 text-center text-sm text-muted-foreground"
      >
        tap any photo to see it up close
      </motion.p>

      <div className="mx-auto columns-1 gap-4 sm:columns-2 lg:columns-3 max-w-6xl space-y-4">
        {allPhotos.map((p, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(i)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card shadow-[var(--shadow-glow)] break-inside-avoid"
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              width={p.w}
              height={p.h}
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent p-4 text-center font-display text-base italic text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl glass-card shadow-[var(--shadow-glow)]"
            >
              <img
                src={allPhotos[selected].src}
                alt={allPhotos[selected].caption}
                className="max-h-[85vh] w-auto rounded-3xl object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-6 text-center">
                <p className="font-display text-xl italic text-foreground">
                  {allPhotos[selected].caption}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80 cursor-pointer"
              >
                <span className="text-lg leading-none">&times;</span>
              </button>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((prev) => (prev! > 0 ? prev! - 1 : allPhotos.length - 1));
              }}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80 cursor-pointer"
            >
              <span className="text-xl">&larr;</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((prev) => (prev! < allPhotos.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80 cursor-pointer"
            >
              <span className="text-xl">&rarr;</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
