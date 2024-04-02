import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  tableData: [],
  isOpen: false,
  errorMsg: "",
  isSuccess: false,
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    isLoading(state) {
      state.loading = true;
    },

    setIsLoadingFalse(state) {
      state.loading = false;
    },
    setErrorMessage(state, action) {
      state.loading = false;
      state.isOpen = true;
      state.errorMsg = action.payload;
    },
    getTableData(state, action) {     
      state.tableData = action.payload;
      state.loading = false;
    },

  },
});

export const { isLoading, setIsLoadingFalse, setErrorMessage, getTableData } = ProductSlice.actions;
export default ProductSlice.reducer;