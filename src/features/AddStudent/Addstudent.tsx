import axios from "axios";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Mselect, { MultiValue } from "react-select";
import {
    optionslanguage,
    optionsService,
    department,
} from "@/shared/utils/DataOptions";

import { ScrollArea } from "@/shared/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/components/ui/select";

import { Input } from "../../shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "@/shared/utils/capitalizeFirstLitter";
import { handleError } from "@/shared/utils/handleError";

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

type ConfessionT = {
    id: string;
    first_name: string;
    last_name: string;
};

export default function AddStudent() {
    const [confessionObj, setConfession] = useState<ConfessionT[]>([]);
    const [studentAdd, setStudentAdd] = useState<boolean>(false);
    // const [error, setError] = useState();
    const { register, handleSubmit, setValue, control, reset } =
        useForm<Inputs>();

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/confession")
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                const confessionArray = jsonData.data.confession;
                return confessionArray;
            })
            .then((data) => {
                setConfession(data);
            })
            .catch((error) => {
                console.log(error);
                // setError(error);
            });
    }, []);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const language = data.language.map((lang) => lang.value);
        const service = data.service.map((service) => service.value);
        const student_id = data.student_id.toLocaleUpperCase();
        const first_name = capitalizeFirstLetter(data.first_name);
        const last_name = capitalizeFirstLetter(data.last_name);
        const studentData = {
            ...data,
            first_name,
            last_name,
            student_id,
            language,
            service,
        };
        const token = localStorage.getItem("auth-token");
        try {
            await axios.post("http://127.0.0.1:3000/api/student", studentData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setStudentAdd(true);
            alert("student added");
            reset();
        } catch (error: any) {
            const errorMessage = handleError(error.response.data.message);
            console.error(error.response.data);
            alert(errorMessage);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col rounded-lg overflow-hidden"
        >
            <div className="flex items-center pl-9 p-4 h-20 bg-bg_btn">
                <h2 className="text-xl text-white font-bold">Add Student</h2>
            </div>
            <ScrollArea className="flex-grow border-1 bg-white border-red-500 border-solid pl-9 pr-7">
                <div className="flex items-center gap-3">
                    <h5 className="mt-3 font-bold">User Info</h5>
                    <hr className="flex-grow  h-2 mt-4" />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 mt-5 p-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            First Name
                        </label>
                        <Input
                            {...register("first_name", { required: true })}
                            className="focus-visible:ring-blue-600"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Last Name
                        </label>
                        <Input
                            {...register("last_name", { required: true })}
                            className="focus-visible:ring-blue-600"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Babtismal Name
                        </label>
                        <Input
                            {...register("baptismal_name")}
                            className="focus-visible:ring-blue-600"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Gender
                        </label>
                        <Select
                            onValueChange={(value) => setValue("gender", value)}
                        >
                            <SelectTrigger
                                {...register("gender", { required: true })}
                                className="focus:ring-blue-600"
                            >
                                <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Student Id
                        </label>
                        <Input
                            {...register("student_id", { required: true })}
                            className="focus-visible:ring-blue-600"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Department
                        </label>
                        <Select
                            onValueChange={(value) =>
                                setValue("department", value)
                            }
                        >
                            <SelectTrigger
                                {...register("department", { required: true })}
                                className="focus:ring-blue-600"
                            >
                                <SelectValue placeholder="Department" />
                            </SelectTrigger>
                            <SelectContent>
                                {department.map((dep) => (
                                    <SelectItem value={dep.value}>
                                        {dep.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            current year
                        </label>
                        <Select
                            onValueChange={(value) =>
                                setValue("current_year", value)
                            }
                        >
                            <SelectTrigger
                                {...register("current_year", {
                                    required: true,
                                })}
                                className="focus:ring-blue-600"
                            >
                                <SelectValue placeholder="current year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="freshman">
                                    Freshman
                                </SelectItem>
                                <SelectItem value="sophomore">
                                    sophomore
                                </SelectItem>
                                <SelectItem value="junior">junior</SelectItem>
                                <SelectItem value="senior">senior</SelectItem>
                                <SelectItem value="lastyear">
                                    last year
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            password
                        </label>
                        <Input
                            {...register("password")}
                            type="password"
                            className="focus-visible:ring-blue-600"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Language
                        </label>
                        <Controller
                            name="language"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <Mselect
                                    {...field}
                                    defaultValue={[optionslanguage[1]]}
                                    isMulti
                                    name="language"
                                    options={optionslanguage}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Serivce
                        </label>
                        <Controller
                            name="service"
                            control={control}
                            render={({ field }) => (
                                <Mselect
                                    {...field}
                                    defaultValue={[optionsService[1]]}
                                    isMulti
                                    name="service"
                                    options={optionsService}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            Role
                        </label>
                        <Select
                            onValueChange={(value) => setValue("role", value)}
                        >
                            <SelectTrigger
                                {...register("role")}
                                className="focus:ring-blue-600"
                            >
                                <SelectValue placeholder="Role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="std-user">
                                    student
                                </SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="Super-admin">
                                    Super Admin
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#7D807C]">
                            confession father
                        </label>
                        <Select
                            onValueChange={(value) =>
                                setValue("confession", value)
                            }
                        >
                            <SelectTrigger
                                {...register("confession")}
                                className="focus:ring-blue-600"
                            >
                                <SelectValue placeholder="confession father" />
                            </SelectTrigger>
                            <SelectContent>
                                {confessionObj.length > 0 ? (
                                    confessionObj.map((conf) => (
                                        <SelectItem
                                            key={conf.id}
                                            value={conf.id}
                                        >
                                            {conf.first_name} {conf.last_name}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <p>No options available</p>
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex">
                        <h2 className="font-bold mr-3">Contact Info</h2>
                        <hr className="flex-grow mt-3" />
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 p-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-[#7D807C]">
                                phone Number
                            </label>
                            <Input
                                {...register("phone_number", {
                                    pattern: /(\+251|0)[0-9]{9}/,
                                })}
                                placeholder="phone number"
                                className="focus-visible:ring-blue-600"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-[#7D807C]">
                                Email
                            </label>
                            <Input
                                {...register("email")}
                                placeholder="Optional"
                                className="focus-visible:ring-blue-600"
                            />
                        </div>
                    </div>
                </div>
                {studentAdd && (
                    <p className="text-green-500">student registred</p>
                )}
                <Button
                    type="submit"
                    className="my-4 bg-bg_btn hover:bg-blue-500"
                >
                    Add Student
                </Button>
            </ScrollArea>
        </form>
    );
}
