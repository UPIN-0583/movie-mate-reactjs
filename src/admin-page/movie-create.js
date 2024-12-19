import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateMovie } from "../api/movie/useCreateMovie";
import {ROUTING_MOVIE_MANAGEMENT} from "../router";

const MovieCreate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm();
    const { mutate: createMovieDB, isPending, error } = useCreateMovie();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createMovieDB(data, {
            onSuccess: () => {
                navigate(ROUTING_MOVIE_MANAGEMENT);
                console.log('createMovie data: ', data);
            },
            onError: (err) => {
                console.error('Error creating movie:', err);
            }
        });
    };

    return (
        <div className="bg-gray-800 p-4 rounded-md w-1/2 m-auto">
            <h2 className="text-gray-200 text-xl font-semibold mb-4">Add New Movie</h2>

            {error && (
                <div className="bg-red-500 text-white p-2 rounded mb-4">
                    Error: {error.message}
                </div>
            )}

            <form className='text-left mx-4' onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-200">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Genre */}
                <div className="mb-4">
                    <label htmlFor="genre" className="text-gray-200">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        {...register('genre', { required: 'Genre is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label htmlFor="duration" className="text-gray-200">Duration</label>
                    <input
                        type="text"
                        id="duration"
                        {...register('duration', { required: 'Duration is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                </div>

                {/* Origin */}
                <div className="mb-4">
                    <label htmlFor="origin" className="text-gray-200">Origin</label>
                    <input
                        type="text"
                        id="origin"
                        {...register('origin', { required: 'Origin is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.origin && <p className="text-red-500 text-sm">{errors.origin.message}</p>}
                </div>

                {/* Language */}
                <div className="mb-4">
                    <label htmlFor="language" className="text-gray-200">Language</label>
                    <input
                        type="text"
                        id="language"
                        {...register('language', { required: 'Language is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.language && <p className="text-red-500 text-sm">{errors.language.message}</p>}
                </div>

                {/* Classify */}
                <div className="mb-4">
                    <label htmlFor="classify" className="text-gray-200">Classify</label>
                    <input
                        type="text"
                        id="classify"
                        {...register('classify', { required: 'Classify is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.classify && <p className="text-red-500 text-sm">{errors.classify.message}</p>}
                </div>

                {/* Director */}
                <div className="mb-4">
                    <label htmlFor="director" className="text-gray-200">Director</label>
                    <input
                        type="text"
                        id="director"
                        {...register('director', { required: 'Director is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.director && <p className="text-red-500 text-sm">{errors.director.message}</p>}
                </div>

                {/* Actor */}
                <div className="mb-4">
                    <label htmlFor="actor" className="text-gray-200">Actor</label>
                    <input
                        type="text"
                        id="actor"
                        {...register('actor', { required: 'Actor is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.actor && <p className="text-red-500 text-sm">{errors.actor.message}</p>}
                </div>

                {/* Opening */}
                <div className="mb-4">
                    <label htmlFor="opening" className="text-gray-200">Opening</label>
                    <input
                        type="date"
                        id="opening"
                        {...register('opening', { required: 'Opening date is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.opening && <p className="text-red-500 text-sm">{errors.opening.message}</p>}
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="text-gray-200">Description</label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Description is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                {/* Trailer */}
                <div className="mb-4">
                    <label htmlFor="trailer" className="text-gray-200">Trailer</label>
                    <input
                        type="text"
                        id="trailer"
                        {...register('trailer', { required: 'Trailer link is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.trailer && <p className="text-red-500 text-sm">{errors.trailer.message}</p>}
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label htmlFor="status" className="text-gray-200">Status</label>
                    <input
                        type="text"
                        id="status"
                        {...register('status', { required: 'Status is required' })}
                        className="w-full p-2 mt-2 rounded bg-gray-700 text-gray-200"
                    />
                    {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md mt-8"
                >
                    {isPending ? 'Saving...' : 'Add Movie'}
                </button>
            </form>
        </div>
    );
};

export { MovieCreate };
