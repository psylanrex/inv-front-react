import { footerCopyright } from "@/utils/utils";
import { Link } from "react-router-dom";

export default function Footer() {
  // footer menu
  const menu = [
    { title: "Support", url: "#" },
    { title: "Help Center", url: "#" },
    { title: "Privacy", url: "#" },
    { title: "TOS", url: "#" },
  ];

  return (
    <footer className="bg-white p-6 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-800">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4">
          <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right">
            <ul className="ltr:pl-0 rtl:pr-0">
              {menu.map((list, index) => (
                <li key={index} className="inline-block ltr:mr-3 rtl:ml-3">
                  <Link className="hover:text-indigo-500" to={list.url}>
                    {list.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-right md:rtl:text-left">
            <p className="mb-0 mt-3 md:mt-0">{footerCopyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
