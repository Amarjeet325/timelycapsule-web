"use client"

import TableWithFilters, { type Capsule } from "./AdminCapsulesTable"

export default function Capsules() {
  // Sample data for the table
  const capsulesData: Capsule[] = [
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
      email: "-",
      sender: "Fatima",
      type: "Private",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
    {
      id: 9,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "assad@gmail.com",
      sender: "Fatima",
      type: "Private",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
    {
      id: 10,
      title: "Secret Crush",
      date: "21st March, 2025",
      receiver: "Assad User",
      email: "-",
      sender: "Fatima",
      type: "Private",
      expiry: "21st Mar. 2023 02:04:05",
      status: "Expired",
    },
  ]

  return (
    <div className="w-full">
      <TableWithFilters data={capsulesData} />
    </div>
  )
}

