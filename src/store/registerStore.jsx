import { create } from "zustand";

const userRegisterStore = create((set) => ({
    username: "",  
    password: "",

    setUsername: (username) => set((state) => ({ ...state, username })),
    setPassword: (password) => set((state) => ({ ...state, password })),
    saveToLocalStorage: () => {
        set((state) => {
            const userData = {
                username: state.username,
                password: state.password
            }
            localStorage.setItem("userData", JSON.stringify(userData))
            return state; 
        })
    }
}));

export default userRegisterStore
