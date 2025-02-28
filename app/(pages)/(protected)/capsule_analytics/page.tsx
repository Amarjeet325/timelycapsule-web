/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Gift,
  FileText,
  Image,
  Video,
  PieChart,
  LineChart,
  Eye,
  Clock,
  Users,
  Share2,
  Download,
  Calendar,
  Globe2,
  Activity,
} from "lucide-react";

function CapsuleAnalytics() {
  const { id } = useParams<{ id: string }>();
  const [timeRange, setTimeRange] = useState("7days");
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for charts
  const viewsData = [12, 18, 29, 45, 32, 38, 42];
  const engagementData = [
    { name: "Views", value: 245, color: "bg-blue-500" },
    { name: "Shares", value: 68, color: "bg-green-500" },
    { name: "Downloads", value: 37, color: "bg-purple-500" },
    { name: "Comments", value: 24, color: "bg-yellow-500" },
  ];
  const recipientData = [
    { name: "Opened", value: 18, color: "bg-green-500" },
    { name: "Not Opened", value: 7, color: "bg-gray-300" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Capsule Analytics
          </h1>
          <p className="mt-2 text-gray-600">
            Track engagement and performance of your time capsule
          </p>
        </div>

        <div className="flex space-x-4">
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="alltime">All Time</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Export Report
          </button>
        </div>
      </div>

      {/* Capsule Info */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-6">
          <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <Calendar className="h-8 w-8 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Birthday Memories 2024</h2>
            <div className="mt-2 flex items-center space-x-4 text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Created on Mar 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Unlocks on Jun 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>25 recipients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "overview"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("engagement")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "engagement"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Engagement
        </button>
        <button
          onClick={() => setActiveTab("recipients")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "recipients"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Recipients
        </button>
        <button
          onClick={() => setActiveTab("content")}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "content"
              ? "border-b-2 border-indigo-500 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Content Performance
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Views</p>
                  <p className="text-2xl font-bold">245</p>
                  <p className="text-xs text-green-600">
                    +12% vs. previous period
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <Share2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Shares</p>
                  <p className="text-2xl font-bold">68</p>
                  <p className="text-xs text-green-600">
                    +8% vs. previous period
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Download className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Downloads</p>
                  <p className="text-2xl font-bold">37</p>
                  <p className="text-xs text-green-600">
                    +5% vs. previous period
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Recipient Opens</p>
                  <p className="text-2xl font-bold">18/25</p>
                  <p className="text-xs text-amber-600">72% open rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Views Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Views Over Time</h3>
              <div className="flex items-center space-x-2">
                <LineChart className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-500">Daily Views</span>
              </div>
            </div>
            <div className="h-64">
              <div className="flex h-full items-end space-x-2">
                {viewsData.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full bg-indigo-500 rounded-t"
                      style={{
                        height: `${(value / Math.max(...viewsData)) * 100}%`,
                      }}
                    ></div>
                    <span className="text-xs mt-1">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Engagement Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">
                  Engagement Distribution
                </h3>
                <PieChart className="h-5 w-5 text-gray-500" />
              </div>
              <div className="space-y-4">
                {engagementData.map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${item.color} mr-2`}
                    ></div>
                    <span className="flex-1">{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      {Math.round(
                        (item.value /
                          engagementData.reduce(
                            (acc, curr) => acc + curr.value,
                            0,
                          )) *
                          100,
                      )}
                      %
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recipient Status</h3>
                <PieChart className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex items-center justify-center h-48">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                      strokeDasharray="72, 100"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-3xl font-bold">72%</div>
                    <div className="text-xs text-gray-500">Open Rate</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="flex-1">Opened</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                  <span className="flex-1">Not Opened</span>
                  <span className="font-semibold">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engagement Tab */}
      {activeTab === "engagement" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Engagement Timeline</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Activity className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">John Doe viewed the capsule</p>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Viewed for 3 minutes and downloaded 2 photos
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="flex-1">Direct Link</span>
                  <span className="font-semibold">142</span>
                  <span className="text-gray-500 text-sm ml-2">58%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="flex-1">Email</span>
                  <span className="font-semibold">68</span>
                  <span className="text-gray-500 text-sm ml-2">28%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="flex-1">Social Media</span>
                  <span className="font-semibold">35</span>
                  <span className="text-gray-500 text-sm ml-2">14%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Device Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="flex-1">Mobile</span>
                  <span className="font-semibold">156</span>
                  <span className="text-gray-500 text-sm ml-2">64%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="flex-1">Desktop</span>
                  <span className="font-semibold">76</span>
                  <span className="text-gray-500 text-sm ml-2">31%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="flex-1">Tablet</span>
                  <span className="font-semibold">13</span>
                  <span className="text-gray-500 text-sm ml-2">5%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">
              Geographic Distribution
            </h3>
            <div className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500">
                <Globe2 className="h-16 w-16 mx-auto text-gray-300" />
                <p className="mt-2">Geographic map visualization</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">United States</p>
                <p className="font-semibold">124</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">United Kingdom</p>
                <p className="font-semibold">45</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Canada</p>
                <p className="font-semibold">32</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Australia</p>
                <p className="font-semibold">18</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recipients Tab */}
      {activeTab === "recipients" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Recipient Activity</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recipient
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      First Viewed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      View Count
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Downloads
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Shares
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5].map((recipient) => (
                    <tr key={recipient} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                              <Users className="h-5 w-5 text-indigo-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              John Doe
                            </div>
                            <div className="text-sm text-gray-500">
                              john.doe@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Opened
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Mar 18, 2024
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        8
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">
                Recipient Engagement
              </h3>
              <div className="space-y-4">
                {[
                  { name: "High Engagement", value: 8, color: "bg-green-500" },
                  { name: "Medium Engagement", value: 6, color: "bg-blue-500" },
                  { name: "Low Engagement", value: 4, color: "bg-yellow-500" },
                  { name: "No Engagement", value: 7, color: "bg-gray-300" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${item.color} mr-2`}
                    ></div>
                    <span className="flex-1">{item.name}</span>
                    <span className="font-semibold">{item.value}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      {Math.round((item.value / 25) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recipient Feedback</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-gray-500">2 days ago</div>
                  </div>
                  <p className="text-sm text-gray-600">
                    &quot;Loved the birthday memories! The photos brought back
                    so many great memories.&quot;
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-gray-500">3 days ago</div>
                  </div>
                  <p className="text-sm text-gray-600">
                    &quot;What a wonderful surprise! Thank you for putting this
                    together.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Performance Tab */}
      {activeTab === "content" && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Content Engagement</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Content
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg. Time Viewed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Downloads
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Engagement Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      name: "Birthday Photo 1",
                      type: "Image",
                      views: 215,
                      time: "45s",
                      downloads: 28,
                      rate: "87%",
                    },
                    {
                      name: "Birthday Photo 2",
                      type: "Image",
                      views: 198,
                      time: "38s",
                      downloads: 24,
                      rate: "81%",
                    },
                    {
                      name: "Birthday Video",
                      type: "Video",
                      views: 187,
                      time: "2m 15s",
                      downloads: 32,
                      rate: "76%",
                    },
                    {
                      name: "Birthday Message",
                      type: "Text",
                      views: 245,
                      time: "1m 20s",
                      downloads: 0,
                      rate: "100%",
                    },
                    {
                      name: "Gift Card",
                      type: "Crypto",
                      views: 156,
                      time: "55s",
                      downloads: 0,
                      rate: "64%",
                    },
                  ].map((content, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded bg-indigo-100 flex items-center justify-center">
                              {content.type === "Image" && (
                                <Image className="h-5 w-5 text-indigo-600" />
                              )}
                              {content.type === "Video" && (
                                <Video className="h-5 w-5 text-indigo-600" />
                              )}
                              {content.type === "Text" && (
                                <FileText className="h-5 w-5 text-indigo-600" />
                              )}
                              {content.type === "Crypto" && (
                                <Gift className="h-5 w-5 text-indigo-600" />
                              )}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {content.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {content.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {content.views}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {content.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {content.downloads}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-indigo-600 h-2.5 rounded-full"
                              style={{ width: content.rate }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {content.rate}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">
                Content Type Performance
              </h3>
              <div className="h-64">
                <div className="flex h-full items-end space-x-6">
                  {[
                    { type: "Images", value: 85, color: "bg-blue-500" },
                    { type: "Videos", value: 92, color: "bg-green-500" },
                    { type: "Text", value: 78, color: "bg-yellow-500" },
                    { type: "Crypto", value: 64, color: "bg-purple-500" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className={`w-full ${item.color} rounded-t`}
                        style={{ height: `${item.value}%` }}
                      ></div>
                      <span className="text-xs mt-2">{item.type}</span>
                      <span className="text-xs font-semibold">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <h4 className="font-medium text-blue-700">
                    Increase Video Content
                  </h4>
                  <p className="text-sm text-blue-600 mt-1">
                    Videos have the highest engagement rate. Consider adding
                    more video content to future capsules.
                  </p>
                </div>
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                  <h4 className="font-medium text-green-700">
                    Optimize Image Size
                  </h4>
                  <p className="text-sm text-green-600 mt-1">
                    Images with higher resolution have better engagement.
                    Consider using higher quality images.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                  <h4 className="font-medium text-yellow-700">
                    Improve Text Content
                  </h4>
                  <p className="text-sm text-yellow-600 mt-1">
                    Text content has lower engagement. Consider making messages
                    more concise and personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CapsuleAnalytics;
