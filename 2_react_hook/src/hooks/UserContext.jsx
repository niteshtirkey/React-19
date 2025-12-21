import {createContext, useState } from "react";

const UserContext = createContext();

export default function UserProvider({children}) {
  const [user, setUser] = useState({ name: "Mukesh" });
  console.log(user);

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return <div>
    <UserContext.Provider value={{user, updateUser}}>
        {children}
    </UserContext.Provider>
  </div>;
}

export {UserContext}