import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Notification from "./Notification";
import UserAvatar from "./UserAvatar";

interface NavbarProps {
  currentRouteName: string;
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  currentRouteName,
  toggleMobileMenu,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-white">
      <div className="flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
        <h1 className="ml-4 md:ml-0 font-semibold text-2xl text-[#1B212D]">
          {currentRouteName}
        </h1>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 md:hidden">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-50 border-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 placeholder:text-gray-400"
                autoFocus
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 sm:gap-6">
        {/* Desktop Search */}
        <div className="hidden md:block relative">
          <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="pl-9 pr-4 py-2 rounded-lg bg-gray-50 border-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600 w-[280px] placeholder:text-gray-400"
          />
        </div>

        {/* Mobile Search Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Search className="h-5 w-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-4">
          <Notification count={1} />
          <div className="hidden sm:block h-8 w-[1px] bg-gray-200"></div>
          <UserAvatar name="Assad User1" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
