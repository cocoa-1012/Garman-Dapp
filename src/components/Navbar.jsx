/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.svg";

const navigation = [
  { name: "MANIFESTO", href: "#manifesto", current: false },
  { name: "CLASSES", href: "#classes", current: false },
  { name: "SOULS PROTOCOL", href: "#souls-protocol", current: false },
  { name: "SPIRIT GUIDE", href: "#spirit-guide", current: false },
  { name: "TEAM", href: "#team", current: false },
];
const navigation2 = [
  { name: "THE TARNISHED", href: "#tarnished", current: false },
  { name: "MERCH", href: "#merch", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="fixed bg-gray-900/20 h-24 w-screen">
      {({ open }) => (
        <>
          <div className="relative flex flex-center items-center justify-between w-screen max-w-screen-2xl h-24 px-2 sm:px-6 lg:px-8 m-auto">
            <div className="flex-shrink-0 flex items-center">
              <img
                className=" lg:block h-16 w-auto"
                src={logo1}
                alt="Workflow"
              />
              <img
                className=" lg:block h-16 w-auto"
                src={logo2}
                alt="Workflow"
              />
            </div>
            <div className=" inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden sm:flex-1 sm:flex items-center justify-center sm:items-stretch sm:justify-end">
              <div className="flex space-x-0 items-center flex-end">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="tracking-widest px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                {navigation2.map((item) => (
                  <div className="relative flex items-center">
                    <a
                      key={item.name}
                      href={item.href}
                      className="relative tracking-widest px-3 py-2 text-sm font-medium text-black"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                    <p className="absolute top-[-8px] right-0 bg-[#c42f42] rounded-xl text-[7px] text-white py-[1px] px-2 mr-3 uppercase">
                      locked
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center bg-gray-600/[.06] shadow">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-400 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
