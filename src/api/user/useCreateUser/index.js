import {useMutation} from "@tanstack/react-query";
import {createUser} from "../api-user";

const useCreateUser = () => {
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

export { useCreateUser }