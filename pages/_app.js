import Navbar from "@/components/Navbar";
import GlobalStyle from "../styles";
import Footer from "@/components/Footer";
import useLocalStorageState from "use-local-storage-state";

const initalFavorite = Array(10).fill(false);

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: initalFavorite,
  });

  function handleToggleFavorite(id) {
    setFavorites(
      favorites.map((favorite, index) => (index === id ? !favorite : favorite))
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
      />
      <Navbar />
      <Footer />
    </>
  );
}
