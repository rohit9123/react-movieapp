import {ADD_MOVIES,ADD_FAVOURITE,UN_FAVOURITE,SET_SHOW_FAVOURITE} from '../action/index';


const intialMOvieState={
    list:[],
    favourites:[],
    showFavourite:false
}
export default function movies(state=intialMOvieState,action){
    // console.log("action",action.movies);
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,//spred operator
    //         list: action.movies//changing the value of list in the state
    //     }

    // }
    // return state;
    switch(action.type){
        case ADD_FAVOURITE:
        return{
            ...state,
            favourites: [action.movie,...state.favourites],
            showFavourite:false
        }
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case UN_FAVOURITE:
           const filteredArray=[];
           state.favourites.forEach((movie)=>{
               if(movie!==action.movie){
                   filteredArray.push(movie);
               }
           })
            return{
                ...state,
              favourites:filteredArray

        }
        case SET_SHOW_FAVOURITE:
        return{
            ...state,
            showFavourite:action.val
        }
         default:
             return state;


    }
}

