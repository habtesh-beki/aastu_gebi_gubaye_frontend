import { Separator } from "@/shared/components/ui/separator";
import { useEffect, useState } from "react";
import axios from "axios";

type Istudent = {
    id: string;
    first_name: string;
    last_name: string;
    baptismal_name?: string;
    gender: string;
    student_id: string;
    department: { id: string; department: string };
    service?: { id: string; name: string }[];
    language: { id: string; name: string }[];
    current_year: string;
    password: string;
    confession?: string;
    role: string;
    phone_number: string;
    email?: string;
};

export default function Navbar({ style }: { style?: string }) {
    const [student, setStudent] = useState<Istudent>();
    const token = localStorage.getItem("auth-token");
    useEffect(() => {
        axios
            .get("http://127.0.0.1:3000/api/student/logedin/person", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setStudent(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [token]);
    return (
        <nav
            className={`p-4 bg-background flex justify-end shadow-md ${style}`}
        >
            <div className="flex items-center gap-5">
                <div>
                    <p className="space-x-2">
                        <span className="font-extrabold">ቀን</span>{" "}
                        <span>ግንቦት 01/09/17</span>
                    </p>
                </div>
                <Separator
                    orientation="vertical"
                    className="h-9 text-[##333333]"
                />
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 text-lg text-white font-extrabold bg-[#3D63DD] rounded-full flex items-center justify-center">
                        {student?.first_name.slice(0, 1)}
                        {student?.last_name.slice(0, 1)}
                    </div>
                    <div>
                        <p className="text-lg font-medium">
                            {student?.first_name} {student?.last_name}
                        </p>
                        <p className="text-[#8C8C98]">{student?.role}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
