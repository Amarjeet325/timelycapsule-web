import clsx from "clsx";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  icon: IconName;
  label: string;
  href: string;
}

export function HeaderLink({ icon, label, href }: HeaderLinkProps) {
  const currentPath = usePathname();

  const isCurrentPath =
    href === "/"
      ? currentPath === "/" || currentPath === ""
      : currentPath.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        "flex flex-row flex-wrap items-center hover:bg-primaryDark text-sm px-3 py-2 rounded-md cursor-pointer",
        { "bg-primaryDark": isCurrentPath },
      )}
    >
      <DynamicIcon name={icon} color="white" className="mr-[8px]" size={16} />
      {label}
    </Link>
  );
}
