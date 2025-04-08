import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const value = {

    }

    reutrn (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider