import { createSlice } from "@reduxjs/toolkit";

export const initialState ={
    loading:false,
    tableData: [],
}

const SubscriptionSlice =createSlice({
    name:"Subscription",
    initialState,
    reducers:{
        isLoading(state) {
            state.loading = true;
          },
          getTableData(state,action){
            state.tableData = action.payload
            state.loading = false
          },
          setIsLoadingFalse(state){
            state.loading = false
          }
    }
})

export const {isLoading,getTableData,setIsLoadingFalse} = SubscriptionSlice.actions;
export default SubscriptionSlice.reducer;