"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { Calendar, ChevronDown, Users, UserCheck, UserX } from "lucide-react"
// import Button from "../Button"
import StatsCard from "../AdminStats-Card"
import SortableTableHeader from "../sortable-table-header"
import Button from "../paginationButton"

// Define the user type for better type safety
export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  joinedDate: string
  joinedTime: string
  status?: string
}

interface UserScreenProps {
  data: User[]
}

type SortDirection = "asc" | "desc" | null
type SortField = "firstName" | "lastName" | "email" | "phone" | "joinedDate" | null

export default function UserScreen({ data }: UserScreenProps) {
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filteredData, setFilteredData] = useState<User[]>(data)
  const selectRef = useRef<HTMLSelectElement>(null)

  // Sorting state
  const [sortField, setSortField] = useState<SortField>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const handleIconClick = () => {
    if (selectRef.current) {
      selectRef.current.focus()
    }
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Handle sorting
  const handleSort = (field: SortField, direction: SortDirection) => {
    setSortField(field)
    setSortDirection(direction)
  }

  // Calculate pagination values
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length)

  // Apply sorting to filtered data
  const sortedData = useMemo(() => {
    if (!sortField || !sortDirection) return filteredData

    return [...filteredData].sort((a, b) => {
      let valueA: string
      let valueB: string

      // Handle different field types
      if (sortField === "joinedDate") {
        valueA = a.joinedDate + " " + a.joinedTime
        valueB = b.joinedDate + " " + b.joinedTime
      } else {
        valueA = String(a[sortField]).toLowerCase()
        valueB = String(b[sortField]).toLowerCase()
      }

      if (sortDirection === "asc") {
        return valueA.localeCompare(valueB)
      } else {
        return valueB.localeCompare(valueA)
      }
    })
  }, [filteredData, sortField, sortDirection])

  const currentItems = sortedData.slice(startIndex, endIndex)

  // Calculate stats
  const stats = useMemo(() => {
    const totalCount = data.length
    const activeCount = data.filter((user) => user.status === "Active").length || Math.round(totalCount * 0.84) // Fallback if status not provided
    const guestCount = data.filter((user) => user.status === "Guest").length || Math.round(totalCount * 0.1) // Fallback if status not provided

    return [
      {
        title: "Total Users",
        value: totalCount >= 1000 ? `${(totalCount / 1000).toFixed(1)}k` : totalCount.toString(),
        icon: <Users />,
        iconBgColor: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        title: "Active Users",
        value: activeCount >= 1000 ? `${(activeCount / 1000).toFixed(1)}k` : activeCount.toString(),
        icon: <UserCheck />,
        iconBgColor: "bg-green-50",
        iconColor: "text-green-600",
      },
      {
        title: "Guest Users",
        value: guestCount.toString(),
        icon: <UserX />,
        iconBgColor: "bg-blue-50",
        iconColor: "text-blue-600",
      },
    ]
  }, [data])

  // Apply filters when filter values change
  useEffect(() => {
    let result = [...data]

    // Filter by status (if implemented)
    if (selectedStatus !== "All") {
      result = result.filter((user) => user.status === selectedStatus)
    }

    // Filter by search keyword
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase()
      result = result.filter(
        (user) =>
          user.firstName.toLowerCase().includes(keyword) ||
          user.lastName.toLowerCase().includes(keyword) ||
          user.email.toLowerCase().includes(keyword) ||
          user.phone.includes(keyword),
      )
    }

    // Update filtered data
    setFilteredData(result)
    // Reset to first page when filters change
    setCurrentPage(1)
  }, [selectedStatus, searchKeyword, data])

  // Handle filter button click
  const handleFilterClick = () => {
    // Additional filtering logic for date range could be implemented here
    // For now, we're already filtering reactively with the useEffect
  }

  // Handle page navigation
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 3

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are only a few
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // Show a subset of pages with current page in the middle when possible
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

      // Adjust if we're near the end
      if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1)
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }
    }

    return pageNumbers
  }

  return (
    <div className="w-full">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <div className="relative gap-5">
            <select
              className="w-full h-10 px-3 py-2 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>Guest</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Start Date"
                className="w-full h-10 px-3 py-2 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Calendar className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="End Date"
                className="w-full h-10 px-3 py-2 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Calendar className="absolute right-3 top-3 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Search</label>
            <input
              type="text"
              placeholder="Enter Search Keyword..."
              className="w-full h-10 px-3 py-2 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <Button
            label="Filter"
            className="h-10 bg-emerald-800 hover:bg-emerald-500 text-white font-medium"
            onClick={handleFilterClick}
            disabled={filteredData.length === data.length}
          />
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto border rounded-lg shadow-sm">
        <table className="w-full border-collapse">
          <thead className="font-ibmPlexSans text-[13.58px] text-sm font-normal">
            <tr className="bg-emerald-700 text-white">
              <SortableTableHeader
                label="First Name"
                onSort={(direction) => handleSort("firstName", direction)}
                isActive={sortField === "firstName"}
                initialDirection={sortField === "firstName" ? sortDirection : null}
                className="w-[25%] sm:w-auto"
              />
              <SortableTableHeader
                label="Last name"
                onSort={(direction) => handleSort("lastName", direction)}
                isActive={sortField === "lastName"}
                initialDirection={sortField === "lastName" ? sortDirection : null}
                className="w-[25%] sm:w-auto"
              />
              <SortableTableHeader
                label="Email Address"
                onSort={(direction) => handleSort("email", direction)}
                isActive={sortField === "email"}
                initialDirection={sortField === "email" ? sortDirection : null}
                className="hidden sm:table-cell"
              />
              <SortableTableHeader
                label="Phone Number"
                onSort={(direction) => handleSort("phone", direction)}
                isActive={sortField === "phone"}
                initialDirection={sortField === "phone" ? sortDirection : null}
                className="hidden md:table-cell"
              />
              <SortableTableHeader
                label="Joined Date"
                onSort={(direction) => handleSort("joinedDate", direction)}
                isActive={sortField === "joinedDate"}
                initialDirection={sortField === "joinedDate" ? sortDirection : null}
                className="hidden md:table-cell"
              />
              <th className="px-2 py-3 text-left font-medium text-sm border-b w-[20%] sm:w-[15%] md:w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-3 last:border-r-0">
                    <div className="font-medium truncate">{user.firstName}</div>
                    <div className="text-sm text-gray-500 truncate">-</div>
                  </td>
                  <td className="px-2 sm:px-4 py-3 last:border-r-0">
                    <div className="font-medium truncate">{user.lastName}</div>
                    <div className="text-sm text-gray-500 truncate">{user.email.includes("@") ? "" : user.email}</div>
                  </td>
                  <td className="px-2 sm:px-4 py-3 last:border-r-0 hidden sm:table-cell">
                    <div className="truncate max-w-[150px] md:max-w-none">{user.email}</div>
                  </td>
                  <td className="px-2 sm:px-4 py-3 last:border-r-0 hidden md:table-cell">{user.phone}</td>
                  <td className="px-2 sm:px-4 py-3 last:border-r-0 hidden md:table-cell">
                    <div>{user.joinedDate}</div>
                    <div className="text-sm text-gray-500">{user.joinedTime}</div>
                  </td>
                  <td className="px-0 py-3">
                    <div className="relative">
                      <select
                        ref={selectRef}
                        className="w-full text-xs sm:text-sm py-1 pl-2 pr-4 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option>Select</option>
                        <option>View</option>
                        <option className="text-red-500">Delete</option>
                      </select>
                      <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 pointer-events-none" />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  No results found. Try adjusting your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm text-gray-500">
        <div className="mb-4 sm:mb-0">
          Showing {filteredData.length > 0 ? startIndex + 1 : 0} to {endIndex} of {filteredData.length}
        </div>
        <div className="flex items-center gap-2">
          <Button
            label="Previous"
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          />

          {getPageNumbers().map((pageNum) => (
            <Button
              key={pageNum}
              label={pageNum.toString()}
              size="sm"
              className={currentPage === pageNum ? "bg-emerald-500 hover:bg-emerald-600 text-white" : ""}
              variant={currentPage === pageNum ? "default" : "outline"}
              onClick={() => goToPage(pageNum)}
            />
          ))}

          <Button
            label="Next"
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          />
        </div>
      </div>
    </div>
  )
}

