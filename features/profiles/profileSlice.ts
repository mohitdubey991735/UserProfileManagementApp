import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileState } from "./profileTypes";

const initialState: ProfileState = {
  profiles: [],
  draftProfile: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateDraft(state, action: PayloadAction<Partial<Profile>>) {
      state.draftProfile = { ...state.draftProfile, ...action.payload };
    },
    saveProfile(state) {
      state.profiles.push({
        ...(state.draftProfile as Profile),
        id: Date.now().toString(),
      });
      state.draftProfile = {};
    },
    deleteProfile(state, action: PayloadAction<string>) {
      state.profiles = state.profiles.filter(
        (p) => p.id !== action.payload
      );
    },
    editProfile(state, action: PayloadAction<Profile>) {
      state.draftProfile = action.payload;
      state.profiles = state.profiles.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

export const {
  updateDraft,
  saveProfile,
  deleteProfile,
  editProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
