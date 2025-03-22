"use client";

import CapsuleTable, { Capsule } from "../components/CapsuleTable";

const sampleCapsules = [
  {
    id: "1",
    name: "Capsule Name",
    description: "Description",
    type: "Received",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "2",
    name: "Capsule Name",
    description: "Description",
    type: "Received",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "3",
    name: "Capsule Name",
    description: "Description",
    type: "Send",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "4",
    name: "Capsule Name",
    description: "Description",
    type: "Received",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
  {
    id: "5",
    name: "Capsule Name",
    description: "Description",
    type: "Send",
    date: "2nd March, 2025",
    reveals: "03/20/2025, 2:32 PM",
  },
] as Capsule[];

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <CapsuleTable data={sampleCapsules} rowCount={3} component="History" />
    </>
  );
}
