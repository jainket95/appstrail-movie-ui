import MovieCard from "./MovieCard";

const Movies = ({ search, movies }) => {
	return (
		<div className="w-full flex flex-col justify-start items-start">
			<h1 className="text-3xl font-semibold mb-8">
				{search.length ? `Results for the term ${search}` : "Movies / Series"}
			</h1>
			<div className="w-full flex flex-wrap justify-start items-start gap-x-4 gap-y-10">
				{movies.length === 0 && <p className="text-lg">Loading...</p>}
				{movies.length > 0 &&
					movies.map((movie) => <MovieCard key={movie.id} {...movie.movie} />)}
			</div>
		</div>
	);
};

export default Movies;
