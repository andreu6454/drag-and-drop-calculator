import {createSlice} from "@reduxjs/toolkit";

interface AppStateType {
    isDragged: boolean,
    isConstructed: boolean
}

// Define the initial state using that type
const initialState: AppStateType = {
    isDragged: false,
    isConstructed: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsDragged: (state) => {
            state.isDragged = true
        },
        setIsConstructed: (state) => {
            state.isConstructed = !state.isConstructed
        }
    },
})

export const { setIsDragged, setIsConstructed } = appSlice.actions

export const appReducer = appSlice.reducer