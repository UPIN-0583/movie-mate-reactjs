import {useMutation} from "@tanstack/react-query";
import { loginUser} from "../api-user";


const useLoginUser = () => {
    const {mutate,data, isPending, error} = useMutation({
        mutationFn: loginUser,
    });
    console.log('LoginUser data: ' + data);

    return {
        mutate,
        data,
        error,
        isPending
    }
}

export { useLoginUser }