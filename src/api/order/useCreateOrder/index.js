import {useMutation} from "@tanstack/react-query";
import {createTicket} from "../api-order";

const useCreateTicket = () => {
    const {mutate, data, isPending, error} = useMutation({
        mutationFn: createTicket,
    });

    console.log('createUser data: ' + data);

    return {
        mutate,
        data,
        error,
        isPending
    }
}

export { useCreateTicket }