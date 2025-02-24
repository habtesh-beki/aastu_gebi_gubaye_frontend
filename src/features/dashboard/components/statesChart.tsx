import { ProcessData } from "@/shared/utils/processData";
import { useState } from "react";

export function Header() {
    const [isLoading, setIsLoding] = useState(true);
    const [studentValue, setStudentValue] = useState<number>();
    const [serviceStudent, setServiceStudent] = useState<number>();

    const processStudentData = async () => {
        const Students = Object.values((await ProcessData()).byCurrentYear);
        const StudentOnService = Object.values((await ProcessData()).byService);
        const serviceValue = StudentOnService.reduce(
            (acc, cur) => acc + cur.total,
            0
        );
        const value = Students.reduce((acc, cur) => acc + cur.total, 0);
        console.log(value);
        setStudentValue(value);
        setServiceStudent(serviceValue);
        setIsLoding(false);
    };
    processStudentData();

    const headerData = [
        {
            title: "Total Student",
            value: isLoading ? "_" : studentValue,
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
        <div className="grid grid-cols-3 gap-3 mb-4 rounded-md  w-ful ">
            {headerData.map((data) => (
                <div className="flex justify-between bg-white p-3 text-xl rounded-md py-7">
                    <h1 className="text-[#b4b4b4]">{data.title}</h1>
                    <span className="text-3xl">{data.value}</span>
                </div>
            ))}
        </div>
    );
}
