import React from "react";

type InputGroupProps = {
  children: React.ReactNode;
  label?: string;
  id?: string;
};

export default function InputGroup({ children, ...props }: InputGroupProps) {
  let subComponentList = Object.keys(InputGroup);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child: any) =>
      child?.type?.name === key ? child : null
    );
  });
  const margin_bottom = props.label ? "inline-block mb-1" : "mb-1";

  return (
    <div className="mb-4">
      <label htmlFor={props.id} className={`${margin_bottom}`}>
        {props.label}
      </label>
      <div
        id={props.id}
        className="flex flex-wrap items-stretch w-full relative mb-6"
      >
        {subComponents.map((component) => component)}
      </div>
    </div>
  );
}

type PrefixProps = {
  children: React.ReactNode;
};
const Prefix = (props: PrefixProps) => (
  <span className="flex items-center py-2 px-4 ltr:-mr-1 rtl:-ml-1 ltr:rounded-l rtl:rounded-r leading-5  bg-gray-100 border border-gray-300 dark:bg-gray-900 dark:border-gray-900">
    {props.children}
  </span>
);
InputGroup.Prefix = Prefix;

type BodyProps = {
  children: React.ReactNode;
};
const Body = (props: BodyProps) => (
  <div className="flex-shrink flex-grow max-w-full flex-1">
    {props.children}
  </div>
);
InputGroup.Body = Body;

type SuffixProps = {
  children: React.ReactNode;
};
const Suffix = (props: SuffixProps) => (
  <span className="flex items-center py-2 px-4 ltr:-ml-1 ltr:rounded-r rtl:-mr-1 rtl:rounded-l leading-5 bg-gray-100 border border-gray-300 dark:bg-gray-900 dark:border-gray-900">
    {props.children}
  </span>
);
InputGroup.Suffix = Suffix;
