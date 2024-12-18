import {useQuery} from "@tanstack/react-query";
import {getTicket} from "../api-order";

export const QK_GET_TICKET = "GET_TICKETS";

const useGetTickets = () => {

    const {data, error, isFetching } = useQuery({
        queryKey: [QK_GET_TICKET],
        queryFn: () => {
            return getTicket()
        } })

    console.log("Movie data:", data);

    return {
        data,
        error,
        isFetching
    }
}

export { useGetTickets }