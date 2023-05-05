import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AppState {
  searchInput: string;
  type: string[];
}

const initialState: AppState = {
  searchInput: "",
  type: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    resetType: (state) => {
      state.type = [];
    },
    addOrRemoveType: (state, action: PayloadAction<string>) => {
      const type = action.payload;
      const array = state.type;

      if (array.includes(type)) {
        state.type = array.filter((e) => e !== type);
      } else {
        state.type.push(type);
      }
    },
  },
});

export const { setSearchInput, resetType, addOrRemoveType } = appSlice.actions;

export const selectSearchInput = (state: RootState) => state.app.searchInput;
export const selectType = (state: RootState) => state.app.type;

export default appSlice.reducer;
