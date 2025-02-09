import { Button } from "@/shared/components/ui/button";
interface FooterProps {
  onSubmit: () => void;
}

export default function Footer({ onSubmit }: FooterProps) {
  return (
    <div className="w-full flex justify-between items-center gap-2 bg-bg_login">
      <Button
        className="text-red-600 w-2/3 hover:bg-red-500 hover:text-white  border"
        variant={"outline"}
      >
        Cancel
      </Button>
      <Button onClick={onSubmit} className="bg-bg_btn hover:bg-blue-600 w-2/3">
        Apply Filter
      </Button>
    </div>
  );
}
