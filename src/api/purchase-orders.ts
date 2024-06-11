import API from "../utils/request";

export const purchaseOpenOrder = async () => {
  const res = await API.get(`api/purchase-orders/open`);
  return res.data;
};
