const headerData = [
  {
    title: "Total Student",
    value: 1240,
  },
  {
    title: "Total students joined service",
    value: 1240,
  },
  {
    title: "Total Student",
    value: 1240,
  },
];

export function Header() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4 rounded-md  w-ful ">
      {headerData.map((data) => (
        <div className="flex justify-between bg-white p-3 text-xl rounded-md py-5">
          <h1>{data.title}</h1>
          <span>{data.value}</span>
        </div>
      ))}
    </div>
  );
}
