import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-purple-500">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <button className="mt-6 px-4 py-2 mx-auto bg-purple-500 text-white rounded-md flex items-center gap-2">
            <Home width={24} height={24} />
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
