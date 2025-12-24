import type React from "react";
import type { adminInfoList } from "../ts/Type";

type adminInfoProps = {
  admin: adminInfoList;
};
const AdminInfo: React.FC<adminInfoProps> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Info</h2>
      <p>ID: {admin.id}</p>
      <p>name: {admin.name}</p>
      <p>email: {admin.email}</p>
      <p>role: {admin.role}</p>
      <p>lastlogin: {admin.lastLogin.toLocaleDateString()}</p>
    </div>
  );
};

export default AdminInfo;
