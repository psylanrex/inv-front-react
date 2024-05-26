type PercentProps = {
  data: number;
};

export default function Percent(props: PercentProps) {
  const number = props.data;

  return <>{number.toFixed(0) + "%"}</>;
}
