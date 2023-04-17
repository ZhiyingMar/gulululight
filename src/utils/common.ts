import eventBus from "@/utils/eventBus";
const { ExpiresIn } = require("./config");
// 验证token是否过期
export const validation = async (res: any) => {
  let date = new Date().getTime();
  res.date = date;
  window.localStorage.setItem("loginData", JSON.stringify(res));
  eventBus.emit("login", res?.username);
};

export const loginOut = () => {
  window.localStorage.clear();
};

export const getUserInfo = () => {
  let date = new Date().getTime();
  let info = JSON.parse(window?.localStorage?.getItem("loginData") ?? "{}");
  // 超出时间清除缓存
  if (info?.date && date - info?.date > ExpiresIn) {
    window.localStorage.clear();
  }
  return {
    token: info?.token ?? "",
    userId: info?.userId ?? "",
    username: info?.username ?? "",
    date: info?.date ?? 0,
  };
};
