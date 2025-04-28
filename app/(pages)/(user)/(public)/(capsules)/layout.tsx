"use client";

import Logo from "@/public/images/logo-timelycapsule.png";
import Image from "next/image";
import Button from "@/app/components/Button";
import PublicNavBar from "@/app/components/PublicNavBar";
import { useRouter } from "next/navigation";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-[1168px] mt-14 mb-12">
        <Image src={Logo} alt="Logo" />
        <PublicNavBar className="grow" />
        <Button label="Create an Account" onClick={createAccount} />
      </div>
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );

  function createAccount() {
    router.push("/signup");
  }
}
