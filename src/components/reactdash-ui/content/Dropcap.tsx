type DropcapProps = {
  children?: React.ReactNode;
};

export default function Dropcap(props: DropcapProps) {
  return (
    <span className="block ltr:float-left rtl:float-right text-6xl ltr:mr-3 rtl:ml-3 mb-3 text-center">
      {props.children}
    </span>
  );
}
