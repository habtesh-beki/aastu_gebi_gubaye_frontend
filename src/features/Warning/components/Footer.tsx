import { Button } from "@/shared/components/ui/button";

export default function Footer() {
    return (
        <div className="h-20 bg-bg_login flex items-center justify-center gap-x-4 w-full p-1">
            <Button className="w-1/2  text-black border" variant={"secondary"}>
                Cancel
            </Button>
            <Button className="w-1/2" variant={"destructive"}>
                Remove
            </Button>
        </div>
    );
}
