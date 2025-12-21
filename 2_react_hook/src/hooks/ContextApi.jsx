import { createContext } from "react"
import ComponentA from "../components/ComponentA"


export const Data = createContext()
export const Data1 = createContext()

const ContextApi = () => {

    const name = "Nitesh"

    const age = 28;
    

  return (
    <div>
        <Data.Provider value={name}>
        <ComponentA />
        </Data.Provider>
      
    </div>
  )
}

export default ContextApi
