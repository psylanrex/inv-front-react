import React from "react";

type InputGroupProps = {
  children: React.ReactNode;
  label?: string;
  id?: string;
  required?: boolean;
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
      {props.label && (
        <label htmlFor={props.id} className={`${margin_bottom}`}>
          {props.label}
          {props.required && <span className="text-red-500"> *</span>}
        </label>
      )}
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
  className?: string;
};
const Prefix = (props: PrefixProps) => {
  const addClass = props.className ? props.className : "";
  return (
    <span
      className={`flex items-center py-2 px-4 ltr:-mr-1 rtl:-ml-1 ltr:rounded-l rtl:rounded-r leading-5  bg-gray-100 border border-gray-300 dark:bg-gray-900 dark:border-gray-900 ${addClass}`}
    >
      {props.children}
    </span>
  );
};
InputGroup.Prefix = Prefix;

type BodyProps = {
  children: React.ReactNode;
  className?: string;
};
const Body = (props: BodyProps) => {
  const addClass = props.className ? props.className : "";
  return (
    <div className={`flex-shrink flex-grow max-w-full flex-1 ${addClass}`}>
      {props.children}
    </div>
  );
};
InputGroup.Body = Body;

type SuffixProps = {
  children: React.ReactNode;
  className?: string;
};
const Suffix = (props: SuffixProps) => {
  const addClass = props.className ? props.className : "";
  return (
    <span
      className={`flex items-center py-2 px-4 ltr:-ml-1 ltr:rounded-r rtl:-mr-1 rtl:rounded-l leading-5 bg-gray-100 border border-gray-300 dark:bg-gray-900 dark:border-gray-900 ${addClass}`}
    >
      {props.children}
    </span>
  );
};
InputGroup.Suffix = Suffix;
