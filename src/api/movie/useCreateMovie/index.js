import {useMutation} from "@tanstack/react-query";
import {createUser} from "../../user/api-user";

const useCreateMovie = () => {
    const {mutate, data, isPending, error} = useMutation({
        mutationFn: createUser,
    });

    console.log('createUser data: ' + data);

    return {
        mutate,
        data,
        error,
        isPending
    }
}

export { useCreateMovie }