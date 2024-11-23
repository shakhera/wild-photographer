import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  UserIcon,
  SearchIcon,
  SunMoonIcon,
  Moon,
  Sun,
  Phone,
  AlignLeft,
  ArrowDownCircle,
  Lock,
  RefreshCw,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MdOutlineShoppingCart } from "react-icons/md";

const mainNavMenuItems = [
  { title: "Home", href: "/" },
  {
    title: "Shop",
    href: "#",
    subMenu: [
      { title: "Shop", href: "/shop" },
      { title: "All Products", href: "#" },
      { title: "Categories", href: "#" },
    ],
  },
  {
    title: "Pages",
    href: "#",
    subMenu: [
      { title: "About Us", href: "#" },
      { title: "FAQ", href: "#" },
    ],
  },
  { title: "Blog", href: "#" },
  { title: "Contact", href: "#" },
];
const authMenuItems = [
  { title: "Sign In", href: "/signin" },
  { title: "Sign Up", href: "/signup" },
];

const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > navbarHeight) {
      // Change the threshold as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    setNavbarHeight(document.getElementById("navbar")?.clientHeight || 0); // Set the navbar height
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="">
      <motion.header
        id="navbar"
        className={`p-4 text-white bg-neutral-700 shadow-md transition-all duration-300 z-[9999999] lg:px-2 ${
          isSticky ? "sticky top-0 z-50" : ""
        }`}
      >
        <div
          className={`flex justify-between items-center w-full max-w-7xl mx-auto  `}
        >
          {/* LOGO  */}
          <div className="text-xl font-bold">LOGO</div>

          {/* nav menus */}
          <nav className="hidden md:flex space-x-4">
            {mainNavMenuItems?.map((item, i) => (
              <div
                className="relative"
                key={i}
                onMouseEnter={() => setActiveMenuIndex(i)}
                onMouseLeave={() => setActiveMenuIndex(null)}
              >
                <Link
                  to={item.href}
                  className="hover:text-red-500 px-2 rounded-md py-1 text-white flex items-center text-base font-bold uppercase"
                >
                  {item.title}
                  {item.subMenu && <ChevronDown size={14} />}
                </Link>
                <AnimatePresence>
                  {activeMenuIndex === i && item.subMenu && (
                    <motion.div
                      className="absolute left-0 w-32 bg-white shadow-lg rounded z-[9999999] origin-top"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* toggle for mobile menu*/}
          <Button
            className="lg:hidden relative z-[999999] text-black"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            variant="outline"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </Button>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Drawer Menu */}
      <motion.div
        className={`fixed top-0 left-0 h-full w-full bg-white dark:bg-gray-900 z-50 shadow-lg flex flex-col items-center p-12 lg:hidden `}
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <>
          <Accordion type="single" collapsible>
            {mainNavMenuItems.map((item, i) =>
              item.subMenu ? (
                <AccordionItem key={i} value={item.title}>
                  <AccordionTrigger className="py-2 text-lg font-medium w-full text-left flex justify-between">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <ul>
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.href}
                            className="block py-2  text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={i}
                  to={item.href}
                  className="block py-2  text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {item.title}
                </Link>
              )
            )}
          </Accordion>

          {/*  User Links */}
          <div className="flex flex-col items-center mt-8 space-y-4">
            <div className="flex space-x-4 items-center">
              {authMenuItems.map((item, i) =>
                item.href === "/signin" ? (
                  <Link
                    to="/signin"
                    className="flex items-center space-x-2 px-4 py-2"
                    key={i}
                  >
                    <UserIcon size={24} />
                    <div className="flex flex-col">
                      <span className="text-sm">Hello</span>
                      <span className="text-sm font-bold">Login</span>
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={i}
                    to="/register"
                    className="flex items-center space-x-2 px-4 py-2 h-10 bg-black text-white rounded-sm"
                  >
                    Signup
                  </Link>
                )
              )}
            </div>
          </div>
        </>
      </motion.div>
    </section>
  );
};

export default MainNav;
