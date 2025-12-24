import AdminInfo from "./AdminInfo";

import type { infos, adminInfoList } from "../ts/Type";
import UserInfo from "./UserInfo";

export default function Info() {
  const user: infos = {
    id: 1,
    name: "nitesh",
    email: "nitesh@gmail.com",
  };
  const admin: adminInfoList = {
    id: 2,
    name: "mukesh",
    email: "mukesh@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <div>
      <AdminInfo admin={admin} />
      <UserInfo user={user} />
    </div>
  );
}
