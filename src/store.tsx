import { createContext, useContext, useReducer } from 'react'
import { data } from "./data/data"

const Store:any = createContext({})
export const useStore:any = () => useContext(Store)

const initialState = data
const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_MEAL": {
             return {
             ...state,
             [state.user.diary]: state.user.diary.push(action.payload) 
             }
        }
        default: {
            throw new Error("No actions was passed.")
        }
    }
}

export default function StoreProvider({ children }) {
    const [globalState, dispatch] = useReducer(globalReducer , initialState)
    return (
        <Store.Provider value={[globalState, dispatch]} >
            {children}
        </Store.Provider>
    ) 

}
