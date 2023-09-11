import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './usersSlice';
import  counterReducer from './counterSlice';

// insted of combine reducers, we have configure Store in add reducers
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer
    }
})