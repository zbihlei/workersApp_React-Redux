import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        activeFilter: 'all',
        highSalary: false
    },
    reducers:{
        activeFilterChanged :(state, action) =>{
            state.activeFilter = action.payload
        },
        highSalaryShow : (state, action) =>{
            state.highSalary = action.payload
        }
    }
});

const {actions, reducer} = filterSlice;

export default reducer;
export const {activeFilterChanged, highSalaryShow} = actions;





