import React, { useState } from "react";
import {
  Trash2,
  RefreshCw,
  Archive,
  Clock,
  Search,
  AlertTriangle,
} from "lucide-react";

function DeletedCapsules() {
  const [selectedCapsules, setSelectedCapsules] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const capsules = [
    {
      id: "1",
      title: "Birthday Memories 2023",
      deletedDate: "2024-02-15",
      expiryDate: "2024-05-15",
      status: "deleted",
      type: "image",
      size: "12 MB",
    },
    {
      id: "2",
      title: "Anniversary Collection",
      deletedDate: "2024-01-20",
      expiryDate: "2024-04-20",
      status: "expired",
      type: "video",
      size: "45 MB",
    },
    {
      id: "3",
      title: "Graduation Wishes",
      deletedDate: "2024-03-05",
      expiryDate: "2024-06-05",
      status: "deleted",
      type: "text",
      size: "2 MB",
    },
    {
      id: "4",
      title: "Holiday Greetings",
      deletedDate: "2023-12-30",
      expiryDate: "2024-03-30",
      status: "expired",
      type: "image",
      size: "8 MB",
    },
    {
      id: "5",
      title: "Wedding Memories",
      deletedDate: "2024-02-28",
      expiryDate: "2024-05-28",
      status: "deleted",
      type: "video",
      size: "120 MB",
    },
  ];

  const filteredCapsules = capsules.filter(
    (capsule) =>
      (filterStatus === "all" || capsule.status === filterStatus) &&
      (searchQuery === "" ||
        capsule.title.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const toggleSelectCapsule = (id: string) => {
    if (selectedCapsules.includes(id)) {
      setSelectedCapsules(
        selectedCapsules.filter((capsuleId) => capsuleId !== id),
      );
    } else {
      setSelectedCapsules([...selectedCapsules, id]);
    }
  };

  const selectAllCapsules = () => {
    if (selectedCapsules.length === filteredCapsules.length) {
      setSelectedCapsules([]);
    } else {
      setSelectedCapsules(filteredCapsules.map((capsule) => capsule.id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Deleted & Expired Capsules
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your deleted and expired time capsules
          </p>
        </div>

        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search capsules..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="deleted">Deleted</option>
            <option value="expired">Expired</option>
          </select>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md">
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-amber-800">
              Important Notice
            </h3>
            <div className="mt-1 text-sm text-amber-700">
              <p>
                Deleted and expired capsules are permanently removed after 30
                days. Restore important capsules before they are gone forever.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-3 rounded-full">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Deleted Capsules</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Expired Capsules</p>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <Archive className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Storage Recovered</p>
              <p className="text-2xl font-bold">187 MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 rounded"
                    checked={
                      selectedCapsules.length === filteredCapsules.length &&
                      filteredCapsules.length > 0
                    }
                    onChange={selectAllCapsules}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capsule
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deleted Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permanent Deletion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCapsules.map((capsule) => (
                <tr key={capsule.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 rounded"
                      checked={selectedCapsules.includes(capsule.id)}
                      onChange={() => toggleSelectCapsule(capsule.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          {capsule.status === "deleted" ? (
                            <Trash2 className="h-5 w-5 text-indigo-600" />
                          ) : (
                            <Clock className="h-5 w-5 text-amber-600" />
                          )}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {capsule.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {capsule.type} capsule
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(capsule.deletedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(capsule.expiryDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        capsule.status === "deleted"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {capsule.status === "deleted" ? "Deleted" : "Expired"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {capsule.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <RefreshCw className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">
            {selectedCapsules.length} capsules selected
          </span>
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedCapsules.length === 0}
          >
            Restore Selected
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedCapsules.length === 0}
          >
            Delete Permanently
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletedCapsules;
