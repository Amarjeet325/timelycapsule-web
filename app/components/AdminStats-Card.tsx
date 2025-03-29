import type React from "react"

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  iconBgColor: string
  iconColor: string
}

export default function StatsCard({ title, value, icon, iconBgColor, iconColor }: StatsCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mt-8">
      <div className="flex items-start">
        <div className={`p-2 ${iconBgColor} rounded`}>
          <div className={`w-6 h-6 ${iconColor}`}>{icon}</div>
        </div>
        <div className="ml-auto text-right">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  )
}



