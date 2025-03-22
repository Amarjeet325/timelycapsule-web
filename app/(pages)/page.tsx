"use client";

import TimeUntilUnveil from "../components/TimeUntilUnveil";

export default function HomePage() {
  const unveilDate = new Date("2025-04-01T12:00:00");
  return (
    <>
      <h1>Home Page</h1>
      <TimeUntilUnveil unveilDate={unveilDate} />
    </>
  );
}
