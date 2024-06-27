import { SearchForm } from "@/components/reactdash-ui";
import { useSetState } from "ahooks";
import { PurchaseOrderItem } from "@/api/purchase-orders";
import Spin from "@/components/reactdash-ui/Spin";
import { currencyFormatter } from "@/utils/utils";

const table_title = {
  image: "Image",
  item_code: "Item Code",
  name: "Name",
  price: "Price",
  ordered: "Ordered",
};

type KeyTableTitle = keyof typeof table_title;

type DataPendingOrderDetailTable = {
  loading: boolean;
  keyword: string;
};

type PendingOrderDetailTableProps = {
  products: PurchaseOrderItem[];
};

const PendingOrderDetailTable: React.FC<PendingOrderDetailTableProps> = (
  props
) => {
  const [state, setState] = useSetState<DataPendingOrderDetailTable>({
    loading: false,
    keyword: "",
  });

  // slice data_table
  const currentData = props.products.filter((product) => {
    if (!state.keyword) return true;

    const regex = new RegExp(state.keyword, "i");
    return (
      regex.test(product.item_code) ||
      regex.test(product.name) ||
      regex.test(product.short_name) ||
      regex.test(product.unit_cost) ||
      regex.test(product.quantity.toString())
    );
  });

  return (
    <div>
      <div className="flex justify-end mb-3 no-print">
        <div>
          {/* Search Form */}
          <SearchForm
            className="!mx-0"
            onChange={(e) => {
              setState({ keyword: e.target.value });
            }}
          />
        </div>
      </div>

      <Spin loading={state.loading}>
        <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40">
              {Object.keys(table_title).map((key, id) => {
                return (
                  <th className="text-left" key={id}>
                    {table_title[key as KeyTableTitle]}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {currentData.map((order, id) => {
              const classRow =
                id % 2 === 0
                  ? ""
                  : "bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40";

              // image type id 5 or 6 (HD 24 or 25)
              const image_type_id = 5;
              const src = `${import.meta.env.VITE_INVITORY_IMAGE}/${
                order.category_id
              }/${image_type_id}/${order.id}.jpg`;

              return (
                <tr key={id} className={classRow}>
                  <td>
                    <img className="w-32 h-24" src={src} />
                  </td>
                  <td>
                    <div className="leading-5">{order.item_code}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.name}</div>
                  </td>
                  <td>
                    <div className="leading-5">
                      {currencyFormatter.format(+order.unit_cost)}
                    </div>
                  </td>
                  <td>
                    <div className="leading-5">{order.quantity}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {currentData.length ? (
          <div className="mt-4 flex justify-end no-print">
            Showing 1 to {currentData.length} of {currentData.length} entries
          </div>
        ) : null}
      </Spin>
    </div>
  );
};

export default PendingOrderDetailTable;
