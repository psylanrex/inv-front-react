import {
  CurrencyDollar,
  Folder,
  Receipt,
  Box,
  Stopwatch,
} from "react-bootstrap-icons";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// components
import { Preloader, Row, Column, Heading } from "@/components/reactdash-ui";
// content
import { PurchaseStatsItem } from "@/components/charts/cms";

export default function Dashboard() {
  return (
    <AdminLayout>
      <Preloader>
        {/* page title  */}
        <Row>
          <Column className="w-full md:w-1/2 px-4">
            <p className="text-xl font-bold mt-3 mb-5">Dashboard</p>
          </Column>
        </Row>

        {/* content */}
        <Row>
          <Column className="w-full px-4">
            <Heading
              variant="h4"
              className="text-indigo-500 bg-indigo-100 text-center py-4 rounded-lg"
            >
              Purchasing Stats
            </Heading>
          </Column>

          <Column className="w-full">
            <Row>
              <Column className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 px-4 mb-6">
                <PurchaseStatsItem
                  title="Stock Check Orders"
                  count={0}
                  icon={<Box className="text-indigo-500 text-4xl" />}
                  url="/purchase-orders/stock-check"
                />
              </Column>
              <Column className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 px-4 mb-6">
                <PurchaseStatsItem
                  title="Pending Orders"
                  count={0}
                  icon={<Stopwatch className="text-indigo-500 text-4xl" />}
                  url="/purchase-orders/pending"
                />
              </Column>
              <Column className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 px-4 mb-6">
                <PurchaseStatsItem
                  title="Open Orders"
                  count={0}
                  icon={<Receipt className="text-indigo-500 text-4xl" />}
                  url="/purchase-orders/open"
                />
              </Column>
              <Column className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 px-4 mb-6">
                <PurchaseStatsItem
                  title="Closed Orders"
                  count={0}
                  icon={<Folder className="text-indigo-500 text-4xl" />}
                  url="/purchase-orders/closed"
                />
              </Column>
              <Column className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 px-4 mb-6">
                <PurchaseStatsItem
                  title="Pending Payments"
                  count={0}
                  icon={<CurrencyDollar className="text-indigo-500 text-4xl" />}
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </Preloader>
    </AdminLayout>
  );
}
