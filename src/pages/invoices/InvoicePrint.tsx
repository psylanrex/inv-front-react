import { InvoicePrintData, getInvoicePrint } from "@/api/invoice";
import { Heading, Row } from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";
import { useParams } from "react-router-dom";

const { VITE_INVITORY_API } = import.meta.env;

type StateInvoicePrint = {
  data?: InvoicePrintData;
  loading: boolean;
};

const InvoicePrint = () => {
  const params = useParams();
  const [state, setState] = useSetState<StateInvoicePrint>({
    data: undefined,
    loading: false,
  });

  useAsyncEffect(async () => {
    if (!params.invoice_id) return;
    setState({ loading: true });
    const [err, data] = await to(getInvoicePrint(params.invoice_id));
    if (err) return setState({ loading: false });
    setState({ data, loading: false });
  }, [params]);

  const getInvoiceCode = () => {
    if (!state.data?.invoice?.id) return "";
    return "05" + state.data?.invoice?.id?.toString().padStart(8, "0");
  };

  return (
    <div>
      <Row className="justify-center">
        <Heading variant="h3">
          Please print the following barcode and package with the Invoice #
          {state.data?.invoice?.invoice_number}
        </Heading>
      </Row>
      <div className="flex flex-col justify-center items-center">
        {getInvoiceCode()}
        <br />
        <img
          className="max-w-[250px]"
          src={`${VITE_INVITORY_API}/api/invoice/barcode/${getInvoiceCode()}`}
        />
        <br />
        <span>{state.data?.invoice?.invoice_number}</span>
      </div>
      <div
        className="mt-4 p-4"
        dangerouslySetInnerHTML={{ __html: state.data?.message ?? "" }}
      />
      <div className="p-4">
        <div>Signature:</div>
        <div className="border-b-2 border-solid border-black w-[500px]"></div>
      </div>
    </div>
  );
};

export default InvoicePrint;
