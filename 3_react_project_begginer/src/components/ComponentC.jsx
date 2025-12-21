import { use, useContext } from "react"
import { Data } from "../hooks/ContextApi"


function ComponentC() {

  const userName = useContext(Data);

  return (
    <div>
    <h1>my name is {userName}</h1>
    </div>
  )
}

export default ComponentC
