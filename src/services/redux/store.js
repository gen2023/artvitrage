import {createStore} from 'redux';

const initialState={language:'Ru'}
const reducer=(state=initialState,{type})=>{
    switch(type){
        case 'Ru':return {language:'Ru'};
        case 'En':return {language:'En'};

        default: return state;
    }
};

const store=createStore(reducer)

export default store;