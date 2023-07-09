import {AllMovies} from '../types/MovieTypes'

const initValue = {movies : [] ,pageCount : 0}

export const movieReducer = (state = initValue,action) => {
    switch(action.type){
        case AllMovies : 
        return {movies : action.data ,pageCount : action.pages}
        default : 
        return state;
    }

}