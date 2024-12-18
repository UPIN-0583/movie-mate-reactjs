import {useMutation} from "@tanstack/react-query";
import {createOrder} from "../api-order";

const useCreateOrder = () => {
    const {mutate, data, isPending, error} = useMutation({
        mutationFn: createOrder,
    });

    console.log('createOrder data: ' + data);

    return {
        mutate,
        data,
        error,
        isPending
    }
}

export { useCreateOrder }