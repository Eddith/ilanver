import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  loading: false,
  carListError: false,
  carListResponse: [],
};

export const getCarList = createAsyncThunk(
  "car/getCarList",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.get(`https://cars.com/Vehicle/GetListVehicles`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: {
    // sturctureGetList
    [getCarList.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getCarList.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.carListResponse = action.payload.data;
    },
    [getCarList.rejected as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.carListError = true;
    },
  },
});

export default carSlice.reducer;
