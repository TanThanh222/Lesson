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

  const hardDescription =
    "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.";

  const bannerDescription =
    selectedMovieId === moviesData[0].id
      ? hardDescription
      : selectedMovie.description;

  return (
    <div>
      <Header />
      <main className="frame-home">
        <ExploreBanner movie={selectedMovie} description={bannerDescription} />
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
