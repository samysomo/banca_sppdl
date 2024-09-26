import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./slices/auth-slice";

// El store con persistencia
export const useAppStore = create<AuthSlice>()(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
  
);
