import React from "react";

interface userFile {
  name: string;
  age: number;
  marrid: boolean;
}

const User = ({ name, age, marrid }: userFile) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{marrid}</h1>
    </div>
  );
};

export default User;
