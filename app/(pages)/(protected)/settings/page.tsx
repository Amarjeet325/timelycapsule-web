// function classNames(...classes: string[]): string {
//   return classes.filter(Boolean).join(" ");
// }

"use client";

import { useState } from "react";
import {
  Settings,
  Bell,
  Shield,
  Wallet,
  CreditCard,
  EyeOff,
  Moon,
  Sun,
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
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

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
            {/* General Settings */}
            {activeTab === "general" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    General Settings
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        defaultValue="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Theme
                      </label>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setTheme("light")}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-md border ${
                            theme === "light"
                              ? "border-indigo-500 bg-indigo-50"
                              : "border-gray-300"
                          }`}
                        >
                          <Sun className="h-5 w-5" />
                          <span>Light</span>
                        </button>
                        <button
                          onClick={() => setTheme("dark")}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-md border ${
                            theme === "dark"
                              ? "border-indigo-500 bg-indigo-50"
                              : "border-gray-300"
                          }`}
                        >
                          <Moon className="h-5 w-5" />
                          <span>Dark</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
