import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { fetchData } from '../src/Slices/dataSlice.js';
import thunk from 'redux-thunk';
import authReducer from "../src/Slices/authSlice.js"
import loginReducer from "../src/Slices/loginSlice.js"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { combineReducers } from '@reduxjs/toolkit';




const persisconfig = {
    key: "root",
    version: 1,
    storage
};

const rootreducer = combineReducers({

    Login: loginReducer,

})

const persistReducerr = persistReducer(persisconfig, rootreducer)

export const store = configureStore({

    Data: dataReducer,
    Auth: authReducer,
    reducer: persistReducerr,

    middleware: [thunk],

});
store.dispatch(fetchData());




// 2 nd one 


// import { configureStore } from '@reduxjs/toolkit';
// import dataReducer, { fetchData } from '../src/Slices/dataSlice.js';
// import thunk from 'redux-thunk';
// import authReducer from "../src/Slices/authSlice.js"
// import loginReducer from "../src/Slices/loginSlice.js"
// import storage from "redux-persist/lib/storage"
// import { persistReducer } from "redux-persist"
// import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage
// };

// const rootReducer = combineReducers({
//     Data: dataReducer,
//     Auth: authReducer,
//     Login: loginReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer, // Use the persisted reducer directly
//     middleware: [thunk],
// });

// store.dispatch(fetchData());




//  3rd one 

// import { configureStore } from '@reduxjs/toolkit';
// import dataReducer, { fetchData } from '../src/Slices/dataSlice.js';
// import thunk from 'redux-thunk';
// import authReducer from "../src/Slices/authSlice.js";
// import loginReducer from "../src/Slices/loginSlice.js";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage
// };

// const rootReducer = combineReducers({
//     Data: dataReducer,
//     Auth: authReducer,
//     Login: loginReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: {
//         persistedReducer, // Use the persisted reducer directly without the "reducer" key
//     },
//     middleware: [thunk],
// });

// store.dispatch(fetchData());
