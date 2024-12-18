import {useQuery} from "@tanstack/react-query";
import {getOrderById} from "../api-order";

export const QK_GET_ORDER_BY_ID = 'GET_ORDER_BY_ID'

const useGetOrderById = (id) => {

    const {
        data,
        error,
        isFetching
    } = useQuery({
        queryKey: [QK_GET_ORDER_BY_ID, id],
        queryFn: () => {
            return getOrderById(id);
        },
        enabled: !!id,
    })

    return {
        data,
        error,
        isFetching
    }

}

export { useGetOrderById }