import Navbar from "./components/Navbar";
import CustomerFeedbackSection from "./components/sections/CustomerFeedbackSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import HotDealsSection from "./components/sections/HotDealsSection";
import PaymentSection from "./components/sections/PaymentSection";
import PromoSection from "./components/sections/PromoSection";
import ReasonsSection from "./components/sections/ReasonsSection";
import TicketBoxSection from "./components/sections/TicketBoxSection";

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
