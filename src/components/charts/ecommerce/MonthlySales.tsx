import { useState } from "react";
import { ThreeDots } from "react-bootstrap-icons";
import { Menu } from "@headlessui/react";
import { Row, Card } from "@/components/reactdash-ui";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MonthlySales(props) {
  // Chart color
  const text_primary_500 = "#6366F1";
  // Convert HEX TO RGBA color
  function hexToRGBA(hex, opacity) {
    if (hex != null) {
      return (
        "rgba(" +
        (hex = hex.replace("#", ""))
          .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
          .map(function (l) {
            return parseInt(hex.length % 2 ? l + l : l, 16);
          })
          .concat(isFinite(opacity) ? opacity : 1)
          .join(",") +
        ")"
      );
    }
  }

  // Chart data 1 (props.data1)
  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "# Visitors",
        data: [1170, 1321, 1835, 1834, 2183, 1504, 2175, 2521],
        backgroundColor: [hexToRGBA(text_primary_500, 0.6)],
        borderColor: [hexToRGBA(text_primary_500, 0.6)],
        borderWidth: 1,
      },
      {
        label: "# Sales",
        data: [670, 721, 835, 734, 683, 724, 875, 1021],
        backgroundColor: [text_primary_500],
        borderColor: [text_primary_500],
        borderWidth: 1,
      },
    ],
  };
  // Chart data 2 (props.data2)
  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "# Visitors",
        data: [1070, 1021, 1035, 1634, 1183, 1604, 2175, 2521],
        backgroundColor: [hexToRGBA(text_primary_500, 0.6)],
        borderColor: [hexToRGBA(text_primary_500, 0.6)],
        borderWidth: 1,
      },
      {
        label: "# Sales",
        data: [670, 721, 835, 734, 683, 724, 875, 1021],
        backgroundColor: [text_primary_500],
        borderColor: [text_primary_500],
        borderWidth: 1,
      },
    ],
  };
  // Chart option (props.options)
  const options1 = {
    animation: {
      y: {
        duration: 2000,
        from: 500,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          borderDash: [4, 4],
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  const [isData, setData] = useState(data1);
  const [isOptions, setOptions] = useState(options1);
  const [isActive, setActive] = useState(1);

  // change value
  const updateValue = () => {
    setData(data2);
    setActive(2);
    setOptions(options1);
  };
  // reset value
  const resetValue = () => {
    setData(data1);
    setActive(1);
    setOptions(options1);
  };
  // text info
  const text_dropdown = { one: "Last month", two: "This month" };

  return (
    <Card className="mb-6">
      <Row className="justify-between pb-6">
        <div className="flex flex-col">
          <h3 className="text-base font-bold">{props.title}</h3>
        </div>

        {/* dropdown filter  */}
        <Menu as="div" className="relative">
          <Menu.Button className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 focus:outline-none hover:outline-none">
            <ThreeDots className="w-6 h-6" />
          </Menu.Button>
          <Menu.Items
            as="div"
            className="min-w-12 origin-top-right absolute ltr:right-0 rtl:left-0 rounded rounded-t-non bg-white dark:bg-gray-800 z-10 border border-gray-200 dark:border-gray-700"
          >
            <button
              onClick={resetValue}
              className={`${
                isActive === 1 ? "bg-gray-100 dark:bg-gray-900 " : ""
              }w-full block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 dark:focus:bg-gray-900`}
            >
              {text_dropdown.two}
            </button>
            <button
              onClick={updateValue}
              className={`${
                isActive === 2 ? "bg-gray-100 dark:bg-gray-900 " : ""
              }w-full block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 dark:focus:bg-gray-900`}
            >
              {text_dropdown.one}
            </button>
          </Menu.Items>
        </Menu>
      </Row>

      <div className="relative">
        <Bar options={isOptions} data={isData} className="max-w-100" />
      </div>
    </Card>
  );
}
