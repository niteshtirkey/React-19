import React from 'react'
import UserInfo from '../features/UserInfo'
import Wether from '../features/Wether'
import ExampleOne from '../fundamental/ExampleOne'
import TodoList from '../fundamental/TodoList'
import Profile from '../fundamental/Profile'
import ShopingList from '../fundamental/ShopingList'
import CopyInput from '../portal/CopyInput'
import Switcher from '../portal/Switcher'

const Main = () => {
  return (
    <main>
      <h1>Main Content</h1>
      {/* <UserInfo /> */}
      <Wether/>
      {/* <ExampleOne/> */}
      {/* <TodoList/> */}
      {/* <Profile/> */}
      {/* <ShopingList/> */}

      <CopyInput/>
      <Switcher/>
    </main>
  )
}

export default Main
