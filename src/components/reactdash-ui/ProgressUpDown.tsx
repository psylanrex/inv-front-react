import { ArrowUpShort, ArrowDownShort } from "react-bootstrap-icons";

type ProgressUpDownProps = {
  data: { new: number; old: number };
};

// Chart percent
export default function ProgressUpDown(props: ProgressUpDownProps) {
  // props
  const data = props.data;
  const new_data = data.new;
  const old_data = data.old;
  const totalDecimal = ((new_data - old_data) / new_data) * 100;
  const totalPercent = +totalDecimal.toFixed(1);

  return (
    <>
      {totalPercent > 1 ? (
        <p className="flex items-center text-sm text-green-500">
          <ArrowUpShort className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
          {totalPercent}%
        </p>
      ) : (
        <p className="flex items-center text-sm text-pink-500">
          <ArrowDownShort className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
          {totalPercent}%
        </p>
      )}
    </>
  );
}
