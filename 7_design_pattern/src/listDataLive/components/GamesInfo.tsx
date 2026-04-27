interface GamesInfo {
  games: {
    gameName: string;
    gameRating: number;
    gameGenre: string;
    gameLanguages: string[];
  };
}

const GamesInfo = ({ games }: GamesInfo) => {
  const { gameName, gameRating, gameGenre, gameLanguages } = games;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">{gameName}</h1>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-yellow-500">⭐</span>
        <p className="text-gray-700 font-semibold">{gameRating}/10</p>
      </div>
      <p className="text-gray-600 mb-3">
        <span className="font-medium">Genre:</span> {gameGenre}
      </p>
      <div>
        <p className="font-medium text-gray-700 mb-2">Languages:</p>
        <ul className="flex flex-wrap gap-2">
          {gameLanguages.map((language: string, index: number) => (
            <li key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GamesInfo;
