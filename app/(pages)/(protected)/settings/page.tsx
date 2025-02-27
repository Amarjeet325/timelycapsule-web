"use client";

import { useState } from "react";
import {
  Settings,
  Bell,
  Shield,
  Wallet,
  CreditCard,
  EyeOff,
} from "lucide-react";

const navItems = [
  { id: "general", label: "General", icon: Settings },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "privacy", label: "Privacy", icon: EyeOff },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "wallet", label: "Crypto Wallet", icon: Wallet },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="max-w-6xl mx-auto mt-8 relative pb-10">
      <div className="sm:flex justify-between items-center w-full lg:p-8 p-3">
        <h1 className="text-3xl font-bold text-gray-900">Account & Settings</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Save Changes
        </button>
      </div>

      <div className="mx-auto max-w-7xl py-4 lg:grid lg:grid-cols-12 md:gap-x-16 lg:px-8 h-auto">
        <aside className="bg-white lg:rounded-xl mb-10 lg:mb-none overflow-x-auto col-span-3 shadow-md p-4 max-h-[450px] h-full lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-10">
          <nav className="space-y-2 flex-none">
            <div className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={classNames(
                      "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left",
                      activeTab === item.id
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm/6 font-semibold",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                </div>
              ))}
            </div>
          </nav>
        </aside>

        <main className="px-4 sm:px-6 lg:flex-auto lg:px-0 col-span-9 h-auto">
          <div className="lg:mx-0 lg:max-w-none h-full bg-white rounded-xl shadow-md p-6">
            {/* Tab content will go here */}
            {activeTab === "general" && <div>General Settings Content</div>}
            {activeTab === "notifications" && <div>Notifications Content</div>}
            {activeTab === "security" && <div>Security Content</div>}
            {activeTab === "privacy" && <div>Privacy Content</div>}
            {activeTab === "billing" && <div>Billing Content</div>}
            {activeTab === "wallet" && <div>Wallet Content</div>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
