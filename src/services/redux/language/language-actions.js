import {createAction} from '@reduxjs/toolkit';
// import actionstTypes from "./language-types";

export const languageRu = createAction('Ru');
export const languageEn = createAction('En');

// export const languageRu = value=>({type:actionstTypes.RU, payload:value,});
// export const languageEn = value=>({type:actionstTypes.EN, payload:value,});
