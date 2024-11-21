import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./slices/auth-slice";
import { AccountsSlice, createAccountsSlice } from "./slices/accounts-slice";

// El store con persistencia
export const useAppStore = create<AuthSlice & AccountsSlice>()((...a) => ({
      ...createAuthSlice(...a),
      ...createAccountsSlice(...a)
    }));
