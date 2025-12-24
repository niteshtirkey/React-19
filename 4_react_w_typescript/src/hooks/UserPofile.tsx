import { useState } from "react";

interface UserProfileTyp {
  name: string;
  email: string;
  age: number;
}

export default function UserPofile() {
  const [profile, setProfile] = useState<UserProfileTyp>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };
   const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age:+age }));
  };
   const updateEmai = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input type="number" placeholder="number" value={profile.age} onChange={(e)=> updateAge(e.target.value)}/>
  <input type="email" placeholder="email" value={profile.email} onChange={(e)=> updateEmai(e.target.value)}/>
    <p>Name: {profile.name}</p>
    <p>Name: {profile.email}</p>
    <p>Name: {profile.age}</p>

    </div>

  );
}
