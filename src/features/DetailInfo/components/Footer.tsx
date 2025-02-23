import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { MultiValue } from "react-select";
import {
    WarningBody,
    WarningFooter,
    WarningHeader,
} from "@/features/Warning/Warning";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/shared/components/ui/dialog";
import {
    UpdateBody,
    UpdateFooter,
    UpdateHeader,
} from "@/features/UpdateStudent/UpdateStudent";
import { capitalizeFirstLetter } from "@/shared/utils/capitalizeFirstLitter";

type Inputs = {
    first_name: string;
    last_name: string;
    baptismal_name: string;
    gender: string;
    student_id: string;
    department: string;
    service: MultiValue<{ value: string; label: string }>;
    language: MultiValue<{ value: string }>;
    current_year: string;
    password: string;
    confession: string;
    role: string;
    phone_number: string;
    email: string;
};

export default function Footer({ studentId }: { studentId: string }) {
    const { register, handleSubmit, control, setValue } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const service = data.service?.map((serev) => serev.value);
        const language = data.language?.map((lang) => lang.value);
        const student_id = data.student_id.toLocaleUpperCase();
        const first_name = capitalizeFirstLetter(data.first_name);
        const last_name = capitalizeFirstLetter(data.last_name);
        const studentData = {
            ...data,
            student_id,
            first_name,
            last_name,
            service,
            language,
        };
        const token = localStorage.getItem("auth-token");
        const filteredData = Object.fromEntries(
            Object.entries(studentData).filter(([key, value]) => {
                return (
                    value !== "" &&
                    value !== null &&
                    value !== undefined &&
                    !(Array.isArray(value) && value.length === 0)
                );
            })
        );
        console.log(filteredData);
        try {
            await axios.put(
                `http://127.0.0.1:3000/api/student/${studentId}`,
                filteredData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(filteredData);
            alert("student updated");
        } catch (error) {
            console.error("there is error", error);
            alert("error occured");
        }
    };

    return (
        <div className="w-full flex justify-between items-center gap-2 bg-bg_login">
            <Dialog>
                <DialogTrigger className="text-red-600 hover:text-white w-1/2 bg-transparent hover:bg-red-600 border-2 hover:border-[0px] border-solid border-red-600 p-2 rounded-md">
                    Remove
                </DialogTrigger>
                <DialogContent className="flex bg-white flex-col  justify-between absolute p-0  border rounded-lg overflow-hidden shadow-lg">
                    <DialogHeader>
                        <WarningHeader />
                    </DialogHeader>
                    <WarningBody />
                    <DialogFooter>
                        <WarningFooter studentId={studentId} />
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger className="bg-bg_btn hover:bg-blue-600 w-1/2 p-2 text-white rounded-md">
                    Edit
                </DialogTrigger>
                <DialogContent className="flex flex-col w-3/4 h-2/3 rounded-md absolute shadow-2xl p-0">
                    <DialogHeader>
                        <UpdateHeader />
                    </DialogHeader>
                    <UpdateBody
                        register={register}
                        control={control}
                        setValue={setValue}
                    />
                    <DialogFooter>
                        <UpdateFooter onSubmit={handleSubmit(onSubmit)} />
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
