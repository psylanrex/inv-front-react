import API from "../utils/request";

export const purchasePendingOrder = async () => {
  const res = await API.get(`api/purchase-orders/pending`);
  return res.data;
};
