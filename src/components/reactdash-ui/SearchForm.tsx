import { Search } from "react-bootstrap-icons";

type SearchFormProps = {
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function SearchForm(props: SearchFormProps) {
  const addClass = props.className ? props.className : "";

  return (
    <form
      className={`hidden sm:inline-block md:hidden lg:inline-block mx-5 ${addClass}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-wrap items-stretch w-full relative">
        <input
          type="text"
          className="flex-shrink flex-grow max-w-full leading-5 relative text-sm py-2 px-4 ltr:rounded-l rtl:rounded-r text-gray-800 bg-gray-100 overflow-x-auto focus:outline-none border border-gray-100 focus:border-gray-200 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
          placeholder="Search…"
          aria-label="Search"
          onChange={props.onChange}
        />
        <div className="flex -mr-px">
          <button
            className="flex items-center py-2 px-4 ltr:-ml-1 rtl:-mr-1 ltr:rounded-r rtl:rounded-l leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
            type="submit"
          >
            <Search />
          </button>
        </div>
      </div>
    </form>
  );
}
