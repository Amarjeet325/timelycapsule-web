import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Capsule {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  openAt: string;
}

interface CapsuleState {
  capsules: Capsule[];
  loading: boolean;
  error: string | null;
}

const initialState: CapsuleState = {
  capsules: [],
  loading: false,
  error: null,
};

const capsuleSlice = createSlice({
  name: "capsules",
  initialState,
  reducers: {
    setCapsules: (state, action: PayloadAction<Capsule[]>) => {
      state.capsules = action.payload;
    },
    addCapsule: (state, action: PayloadAction<Capsule>) => {
      state.capsules.push(action.payload);
    },
    updateCapsule: (state, action: PayloadAction<Capsule>) => {
      const index = state.capsules.findIndex(
        (capsule) => capsule.id === action.payload.id,
      );
      if (index !== -1) {
        state.capsules[index] = action.payload;
      }
    },
    deleteCapsule: (state, action: PayloadAction<string>) => {
      state.capsules = state.capsules.filter(
        (capsule) => capsule.id !== action.payload,
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCapsules,
  addCapsule,
  updateCapsule,
  deleteCapsule,
  setLoading,
  setError,
} = capsuleSlice.actions;
export default capsuleSlice.reducer;
