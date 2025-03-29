"use client"

import { useState, useMemo } from "react"
import StatsCard from "../AdminStats-Card"
import TableWithFilters, { Capsule } from "./AdminCapsulesTable"

export default function Dashboard() {
  // Sample data for capsules - in a real app, this would come from an API
  const capsuleData: Capsule[] = [
    {
      id: 1,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "-",
      sender: "Umar",
      type: "Private",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
    {
      id: 2,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "assad@gmail.com",
      sender: "Umar",
      type: "Public",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
    {
      id: 3,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "assad@gmail.com",
      sender: "Aisha",
      type: "Public",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Active",
    },
    {
      id: 4,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "assad@gmail.com",
      sender: "Fatima",
      type: "Public",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Active",
    },
    {
      id: 5,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "-",
      sender: "Fatima",
      type: "Private",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Active",
    },
    {
      id: 6,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "-",
      sender: "Fatima",
      type: "Public",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
    {
      id: 7,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "-",
      sender: "Fatima",
      type: "Private",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
    {
      id: 8,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "assad@gmail.com",
      sender: "Fatima",
      type: "Private",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
  ]

  // State for filtered data
  const [filteredData, setFilteredData] = useState<Capsule[]>(capsuleData)

  // Calculate stats based on the current data
  const stats = useMemo(() => {
    const totalCount = capsuleData.length 
    const publicCount = capsuleData.filter((c) => c.type === "Public").length 
    const privateCount = capsuleData.filter((c) => c.type === "Private").length
    const expiredCount = capsuleData.filter((c) => c.status === "Expired").length

    return [
      {
        title: "Total Capsules",
        value: totalCount.toString(),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        ),
        iconBgColor: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        title: "Public Capsules",
        value: publicCount.toString(),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        ),
        iconBgColor: "bg-green-50",
        iconColor: "text-green-600",
      },
      {
        title: "Private Capsules",
        value: privateCount.toString(),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        ),
        iconBgColor: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        title: "Expired Capsules",
        value: expiredCount.toString(),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        ),
        iconBgColor: "bg-amber-50",
        iconColor: "text-amber-600",
      },
    ]
  }, [capsuleData])

  // Handle filter changes
  const handleFilterChange = (newFilteredData: Capsule[]) => {
    setFilteredData(newFilteredData)
  }

  return (
    <div className="w-full">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-8">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* Table with Filters */}
      <TableWithFilters data={capsuleData} onFilterChange={handleFilterChange} />
    </div>
  )
}

