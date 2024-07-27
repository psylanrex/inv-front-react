import { currencyFormatter } from "@/utils/utils";
import { InvoiceItem } from "@/api/invoice";

const { VITE_INVITORY_IMAGE } = import.meta.env;

const table_title = {
  image: "Image",
  item_code: "Item Code",
  description: "Description",
  price: "Price",
  invoiced: "Invoiced",
  landed: "Landed",
  invoiced_subtotal: "Invoiced Subtotal",
  landed_subtotal: "Landed Subtotal",
};

type KeyTableTitle = keyof typeof table_title;

type LandedItemsProps = {
  products: InvoiceItem[];
};

const LandedItems: React.FC<LandedItemsProps> = (props) => {
  const currentData = props.products;
  return (
    <div>
      <div className="flex mb-3 no-print">
        <div className="font-bold">Invoiced / Landed Items</div>
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
              <ItemDetail key={id} id={id} classRow={classRow} item={item} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const ItemDetail: React.FC<{
  id: number;
  disabledCheckbox?: boolean;
  classRow: string;
  item: InvoiceItem;
}> = (props) => {
  const { category_id, id, vendor_item_code, name } =
    props.item?.purchase_order_summary?.product_description;
  const { unit_cost, quantity, landed } = props.item;

  const image_type_id = 9;
  const src = `${VITE_INVITORY_IMAGE}/${category_id}/${image_type_id}/${id}.jpg`;

  return (
    <tr key={props.id} className={props.classRow}>
      <td>
        <img className="w-32 h-24" src={src} />
      </td>
      <td>
        <div className="leading-5">{vendor_item_code?.item_code}</div>
      </td>
      <td>
        <div className="leading-5">{name}</div>
      </td>
      <td>
        <div className="leading-5">{currencyFormatter.format(+unit_cost)}</div>
      </td>
      <td>
        <div className="leading-5">{quantity}</div>
      </td>
      <td>
        <div className="leading-5">{landed}</div>
      </td>
      <td>
        <div className="leading-5">
          {currencyFormatter.format(quantity * +unit_cost)}
        </div>
      </td>
      <td>
        <div className="leading-5">
          {currencyFormatter.format(landed * +unit_cost)}
        </div>
      </td>
    </tr>
  );
};

export default LandedItems;
