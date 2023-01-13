import Payment from "../../assets/payment.png";

const PaymentSection = () => {
  return (
    <>
      <div className="lg:px-20 2xl:px-56 flex flex-col items-center mt-52 lg:mt-80 gap-3 lg:gap-10 bg-payment-texture bg-cover pt-10 lg:pt-20 xl:pb-40 2xl:pb-80">
        <h1 className="font-bold lg:text-4xl">Payment Method</h1>
        <p className="lg:text-xl">
          Payment is getting easier with many options
        </p>
        <div className="w-full bg-[#dbeff2]">
          <img
            src={Payment}
            className="mt-10 mx-auto w-3/4 lg:w-3/5"
            alt="payment method"
          />
        </div>
      </div>
      <div className="w-full h-20 bg-[#dbeff2]" />
    </>
  );
};

export default PaymentSection;
