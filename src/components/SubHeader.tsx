type SubHeaderProps = {
  title: string;
  color?: string;
  underline?: string;
};

export default function SubHeader({
  title,
  color = "text-gray-800",
  underline = "gradient",
}: SubHeaderProps) {
  return (
    <>
      <h2
        className={`w-full my-2 text-5xl font-bold leading-tight text-center ${color}`}
      >
        {title}
      </h2>
      <div className="w-full mb-4">
        <div
          className={`h-1 mx-auto ${underline} w-64 opacity-25 my-0 py-0 rounded-t`}
        ></div>
      </div>
    </>
  );
}
