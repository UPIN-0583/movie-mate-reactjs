import {useMutation} from "@tanstack/react-query";
import {createUser} from "../user-api";

const useCreateUser = () => {

    const {
        mutateAsync,
        data,
        isPending,
        errors
    } = useMutation({
        mutationFn:createUser,
    });

    return {
        mutate: mutateAsync,
        data,
        isPending,
        errors
    }
}

export { useCreateUser };