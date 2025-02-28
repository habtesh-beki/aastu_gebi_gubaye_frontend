import image from "@/assets/profile.jpg";
import axios from "axios";
import { Separator } from "@/shared/components/ui/separator";
import {
    BookOpenCheck,
    Globe,
    GraduationCap,
    Mail,
    Phone,
    User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ENV } from "@/shared/utils/env";

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
// import { useState } from "react";
export default function MyProfile() {
    const [student, setStudent] = useState<Istudent>();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("auth-token");
    useEffect(() => {
        axios
            .get(ENV.apiBaseURL + "/api/student/logedin/person", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setStudent(response.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [token]);
    if (loading) {
        return <div> Loading... </div>;
    }
    if (!student) {
        return <div>Error occured.</div>;
    }
    return (
        <div className="flex justify-center h-3/4 items-center mt-36 w-full ">
            <div className="w-11/12 h-full bg-white px-16 py-4 rounded-md ">
                <div>
                    <h1 className="text-5xl font-bold mb-4 pt-5">
                        Member Profile
                    </h1>
                    <div className="flex justify-start items-center mx-10">
                        <img
                            className="w-40 h-40"
                            src={image}
                            alt="profile image"
                        />
                        <div className="flex flex-col justify-between">
                            <span className="text-2xl font-bold">
                                {student.first_name} {student.last_name}
                            </span>
                            <span>
                                {student.department.department}
                                {"  "}
                                {student.current_year}
                            </span>
                        </div>
                    </div>
                </div>

                <Separator className="my-4" />
                <div className="flex justify-between py-7 text-xl">
                    <div>
                        <div className="mb-4">
                            <span className="flex font-bold gap-3 mb-1">
                                <User /> <span>Full Name</span>
                            </span>
                            <span>
                                {student.first_name} {student.last_name}
                            </span>
                        </div>
                        <div>
                            <span className="flex font-bold gap-3 mb-1">
                                <Mail /> <span>Email</span>
                            </span>
                            <span>{student.email ? student.email : "-"}</span>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <span className="flex font-bold gap-3 mb-2">
                                <GraduationCap />
                                <span>Student Id</span>
                            </span>
                            <span>{student.student_id}</span>
                        </div>
                        <div>
                            <span className="flex font-bold gap-3 mb-2">
                                <Phone /> <span>Phone Number</span>
                            </span>
                            <span>{student.phone_number}</span>
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="py-5 ">
                    <span className="flex font-bold gap-3 mb-3">
                        <Globe /> Language
                    </span>
                    <div className="flex gap-2">
                        {student.language?.map((lang) => (
                            <span className="text-white bg-blue-500 rounded-md px-4 py-1">
                                {lang.name}
                            </span>
                        ))}
                    </div>
                </div>
                <Separator />
                <div className="pt-6">
                    <span className="flex font-bold gap-3 mb-3">
                        <BookOpenCheck /> <span>Service</span>
                    </span>
                    {student.service?.map((serv) => (
                        <span className="text-white bg-blue-500 rounded-md px-4 py-1">
                            {serv.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
