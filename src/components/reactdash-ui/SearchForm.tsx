import { Search } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

type SearchFormProps = {
  className?: string;
  onSearch?: (keyword: string) => void;
};

type FormData = {
  keyword: string;
};

export default function SearchForm(props: SearchFormProps) {
  const { register, handleSubmit } = useForm<FormData>();
  const addClass = props.className ? props.className : "";

  const onSubmit = (data: FormData) => {
    if (props.onSearch) props.onSearch(data.keyword);
  };

  return (
    <form
      className={`hidden sm:inline-block md:hidden lg:inline-block mx-5 ${addClass}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap items-stretch w-full relative">
        <input
          type="text"
          className="flex-shrink flex-grow max-w-full leading-5 relative text-sm py-2 px-4 ltr:rounded-l rtl:rounded-r text-gray-800 bg-gray-100 overflow-x-auto focus:outline-none border border-gray-100 focus:border-gray-200 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
          placeholder="Search…"
          aria-label="Search"
          {...register("keyword")}
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
