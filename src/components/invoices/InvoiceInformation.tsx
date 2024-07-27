import { createInvoiceFinish } from "@/api/invoice";
import { Button, InputLabel, Row, Select } from "@/components/reactdash-ui";
import { invoiceDetailLink } from "@/utils/utils";
import to from "await-to-js";
import dayjs from "dayjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

type FormInvoiceInformation = {
  ship_date: string;
  invoice_number: string;
  tracking_number: string;
  shipping_method_id: string;
  expected_landing_date: string;
  freight_cost_in: string;
  import_fee: string;
  sales_tax: string;
};

const shipping_method_options = [
  { value: "UPS", title: "UPS" },
  { value: "FEDEX", title: "FEDEX" },
  { value: "USPOSTAL", title: "USPOSTAL" },
  { value: "SHIPHOLD", title: "SHIPHOLD" },
  { value: "PENDING", title: "PENDING" },
  { value: "BESTYE1", title: "BESTYE1" },
  { value: "WILLCALL", title: "WILLCALL" },
  { value: "DUMP", title: "DUMP" },
];

const InvoiceInformation = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormInvoiceInformation>({
    defaultValues: { ship_date: dayjs().format("YYYY-MM-DD") },
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormInvoiceInformation) => {
    if (!params.invoice_id) return;

    setLoading(true);
    const [err] = await to(
      createInvoiceFinish(params.invoice_id, {
        ...data,
        invoice_id: params.invoice_id,
      })
    );
    if (err) {
      setLoading(false);
      return toast.error((err as any)?.response?.data?.message);
    }

    setLoading(false);
    navigate(invoiceDetailLink(+params.invoice_id));
    toast.success(
      "You have successfully marked the invoice as shipped. The invoice is now available to print."
    );
  };

  return (
    <div>
      <div className="flex mb-3 no-print">
        <div className="font-bold">General Invoice Information</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <InputLabel
              required
              id="ship_date"
              label="Ship Date"
              placeholder="Enter ship date"
              type="date"
              {...register("ship_date")}
            />
            <InputLabel
              required
              id="invoice_number"
              label="Invoice Number"
              placeholder="Enter invoice number"
              {...register("invoice_number")}
            />
            <InputLabel
              required
              id="tracking_number"
              label="Tracking Number"
              placeholder="Enter tracking number"
              {...register("tracking_number")}
            />
            <Select
              required
              id="shipping_method_id"
              label="Shipping Method"
              placeholder="Enter shipping method"
              options={shipping_method_options}
              {...register("shipping_method_id")}
            />
          </div>
          <div>
            <InputLabel
              required
              id="expected_landing_date"
              label="Expected Date"
              placeholder="Enter expected date"
              type="date"
              {...register("expected_landing_date")}
            />
            <InputLabel
              required
              id="freight_cost_in"
              label="Shipping Cost"
              step={0.01}
              placeholder="0.00"
              type="number"
              {...register("freight_cost_in")}
            />
            <InputLabel
              required
              id="import_fee"
              label="Import Fee"
              step={0.01}
              placeholder="0.00"
              type="number"
              {...register("import_fee")}
            />
            <InputLabel
              required
              id="sales_tax"
              label="Sales Tax"
              step={0.01}
              placeholder="0.00"
              type="number"
              {...register("sales_tax")}
            />
          </div>
        </div>
        <Row className="justify-end">
          <Button disabled={loading} color="primary" type="submit">
            Mark as Shipped
          </Button>
        </Row>
      </form>
    </div>
  );
};

export default InvoiceInformation;
