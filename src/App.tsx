import "./App.css";
import Contacts from "./components/Contacts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainGoals from "./components/MainGoals";
import Pricing from "./components/Pricing";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <MainGoals />
      <Features />
      <Pricing />
      <Contacts />
      <Footer />
    </Wrapper>
  );
}
