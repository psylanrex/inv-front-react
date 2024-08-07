import {
  CurrencyDollar,
  Folder,
  Receipt,
  Box,
  Stopwatch,
  SuitcaseLg,
  Images,
  Dropbox,
  Link,
  StarFill,
} from "react-bootstrap-icons";
import {
  Preloader,
  Row,
  Column,
  Heading,
  Rating,
} from "@/components/reactdash-ui";
import PurchaseStatsItem, {
  PurchaseStatsItemProps,
} from "@/components/charts/dashboard/PurchaseStatsItem";
import { useAsyncEffect, useSetState } from "ahooks";
import { dashboardInfo } from "@/api/dashboard";
import to from "await-to-js";
import VendorStatsItem, {
  VendorStatsItemProps,
} from "@/components/charts/dashboard/VendorStatsItem";
import React from "react";
import Spin from "@/components/reactdash-ui/Spin";

export type DashboardState = {
  stock_check_orders: string;
  pending_orders: string;
  open_orders: string;
  closed_orders: string;
  pending_payments: string;
  cat_ratings?: {
    id: number;
    vendor_id: number;
    category_id: number;
    avg_rating: string;
    ratings: number;
    create_time: string;
    update_time: string;
    category: {
      id: number;
      name: string;
      default_freight_revenue: string;
      avg_rating: string;
      ratings: number;
      create_user_id: number;
      create_time: string;
      update_user_id: number;
      update_time: string;
    };
  }[];
  product_stats?: {
    item_count: number;
    image_count: number;
  };
  vendor_stats?: {
    returned_percentage?: string;
    damaged_percentage?: string;
  }[];
  product_ratings?: {
    bad_rating?: number;
    good_rating?: number;
  };
  is_employee?: number;
  loading: boolean;
};

