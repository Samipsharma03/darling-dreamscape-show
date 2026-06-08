import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { lyrics } from "../../data/lyrics";

// Place your song file at: public/audio/song.mp3
const SONG_SRC = "/audio/song.mp3";

export default function LyricsExperience() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [hasAudio, setHasAudio] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      const t = audio.currentTime;
      let idx = -1;
      for (let i = 0; i < lyrics.length; i++) {
        if (t >= lyrics[i].time) idx = i;
        else break;
      }
      setCurrent(idx);
    };
    const onEnd = () => setPlaying(false);
    const onError = () => setHasAudio(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      audio.removeEventListener("error", onError);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setHasAudio(false));
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <audio ref={audioRef} src={SONG_SRC} preload="auto" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-xs uppercase tracking-[0.4em] text-secondary"
      >
        Our song
      </motion.p>
      <h2 className="mb-12 font-display text-3xl italic text-accent">
        Line Without a Hook — Ricky Montgomery
      </h2>

      <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center">
        {lyrics.map((line, i) => {
          const active = i === current;
          const sung = i < current;
          return (
            <motion.p
              key={i}
              animate={{
                opacity: active ? 1 : sung ? 0.4 : 0.25,
                scale: active ? 1.06 : 1,
                y: active ? 0 : 0,
              }}
              transition={{ duration: 0.5 }}
              className={`font-display leading-snug transition-all ${
                line.highlight ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
              } ${active ? (line.highlight ? "text-gradient-romance" : "text-foreground") : "text-muted-foreground"}`}
            >
              {line.text}
            </motion.p>
          );
        })}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        className="mt-14 flex items-center gap-3 rounded-full px-9 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
        style={{ background: "var(--gradient-romance)" }}
      >
        {playing ? "❚❚ Pause" : "▶ Play our song"}
      </motion.button>

      <AnimatePresence>
        {!hasAudio && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-5 max-w-sm text-center text-sm text-muted-foreground"
          >
            Tip: upload the song as <code className="text-blush">public/audio/song.mp3</code> so the
            lyrics play in sync.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
