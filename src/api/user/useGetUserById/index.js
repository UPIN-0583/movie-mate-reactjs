import {useQuery} from "@tanstack/react-query";
import {getUserById} from "../api-user";

export const QK_GET_USER_BY_ID = 'GET_USER_BY_ID'

const useGetUserById = (id) => {

    const {
        data,
        error,
        isFetching
    } = useQuery({
        queryKey: [QK_GET_USER_BY_ID, id],
        queryFn: () => {
            return getUserById(id);
        },
        enabled: !!id,
    })

    return {
        data,
        error,
        isFetching
    }

}

export { useGetUserById }