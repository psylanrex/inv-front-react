import API from "../utils/request";

type PurchaseOrder = {
  id: number;
  employee_id: string;
  purchase_order_detail_id: number;
  vendor_address_id: number;
  purchase_order_number: string;
  category: {
    avg_rating: string;
    create_time: string;
    create_user_id: number;
    default_freight_revenue: string;
    id: number;
    name: string;
    ratings: number;
    update_time: string;
    update_user_id: number;
  };
  purchase_order_status: {
    id: number;
    purchase_order_status: string;
  };
  purchase_order_status_id: number;
  vendor_id: number;
  category_id: number;
  term_period: number;
  term_percent_due: number;
  purchase_order_date: string;
  delivery_date: string;
  approval_deadline: string;
  invoice_window_start: string;
  invoice_window_end: string;
  freight_cost_in_limit: null;
  create_user_id: number;
  create_time: string;
  update_user_id: number;
  update_time: string;
};

export type PurchaseOrderItem = {
  id: number;
  item_code: string;
  name: string;
  short_name: string;
  category_id: number;
  unit_cost: string;
  quantity: number;
  invoiced: number;
  remaining: number;
};

export type PurchaseOrderDetail = {
  items: PurchaseOrderItem[];
  purchase_order: PurchaseOrder;
  item_count: number;
  grand_total: number;
  is_staged: boolean;
};

export const purchaseStockCheckOrder = async () => {
  const res = await API.get(`api/purchase-orders/stock-check`);
  return res.data;
};

export const purchasePendingOrder = async () => {
  const res = await API.get(`api/purchase-orders/pending`);
  return res.data;
};

export const purchaseOpenOrder = async () => {
  const res = await API.get(`api/purchase-orders/open`);
  return res.data;
};

export const purchaseClosedOrder = async () => {
  const res = await API.get(`api/purchase-orders/closed`);
  return res.data;
};

export const purchaseCloseOrder = async (id: number) => {
  const res = await API.get(`api/purchase-orders/close/${id}`);
  return res.data;
};

export const purchaseApproveOrder = async (id: number) => {
  const res = await API.get(`api/purchase-orders/approve/${id}`);
  return res.data;
};

export const purchaseRejectOrder = async (id: number) => {
  const res = await API.get(`api/purchase-orders/reject/${id}`);
  return res.data;
};

export const purchaseOrderDetails = async (
  id: string
): Promise<PurchaseOrderDetail> => {
  const res = await API.get(`api/purchase-orders/details/${id}`);
  return res.data;
};

export const createInvoice = async (
  id: string,
  data: any
): Promise<PurchaseOrderDetail> => {
  const res = await API.post(`api/purchase-orders/details/${id}`, data);
  return res.data;
};
