// app/page.js
import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import LikeButton from "./components/LikeButton";

export default function Home() {
  return (
    <main>
      <Hero
        title="🍿My Favorite Series Of All Times"
        tagline="Movies I could watch forever — and why they're worth your time."
      />
      <CardGrid items={items} />
    </main>
  );
}

