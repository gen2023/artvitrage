import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import languageReduser from "./language/language-reduser";
import storage from 'redux-persist/lib/storage';
// const rootReduser=combineReducers({language:languageReduser,})

const persistConfig={
    key:'language',
    storage,
    whitelst:['language'],
};
const middleware=[...getDefaultMiddleware({serializableCheck:{
    ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
}
}),
];
// const rootReduser=combineReducers({language:languageReduser});
// const persistedReducer=persistReducer(persistConfig,rootReduser);
// const store=createStore(rootReduser)
const store = configureStore({
    reducer:{language:persistReducer(persistConfig,languageReduser),},
    middleware,
});
const persistor = persistStore(store);

export default {store,persistor};