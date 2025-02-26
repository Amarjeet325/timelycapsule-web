"use client";

import React, { useState } from "react";
import {
  Users,
  MessageSquare,
  Heart,
  Share2,
  Trophy,
  Calendar,
  Search,
} from "lucide-react";
import Image from "next/image";

function Community() {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="max-w-6xl mx-auto my-5 px-2 space-y-8">
      <div className="flex flex-col justify-between  md:items-center md:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Community</h1>
          <p className="mt-2 mb-2 text-gray-600 md:mb-0">
            Connect with other time capsule creators
          </p>
        </div>

        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search community..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
        <button
          onClick={() => setActiveTab("feed")}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md ${
            activeTab === "feed"
              ? "bg-indigo-500 text-white"
              : "hover:bg-gray-50"
          }`}
        >
          <MessageSquare className="h-5 w-5" />
          <span>Community Feed</span>
        </button>
        <button
          onClick={() => setActiveTab("challenges")}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md ${
            activeTab === "challenges"
              ? "bg-indigo-500 text-white"
              : "hover:bg-gray-50"
          }`}
        >
          <Trophy className="h-5 w-5" />
          <span>Challenges</span>
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md ${
            activeTab === "events"
              ? "bg-indigo-500 text-white"
              : "hover:bg-gray-50"
          }`}
        >
          <Calendar className="h-5 w-5" />
          <span>Events</span>
        </button>
      </div>

      {/* Feed Content */}
      {activeTab === "feed" && (
        <div className="space-y-6">
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start space-x-4">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User"
                  height={48}
                  width={48}
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-500">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="mt-3">
                    Just created a time capsule for my daughter&apos;s
                    graduation in 2025! Can&apos;t wait for her to see all the
                    messages from family and friends.
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                      <Heart className="h-5 w-5" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-500">
                      <MessageSquare className="h-5 w-5" />
                      <span>12</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Challenges Content */}
      {activeTab === "challenges" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((challenge) => (
            <div
              key={challenge}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <Trophy className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  2024 Time Capsule Challenge
                </h3>
                <p className="mt-2 text-gray-600">
                  Create a capsule capturing your goals and dreams for 2024.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      128 Participants
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Join Challenge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Events Content */}
      {activeTab === "events" && (
        <div className="space-y-6">
          {[1, 2, 3].map((event) => (
            <div key={event} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">15</span>
                  <span className="text-sm text-indigo-600">MAR</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">
                    Virtual Capsule Creation Workshop
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Learn how to create meaningful time capsules and connect
                    with fellow creators.
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        50 Attending
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      RSVP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Community;
