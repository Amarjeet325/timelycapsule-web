import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  TrendingUp,
  CreditCard,
  Wallet,
  History,
  Settings,
  LogOut,
} from "lucide-react";
import clsx from "clsx";
import Logo from "@/public/images/logo-timelycapsule.png";
import Image from "next/image";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: House },
  { name: "Capsules", href: "/capsules", icon: TrendingUp },
  { name: "Subscriptions", href: "/subscriptions", icon: CreditCard },
  { name: "My Wallets", href: "/wallets", icon: Wallet },
  { name: "History", href: "/history", icon: History },
];

const bottomNavItems = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[100%] hidden h-screen md:flex flex-col bg-white border-r border-gray-100">
      {/* Logo */}
      <div className="p-6 mb-4">
        <Link href="/" className="flex flex-col">
          <Image src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center px-4 py-3 rounded-md transition-colors ",
                isActive
                  ? "bg-[#48BB78CC] text-[#1B212D]"
                  : "text-[#929EAE] hover:bg-gray-100",
              )}
            >
              <item.icon
                className={clsx(
                  "mr-3 h-5 w-5",
                  isActive ? "text-[#1B212D]" : "text-gray-400",
                )}
              />
              <span
                className={clsx(
                  "font-semibold font-kumbhSans",
                  isActive ? "text-[#1B212D]" : "text-gray-400",
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-4 pb-6 mt-auto">
        {bottomNavItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-100 rounded-md transition-colors mb-2"
          >
            <item.icon className="mr-3 h-5 w-5 text-gray-400" />
            <span className="font-medium text-gray-400">{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
