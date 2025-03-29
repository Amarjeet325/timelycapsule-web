"use client"

import UserScreen from "./AdminUsersTable"


// Sample user data
const userData = [
  {
    id: 1,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  {
    id: 2,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  {
    id: 3,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  {
    id: 4,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  {
    id: 5,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  {
    id: 6,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  {
    id: 7,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  {
    id: 8,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  },
  // Add more users to reach 57 total
  // This is just a sample, in a real app this would come from an API
]

// Generate more users to reach 57 total
for (let i = 9; i <= 57; i++) {
  userData.push({
    id: i,
    firstName: "Secret",
    lastName: "Assad User",
    email: "asssa@gmail.com",
    phone: "090 000 0000",
    joinedDate: "21st Mar. 2023",
    joinedTime: "02:04:05",
  })
}

export default function UsersPage() {
  return (
    <div className="p-6">
      <UserScreen data={userData} />
    </div>
  )
}

