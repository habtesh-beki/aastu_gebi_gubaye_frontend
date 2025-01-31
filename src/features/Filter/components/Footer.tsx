import { Button } from "@/shared/components/ui/button";

export default function Footer() {
  return (
    <div className="w-full flex justify-between items-center gap-2 bg-bg_login">
      <Button className="text-red-600 w-2/3  border" variant={"outline"}>
        Cancel
      </Button>
      <Button className="bg-bg_btn hover:bg-blue-600 w-2/3">
        Apply Filter
      </Button>
    </div>
  );
}
