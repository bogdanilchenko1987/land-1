import PrimaryBtn from "./PrimaryBtn";
import SubHeader from "./SubHeader";

const pricing = [
  {
    name: "Free",
    features: ["50 Image", "500 Credits", "50GB Cloud Storage"],
    price: "£0",
    span: "/ per user",
  },
  {
    name: "Basic",
    features: ["150 Image", "2500 Credits", "250GB Cloud Storage"],
    price: "£49.99",
    span: "/ per user",
  },
  {
    name: "Pro",
    features: ["500 Image", "5000 Credits", "500GB Cloud Storage"],
    price: "£99.99",
    span: "/ per user",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <SubHeader title="Pricing" />
        <div className="flex flex-col gap-4 sm:flex-row justify-center pt-12 my-12 sm:my-4">
          {pricing.map((price) => (
            <div
              key={price.name}
              className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg  hover:font-bold hover:shadow-2xl "
            >
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl  text-center ">
                  {price.name}
                </div>
                <div className="h-1 w-full gradient  my-0 py-0 rounded-t "></div>
                <ul className="w-full text-center text-base ">
                  {price.features.map((feature) => (
                    <li key={feature} className="border-b py-4">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-4xl  text-center">
                  {price.price}
                  <span className="text-base">{price.span}</span>
                </div>
                <PrimaryBtn title="Sign Up" position="justify-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
