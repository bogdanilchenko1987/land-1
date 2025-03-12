type PrimaryBtnProps = {
  title: string;
  position?: string;
};

export default function PrimaryBtn({
  title,
  position = "justify-start",
}: PrimaryBtnProps) {
  return (
    <div className={`flex items-center ${position}`}>
      <button className="mx-auto lg:mx-0 gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
}
