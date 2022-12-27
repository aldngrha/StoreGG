import PurchaseDetail from "../../atoms/CheckoutDetail/PurchaseDetail";
import PaymentInformation from "../../atoms/CheckoutDetail/PaymentInformation";

export default function CheckoutDetail() {
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <PurchaseDetail title="Your Game ID" detail="aldinugraha" />
        <PurchaseDetail title="Order ID" detail="#GG001" />
        <PurchaseDetail title="Item" detail="250K Steam Wallet" />
        <PurchaseDetail title="Price" detail="Rp 350.000" />
        <PurchaseDetail title="Tax (10%)" detail="Rp 35.000" />
        <PurchaseDetail title="Total" detail="Rp 385.000" />
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <PaymentInformation title="Your Account Name" detail="Aldi Nugraha" />
        <PaymentInformation title="Type" detail="Worldwide Transfer" />
        <PaymentInformation title="Bank Name" detail="Mandiri" />
        <PaymentInformation
          title="Bank Account Name"
          detail="PT Store GG Indonesia"
        />
        <PaymentInformation title="Bank Number" detail="1800 - 9090 - 2021" />
      </div>
    </>
  );
}
