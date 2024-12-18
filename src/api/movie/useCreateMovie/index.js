import {useMutation} from "@tanstack/react-query";
import {createMovie} from "../api-movie";

const useCreateMovie = () => {
    const {mutate, data, isPending, error} = useMutation({
        mutationFn: createMovie,
    });

    console.log('createMovie data: ' + data);

    return {
        mutate,
        data,
        error,
        isPending
    }
}

export { useCreateMovie }