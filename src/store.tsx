import { createContext, useContext, useReducer } from 'react'
import { data } from "./data/data"

const Store:any = createContext({})
export const useStore:any = () => useContext(Store)

const initialState = data
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
