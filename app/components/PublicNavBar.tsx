import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

interface PublicLink {
  label: string;
  href: string;
}

const links: PublicLink[] = [
  {
    label: "Public Capsules",
    href: "/public-capsules",
  },
  {
    label: "Create Capsule",
    href: "/create-capsule",
  },
];

export default function PublicNavBar({ className }: Props) {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-row gap-9 justify-center", className)}>
      {links.map(renderLink)}
    </div>
  );

  function renderLink(link: PublicLink) {
    const isActive = pathname === link.href;

    return (
      <Link
        href={link.href}
        className={cn(
          "h-12 border-primary text-sm flex items-center justify-center cursor-pointer",
          {
            "border-b-[3px] font-bold": isActive,
          },
        )}
      >
        {link.label}
      </Link>
    );
  }
}
