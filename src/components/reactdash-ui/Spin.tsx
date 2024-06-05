import Spinner from "@/components/reactdash-ui/Spinner";

type SpinProps = { children?: React.ReactNode; loading: boolean };

export default function Spin(props: SpinProps) {
  if (!props.loading) return props.children;
  return (
    <div>
      <div className="absolute h-full w-full flex flex-col justify-center items-center">
        <Spinner color="primary" />
        Loading...
      </div>
      <div className="opacity-40">{props.children}</div>
    </div>
  );
}
