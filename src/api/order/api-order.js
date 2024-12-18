import {axiosinstance} from "../../axios/config";

export const getOrder= async () => {
    try {

        const res = await axiosinstance.get('/orders');

        // console.log("Cuc getOrder: ", res.data);

        return res.data;
    } catch(err) {
        console.log('errr', err)
        throw err;
    }
}

export const getOrderById = async (id) => {
    try {
        const res = await axiosinstance.get(`/orders/${id}`);
        console.log("API response:", res.data);
        return res.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const createOrder = async ({ show_time,
                                       order_id,
                                       movie_id,
                                       seat_id }) => {
    try {
        const newData = await axiosinstance.post('/orders', {
            show_time,
            order_id,
            movie_id,
            seat_id
        })
        console.log('data: ',newData);
        return newData.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }

}
//
// export const updateOrder = async ({id, name,
//                                         genre,
//                                         duration,
//                                         origin,
//                                         language,
//                                         classify,
//                                         director,
//                                         actor,
//                                         opening,
//                                         description,
//                                         trailer,
//                                         product_status}) => {
//     try {
//         const newData = await axiosinstance.put('/orders', {
//             id,
//             name,
//             genre,
//             duration,
//             origin,
//             language,
//             classify,
//             director,
//             actor,
//             opening,
//             description,
//             trailer,
//                 product_status
//         })
//
//         return newData.data;
//     } catch(err) {
//         console.log('errr', err);
//         throw err;
//     }
// }
//
// export const deleteOrder = async (id) => {
//     try{
//         const res = await axiosinstance.delete(`/orders/${id}`);
//         console.log("API response:", res.data);
//         // return res.data;
//     } catch (e) {
//         console.log('errr', e);
//         throw e;
//     }
// }