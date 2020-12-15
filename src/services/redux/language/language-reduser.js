import { combineReducers } from "redux";
import {createReducer} from '@reduxjs/toolkit';
import * as actions from "./language-actions";

const languageReducer=createReducer('Ru',{
    [actions.languageRu.type]:(value,{payload})=> value='Ru',
    [actions.languageEn.type]:(value,{payload})=> value='En',
});

export default combineReducers({language:languageReducer,})