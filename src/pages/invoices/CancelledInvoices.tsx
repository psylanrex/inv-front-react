// components
import { Preloader, Row, Column, Card } from "@/components/reactdash-ui";
import CancelledInvoiceTable from "@/components/invoices/CancelledInvoiceTable";

export default function CancelledInvoices() {
  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold mt-3 mb-5">Cancelled Invoices</p>
        </Column>
      </Row>

      {/* content  */}
      <Row>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <CancelledInvoiceTable />
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
}
