import dayjs from "dayjs";

export const getAccessToken = () => {
  const token = localStorage.getItem("accessToken");

  return { token };
};

export const saveAccessToken = (accessToken: string) => {
  if (!accessToken) return;
  localStorage.setItem("accessToken", accessToken);
};

export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

export const logoData = { img: "/img/logo.png", text: "Invitory", url: "#" };
export const footerCopyright = `Copyright © 2001 - ${dayjs().year()}. Serrf Corp`;
