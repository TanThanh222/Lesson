import { useState } from "react";
import Header from "./components/Header";
import ExploreBanner from "./components/ExploreBanner";
import NewReleaseList from "./components/NewReleaseList";
import { moviesData } from "./data/moviesData";

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(moviesData[0].id);

  const handleSelectMovie = (id) => {
    setSelectedMovieId(id);
  };

  const selectedMovie = moviesData.find(
    (movie) => movie.id === selectedMovieId
  );

  return (
  <div>
    <Header />
    <main className="frame-home">
      <ExploreBanner movie={selectedMovie} />
      <NewReleaseList
        movies={moviesData}
        selectedId={selectedMovieId}
        handleSelectMovie={handleSelectMovie}
      />
    </main>
  </div>
);
}

export default App;

