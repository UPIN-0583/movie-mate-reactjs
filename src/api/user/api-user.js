import {axiosinstance} from "../../axios/config";

export const getUser= async () => {
    try {

        const res = await axiosinstance.get('/users');

        // console.log("Cuc getUser: ", res.data);

        return res.data;
    } catch(err) {
        console.log('errr', err)
        throw err;
    }
}

export const getUserById = async (id) => {
    try {
        const res = await axiosinstance.get(`/users/${id}`);
        console.log("API response:", res.data);
        return res.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const getUserByNameOrEmail = async (textkey) => {
    try {
        const res = await axiosinstance.get(`/users/search/${textkey}`);
        console.log("API response:", res.data);
        return res.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const createUser = async ({ name, email, phone, birthday, gender, password }) => {
    try {
        const newData = await axiosinstance.post('/users', {
            name,
            email,
            phone,
            birthday,
            gender,
            password
        })
        console.log('data: ',newData);
        return newData.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const loginUser = async ({ email_or_phone, password }) => {
    try {
        const newData = await axiosinstance.post('/users/login', {

            email_or_phone,
                password

        })
        console.log('data: ',newData);
        return newData.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const updateUser = async ({id, name, description, price}) => {
    console.log('body', id, name, price);
    try {
        const newData = await axiosinstance.put('/users', {
            id,
            name,
            description,
            price
        })

        return newData.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const deleteUser = async (id) => {
    try{
        const res = await axiosinstance.delete(`/users/${id}`);
        console.log("API response:", res.data);
        // return res.data;
    } catch (e) {
        console.log('errr', e);
        throw e;
    }
}