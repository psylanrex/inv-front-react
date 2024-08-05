import { CheckLg } from "react-bootstrap-icons";

type StepsProps = {
  current: number;
  items: { title: string }[];
};

const Steps: React.FC<StepsProps> = (props) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center sm:text-base">
      {props.items.map((item, index) => {
        const isCurrent = index === props.current;
        const activeClass = isCurrent ? "bg-blue-500 text-white" : "";
        const isBefore = index < props.current;
        const beforeClass = isBefore ? "bg-blue-100 text-blue-600" : "";
        const isAfter = index > props.current;
        const afterClass = isAfter ? "bg-gray-200" : "";
        const titleAfterClass = isAfter
          ? "text-gray-400 whitespace-nowrap"
          : "text-black whitespace-nowrap";
        const isItemFirst = index === 0;
        const isItemLast = index === props.items.length - 1;
        const lineAfterClass = isBefore
          ? "after:border-blue-500"
          : "after:border-gray-300";

        if (isItemFirst) {
          return (
            <li
              key={index}
              className={`flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b ${lineAfterClass} after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
            >
              <div className="flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2">
                <div
                  className={`w-[32px] h-[32px] flex items-center justify-center ${activeClass} ${beforeClass} ${afterClass} ${titleAfterClass} rounded-full`}
                >
                  {isBefore ? <CheckLg /> : <span>{index + 1}</span>}
                </div>
                <div className={titleAfterClass}>{item.title}</div>
              </div>
            </li>
          );
        }

        if (isItemLast) {
          return (
            <li
              key={index}
              className={`flex items-center gap-2 ${lineAfterClass}`}
            >
              <div
                className={`w-[32px] h-[32px] flex items-center justify-center ${activeClass} ${beforeClass} ${afterClass} ${titleAfterClass} rounded-full`}
              >
                {isBefore ? <CheckLg /> : <span>{index + 1}</span>}
              </div>
              <span className={titleAfterClass}>{item.title}</span>
            </li>
          );
        }

        return (
          <li
            key={index}
            className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b ${lineAfterClass} after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
          >
            <span className="flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2">
              <div
                className={`w-[32px] h-[32px] flex items-center justify-center ${activeClass} ${beforeClass} ${afterClass} ${titleAfterClass} rounded-full`}
              >
                {isBefore ? <CheckLg /> : <span>{index + 1}</span>}
              </div>
              <span className={titleAfterClass}>{item.title}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
