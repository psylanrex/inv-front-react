// components
import PendingInvoiceTable from "@/components/invoices/PendingInvoiceTable";
import { Preloader, Row, Column, Card } from "@/components/reactdash-ui";

export default function PendingInvoices() {
  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold mt-3 mb-5">Pending Invoices</p>
        </Column>
      </Row>

      {/* content  */}
      <Row>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <PendingInvoiceTable />
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
}
