import GamesInfo from "./components/GamesInfo";
import MoviesInfo from "./components/MoviesInfo";
import RenderList from "./components/RenderList";
import { games, movies } from "./data/data";

const LiveData = () => {
  return (
    <section className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Games Collection</h1>
        <RenderList data={games} resourceName="games" dataToRender={GamesInfo} />

        <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-12">Movies Collection</h1>
        <RenderList data={movies} resourceName="movies" dataToRender={MoviesInfo} />
      </div>
    </section>
  );
};

export default LiveData;
