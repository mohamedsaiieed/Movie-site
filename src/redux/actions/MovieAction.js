import { AllMovies ,movieApi} from "../types/MovieTypes";
import axios from "axios";

export const getAllMovies =  () => {
    return async(dispatch) => {
        const res =await axios.get(movieApi);
        dispatch({type:AllMovies,data:res.data.results,pages:res.data.total_pages})
    }
}

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8dd94b085b4374ae669f7f33a3c6d712&query=${word}&language=en-US`)
        dispatch({ type: AllMovies, data: res.data.results, pages: res.data.total_pages })
    }
}

export const getPage = (page) => {
    return async(dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8dd94b085b4374ae669f7f33a3c6d712&language=en-US&page=${page}`)
        dispatch({ type: AllMovies, data: res.data.results, pages: res.data.total_pages })
    }
}