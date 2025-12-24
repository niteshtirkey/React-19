type infos = {
  id: number;
  name: string;
  email: string;
};

type adminInfoList = infos & {
  role: string;
  lastLogin: Date;
};

export { type infos, type adminInfoList };
