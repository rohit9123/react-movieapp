// {
//     type: 'ADD_MOVIES'
    
// }
// {
//     type:'DECREASE_COUNT'
// } 

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const UN_FAVOURITE ='UN_FAVOURITE';
export const SET_SHOW_FAVOURITE='SET_SHOW_FAVOURITE';

export function addMovies (movies){
    return{
        type: ADD_MOVIES,
        movies:movies
    }
}
export function addFavourite  (movie){
    return{
        type: ADD_FAVOURITE,
        movie
    }
}
export function unFavourite(movie){
    return{
        type:UN_FAVOURITE,
        movie
    }
}
export function setShowFavourite(val){
    return{
        type: SET_SHOW_FAVOURITE,
        val
    }
}