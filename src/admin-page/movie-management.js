import { useGetMovies } from "../api/movie/useGetMovie";
import { useDeleteMovie } from "../api/movie/useDeleteMovie";


const MovieManagement = () => {
    // Fetch movie list
    const { data: movieList, isFetching, error } = useGetMovies();

    // Hook for deleting a movie
    const { mutate: deleteMovie, isPending } = useDeleteMovie();

    // Function to handle movie deletion
    const handleDelete = (movieId) => {
        if (window.confirm("Are you sure you want to delete this movie?")) {
            deleteMovie(movieId, {
                onSuccess: () => {
                    console.log(`Movie ${movieId} deleted successfully`);
                },
                onError: (err) => {
                    console.error("Error deleting movie:", err);
                },
            });
        }
    };

    // Handle error state
    if (error) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="bg-white p-4 rounded-md">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-500 text-xl font-semibold">Movie Management</h2>
            </div>

            {/* Movie Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-blue-500">
                    {/* Table Header */}
                    <thead className="border-b border-black">
                    <tr>
                        {/* <th className="py-2 px-4 text-left">Id</th> */}
                        <th colSpan="2" className="py-2 px-4 text-left">Name</th>
                        <th colSpan="2" className="py-2 px-4 text-left">Genre</th>
                        <th className="py-2 px-4 text-left ">Duration</th>
                        <th className="py-2 px-4 text-left">Origin</th>
                        <th className="py-2 px-4 text-left">Language</th>
                        <th className="py-2 px-4 text-left">Classify</th>
                        <th className="py-2 px-4 text-left">Director</th>
                        <th className="py-2 px-4 text-left">Actor</th>
                        <th className="py-2 px-4 text-left">Opening</th>
                        <th className="py-2 px-4 text-left" colSpan="3">Description</th>
                        <th className="py-2 px-4 text-left">Trailer</th>
                        <th className="py-2 px-4 text-left">Status</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                    </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-black">
                    {isFetching ? (
                        <tr>
                            <td colSpan="14" className="py-2 text-center">
                                Loading...
                            </td>
                        </tr>
                    ) : (
                        movieList?.map((movie, index) => (
                            <tr
                                key={movie.id}
                                className="bg-white"
                            >
                                {/* <td className="py-2 px-4 ">{movie.id}</td> */}
                                <td colSpan="2" className="py-2 px-4 border-y-2 border-black">{movie.name}</td>
                                <td colSpan="2" className="py-2 px-4 border-y-2 border-black">{movie.genre}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{movie.duration}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{movie.origin}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{movie.language}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{movie.classify}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{movie.director}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{movie.actor}</td>
                                <td className="py-2 px-4 border-y-2 border-black">{new Date(movie.opening).toLocaleDateString("en-CA")}</td>
                                <td colSpan="3" className="py-2 px-4 border-y-2 border-black">{movie.description}</td>
                                <td className="py-2 px-4 border-y-2 border-black">
                                    <a
                                        href={movie.trailer}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Trailer
                                    </a>
                                </td>
                                <td className="py-2 px-4 border-y-2 border-black">{movie.status}</td>
                                <td className="py-2 px-4 border-y-2 border-black">
                                    <button
                                        className="text-red-500 hover:text-white transition-colors"
                                        onClick={() => handleDelete(movie.id)}
                                        disabled={isPending}
                                    >
                                        {isPending ? "Deleting..." : "🗑"}
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { MovieManagement };
