import { useContext, useState } from "react";
import { UserContext } from "../hooks/UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewname("");
    }
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewname(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
