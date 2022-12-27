import Image from "next/image";
import cx from "classnames";

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
}
export default function MenuItem({
  title,
  icon,
  active,
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
        <a
          href="components/organisms/Sidebar"
          className="text-lg text-decoration-none"
        >
          {title}
        </a>
      </p>
    </div>
  );
}
