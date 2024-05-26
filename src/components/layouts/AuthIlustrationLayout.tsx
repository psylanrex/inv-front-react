import NavbarLogin from "@/components/navbar/NavbarLogin";
import Footer from "@/components/footer/Footer";
import { Column, Row } from "@/components/reactdash-ui";
import { Check2Square } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

type AuthIlustrationLayoutProps = {
  children: React.ReactNode;
};

export default function AuthIlustrationLayout(
  props: AuthIlustrationLayoutProps
) {
  const location = useLocation();

  const cover = {
    img: "/img/ilustration/presentation.png",
    alt: "welcome",
    title: "An invitation to sell your inventory",
    description: "Over 10,000+ Vendors",
    details: [
      { title: "Free Account" },
      { title: "Easy to use Interface" },
      { title: "Sell Your Inventory at your price" },
      { title: "Notified instantly when invoice is paid" },
    ],
  };

  const isRegister = location.pathname === "/auth/register";
  const widthColumn = isRegister ? "lg:w-full" : "lg:w-1/2";
  return (
    <>
      <NavbarLogin />
      <main>
        <div className="relative py-12 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
          <div className="container mx-auto px-4 xl:max-w-6xl">
            <Row className="-mx-4">
              <Column className={`px-4 w-full ${widthColumn}`}>
                <div className="max-w-full w-full px-2 sm:px-12 lg:pr-20 mb-12 lg:mb-0">
                  <div className="relative">
                    <div className="p-6 sm:py-8 sm:px-12 rounded-lg bg-white dark:bg-gray-800 shadow-xl">
                      {props.children}
                    </div>
                  </div>
                </div>
              </Column>
              <Column
                hidden={isRegister}
                className={`px-4 w-full ${widthColumn}`}
              >
                <div className="mt-6 lg:mt-0">
                  <img
                    src={cover.img}
                    alt={cover.alt}
                    className="max-w-full h-auto mx-auto"
                  />
                  <div className="flex justify-center">
                    <div className="px-4 mt-4 w-[420px]">
                      <h2 className="text-2xl mb-2">{cover.title}</h2>
                      <ul>
                        {cover.details.map((detail, index) => (
                          <li key={index}>
                            <h3 className="flex gap-2 items-center ml-4">
                              <Check2Square color="#52c41a" /> {detail.title}
                            </h3>
                          </li>
                        ))}
                      </ul>
                      <h1 className="text-2xl">{cover.description}</h1>
                    </div>
                  </div>
                </div>
              </Column>
            </Row>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
