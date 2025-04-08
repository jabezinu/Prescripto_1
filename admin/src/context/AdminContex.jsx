import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const value = {

    }

    reutrn (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider