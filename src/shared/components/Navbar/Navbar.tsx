import { Separator } from "@/shared/components/ui/separator";
import LOGO from "@/assets/logo.png";

export default function Navbar({ style }: { style?: string }) {
  return (
    <nav
      className={`p-4 bg-background flex justify-between shadow-md ${style}`}
    >
      <div className="flex items-center gap-4">
        <img
          src={LOGO}
          className="h-12 w-12 object-contain"
          alt="Mahibere kidusan logo"
        />
        <div>
          <h1 className="text-xl text-[#0335BA] font-medium">
            AASTU Gebi Gubae
          </h1>
          <h3 className="text-lg text-[#8C8C98]">Main Portal</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <p className="space-x-2">
            <span className="font-extrabold">ቀን</span>{" "}
            <span>ግንቦት 01/09/16</span>
          </p>
        </div>
        <Separator orientation="vertical" className="h-9 text-[##333333]" />
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 text-lg text-white font-extrabold bg-[#3D63DD] rounded-full flex items-center justify-center">
            ST
          </div>
          <div>
            <p className="text-lg font-medium">Solomon Tarekegn</p>
            <p className="text-[#8C8C98]">Super Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
