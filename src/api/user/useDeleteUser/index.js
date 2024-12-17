import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteUser} from "../api-user";
import {QK_GET_USER} from "../useGetUser";

const useDeleteUser = () => {

    const queryClient = useQueryClient();


    const {
        data,
        error,
        isPending,
        mutate
    } = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [QK_GET_USER]});
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

export { useDeleteUser }