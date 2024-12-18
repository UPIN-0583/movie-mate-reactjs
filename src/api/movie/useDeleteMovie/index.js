import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteMovie} from "../api-movie";
import {QK_GET_MOVIE} from "../useGetMovie";

const useDeleteMovie = () => {

    const queryClient = useQueryClient();


    const {
        data,
        error,
        isPending,
        mutate
    } = useMutation({
        mutationFn: deleteMovie,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [QK_GET_MOVIE]});
        },
        onError: (error) => {
            console.log('api delete user' + error);
        }
    })

    return {
        data,
        error,
        isPending,
        mutate
    }

}

export { useDeleteMovie }