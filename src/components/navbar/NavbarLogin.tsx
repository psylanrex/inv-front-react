import { Link } from "react-router-dom";
import Logo from "@/components/navbar/Logo";
import { loginLink, registerLink } from "@/utils/utils";

export default function NavbarLogin() {
  const menu = [
    { title: "Login", url: loginLink },
    { title: "Register", url: registerLink },
  ];

  return (
    <header className="border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-800">
      <div className="container mx-auto xl:max-w-6xl ">
        <nav
          className="flex flex-row flex-nowrap items-center justify-between mt-0 py-4 px-6"
          id="desktop-menu"
        >
          <Logo />

          <ul className="flex ltr:ml-auto rtl:mr-auto mt-2">
            {menu.map((list, index) => (
              <li key={index} className="relative">
                <Link
                  className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
                  to={list.url}
                >
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
