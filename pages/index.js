import Start from "@/components/Start";

export default function HomePage({ favorites, onToggleFavorite }) {
  return <Start favorites={favorites} onToggleFavorite={onToggleFavorite} />;
}
