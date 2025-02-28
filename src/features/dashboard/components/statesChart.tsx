import { ProcessData } from "@/shared/utils/processData";
import axios from "axios";
import { useEffect, useState } from "react";

export function Header() {
    const [isLoading, setIsLoding] = useState(true);
    const [, setStudentValue] = useState<number>();
    const [studentLength, setStudentLength] = useState();
    const [serviceStudent, setServiceStudent] = useState<number>();

    const processStudentData = async () => {
        const Students = Object.values((await ProcessData()).byCurrentYear);
        const StudentOnService = Object.values((await ProcessData()).byService);
        const serviceValue = StudentOnService.reduce(
            (acc, cur) => acc + cur.total,
            0
        );
        const value = Students.reduce((acc, cur) => acc + cur.total, 0);
        setStudentValue(value);
        setServiceStudent(serviceValue);
        setIsLoding(false);
    };
    processStudentData();
    const token = localStorage.getItem("auth-token");
    useEffect(() => {
        axios
            .get(
                "https://aastu-gibi-gubaye-api.onrender.com/api/student/stats/studentdata",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                setStudentLength(response.data.Studentlangth);
            })
            .catch((err) => {
                console.error(err);
            });
    });
    const headerData = [
        {
            title: "Total Student",
            value: isLoading ? "_" : studentLength,
        },
        {
            title: "Total students joined service",
            value: isLoading ? "_" : serviceStudent,
        },
        {
            title: "Total Service",
            value: 12,
        },
    ];
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-3 mb-4 rounded-md  w-ful ">
            {headerData.map((data) => (
                <div className="flex justify-between bg-white p-3 text-xl rounded-md py-7">
                    <h1 className="text-[#b4b4b4]">{data.title}</h1>
                    <span className="text-3xl">{data.value}</span>
                </div>
            ))}
        </div>
    );
}
