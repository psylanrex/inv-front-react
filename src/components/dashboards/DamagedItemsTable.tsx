import { useCallback } from "react";
import { SearchForm, Pagination, Heading } from "@/components/reactdash-ui";
import { ProductDamagedItems } from "@/layouts/dashboard/DamagedItems";
import { useSetState } from "ahooks";
import { StarFill } from "react-bootstrap-icons";
import { currencyFormatter } from "@/utils/utils";

const { VITE_INVITORY_IMAGE } = import.meta.env;

const table_title = {
  thumbnail: "Thumbnail",
  itemCode: "Item Code",
  shortName: "Short Name",
  unitCode: "Unit Code",
  avgRating: "Avg Rating",
};

type KeyTableTitle = keyof typeof table_title;

type ReturnRateTableProps = {
  title: string;
  products: ProductDamagedItems[];
};

type DataDamagedItemsTable = {
  currentPage: number;
  keyword: string;
  perPage: number;
};

export default function DamagedItemsTable(props: ReturnRateTableProps) {
  const [state, setState] = useSetState<DataDamagedItemsTable>({
    currentPage: 1,
    keyword: "",
    perPage: 8,
  });

  // page changed
  const onPageChanged = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => {
      event.preventDefault();
      setState({ currentPage: page });
    },
    [setState]
  );

  // slice data_table
  const currentData = props.products
    .filter((product) => {
      if (!state.keyword) return true;

      const regex = new RegExp(state.keyword, "i");
      return (
        regex.test(product.short_name) ||
        regex.test(product.item_code) ||
        regex.test(product.unit_cost)
      );
    })
    .slice(
      (state.currentPage - 1) * state.perPage,
      (state.currentPage - 1) * state.perPage + state.perPage
    );

  return (
    <div>
      <div className="md:flex md:justify-between mb-3">
        <Heading variant="h3" className="text-xl font-bold">
          {props.title}
        </Heading>
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
          {currentData.map((cur, id) => {
            return (
              <tr key={id}>
                <td>
                  <div className="leading-5">
                    <img
                      src={`${VITE_INVITORY_IMAGE}/${cur.image_url}`}
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                </td>
                <td>
                  <div className="leading-5">{cur.item_code}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.short_name}</div>
                </td>
                <td>
                  <div className="leading-5">
                    {currencyFormatter.format(+cur.unit_cost)}
                  </div>
                </td>
                <td>
                  <div className="leading-5 flex">
                    <StarFill className="text-yellow-400" />
                    {cur.avg_rating}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        totalData={currentData.length}
        perPage={state.perPage}
        className="mt-8"
        onPageChanged={onPageChanged}
        currentPage={state.currentPage}
      />
    </div>
  );
}
