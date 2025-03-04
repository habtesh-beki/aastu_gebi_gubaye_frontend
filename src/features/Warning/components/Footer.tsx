import { Button } from "@/shared/components/ui/button";
import { ENV } from "@/shared/utils/env";
import axios from "axios";

export default function Footer({ studentId }: { studentId: string }) {
    const token = localStorage.getItem("auth-token");
    const handleDelete = async () => {
        try {
            await axios.delete(`${ENV.apiBaseURL}/api/student/${studentId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            alert("student deleted");
        } catch (error) {
            console.error("there is error", error);
            alert("error occured");
        }
    };
    return (
        <div className="h-20 bg-bg_login flex items-center justify-center gap-x-4 w-full px-3">
            <Button
                onClick={handleDelete}
                className="w-full"
                variant={"destructive"}
            >
                Remove
            </Button>
        </div>
    );
}
