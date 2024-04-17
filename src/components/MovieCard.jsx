const MovieCard = ({ Title, Year, Rated, Plot, Poster, Runtime }) => {
	let description = (Plot && Plot.split(" ")) || "";
	description =
		description.length >= 25
			? description.slice(-description.length + 6).join(" ") + "..."
			: description.join(" ") || [];

	return (
		<div className="w-[24.5rem] h-[40rem] flex flex-col justify-start items-start border border-gray-400 rounded-lg">
			{Poster && (
				<div className="w-full max-h-[70%] flex justify-center items-center mb-2">
					<img className="w-full h-full rounded-lg" src={Poster} alt="" />
				</div>
			)}
			<div className="w-full flex flex-col justify-start items-start px-4">
				<p className="text-xl font-semibold mb-2">{Title}</p>
				<div className="w-full flex justify-start items-center mb-3">
					<p className="text-lg font-normal text-slate-500 mr-6">{Year}</p>
					<p className="text-lg font-normal text-slate-500 mr-6">{Runtime}</p>
					<p className="text-lg font-normal bg-slate-600 px-2 rounded-md">
						{Rated}
					</p>
				</div>
				<p className=" text-md font-normal text-slate-500">{description}</p>
			</div>
		</div>
	);
};

export default MovieCard;
