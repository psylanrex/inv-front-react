import { PurchaseOrder } from "@/api/purchase-orders";
import API from "../utils/request";

type InvoiceStatus = {
  id: number;
  invoice_status: string;
};

export type InvoiceData = {
  create_time: string;
  create_user_id: number;
  expected_landing_date: string;
  freight_cost_in: string;
  id: number;
  import_fee: string;
  invoice_note_id: null;
  invoice_number: string;
  invoice_status: InvoiceStatus;
  invoice_status_id: number;
  landed_date: string;
  purchase_order: PurchaseOrder;
  purchase_order_id: number;
  receive_date: string;
  sales_tax: string;
  ship_date: string;
  ship_method: {
    id: number;
    ship_method: string;
  };
  ship_method_id: number;
  tracking_number: string;
  update_time: string;
  update_user_id: number;
};

export type InvoiceItem = {
  condition_note: string;
  create_time: string;
  create_user_id: number;
  customer_cancelled: number;
  employee_id: number;
  freight_cost_in: string;
  id: number;
  import_cost: string;
  inventory_location_id: number;
  invoice_id: number;
  item_condition_id: number;
  item_status_id: number;
  landed: number;
  mark_up: string;
  product_description_id: number;
  purchase_order_id: number;
  purchase_order_line_item_id: number;
  purchase_order_summary: {
    id: number;
    purchase_order_id: number;
    product_description_id: number;
    quantity: number;
    customer_cancelled: number;
    vendor_cancelled: number;
    unit_cost: string;
    create_user_id: number;
    create_time: string;
    update_user_id: number;
    update_time: string;
    product_description: {
      id: number;
      category_id: number;
      vendor_item_code_id: number;
      price: string;
      current_unit_cost: string;
      name: string;
      short_name: string;
      product_gender_id: number;
      image_status_id: number;
      description_status_id: number;
      description_details_id: number;
      voided: number;
      discontinued: number;
      schedulable: number;
      weight: string;
      weight_date: string;
      item_condition_id: number;
      default_freight_revenue: string;
      ship_type_id: number;
      returnable: number;
      vender_returnable: number;
      reorderable: number;
      production_limit: number;
      brand_id: number;
      country_id: number;
      product_status_id: number;
      create_user_id: number;
      create_time: string;
      update_user_id: number;
      update_time: string;
      vendor_item_code: {
        id: number;
        item_code: string;
        vendor_id: number;
      };
      std_images: {
        id: number;
        product_description_id: number;
        image_status_id: number;
        image_type_id: number;
        image_mime_id: number;
        create_user_id: number;
        create_time: string;
        update_user_id: number;
        update_time: string;
      }[];
      hd_images: {
        id: number;
        product_description_id: number;
        image_status_id: number;
        image_type_id: number;
        image_mime_id: number;
        create_user_id: number;
        create_time: string;
        update_user_id: number;
        update_time: string;
      }[];
    };
  };
  purchase_order_summary_id: number;
  quantity: number;
  received_date: string;
  sales_tax: string;
  ship_method_id: number;
  unit_cost: string;
  update_time: string;
  update_user_id: number;
  vendor_cancelled: number;
};

export type ReturnedItem = {
  id: string;
  tracking: string;
  item_count: number;
  item_value: string;
  create_time: string;
};

export type InvoiceDetail = {
  grand_total: string;
  invoice: InvoiceData;
  item_count: number;
  items: InvoiceItem[];
  landed_count: number;
  landed_grand_total: string;
  returned: ReturnedItem[];
};

export type InvoiceFinishData = {
  grand_total: string;
  invoice: InvoiceData;
  item_count: number;
  items: InvoiceItem[];
  landed_count: number;
  landed_grand_total: string;
  returned: ReturnedItem[];
};

export type InvoicePrintData = {
  invoice: InvoiceData;
  message: string;
};

export const getPendingInvoices = async (): Promise<InvoiceData[]> => {
  const res = await API.get(`api/invoices/pending`);
  return res.data;
};

export const getShippedInvoices = async (): Promise<InvoiceData[]> => {
  const res = await API.get(`api/invoices/shipped`);
  return res.data;
};

export const getReceivedInvoices = async (): Promise<InvoiceData[]> => {
  const res = await API.get(`api/invoices/received`);
  return res.data;
};

export const getCancelledInvoices = async (): Promise<InvoiceData[]> => {
  const res = await API.get(`api/invoices/cancelled`);
  return res.data;
};

export const cancelInvoice = async (id: number) => {
  const res = await API.post(`api/invoices/cancel/${id}`);
  return res.data;
};

export const getInvoiceDetails = async (id: string): Promise<InvoiceDetail> => {
  const res = await API.get(`api/invoices/details/${id}`);
  return res.data;
};

export const getInvoicePrint = async (
  id: string
): Promise<InvoicePrintData> => {
  const res = await API.get(`api/invoices/print/${id}`);
  return res.data;
};

export const getInvoiceFinish = async (
  id: string
): Promise<InvoiceFinishData> => {
  const res = await API.get(`api/invoices/finish/${id}`);
  return res.data;
};

export const createInvoiceFinish = async (id: string, body) => {
  const res = await API.post(`api/invoices/finish/${id}`, body);
  return res.data;
};
