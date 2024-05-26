// components
import { Preloader, Row, Column, Card } from "@/components/reactdash-ui";
import RejectedImageTable from "@/components/manage-items/RejectedImageTable";

export default function RejectedImages() {
  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold mt-3 mb-5">
            Rejected High-Definition Product Images
          </p>
        </Column>
      </Row>

      {/* content  */}
      <Row>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <RejectedImageTable />
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
}
