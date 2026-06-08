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

const videos: MediaItem[] = [
  { src: "/videos/her.mp4", caption: "you, in motion", type: "video", orientation: "landscape" },
];

const allMedia: MediaItem[] = [
  ...localPhotos,
  ...pexelsPhotos.slice(0, 2),
  ...videos,
  ...pexelsPhotos.slice(2, 6),
  ...pexelsPhotos.slice(6),
];

const interludes = [
  "some moments live in my chest forever",
  "you make the ordinary extraordinary",
  "every frame, a love letter",
];

function ParallaxMedia({ item, variant }: { item: MediaItem; variant: "full" | "standard" | "offset" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const isFull = variant === "full";
  const isOffset = variant === "offset";
  const isPortrait = item.orientation === "portrait";

  const containerClass = isFull
    ? "h-screen w-full"
    : isOffset
      ? isPortrait
        ? "h-[70vh] w-[85%] max-w-md ml-auto mr-8 md:mr-16"
        : "h-[60vh] w-[90%] max-w-4xl mr-auto ml-8 md:ml-16"
      : isPortrait
        ? "h-[75vh] w-[90%] max-w-lg mx-auto"
        : "h-[65vh] w-[95%] max-w-5xl mx-auto";

  return (
    <div ref={ref} className={`${containerClass} relative my-4 md:my-8`}>
      <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl">
        <motion.div style={{ y }} className="absolute inset-[-10%] h-[120%] w-[120%]">
          {item.type === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>

        {/* Dark overlay gradient for caption readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-background/20" />

        {/* Caption */}
        <motion.div
          style={{ opacity: fadeIn }}
          className="absolute inset-x-0 bottom-0 p-6 md:p-10"
        >
          <p className="font-display text-lg italic text-foreground/90 md:text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {item.caption}
          </p>
        </motion.div>
      </div>

      {/* Subtle inner glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-blush/10" />
    </div>
  );
}

function Interlude({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [30, 0, 0, -30]);

  return (
    <div ref={ref} className="flex min-h-[45vh] items-center justify-center px-8 my-4">
      <motion.p
        style={{ opacity, y }}
        className="text-gradient-romance font-display text-2xl italic text-center md:text-4xl lg:text-5xl max-w-2xl leading-snug"
      >
        {text}
      </motion.p>
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <section className="relative py-8 md:py-16">
      <div className="mb-16 text-center md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gradient-romance font-display text-4xl italic sm:text-5xl md:text-6xl"
        >
          Every picture is a letter to you
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mx-auto mt-6 h-[1px] w-32 bg-gradient-to-r from-transparent via-blush to-transparent"
        />
      </div>

      {allMedia.map((item, i) => {
        const variant = i % 5 === 0 ? "full" : i % 3 === 0 ? "offset" : "standard";
        const interludeIdx = i > 0 && i % 6 === 0 ? Math.floor(i / 6) - 1 : -1;

        return (
          <div key={i}>
            {interludeIdx >= 0 && interludeIdx < interludes.length && (
              <Interlude text={interludes[interludeIdx]} />
            )}
            <ParallaxMedia item={item} variant={variant} />
          </div>
        );
      })}
    </section>
  );
}
