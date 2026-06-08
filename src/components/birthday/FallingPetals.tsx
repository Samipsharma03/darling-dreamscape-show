import { useMemo } from "react";

const HEARTS = "❀✿❤✦";

export default function FallingPetals({ count = 22 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 9 + Math.random() * 9,
        size: 10 + Math.random() * 16,
        drift: `${(Math.random() - 0.5) * 160}px`,
        char: HEARTS[Math.floor(Math.random() * HEARTS.length)],
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 text-blush"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            // @ts-expect-error custom property
            "--drift": p.drift,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
