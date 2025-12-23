import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseEffectPractice from './hooks/UseEffectPractice'
import ContextApi from './hooks/ContextApi'
import UserProvider from './hooks/UserContext'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'
import UseReducer from './hooks/UseReducer'
import Counter from './components/Counter'
import FocusInput from './hooks/FocusInput'
import Timer from './hooks/Timer'
import FetchData from '../customHook/FetchData'
import UniqId from './hooks/UniqId'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <h2>React Hooks</h2>
      {/* <UseEffectPractice/> */}
      {/* <ContextApi /> */}
      {/* <UserProvider>
        <UserProfile/>
        <UpdateUser/>
      </UserProvider> */}
      {/* <UseReducer/> */}
      {/* <Counter/> */}
      {/* <FocusInput/>
      <Timer/> */}
      {/* <FetchData/> */} 
        
      <UniqId/>
      </main> 
    </>
  )
}

export default App
