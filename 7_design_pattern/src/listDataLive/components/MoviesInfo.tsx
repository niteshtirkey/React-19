interface MoviesInfo {
  movies: {
    movieTitle: string;
    moviePrice: string;
    movieDescription: string;
    movieRating: number;
  };
}

const MoviesInfo = ({ movies }: MoviesInfo) => {
  const { movieTitle, moviePrice, movieDescription, movieRating } = movies;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{movieTitle}</h2>
      <div className="flex items-center justify-between mb-3">
        <p className="text-green-600 font-bold text-xl">{moviePrice}</p>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">⭐</span>
          <p className="text-gray-700 font-semibold">{movieRating}/5</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{movieDescription}</p>
    </div>
  );
};

export default MoviesInfo;
