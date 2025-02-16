import {
    InnerDialog,
    InnerDialogContent,
    InnerDialogFooter,
    InnerDialogHeader,
    InnerDialogTrigger,
} from "@/components/ui/dialog";
import {
    WarningBody,
    WarningFooter,
    WarningHeader,
} from "@/features/Warning/Warning";
import { Button } from "@/shared/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/shared/components/ui/dialog";

export default function Footer() {
    return (
        <div className="w-full flex justify-between items-center gap-2 bg-bg_login">
            <Dialog>
                <DialogTrigger className="text-red-600 hover:text-white w-1/2 bg-transparent hover:bg-red-600 border-2 hover:border-[0px] border-solid border-red-600 p-2 rounded-md">
                    Remove
                </DialogTrigger>
                <DialogContent className="flex bg-white flex-col items-strech justify-between  max-w-[460px] absolute top-1/4  border rounded-lg overflow-hidden shadow-lg">
                    <DialogHeader>
                        <WarningHeader />
                    </DialogHeader>
                    <WarningBody />
                    <DialogFooter>
                        <WarningFooter />
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Button className="bg-bg_btn hover:bg-blue-600 w-1/2">Edit</Button>
        </div>
    );
}
