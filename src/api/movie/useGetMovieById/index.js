import {useQuery} from "@tanstack/react-query";
import {getMovieById} from "../api-movie";

export const QK_GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID'

const useGetMovieById = (id) => {

    const {
        data,
        error,
        isFetching
    } = useQuery({
        queryKey: [QK_GET_MOVIE_BY_ID, id],
        queryFn: () => {
            return getMovieById(id);
        },
        enabled: !!id,
    })

    return {
        data,
        error,
        isFetching
    }

}

export { useGetMovieById }