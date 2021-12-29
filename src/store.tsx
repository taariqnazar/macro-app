import { createContext, useContext, useReducer } from 'react'
import { new_data } from "./data/data"

const Store = createContext({})
export const useStore = () => useContext(Store)

const initialState = new_data
const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case "TEST": {
            return state
        }
        default: {
            return {}
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
