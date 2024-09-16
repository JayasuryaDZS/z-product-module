import { createSlice } from "@reduxjs/toolkit";

export const initialState ={
    loading:false,
    tableData: [],
    subscription: {
      subscription_id: '',
      subscription_name: '',
      subscription_description: '',
      is_active: false,
      products: [],
      modules: []
    },
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
          },
          getSubscriptionById(state,action){
            state.loading = false
            state.subscription = action.payload
          }
    }
})

export const {isLoading,getTableData,setIsLoadingFalse,getSubscriptionById} = SubscriptionSlice.actions;
export default SubscriptionSlice.reducer;