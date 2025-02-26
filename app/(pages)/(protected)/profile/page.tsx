"use client";
import Image from "next/image";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Image
            src="/img/img.jpg"
            alt="Profile"
            width={100}
            height={100}
            className=" rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Member since March 2024</p>
            <div className="flex gap-2 mt-1 justify-center text-sm sm:justify-start">
              <span className="text-gray-600">25 Capsules Created</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600">12 Public Contributions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947z"
                clipRule="evenodd"
              />
              <path d="M10 13a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            <h2 className="text-xl font-bold">Account Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
              />
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition duration-200">
              Update Profile
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="unlockNotif"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label
                htmlFor="unlockNotif"
                className="ml-2 block text-sm text-gray-700"
              >
                Capsule Unlock Notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="contributorAlerts"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                defaultChecked
              />
              <label
                htmlFor="contributorAlerts"
                className="ml-2 block text-sm text-gray-700"
              >
                New Contributor Alerts
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="marketingUpdates"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="marketingUpdates"
                className="ml-2 block text-sm text-gray-700"
              >
                Marketing Updates
              </label>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-bold">Security</h2>
          </div>

          <div className="space-y-3">
            <button className="w-full p-3 text-left border border-gray-300 rounded hover:bg-gray-50 transition duration-200">
              Change Password
            </button>
            <button className="w-full p-3 text-left border border-gray-300 rounded hover:bg-gray-50 transition duration-200">
              Two-Factor Authentication
            </button>
            <button className="w-full p-3 text-left border border-gray-300 rounded hover:bg-gray-50 transition duration-200">
              Active Sessions
            </button>
          </div>
        </div>

        {/* Wallet */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-bold">Wallet</h2>
          </div>

          <div className="mb-6 flex flex-col gap-2 bg-gray-50 p-4">
            <span className="text-sm font-medium text-gray-700">
              Connected Wallet
            </span>
            <span className="font-mono text-gray-600">0x1234...5678</span>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition duration-200">
            Manage Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
