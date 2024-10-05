import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  selectedFrom: {
    name: null,
    code: null,
    city: null,
    country: null,
  },
  selectedTo: {
    name: null,
    code: null,
    city: null,
    country: null,
  },
  departureDate: null,
  returnDate: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFromAc: (state, action) => {
      state.selectedFrom = action.payload;
    },
    setToAc: (state, action) => {
      state.selectedTo = action.payload;
    },
    setDepartureDateAc: (state, action) => {
      state.departureDate = action.payload;
    },
    setReturnDateAc: (state, action) => {
      state.returnDate = action.payload;
    },
    reset: () => initialState,
  },
});

// Export actions for use in components
export const {
  setFromAc,
  setToAc,
  setDepartureDateAc,
  setReturnDateAc,
  reset,
} = flightSlice.actions;

// Export the reducer to include in the store
export default flightSlice.reducer;
