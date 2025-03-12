type SecondaryBtnProps = {
  title: string;
  onClick?: () => void;
};

export default function SecondaryBtn({ title, onClick }: SecondaryBtnProps) {
  return (
    <button
      onClick={onClick}
      className="mx-auto lg:mx-0  bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
      {title}
    </button>
  );
}
