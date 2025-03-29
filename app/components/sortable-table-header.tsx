"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

type SortDirection = "asc" | "desc" | null

interface SortableTableHeaderProps {
  label: string
  onSort?: (direction: SortDirection) => void
  initialDirection?: SortDirection
  isActive?: boolean
  className?: string
}

// Utility function to conditionally join classNames
function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function SortableTableHeader({
  label,
  onSort,
  initialDirection = null,
  isActive = false,
  className,
}: SortableTableHeaderProps) {
  const [sortDirection, setSortDirection] = useState<SortDirection>(initialDirection)

  const handleSort = () => {
    let newDirection: SortDirection = null

    if (sortDirection === null) {
      newDirection = "asc"
    } else if (sortDirection === "asc") {
      newDirection = "desc"
    } else {
      newDirection = null
    }

    setSortDirection(newDirection)
    if (onSort) onSort(newDirection)
  }

  return (
    <th
      className={cn(
        "px-4 py-3 text-left font-medium text-sm border-b last:border-r-0 bg-emerald-700 text-white cursor-pointer",
        className,
      )}
      onClick={handleSort}
    >
      <div className="flex flex-row items-center">
        <span>{label}</span>
        <div className="flex flex-col">
          <ChevronUp className={`w-3 h-3 ${sortDirection === "asc" && isActive ? "text-white" : "text-white/50"}`} />
          <ChevronDown
            className={`w-3 h-3 ${sortDirection === "desc" && isActive ? "text-white" : "text-white/50"}`}
            style={{ marginTop: "-5px" }}
          />
        </div>
      </div>
    </th>
  )
}

