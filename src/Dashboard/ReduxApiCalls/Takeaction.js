import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

// export const fetchData = () => async (dispatch) => {
//   dispatch(fetchDataRequest());
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     dispatch(fetchDataSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchDataFailure(error.message));
//   }
// };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export default dataSlice.reducer;
