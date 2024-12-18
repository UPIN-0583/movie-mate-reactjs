import {useQuery} from "@tanstack/react-query";
import {getOrder} from "../api-order";

export const QK_GET_ORDER = "GET_ORDERS";

const useGetOrder = () => {

    const {data, error, isFetching } = useQuery({
        queryKey: [QK_GET_ORDER],
        queryFn: () => {
            return getOrder()
        } })

    console.log("Order data:", data);

    return {
        data,
        error,
        isFetching
    }
}

export { useGetOrder }