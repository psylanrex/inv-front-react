import { dashboardReturnedRate } from "@/api/dashboard";
import ReturnedRateTable from "@/components/dashboards/ReturnedRateTable";
import { Card, Column, Preloader, Row } from "@/components/reactdash-ui";
import Spin from "@/components/reactdash-ui/Spin";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";

export type ProductReturnRate = {
  avg_rating: string;
  id: number;
  image_url: string;
  item_code: string;
  short_name: string;
  unit_cost: string;
};

export type DataReturnRate = {
  title: string;
  sub_title: string;
  products: ProductReturnRate[];
  loading: boolean;
};

export default function ReturnedRate() {
  const [state, setState] = useSetState<DataReturnRate>({
    title: "",
    sub_title: "",
    products: [],
    loading: true,
  });

  useAsyncEffect(async () => {
    const [err, res] = await to(dashboardReturnedRate());
    if (err) return setState({ loading: false });
    setState({ ...res, loading: false });
  }, []);

  return (
    <Preloader>
      <Spin loading={state.loading}>
        {/* page title  */}
        <Row>
          <Column className="w-full md:w-1/2 px-4">
            <p className="text-xl font-bold mt-3 mb-5">{state.title}</p>
          </Column>
        </Row>

        {/* content  */}
        <Row>
          <Column className="w-full px-4">
            <Card className="relative p-6">
              <ReturnedRateTable
                title={state.sub_title}
                products={state.products}
              />
            </Card>
          </Column>
        </Row>
      </Spin>
    </Preloader>
  );
}
