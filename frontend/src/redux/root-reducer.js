import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import signInSignUpReducer from "./sign-in-sign-up/sign-in-sign-up.reducer";

// persist config object
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const rootReducer = combineReducers({
    user: userReducer,
    signInSignUp: signInSignUpReducer
});

export default persistReducer(persistConfig, rootReducer);
