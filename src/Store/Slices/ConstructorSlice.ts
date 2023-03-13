import {createSlice} from "@reduxjs/toolkit";

interface ConstructorStateType {
    value: number
}

// Define the initial state using that type
const initialState: ConstructorStateType = {
    value: 0,
}

export const constructorSlice = createSlice({
    name: 'constructorItems',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
    },
})

export const { increment } = constructorSlice.actions

export const constructorReducer = constructorSlice.reducer