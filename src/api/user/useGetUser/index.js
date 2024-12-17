import {useQuery} from "@tanstack/react-query";
import {getUser} from "../api-user";

export const QK_GET_USER = "GET_USERS";

const useGetUsers = () => {

    const {data, error, isFetching } = useQuery({
        queryKey: [QK_GET_USER],
        queryFn: () => {
            return getUser()
        } })

    // console.log("User data:", data);

    return {
        data,
        error,
        isFetching

    }
}

export { useGetUsers }