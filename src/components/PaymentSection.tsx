import Payment from "../assets/payment.png";

const PaymentSection = () => {
  return (
    <div className="px-20 2xl:px-56 flex flex-col items-center mt-80 gap-10 bg-payment-texture bg-cover pt-20 xl:pb-40 2xl:pb-80">
      <h1 className="font-bold text-4xl">Payment Method</h1>
      <p className="text-xl">Payment is getting easier with many options</p>
      <img src={Payment} className="mt-10 w-3/5" alt="payment method" />
    </div>
  );
};

export default PaymentSection;
