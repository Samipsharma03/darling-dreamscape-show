import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import photo1 from "../../assets/photo-1.jpg";
import photo2 from "../../assets/photo-2.jpg";
import photo3 from "../../assets/photo-3.jpg";

type MediaItem = {
  src: string;
  caption: string;
  type: "photo" | "video";
  orientation: "landscape" | "portrait";
};

const pexelsPhotos: MediaItem[] = [
  { src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260", caption: "where the light finds you", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/34950/trail-forest-sunlight-mystery.jpg?auto=compress&cs=tinysrgb&w=1260", caption: "walks I wish we shared", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260", caption: "the ocean remembers", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "golden hours with you", type: "photo", orientation: "portrait" },
  { src: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "every shade of you", type: "photo", orientation: "portrait" },
  { src: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260", caption: "the calm you bring", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "petals for you", type: "photo", orientation: "portrait" },
  { src: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260", caption: "sunrise thoughts", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/2851716/pexels-photo-2851716.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "dancing in the rain", type: "photo", orientation: "portrait" },
  { src: "https://images.pexels.com/photos/1367104/pexels-photo-1367104.jpeg?auto=compress&cs=tinysrgb&w=1260", caption: "wild and free", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "city lights, our nights", type: "photo", orientation: "portrait" },
  { src: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260", caption: "my favourite flower", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "soft like the morning", type: "photo", orientation: "portrait" },
  { src: "https://images.pexels.com/photos/4271932/pexels-photo-4271932.jpeg?auto=compress&cs=tinysrgb&w=1260", caption: "the warmth of your hand", type: "photo", orientation: "landscape" },
  { src: "https://images.pexels.com/photos/1368264/pexels-photo-1368264.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "adventures ahead", type: "photo", orientation: "portrait" },
  { src: "https://images.pexels.com/photos/2093159/pexels-photo-2093159.jpeg?auto=compress&cs=tinysrgb&w=1260", caption: "your laugh echoes here", type: "photo", orientation: "landscape" },
];

const localPhotos: MediaItem[] = [
  { src: photo1, caption: "every sunset reminds me of you", type: "photo", orientation: "portrait" },
  { src: photo2, caption: "the little moments I keep", type: "photo", orientation: "portrait" },
  { src: photo3, caption: "you, in full bloom", type: "photo", orientation: "portrait" },
];

// Add your videos to public/videos/ and list them here
const videos: MediaItem[] = [
  { src: "/videos/her.mp4", caption: "you, in motion", type: "video", orientation: "landscape" },
  { src: "/videos/her2.mp4", caption: "unscripted moments", type: "video", orientation: "portrait" },
];

const allMedia: MediaItem[] = [
  ...localPhotos,
  ...pexelsPhotos.slice(0, 3),
  ...videos.slice(0, 1),
  ...pexelsPhotos.slice(3, 7),
  ...videos.slice(1),
  ...pexelsPhotos.slice(7),
];

function ParallaxImage({ item, index }: { item: MediaItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isPortrait = item.orientation === "portrait";
  const isFullBleed = index % 5 === 0;
  const isSide = !isFullBleed && index % 3 === 0;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${
        isFullBleed
          ? "h-[85vh] w-full"
          : isSide
            ? isPortrait
              ? "h-[70vh] w-full max-w-lg mx-auto"
              : "h-[60vh] w-full max-w-4xl mx-auto"
            : isPortrait
              ? "h-[75vh] w-full max-w-2xl mx-auto"
              : "h-[65vh] w-full max-w-5xl mx-auto"
      }`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={item.src}
          alt={item.caption}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full items-end">
        <div className="w-full bg-gradient-to-t from-background/90 via-background/40 to-transparent p-8 md:p-12">
          <p className="font-display text-xl italic text-foreground md:text-2xl drop-shadow-lg">
            {item.caption}
          </p>
        </div>
      </motion.div>

      {/* Decorative frame corners */}
      <div className="pointer-events-none absolute inset-4 z-10 rounded-2xl border border-blush/15" />
    </div>
  );
}

function ParallaxVideo({ item, index }: { item: MediaItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const isPortrait = item.orientation === "portrait";

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${
        isPortrait
          ? "h-[85vh] w-full max-w-lg mx-auto"
          : "h-[80vh] w-full max-w-5xl mx-auto"
      }`}
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={item.src} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full items-end">
        <div className="w-full bg-gradient-to-t from-background/90 via-background/40 to-transparent p-8 md:p-12">
          <p className="font-display text-xl italic text-foreground md:text-2xl drop-shadow-lg">
            {item.caption}
          </p>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-4 z-10 rounded-2xl border border-blush/15" />
    </div>
  );
}

function InterludeText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [40, 0, 0, -40]);

  return (
    <div ref={ref} className="flex min-h-[50vh] items-center justify-center px-6">
      <motion.p
        style={{ opacity, y }}
        className="text-gradient-romance font-display text-3xl italic text-center md:text-5xl max-w-3xl"
      >
        {text}
      </motion.p>
    </div>
  );
}

const interludes = [
  "some moments live in my chest forever",
  "you make the ordinary extraordinary",
  "every frame, a love letter",
  "I'd choose you in every lifetime",
];

export default function PhotoGallery() {
  return (
    <section className="relative py-12">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-center font-display text-5xl italic text-accent md:text-7xl"
      >
        Every picture is a letter to you
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-20 text-center text-sm uppercase tracking-[0.4em] text-muted-foreground"
      >
        scroll slowly
      </motion.p>

      <div className="flex flex-col gap-4">
        {allMedia.map((item, i) => {
          const interludeIdx = i > 0 && i % 5 === 0 ? Math.floor(i / 5) - 1 : -1;

          return (
            <div key={i}>
              {interludeIdx >= 0 && interludeIdx < interludes.length && (
                <InterludeText text={interludes[interludeIdx]} />
              )}
              {item.type === "video" ? (
                <ParallaxVideo item={item} index={i} />
              ) : (
                <ParallaxImage item={item} index={i} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
