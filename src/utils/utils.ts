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

export const saveVendorId = (vendorId?: number) => {
  if (!vendorId) return;
  localStorage.setItem("vendorId", vendorId.toString());
};

export const removeVendorId = () => {
  localStorage.removeItem("vendorId");
};

export const getVendorId = () => {
  const vendorId = localStorage.getItem("vendorId");
  return vendorId ? parseInt(vendorId) : undefined;
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const logoData = { img: "/img/logo.png", text: "Invitory", url: "#" };
export const footerCopyright = `Copyright © 2001 - ${dayjs().year()}. Serrf Corp`;
export const loginLink = "/impersonate";
export const registerLink = "/impersonate/register";
