import { SearchForm, Checkbox, Input } from "@/components/reactdash-ui";
import { useSetState } from "ahooks";
import { PurchaseOrderItem } from "@/api/purchase-orders";
import Spin from "@/components/reactdash-ui/Spin";
import { useEffect, useState } from "react";
import { currencyFormatter } from "@/utils/utils";

const { VITE_INVITORY_IMAGE } = import.meta.env;

const table_title = {
  image: "Image",
  item_code: "Item Code",
  name: "Name",
  price: "Price",
  ordered: "Ordered",
  invoiced: "Invoiced",
  remaining: "Remaining",
  select: "Select",
  quantity_invoice: "Qty. Invoice",
};

type KeyTableTitle = keyof typeof table_title;

type DataOpenOrderDetailTable = {
  loading: boolean;
  keyword: string;
  editable: boolean;
};

type PurchaseOrder = PurchaseOrderItem & {
  disabled: boolean;
  quantity_invoiced: number;
  editable: boolean;
};

type OpenOrderDetailTableProps = {
  products: PurchaseOrderItem[];
};

const OpenOrderDetailTable: React.FC<OpenOrderDetailTableProps> = (props) => {
  const [state, setState] = useSetState<DataOpenOrderDetailTable>({
    loading: false,
    keyword: "",
    editable: false,
  });

  // slice data_table
  const currentData = (props.products as PurchaseOrder[]).filter((product) => {
    if (!state.keyword) return true;

    const regex = new RegExp(state.keyword, "i");
    return (
      regex.test(product.item_code) ||
      regex.test(product.name) ||
      regex.test(product.short_name) ||
      regex.test(product.unit_cost) ||
      regex.test(product.quantity.toString()) ||
      regex.test(product.invoiced.toString()) ||
      regex.test(product.remaining.toString())
    );
  });
  currentData.forEach((product) => {
    product.editable = state.editable;
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
                if (key === "select") {
                  return (
                    <th className="text-left " key={id}>
                      {table_title[key as KeyTableTitle]}
                      <Checkbox
                        checked={state.editable}
                        disabled={currentData.every(
                          (product) => product.remaining <= 0
                        )}
                        onChange={() => {
                          setState({ editable: !state.editable });
                        }}
                      />
                    </th>
                  );
                }

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
              const disabledCheckbox = order.remaining <= 0;
              const classRow =
                id % 2 === 0
                  ? ""
                  : "bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40";

              return (
                <ItemDetailOrder
                  id={id}
                  disabledCheckbox={disabledCheckbox}
                  classRow={classRow}
                  order={order}
                />
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

const ItemDetailOrder: React.FC<{
  id: number;
  disabledCheckbox?: boolean;
  classRow: string;
  order: PurchaseOrder;
}> = (props) => {
  const {
    remaining,
    editable,
    category_id,
    item_code,
    name,
    unit_cost,
    quantity,
    invoiced,
    id,
  } = props.order;
  const [quantityInvoiced, setQuantityInvoiced] = useState<number>(remaining);
  const [checked, setChecked] = useState<boolean>(editable);

  useEffect(() => {
    if (remaining > 0) {
      setChecked(editable);
    }
  }, [editable]);

  // image type id 5 or 6 (HD 24 or 25)
  const image_type_id = 5;
  const src = `${VITE_INVITORY_IMAGE}/${category_id}/${image_type_id}/${id}.jpg`;

  return (
    <tr key={props.id} className={props.classRow}>
      <td>
        <img className="w-32 h-24" src={src} />
      </td>
      <td>
        <div className="leading-5">{item_code}</div>
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
        <div className="leading-5">{invoiced}</div>
      </td>
      <td>
        <div className="leading-5">{remaining}</div>
      </td>
      <td>
        <div className="leading-5">
          <Checkbox
            checked={checked}
            disabled={props.disabledCheckbox}
            onChange={() => {
              setChecked(!checked);
              props.order.editable = !checked;
            }}
          />
        </div>
      </td>
      <td>
        <div className="leading-5">
          <Input
            value={quantityInvoiced}
            disabled={!checked}
            min={0}
            type="number"
            max={remaining}
            onChange={(event) => {
              const value = event.target.value;
              if (+value >= 0 && +value <= remaining) {
                props.order.quantity_invoiced = +value;
                setQuantityInvoiced(+value);
              }
            }}
          />
        </div>
      </td>
    </tr>
  );
};

export default OpenOrderDetailTable;
