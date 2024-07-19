import API from "../utils/request";

export type EarningOwedInvoice = {
  id: number;
  invoice_ids: string;
  invoice_numbers: string;
  ordered: number;
  payment_date: string;
  purchase_order_date: string;
  purchase_order_number: string;
  purchase_order_status: string;
  received: number;
  total: string;
};

export type EarningPaidInvoice = {
  id: number;
  invoice_ids: string;
  invoice_numbers: string;
  ordered: number;
  payment_date: string;
  purchase_order_date: string;
  purchase_order_number: string;
  purchase_order_status: string;
  received: number;
  total: string;
};

export const getEarningOwedInvoice = async (): Promise<
  EarningOwedInvoice[]
> => {
  const res = await API.post(`api/earnings/owed-invoices`);
  return res.data;
};

export const getEarningPaidInvoice = async (): Promise<
  EarningPaidInvoice[]
> => {
  const res = await API.post(`api/earnings/paid-invoices`);
  return res.data;
};
