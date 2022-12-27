interface PurchaseDetailProps {
  title: string;
  detail: string;
}
export default function PurchaseDetail({ title, detail }: PurchaseDetailProps) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {title} <span className="purchase-details">{detail}</span>
    </p>
  );
}
