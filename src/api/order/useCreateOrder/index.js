import {useMutation} from "@tanstack/react-query";
import {createOrder} from "../api/order";

const useCreateOrder = () => {
    const {mutate, data, isLoading, error} = useMutation({
        mutationFn: createOrder,
    });

    console.log('createOrder data: ' + data);

    return {
        mutate,
        data,
        error,
        isLoading
    }
}

export { useCreateOrder }