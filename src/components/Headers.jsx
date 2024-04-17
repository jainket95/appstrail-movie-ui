const Header = ({ search, setSearch }) => {
	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="w-full container mx-auto flex justify-between items-center fixed z-10 py-6 bg-black">
			<h1 className="text-4xl font-semibold uppercase">Movies Details</h1>
			<input
				className="w-[30%] bg-gray-600 rounded-md p-3 "
				type="text"
				name="code"
				value={search}
				onChange={handleSearchChange}
				placeholder="Search by year or title"
			/>
		</div>
	);
};

export default Header;
