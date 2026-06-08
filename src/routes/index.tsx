import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import FallingPetals from "../components/birthday/FallingPetals";
import Hero from "../components/birthday/Hero";
import LyricsExperience from "../components/birthday/LyricsExperience";
import PhotoGallery from "../components/birthday/PhotoGallery";
import VideoSection from "../components/birthday/VideoSection";
import FinalMessage from "../components/birthday/FinalMessage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Prativa 💗" },
      { name: "description", content: "A little world made of memories, music and love — happy birthday." },
      { property: "og:title", content: "Happy Birthday, Prativa 💗" },
      { property: "og:description", content: "A little world made of memories, music and love." },
    ],
  }),
  component: Index,
});

function Index() {
  const storyRef = useRef<HTMLDivElement>(null);

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <FallingPetals />
      <div className="relative z-10">
        <Hero onBegin={scrollToStory} />
        <div ref={storyRef}>
          <LyricsExperience />
          <PhotoGallery />
          <VideoSection />
          <FinalMessage />
        </div>
      </div>
    </main>
  );
}
