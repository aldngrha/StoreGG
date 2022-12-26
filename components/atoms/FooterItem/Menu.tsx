import Link from "next/link";

interface FooterMenuListProps {
  href?: string;
  list: string;
}

export default function Menu({ href = "/", list }: FooterMenuListProps) {
  return (
    <li className="mb-6">
      <Link
        href={href}
        className="text-lg color-palette-1 text-decoration-none"
      >
        {list}
      </Link>
    </li>
  );
}
