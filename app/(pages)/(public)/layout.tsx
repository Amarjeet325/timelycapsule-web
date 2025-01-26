import { LayoutProps } from "@/.next/types/app/layout";

export default function PublicLayout({ children }: LayoutProps) {
  return (
    <div>
      <header>Public page layout</header>
      {children}
    </div>
  );
}
