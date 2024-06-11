import API from "../utils/request";

export const purchaseOrdersStockCheck = async () => {
  const res = await API.get(`api/purchase-orders/stock-check`);
  return res.data;
};
