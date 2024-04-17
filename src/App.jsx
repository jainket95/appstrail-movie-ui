import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Headers";
import Movies from "./components/Movies";

function App() {
	const [search, setSearch] = useState("");
	const [movies, setMovies] = useState([]);
	const [searchedMovies, setSearchedMovies] = useState([]);

	useEffect(() => {
		if (movies.length === 0) fetchMovies();
	}, [movies, movies.length]);

	useEffect(() => {
		if (!search.length) setSearchedMovies([]);
		filterMovies();
	}, [search, search.length]);

	const fetchMovies = async () => {
		const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/movies");
		const movies = await response.json();

		setMovies(movies);
	};

	const filterMovies = () => {
		setSearchedMovies(() =>
			movies.filter(
				(m) =>
					m.movie.Title.toLowerCase().includes(search.toLowerCase()) ||
					String(m.movie.Year).includes(search)
			)
		);
	};

	return (
		<div className="w-[100vw] h-[100vh] bg-black text-white relative overflow-x-hidden">
			<div className="container mx-auto bg-black">
				<Header search={search} setSearch={setSearch} />
				<div className="pt-28">
					<Movies
						search={search}
						movies={searchedMovies.length ? searchedMovies : movies}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
