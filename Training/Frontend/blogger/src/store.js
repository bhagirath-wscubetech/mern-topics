import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from "./Reducers/wishlist"

const store = configureStore({
    reducer: {
        wishlistReducer
    }
})

export default store;