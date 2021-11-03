
import { createContext } from "react"
import useFirebase from "../hooks/useFirebase"
import usePlans from "../hooks/usePlans";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const AllContexts= useFirebase();
    const {plans}= usePlans()

    
    const data = {AllContexts, plans}
   return(
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

   )
}

export default AuthProvider
