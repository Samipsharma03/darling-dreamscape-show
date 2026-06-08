// Synced lyrics for "Line Without a Hook" — Ricky Montgomery
// time = seconds into the song when the line should highlight.
// Adjust these timings to match your uploaded audio (public/audio/song.mp3).
export interface LyricLine {
  time: number;
  text: string;
  highlight?: boolean;
}

export const lyrics: LyricLine[] = [
  { time: 0, text: "Oh, darling…" },
  { time: 4, text: "I will be loving you 'til we're seventy" },
  { time: 9, text: "And, baby, my heart could still fall as hard at twenty-three" },
  { time: 15, text: "And I'm writing down a list of all the things I want for you" },
  { time: 21, text: "Darling, when I'm fast asleep", highlight: true },
  { time: 25, text: "I've seen this person watching me", highlight: true },
  { time: 30, text: "Saying, \"Is it worth it? Is it worth it?\"" },
  { time: 35, text: "Tell me, is it worth it?" },
  { time: 40, text: "I don't wanna be your friend" },
  { time: 45, text: "I wanna kiss your neck" },
  { time: 50, text: "From the bottom of my heart, I'm yours" },
  { time: 56, text: "Happy birthday, my love." },
];
