import PrimaryBtn from "./PrimaryBtn";
import SubHeader from "./SubHeader";

const features = [
  {
    name: "Feature №1",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  },
  {
    name: "Feature №2",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  },
  {
    name: "Feature №3",
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <SubHeader title="Our Features" />
        <>
          {features.map((feature) => (
            <div
              key={feature.name}
              className="w-full md:w-1/3 p-6 flex  flex-col flex-grow flex-shrink"
            >
              <div className="flex-1  bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  {feature.name}
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  {feature.title}
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  {feature.description}
                </p>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <PrimaryBtn title="Action" />
              </div>
            </div>
          ))}
        </>
      </div>
    </section>
  );
}
