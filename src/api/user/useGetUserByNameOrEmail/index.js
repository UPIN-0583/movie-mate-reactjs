import {useQuery} from "@tanstack/react-query";
import {getUserByNameOrEmail} from "../api-user";

export const QK_GET_USER_BY_NAME_OR_EMAIL = 'GET_USER_BY_NAME_OR_EMAIL'

const useGetUserByNameOrEmail = (textkey) => {

    const {
        data,
        error,
        isFetching
    } = useQuery({
        queryKey: [QK_GET_USER_BY_NAME_OR_EMAIL, textkey],
        queryFn: () => {
            return getUserByNameOrEmail(textkey);
        },
        enabled: !!textkey,
    })

    return {
        data,
        error,
        isFetching
    }

}

export { useGetUserByNameOrEmail }