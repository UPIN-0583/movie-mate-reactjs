import {axiosinstance} from "../../axios/config";

export const getMovie= async () => {
    try {

        const res = await axiosinstance.get('/movies');

        // console.log("Cuc getMovie: ", res.data);

        return res.data;
    } catch(err) {
        console.log('errr', err)
        throw err;
    }
}

export const getMovieById = async (id) => {
    try {
        const res = await axiosinstance.get(`/movies/${id}`);
        console.log("API response:", res.data);
        return res.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const createMovie = async ({name, genre, duration, origin, language, classify, director, actor, opening, description, trailer, status}) => {
    try {
        const newData = await axiosinstance.post('/movies', {
            name, 
            genre, 
            duration, 
            origin, 
            language, 
            classify, 
            director, 
            actor, 
            opening, 
            description, 
            trailer, 
            status
        })
        console.log('data: ',newData);
        return newData.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }

}

export const updateMovie = async ({name, genre, duration, origin, language, classify, director, actor, opening, description, trailer, status}) => {
    console.log('body', name, genre, duration, origin, language, classify, director, actor, opening, description, trailer, status);
    try {
        const newData = await axiosinstance.put('/movies', {
            name, 
            genre, 
            duration, 
            origin, 
            language, 
            classify, 
            director, 
            actor, 
            opening, 
            description, 
            trailer, 
            status
        })

        return newData.data;
    } catch(err) {
        console.log('errr', err);
        throw err;
    }
}

export const deleteMovie = async (id) => {
    try{
        const res = await axiosinstance.delete(`/movies/${id}`);
        console.log("API response:", res.data);
        // return res.data;
    } catch (e) {
        console.log('errr', e);
        throw e;
    }
}