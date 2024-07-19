// components
import {
  Preloader,
  Row,
  Column,
  Card,
  Input,
  Select,
  Button,
} from "@/components/reactdash-ui";
import OwedEarningTable from "@/components/earnings/OwedEarningTable";

const OwedEarnings = () => {
  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold mt-3 mb-5">Owed Earnings</p>
        </Column>
      </Row>

      {/* filter  */}
      <Row>
        <Column className="w-full p-4">
          <Card className="relative p-6">
            <div className="flex gap-2">
              <div className="flex">
                <Input
                  type="date"
                  id="start_date"
                  className="w-[200px] rounded-r-none"
                  name="start_date"
                  placeholder="Start Date"
                />
                <span className="bg-[#eee] p-2 border-gray-300 border-y-[1px] text-[#555]">
                  To
                </span>
                <Input
                  type="date"
                  id="end_date"
                  className="w-[200px] rounded-l-none"
                  name="end_date"
                  placeholder="End Date"
                />
              </div>
              <Select
                className="items-center !mb-0"
                selectClassName="h-full"
                name="filter"
                id="filter"
                placeholder="All"
                options={[
                  { value: "1", title: "Pending" },
                  { value: "2", title: "Pending_Vendor" },
                  { value: "3", title: "Received" },
                  { value: "4", title: "Open" },
                  { value: "5", title: "Complete" },
                  { value: "6", title: "Rejected" },
                  { value: "7", title: "Dump" },
                  { value: "8", title: "Vendor Closed" },
                  { value: "9", title: "Pending Approval" },
                  { value: "10", title: "Pending Invoice Creation" },
                  { value: "11", title: "Stock Check Pending" },
                  { value: "12", title: "Stock Check Complete" },
                ]}
              />
              <Button>Submit</Button>
            </div>
          </Card>
        </Column>
      </Row>

      {/* content  */}
      <Row>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <OwedEarningTable />
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
};

export default OwedEarnings;
