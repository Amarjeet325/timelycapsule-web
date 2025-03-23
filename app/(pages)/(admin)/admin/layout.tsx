import type React from "react";
import Link from "next/link";
import { Clock, User2, Settings } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex gap-6">
        <aside className="w-64 shrink-0">
          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center rounded-lg px-3 py-2 text-gray-600 hover:bg-violet-100 hover:text-violet-900"
            >
              <Clock className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center rounded-lg px-3 py-2 text-gray-600 hover:bg-violet-100 hover:text-violet-900"
            >
              <User2 className="mr-2 h-4 w-4" />
              User Management
            </Link>
            <Link
              href="/admin/capsules"
              className="flex items-center rounded-lg px-3 py-2 text-gray-600 hover:bg-violet-100 hover:text-violet-900"
            >
              <Clock className="mr-2 h-4 w-4" />
              Capsule Management
            </Link>
            <Link
              href="/admin/reports"
              className="flex items-center rounded-lg px-3 py-2 text-gray-600 hover:bg-violet-100 hover:text-violet-900"
            >
              <Settings className="mr-2 h-4 w-4" />
              Reports & Flags
            </Link>
          </nav>
        </aside>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
