import {useMutation} from "@tanstack/react-query";
import {updateUser} from "../api-user";

const useUpdateProduct = () => {

    const {
        data,
        error,
        isPending,
        mutateAsync
    } = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {

        },
        onError: () => {

        }
    });

    return {
        mutate: mutateAsync,
        data,
        error,
        isPending
    }

}

export { useUpdateProduct }