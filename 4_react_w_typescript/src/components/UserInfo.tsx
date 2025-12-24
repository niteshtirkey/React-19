import type React from "react"
import type { infos } from "../ts/Type"



type userInfoProps ={
    user:infos
}
const UserInfo: React.FC<userInfoProps> = ({user}) => {
  return (
    <div>
      <h2>user Info</h2>
      <p>ID: {user.id}</p>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
    </div>
  )
}

export default UserInfo
