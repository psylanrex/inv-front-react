import { ENUM_PURCHASE_ORDER } from "@/utils/utils.enum";
import dayjs from "dayjs";
import ReactDOMServer from "react-dom/server";

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

export const isQuillEmpty = (value: string) => {
  if (value.replace(/<(.|\n)*?>/g, "").trim().length === 0) {
    return true;
  }
  return false;
};

export const isChildNull = (children: React.ReactNode) => {
  return !Boolean(ReactDOMServer.renderToStaticMarkup(children));
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const purcharseDetailLink = (
  status: keyof typeof ENUM_PURCHASE_ORDER,
  id: number
) => {
  switch (status) {
    case "pending":
      return `/purchase-orders/pending/details/${id}`;
    case "open":
      return `/purchase-orders/open/details/${id}`;
    default:
      return "";
  }
};

export const invoiceDetailLink = (id: number) => {
  return `/invoices/details/${id}`;
};

export const invoiceFinishLink = (id: number) => {
  return `/invoices/finish/${id}`;
};

export const invoicePrintLink = (id: number) => {
  return `/invoice/${id}`;
};

export const logoData = { img: "/img/logo.png", text: "Invitory", url: "#" };
export const footerCopyright = `Copyright © 2001 - ${dayjs().year()}. Serrf Corp`;
export const loginLink = "/impersonate";
export const registerLink = "/impersonate/register";
