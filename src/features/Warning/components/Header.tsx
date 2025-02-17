import { FileWarning } from "lucide-react";

export default function Header() {
    return (
        <div className="flex justify-between  text-[#ba1a1a] items-center px-9  h-20 bg-[#feece9]">
            <div className="flex items-center gap-2 text-xl font-bold">
                <FileWarning />
                <h2>Warning</h2>
            </div>
        </div>
    );
}
