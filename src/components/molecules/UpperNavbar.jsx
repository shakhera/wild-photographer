import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
  ChevronDown,
  ChevronUp,
  Gift,
  Lock,
  Monitor,
  Moon,
  Phone,
  Sun,
  SunMoonIcon,
  User,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/provider/ThemeProvider/ThemeProvider";
import { useMediaQuery } from "react-responsive";
import { AuthContext } from "@/provider/AuthProvider/AuthProvider";

/* -------------------------------------------------------------------------- */
/*                            upper navbr component                            */
/* -------------------------------------------------------------------------- */

const UpperNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("wild-photographer-access-token");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <motion.header className=" h-[40px] w-full text-white bg-neutral-700 border-b border-[#495057] lg:px-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" flex items-center space-x-1">
          <Phone size={15} />
          <p className="text-sm font-normal">
            <span className="hidden md:block"> Hotline: </span>
            <span className="hover:text-red-500 cursor-pointer">
              (+84) 589 242 641
            </span>
          </p>
        </div>

        <div className="flex justify-between items-center gap-2">
          {/* auth  */}
          {user ? (
            <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 transition-colors duration-300 hover:bg-transparent hover:text-red-500 font-normal text-sm"
                >
                  <User size={16} className="mr-1" /> My Account
                  {isDropdownOpen ? (
                    <ChevronUp size={14} className="" />
                  ) : (
                    <ChevronDown size={14} className="" />
                  )}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button onClick={handleLogOut}>Logout</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              {/* login */}
              <div className=" flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Lock size={15} />
                  <Link to="/auth/signin" className="flex items-center ">
                    <span className="text-sm font-normal hover:text-red-500">
                      Login
                    </span>
                  </Link>
                  <span>or</span>
                  <Link to="/auth/signup" className="flex items-center ">
                    <span className="text-sm font-normal hover:text-red-500">
                      Register
                    </span>
                  </Link>
                </div>

                {/* <span className="h-3 border-l border-gray-400"></span> */}
              </div>
            </>
          )}

          <span className="h-3 border-l border-gray-400"></span>

          {/* toggle for dark/light mode */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="outline-none text-black hover:text-red-700 rounded-none shadow-current hover:shadow-none dark:text-white"
              >
                {theme === "light" ? (
                  <SunMoonIcon className="w-6 h-6" />
                ) : theme === "dark" ? (
                  <Moon className="w-6 h-6" />
                ) : (
                  <Monitor className="w-6 h-6" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[9999999]">
              <DropdownMenuItem onClick={() => toggleTheme("light")}>
                <Sun className="w-4 h-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleTheme("dark")}>
                <Moon className="w-4 h-4 mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleTheme("system")}>
                <Monitor className="w-4 h-4 mr-2" />
                Syatem
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};

export default UpperNavbar;
