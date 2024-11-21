import { StateCreator } from "zustand";

export interface AccountsSlice {
    userAccounts: Account[] | undefined;
    setUserAccounts: (userAccounts: Account[]) => void;
    
}

export const createAccountsSlice : StateCreator<AccountsSlice> = (set) => (
    {
        userAccounts: undefined,
        setUserAccounts: (userAccounts) => set({userAccounts})
    }
)