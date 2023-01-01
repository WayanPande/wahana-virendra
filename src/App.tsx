import Navbar from "./components/Navbar";
import TicketBoxSection from "./components/TicketBoxSection";
import PromoSection from "./components/PromoSection";
import HotDealsSection from "./components/HotDealsSection";
import ReasonsSection from "./components/ReasonsSection";
import CustomerFeedbackSection from "./components/CustomerFeedbackSection";
import PaymentSection from "./components/PaymentSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TicketBoxSection />
      <PromoSection />
      <div className="bg-section-texture bg-cover py-20">
        <HotDealsSection />
        <ReasonsSection />
      </div>
      <CustomerFeedbackSection />
      <PaymentSection />
      <FooterSection />
    </>
  );
}

export default App;
