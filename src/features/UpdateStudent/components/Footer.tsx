import { Button } from "@/shared/components/ui/button";
import { BaseSyntheticEvent } from "react";

type MyEventHandler = (
    e?: BaseSyntheticEvent<object, any, any> | undefined
) => Promise<void>;

export default function Footer({ onSubmit }: { onSubmit: MyEventHandler }) {
    return (
        <div className="flex w-full justify-center items-center gap-2 pl-9 pr-9 p-4 h-20 bg-bg_login mt-auto">
            <Button
                type="submit"
                className="bg-bg_btn hover:bg-blue-600 w-full px-4"
                onClick={onSubmit}
            >
                Update
            </Button>
        </div>
    );
}