export default function Dashboard() {
  const [state, setState] = useSetState<DashboardState>({
    stock_check_orders: "0",
    pending_orders: "0",
    open_orders: "0",
    closed_orders: "0",
    pending_payments: "0",
    loading: true,
  });

  useAsyncEffect(async () => {
    const [err, res] = await to(dashboardInfo());
    if (err) return setState({ loading: false });
    setState({ ...res, loading: false });
  }, []);

  const purchaseStats: PurchaseStatsItemProps[] = [
    {
      title: "Stock Check Orders",
      count: state.stock_check_orders,
      icon: <Box className="text-red-500 text-4xl" />,
      url: "/purchase-orders/stock-check",
      iconClassName: "bg-red-100 dark:bg-red-900 dark:bg-opacity-10",
    },
    {
      title: "Pending Orders",
      count: state.pending_orders,
      icon: <Stopwatch className="text-blue-500 text-4xl" />,
      url: "/purchase-orders/pending",
      iconClassName: "bg-blue-100 dark:bg-blue-900 dark:bg-opacity-10",
    },
    {
      title: "Open Orders",
      count: state.open_orders,
      icon: <Receipt className="text-green-500 text-4xl" />,
      url: "/purchase-orders/open",
      iconClassName: "bg-green-100 dark:bg-green-900 dark:bg-opacity-10",
    },
    {
      title: "Closed Orders",
      count: state.closed_orders,
      icon: <Folder className="text-orange-500 text-4xl" />,
      url: "/purchase-orders/closed",
      iconClassName: "bg-orange-100 dark:bg-orange-900 dark:bg-opacity-10",
    },
    {
      title: "Pending Payments",
      count: state.pending_payments,
      icon: <CurrencyDollar className="text-yellow-500 text-4xl" />,
      url: "/earnings/owed",
      iconClassName: "bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-10",
    },
  ];

  const productStats: PurchaseStatsItemProps[] = [
    {
      title: "Products on Open POs",
      count: state.product_stats?.item_count.toString() || "0",
      icon: <SuitcaseLg className="text-lime-500 text-4xl" />,
      url: "/purchase-orders/open",
      iconClassName: "bg-lime-100 dark:bg-lime-900 dark:bg-opacity-10",
    },
    {
      title: "Products requiring HD Images",
      count: state.product_stats?.image_count.toString() || "0",
      icon: <Images className="text-pink-500 text-4xl" />,
      url: "/manage-items/hd-images",
      iconClassName: "bg-pink-100 dark:bg-pink-900 dark:bg-opacity-10",
    },
  ];

  const getVendorStats = () => {
    const percentage = state.vendor_stats?.[0]?.returned_percentage || "0";
    const damaged = state.vendor_stats?.[0]?.damaged_percentage || "0";
    const badRating = state.product_ratings?.bad_rating || 0;
    const goodRating = state.product_ratings?.good_rating || 0;

    const venderStats: VendorStatsItemProps[] = [
      {
        title: "Returned Rate",
        summary: `${percentage}% Returned`,
        icon: <Dropbox className="text-red-500 text-4xl" />,
        url: "/dashboard/returned-rate",
        iconClassName: "bg-red-100 dark:bg-red-900 dark:bg-opacity-10",
        summaryClassName: `bg-red-100 text-red-500`,
      },
      {
        title: "Damaged",
        summary: `${damaged}% Damaged`,
        icon: <Link className="text-red-500 text-4xl" />,
        url: "/dashboard/damaged-items",
        iconClassName: "bg-red-100 dark:bg-red-900 dark:bg-opacity-10",
        summaryClassName: `bg-red-100 text-red-500`,
      },
      {
        title: "Products W/ Bad Rating",
        summary: (
          <React.Fragment>
            <div>{badRating} Products</div>
            <div>(Less than 4 stars)</div>
          </React.Fragment>
        ),
        icon: <StarFill className="text-red-500 text-4xl" />,
        url: "/dashboard/bad-rating",
        iconClassName: "bg-red-100 dark:bg-red-900 dark:bg-opacity-10",
        summaryClassName: `bg-red-100 text-red-500`,
      },
      {
        title: "Products W/ Good Rating",
        summary: (
          <React.Fragment>
            <div>{goodRating} Products</div>
            <div>(4 stars or above)</div>
          </React.Fragment>
        ),
        icon: <StarFill className="text-yellow-500 text-4xl" />,
        url: "/dashboard/good-rating",
        iconClassName: "bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-10",
        summaryClassName: `bg-green-100 text-green-500`,
      },
    ];

    return venderStats;
  };

  return (
    <Preloader>
      <Spin loading={state.loading}>
        {/* page title  */}
        <Row className="mb-6 px-4 mt-3">
          <Column className="w-full md:w-1/2">
            <p className="text-xl font-bold">Dashboard</p>
          </Column>
        </Row>

        {/* purchase stats */}
        <Row className="mb-6 px-4">
          <Column className="w-full mb-2">
            <Heading
              variant="h4"
              className="text-indigo-500 bg-indigo-100 text-center py-4 rounded-lg shadow-lg dark:shadow-indigo-300/10 dark:bg-gray-800"
            >
              Purchasing Stats
            </Heading>
          </Column>

          <div className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xxl:grid-cols-5">
            {purchaseStats.map((item, index) => (
              <PurchaseStatsItem key={index} {...item} />
            ))}
          </div>
        </Row>

        {/* product stats */}
        <Row className="mb-6 px-4">
          <Column className="w-full mb-2">
            <Heading
              variant="h4"
              className="text-teal-500 bg-teal-100 text-center py-4 rounded-lg shadow-lg dark:shadow-teal-300/10 dark:bg-gray-800"
            >
              Product Stats
            </Heading>
          </Column>

          <div className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5">
            {productStats.map((item, index) => (
              <PurchaseStatsItem key={index} {...item} />
            ))}
          </div>
        </Row>

        {/* rating stats */}
        {state.cat_ratings?.map((item, index) => (
          <Row key={index} className="mb-6 px-4">
            <Column className="w-full">
              <div className="flex flex-col justify-center items-center p-4 gap-4 bg-white rounded-t-lg dark:bg-gray-800">
                <Rating data={+item.category.avg_rating} size="large" />
                <h2>Average Rating</h2>
              </div>
            </Column>
            <Column className="w-full">
              <Heading
                variant="h4"
                className="text-green-500 bg-green-100 text-center rounded-b-lg py-4 shadow dark:shadow-indigo-300/10 dark:bg-gray-800"
              >
                {`${item.category.avg_rating} ${item.category.name} (${item.category.ratings} reviews)`}
              </Heading>
            </Column>
          </Row>
        ))}

        <Row className="mb-6 px-4">
          <div className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4">
            {getVendorStats().map((item, index) => (
              <VendorStatsItem key={index} {...item} />
            ))}
          </div>
        </Row>
      </Spin>
    </Preloader>
  );
}
