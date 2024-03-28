import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  data: []
}

const SampleSlice = createSlice({
    name: "Sample",
    initialState,
    reducers: {
        isLoadingTrue (state) {
            state.loading = true
        },

        getInitialTableData (state, action) {
            state.data = action.payload
            state.loading = false
        },

        isLoadingFalse (state) {
            state.loading = false
        }
    }
})

export const { getInitialTableData, isLoadingFalse, isLoadingTrue } = SampleSlice.actions

export default SampleSlice.reducer