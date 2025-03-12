import { useEffect, useState } from "react";
import { handleScrollToContacts } from "../helpers/handleScroll";

export default function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [headerClass, setHeaderClass] = useState("");
  const [navActionClass, setNavActionClass] = useState(
    "bg-white text-gray-800"
  );
  const [navContentClass, setNavContentClass] = useState(
    "bg-white lg:bg-transparent"
  );
  const [toggleClass, setToggleClass] = useState("text-white");
  const [menuVisible, setMenuVisible] = useState(false);

  console.log(scrollPos);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPos(currentScrollPos);

      if (currentScrollPos > 10) {
        setHeaderClass("bg-white shadow");
        setNavActionClass("gradient text-white");
        setNavContentClass("bg-white");
        setToggleClass("text-gray-800");
      } else {
        setHeaderClass("");
        setNavActionClass("bg-white text-gray-800");
        setNavContentClass("bg-white lg:bg-transparent");
        setToggleClass("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav
      id="header"
      className={`fixed w-full z-30 top-0 text-white ${headerClass}`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className={`toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl ${toggleClass}`}
            href="/land-1/"
          >
            <svg
              className="h-8 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.005 512.005"
            >
              <rect
                fill="#2a2a31"
                x="16.539"
                y="425.626"
                width="479.767"
                height="50.502"
                transform="matrix(1,0,0,1,0,0)"
              />
              <path
                className="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>
            LAND
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-[#2242aa] hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={handleMenuToggle}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20 ${
            menuVisible ? "" : "hidden"
          } ${navContentClass}`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center ">
            <li className="mr-3">
              <a
                className={`inline-block py-2 px-4 text-black font-bold no-underline`}
                href="#hero"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#goals"
              >
                Goals
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#features"
              >
                Features
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#pricing"
              >
                Pricing
              </a>
            </li>
          </ul>
          <button
            className={`mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${navActionClass}`}
            onClick={handleScrollToContacts}
          >
            Contacts
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
