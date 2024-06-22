import API from "../utils/request";

export const purchaseOpenOrder = async () => {
  const res = await API.get(`api/purchase-orders/open`);
  return res.data;
};

export const purchaseCloseOrder = async (id: number) => {
  const res = await API.get(`api/purchase-orders/close/${id}`);
  return res.data;
};

export const purchaseOrderDetails = async (id: string) => {
  const res = await API.get(`api/purchase-orders/details/${id}`);
  return res.data;
};
