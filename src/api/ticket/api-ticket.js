import {axiosinstance} from "../../axios/config";

export const getTicket= async () => {
    try {

        const res = await axiosinstance.get('/tickets');

        // console.log("Cuc getTicket: ", res.data);

        return res.data;
    } catch(err) {
        console.log('errr', err)
        throw err;
    }
}
//
// export const getTicketById = async (id) => {
//     try {
//         const res = await axiosinstance.get(`/tickets/${id}`);
//         console.log("API response:", res.data);
//         return res.data;
//     } catch(err) {
//         console.log('errr', err);
//         throw err;
//     }
// }
//
export const createTicket = async ({ show_time,
                                       order_id,
                                       movie_id,
                                       seat_id }) => {
    try {
        const newData = await axiosinstance.post('/tickets', {
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
// export const updateTicket = async ({id, name,
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
//         const newData = await axiosinstance.put('/tickets', {
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
// export const deleteTicket = async (id) => {
//     try{
//         const res = await axiosinstance.delete(`/tickets/${id}`);
//         console.log("API response:", res.data);
//         // return res.data;
//     } catch (e) {
//         console.log('errr', e);
//         throw e;
//     }
// }