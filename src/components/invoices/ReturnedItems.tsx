import { ReturnedItem } from "@/api/invoice";

const table_title = {
  id: "Return ID",
  tracking_number: "Tracking Number",
  return_item_count: "Return Item Count",
  return_value: "Return Value",
  shipped_date: "Shipped Date",
};

type KeyTableTitle = keyof typeof table_title;

type ReturnedItemsProps = {
  products: ReturnedItem[];
};

const ReturnedItems: React.FC<ReturnedItemsProps> = (props) => {
  const currentData = props.products;
  return (
    <div>
      <div className="flex mb-3 no-print">
        <div className="font-bold">Returned Items</div>
      </div>

      <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40">
            {Object.keys(table_title).map((key, id) => (
              <th className="text-left" key={id}>
                {table_title[key as KeyTableTitle]}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentData.map((item, id) => {
            const classRow =
              id % 2 === 0
                ? ""
                : "bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40";

            return (
              <tr key={id} className={classRow}>
                <td>
                  <div className="leading-5">{item?.id}</div>
                </td>
                <td>
                  <div className="leading-5">{item.tracking}</div>
                </td>
                <td>
                  <div className="leading-5">{item.item_count}</div>
                </td>
                <td>
                  <div className="leading-5">{item.item_value}</div>
                </td>
                <td>
                  <div className="leading-5">{item.create_time}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnedItems;
