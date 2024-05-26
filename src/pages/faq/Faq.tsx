// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// components
import { Preloader, Row, Column, Card } from "@/components/reactdash-ui";

export default function Faq() {
  return (
    <AdminLayout>
      <Preloader>
        {/* page title  */}
        <Row>
          <Column className="w-full md:w-1/2 px-4">
            <p className="text-xl font-bold mt-3 mb-5">
              Frequently Asked Questions
            </p>
          </Column>
        </Row>

        {/* content */}
        <Row>
          <Column className="w-full px-4">
            <Card>
              <p>
                Currently there are no FAQ's available. If you have a question,
                please use the Support navigation or click HERE.
              </p>
            </Card>
          </Column>
        </Row>
      </Preloader>
    </AdminLayout>
  );
}
