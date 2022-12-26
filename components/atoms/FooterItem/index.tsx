interface FooterItemProps {
  title: string;
}
export default function FooterItem({ title }: FooterItemProps) {
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>;
}
