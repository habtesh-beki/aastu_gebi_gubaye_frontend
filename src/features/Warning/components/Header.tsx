import { FileWarning } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between text-[#ba1a1a] items-center px-9 p-4 h-20 bg-[#feece9]">
      <div className="flex items-center gap-2 text-xl font-bold">
        {/* <span>&#9888;</span> */}
        <FileWarning />
        <h2>Warning</h2>
      </div>

      <div className="text-2xl cursor-pointer font-bold">&#10005;</div>
    </div>
  );
}
