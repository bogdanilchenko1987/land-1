import { handleScrollToContacts } from "../helpers/handleScroll";
import DecorationBottom from "./DecorationBottom";
import SecondaryBtn from "./SecondaryBtn";

export default function Hero() {
  return (
    <section id="hero">
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Main Hero Message
            </h1>
            <p className="leading-normal text-2xl mb-1">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>
            <SecondaryBtn title="Subscribe" onClick={handleScrollToContacts} />
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="/hero.png" />
          </div>
        </div>
      </div>
      <DecorationBottom />
    </section>
  );
}
