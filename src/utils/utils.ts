import dayjs from "dayjs";

export const getAccessToken = () => {
  const token = localStorage.getItem("accessToken");

  return { token };
};

export const saveAccessToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeToken = () => {
  localStorage.removeItem("accessToken");
};

export const logoData = { img: "/img/logo.png", text: "Invitory", url: "#" };
export const footerCopyright = `Copyright © 2001 - ${dayjs().year()}. Serrf Corp. No part may be reproduced without prior consent`;
