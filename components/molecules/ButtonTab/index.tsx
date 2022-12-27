import Link from "next/link";
import cx from "classnames";

interface ButtonTabProps {
  title: string;
  active: boolean;
}
export default function ButtonTab({ title, active }: ButtonTabProps) {
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <Link data-filter="*" href="#" className={btnClass}>
      {title}
    </Link>
  );
}
