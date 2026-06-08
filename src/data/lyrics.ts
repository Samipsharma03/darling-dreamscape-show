// Synced lyrics for "Line Without a Hook" — Ricky Montgomery
// Adjust timings to match your uploaded audio (public/audio/song.mp3).
export interface LyricLine {
  time: number;
  text: string;
  highlight?: boolean;
}

export const lyrics: LyricLine[] = [
  { time: 0, text: "Oh, darling…" },
  { time: 21, text: "Darling, when I'm fast asleep", highlight: true },
  { time: 25, text: "I've seen this person watching me", highlight: true },
  { time: 30, text: 'Saying, "Is it worth it? Is it worth it?"' },
  { time: 35, text: 'Tell me, is it worth it?' },
  { time: 39, text: "'Cause there is something, and there is nothing" },
  { time: 43, text: 'There is nothing in between' },
  { time: 47, text: 'And in my eyes, there is a tiny dancer' },
  { time: 51, text: "Watching over me, he's singing" },
  { time: 55, text: '"She\'s a, she\'s a lady, and I am just a boy"' },
  { time: 59, text: '"She\'s a, she\'s a lady, and I am just a line without a hook"' },
  { time: 64, text: "Oh, baby, I am a wreck when I'm without you" },
  { time: 69, text: 'I need you here to stay' },
  { time: 73, text: 'Broke all my bones that day I found you' },
  { time: 77, text: 'Crying at the lake' },
  { time: 81, text: "Was it something I said to make you feel like you're a burden? Oh" },
  { time: 87, text: 'And if I could take it all back' },
  { time: 91, text: 'I swear that I would pull you from the tide' },
];
