type CurrencyProps = {
  data: number;
};

export default function Currency(props: CurrencyProps) {
  const number = props.data;

  return (
    <>
      {number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })}
    </>
  );
}
