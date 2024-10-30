import {AxiosAPI} from "../../axios";


export const createUser = async ({name, email, phone, gender, birthday, password}) => {
    AxiosAPI.post('/users',{
        name,
        email,
        phone,
        gender,
        birthday,
        password
    }).then(res => {
        //
    }).catch(err => {
        console.log("erorr: user-api", err)
        throw err;
    });

}