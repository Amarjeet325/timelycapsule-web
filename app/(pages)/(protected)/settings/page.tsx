"use client";

import { useState } from "react";

import {
  Settings,
  Bell,
  Shield,
  Wallet,
  CreditCard,
  Key,
  Globe2,
  Mail,
  Moon,
  Sun,
  EyeOff,
  Download,
  Trash2,
  UserX,
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

const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [dataSharing, setDataSharing] = useState({
    analytics: true,
    marketing: false,
    thirdParty: false,
    blockchain: true,
  });
  // New privacy-related state
  const [autoDeleteCapsules, setAutoDeleteCapsules] = useState(true);
  const [anonContracts, setAnonContracts] = useState(false);
  const [accountVisibility, setAccountVisibility] = useState("public");
  const [activityTracking, setActivityTracking] = useState(true);
  const [dataRetention, setDataRetention] = useState("1year");

  const handleDataSharingChange = (key: keyof typeof dataSharing) => {
    setDataSharing((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 relative pb-10 h-auto ">
      <div className="sm:flex justify-between items-center w-full lg:p-8 p-3">
        <h1 className="text-3xl font-bold text-gray-900">Account & Settings</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Save Changes
        </button>
      </div>

      <div className="mx-auto max-w-7xl py-4 lg:grid lg:grid-cols-12 md:gap-x-16 lg:px-8 h-auto">
        <aside className="  bg-white lg:rounded-xl mb-10 lg:mb-none overflow-x-auto col-span-3 shadow-md p-4 max-h-[450px] h-full lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-10">
          <nav className="space-y-2 flex-none">
            <div className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    key={item.id}
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
          <div className="lg:mx-0 lg:max-w-none h-full bg-white rounded-xl shadow-md p-6 ">
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

            {/* Notifications */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">
                  Notification Preferences
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-600" />
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Receive updates about your capsules
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Globe2 className="h-5 w-5 text-gray-600" />
                      <div>
                        <h3 className="font-medium">Browser Notifications</h3>
                        <p className="text-sm text-gray-500">
                          Get instant alerts in your browser
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">
                  Security Settings
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Key className="h-5 w-5 text-gray-600" />
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Add an extra layer of security to your account by enabling
                      two-factor authentication.
                    </p>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <span className="font-medium">Change Password</span>
                      <Shield className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <span className="font-medium">Active Sessions</span>
                      <Shield className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy - New Tab */}
            {activeTab === "privacy" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>

                {/* Data Sharing Section */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium mb-3">Data Sharing</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Control how your data is used across our platform and with
                    third parties.
                  </p>
                  <div className="space-y-4">
                    {/* Existing data sharing controls */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Blockchain Analytics</h4>
                        <p className="text-sm text-gray-500">
                          Share anonymized wallet activity for chain analysis
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={dataSharing.blockchain}
                          onChange={() => handleDataSharingChange("blockchain")}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* New Capsule Privacy Section */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium mb-3">Capsule Privacy</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">
                          Auto-Delete Unlocked Capsules
                        </h4>
                        <p className="text-sm text-gray-500">
                          Automatically remove opened capsules after 24 hours
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={autoDeleteCapsules}
                          onChange={() =>
                            setAutoDeleteCapsules(!autoDeleteCapsules)
                          }
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">
                          Smart Contract Anonymity
                        </h4>
                        <p className="text-sm text-gray-500">
                          Use privacy-preserving smart contracts for capsules
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={anonContracts}
                          onChange={() => setAnonContracts(!anonContracts)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                  <h4 className="font-medium text-yellow-800 mb-2">
                    Blockchain Notice
                  </h4>
                  <p className="text-yellow-700">
                    Crypto transactions and smart contract interactions are
                    immutable and publicly visible on the blockchain. Deleting
                    account data will not remove blockchain records.
                  </p>
                </div>
                {/* Account Visibility Section */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium mb-3">Account Visibility</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Control who can see your account and activity within the
                    platform.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="visibility-public"
                        name="visibility"
                        className="h-4 w-4 text-indigo-600"
                        checked={accountVisibility === "public"}
                        onChange={() => setAccountVisibility("public")}
                      />
                      <label
                        htmlFor="visibility-public"
                        className="text-sm text-gray-700"
                      >
                        Public{" "}
                        <span className="text-xs text-gray-500">
                          (Everyone can see your profile and activity)
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="visibility-connections"
                        name="visibility"
                        className="h-4 w-4 text-indigo-600"
                        checked={accountVisibility === "connections"}
                        onChange={() => setAccountVisibility("connections")}
                      />
                      <label
                        htmlFor="visibility-connections"
                        className="text-sm text-gray-700"
                      >
                        Connections Only{" "}
                        <span className="text-xs text-gray-500">
                          (Only your connections can see your profile and
                          activity)
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="visibility-private"
                        name="visibility"
                        className="h-4 w-4 text-indigo-600"
                        checked={accountVisibility === "private"}
                        onChange={() => setAccountVisibility("private")}
                      />
                      <label
                        htmlFor="visibility-private"
                        className="text-sm text-gray-700"
                      >
                        Private{" "}
                        <span className="text-xs text-gray-500">
                          (Your profile is hidden from other users)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Activity Tracking */}
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Activity Tracking</h3>
                      <p className="text-sm text-gray-500">
                        Control how your activities are tracked and recorded
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={activityTracking}
                        onChange={() => setActivityTracking(!activityTracking)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                  <div
                    className={`space-y-4 ${
                      !activityTracking ? "opacity-50" : ""
                    }`}
                  >
                    <h4 className="text-sm font-medium text-gray-700">
                      Data Retention Period
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setDataRetention("30days")}
                        disabled={!activityTracking}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          dataRetention === "30days"
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-300 text-gray-600"
                        }`}
                      >
                        30 Days
                      </button>
                      <button
                        onClick={() => setDataRetention("90days")}
                        disabled={!activityTracking}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          dataRetention === "90days"
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-300 text-gray-600"
                        }`}
                      >
                        90 Days
                      </button>
                      <button
                        onClick={() => setDataRetention("1year")}
                        disabled={!activityTracking}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          dataRetention === "1year"
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-300 text-gray-600"
                        }`}
                      >
                        1 Year
                      </button>
                      <button
                        onClick={() => setDataRetention("forever")}
                        disabled={!activityTracking}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          dataRetention === "forever"
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-300 text-gray-600"
                        }`}
                      >
                        Forever
                      </button>
                    </div>
                  </div>
                </div>

                {/* Data Management Section */}
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex flex-col text-left ">
                      Fi
                      <span className="font-medium">Download Your Data</span>
                      <p className="text-xs text-gray-500">
                        Export a copy of your personal data
                      </p>
                    </div>
                    <Download className="h-5 w-5 text-gray-600" />
                  </button>

                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex flex-col text-left ">
                      <span className="font-medium text-red-600">
                        Delete Your Data
                      </span>
                      <p className="text-xs text-gray-500">
                        Remove all your personal data from our servers
                      </p>
                    </div>
                    <Trash2 className="h-5 w-5 text-red-600" />
                  </button>

                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex flex-col text-left ">
                      <span className="font-medium text-red-600">
                        Delete Account
                      </span>
                      <p className="text-xs text-gray-500">
                        Permanently close your account
                      </p>
                    </div>
                    <UserX className="h-5 w-5 text-red-600" />
                  </button>
                </div>
              </div>
            )}

            {/* Billing */}
            {activeTab === "billing" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">
                  Billing & Subscription
                </h2>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Current Plan</h3>
                      <p className="text-sm text-gray-500">
                        Pro Plan - $9.99/month
                      </p>
                    </div>
                    <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50">
                      Upgrade Plan
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="flex-1">Next billing date</span>
                      <span>April 1, 2024</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="flex-1">Payment method</span>
                      <span>•••• 4242</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <span className="font-medium">Billing History</span>
                    <CreditCard className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <span className="font-medium">Update Payment Method</span>
                    <CreditCard className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            )}

            {/* Crypto Wallet */}
            {activeTab === "wallet" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">
                  Crypto Wallet Settings
                </h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Connected Wallet</h3>
                      <p className="text-sm font-mono mt-1">0x1234...5678</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      Change Wallet
                    </button>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Network</span>
                      <span>Ethereum Mainnet</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Status</span>
                      <span className="text-green-600">Connected</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-2">Transaction Settings</h3>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600"
                          defaultChecked
                        />
                        <span>Require password for all transactions</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600"
                          defaultChecked
                        />
                        <span>Email notifications for transactions</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
export default AccountSettingsPage;
