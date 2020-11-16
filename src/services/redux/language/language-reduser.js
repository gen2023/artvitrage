import { combineReducers } from "redux";
import {createReducer} from '@reduxjs/toolkit';
import * as actions from "./language-actions";
// import actionsTypes from "./language-types";
// console.log(actions.languageEn.type);
// console.log([actions.languageEn]);
const languageReducer=createReducer('Ru',{
    [actions.languageRu.type]:(value,{payload})=> value='Ru',
    [actions.languageEn.type]:(value,{payload})=> value='En',
});

// const languageReducer=(value='Ru',{type})=>{
//     switch(type){
//         case actions.languageRu.type:return {value:'Ru'};
//         case actions.languageEn.type:return {value:'En'};
//         // case actionsTypes.RU:return {value:'Ru'};
//         // case actionsTypes.EN:return {value:'En'};

//         default: return value;
//     }
// };

export default combineReducers({language:languageReducer,})