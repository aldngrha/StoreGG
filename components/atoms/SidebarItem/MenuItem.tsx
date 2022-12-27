import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "overview"
    | "transaction"
    | "messages"
    | "card"
    | "logout"
    | "reward"
    | "setting";
  active?: boolean;
  href: string;
}
export default function MenuItem({
  title,
  icon,
  active,
  href = "/",
}: Partial<MenuItemProps>) {
  const className = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={className}>
      <div className="me-3">
        <Image
          src={`/icon/ic-menu-${icon}.svg`}
          alt="overview"
          height={25}
          width={25}
        />
      </div>
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
