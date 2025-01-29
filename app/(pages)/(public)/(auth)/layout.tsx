import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex-1 bg-gradient-to-b from-teal-300 via-blue-300 to-purple-300 p-8 flex flex-col justify-center items-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/img/character.png"
              alt="Character illustration"
              layout="fill"
              objectFit="contain"
            />
            <Image
              src="/img/rocket.png"
              alt="Rocket illustration"
              layout="fill"
              objectFit="contain"
              className="absolute top-0 right-0"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mt-4">
            Capture and Share Moments for the Future
          </h1>
          <p className="text-white/80 mt-2 text-center">
            Send messages or media that unlock at the perfect moment.
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center p-8 bg-white">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center mb-8">
              <Image
                src="/img/logo.png"
                alt="TimelyCapsule Logo"
                width={200}
                height={40}
                className="mx-auto"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-6">Join TimelyCapsule</h2>
            <p className="text-gray-600 mb-8">
              Unlock your capsules across time and space.
            </p>

            {children}

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-600 hover:text-teal-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
