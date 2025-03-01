import { ScrollArea } from "@/shared/components/ui/scroll-area";
import Mselect, { MultiValue } from "react-select";
import {
    optionslanguage,
    optionsService,
    department,
} from "@/shared/utils/DataOptions";
import {
    Control,
    Controller,
    UseFormRegister,
    UseFormSetValue,
} from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/components/ui/select";
import { Input } from "../../../shared/components/ui/input";

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
export type Data = {
    id: string;
    uid: string;
    first_name: string;
    last_name: string;
    fullName: string;
    baptismal_name: string;
    gender: string;
    student_id: string;
    department: string;
    service: { id: string; name: string }[];
    language: { id: string; name: string }[];
    current_year: string;
    password: string;
    confession: string;
    role: string;
    phone_number: string;
    phoneNumber: string;
    email: string;
};
export default function Body({
    register,
    control,
    setValue,
    students,
}: {
    register: UseFormRegister<Inputs>;
    control: Control<Inputs, any>;
    setValue: UseFormSetValue<Inputs>;
    students: Data;
}) {
    return (
        <ScrollArea className="flex-grow border-1 bg-white border-red-500 border-solid pl-9 pr-7">
            <div className="flex items-center gap-3">
                <h5 className="mt-3 font-bold">User Info</h5>
                <hr className="flex-grow  h-2 mt-4" />
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 mt-5 p-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="">
                        First Name
                    </label>
                    <Input
                        {...register("first_name")}
                        className="focus-visible:ring-blue-600"
                        defaultValue={students.first_name}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Last Name</label>
                    <Input
                        {...register("last_name")}
                        className="focus-visible:ring-blue-600"
                        defaultValue={students.last_name}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Babtismal Name</label>
                    <Input
                        {...register("baptismal_name")}
                        className="focus-visible:ring-blue-600"
                        defaultValue={students.baptismal_name}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Gender</label>
                    <Select
                        onValueChange={(value) => setValue("gender", value)}
                        defaultValue={students.gender}
                    >
                        <SelectTrigger
                            {...register("gender")}
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
                    <label htmlFor="">Student Id</label>
                    <Input
                        {...register("student_id")}
                        className="focus-visible:ring-blue-600"
                        defaultValue={students.student_id}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Department</label>
                    <Select
                        onValueChange={(value) => setValue("department", value)}
                        defaultValue={students.department}
                    >
                        <SelectTrigger
                            {...register("department")}
                            className="focus:ring-blue-600"
                            defaultValue={students.department}
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
                        defaultValue={students.current_year}
                    >
                        <SelectTrigger
                            {...register("current_year")}
                            className="focus:ring-blue-600"
                        >
                            <SelectValue placeholder="current year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="freshman">Freshman</SelectItem>
                            <SelectItem value="second_year">
                                second_year
                            </SelectItem>
                            <SelectItem value="thrid_year">
                                thrid_year
                            </SelectItem>
                            <SelectItem value="fourth_year">
                                fourth_year
                            </SelectItem>
                            <SelectItem value="last_year">last_year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">password</label>
                    <Input
                        {...register("password")}
                        type="password"
                        className="focus-visible:ring-blue-600"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Language</label>
                    <Controller
                        name="language"
                        control={control}
                        defaultValue={[]}
                        render={({ field }) => (
                            <Mselect
                                {...field}
                                //
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
                    <label htmlFor="">Serivce</label>
                    <Controller
                        name="service"
                        control={control}
                        defaultValue={[]}
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
                    <label htmlFor="">Role</label>
                    <Select
                        onValueChange={(value) => setValue("role", value)}
                        defaultValue={students.role}
                    >
                        <SelectTrigger
                            {...register("role")}
                            className="focus:ring-blue-600"
                        >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="std-user">student</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="Super-admin">
                                Super Admin
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Email</label>
                    <Input
                        {...register("email")}
                        type="email"
                        placeholder="Optional"
                        className="focus-visible:ring-blue-600"
                        defaultValue={students.email}
                    />
                </div>
            </div>
            <div className="mt-5">
                <div className="flex">
                    <h2 className="font-bold mr-3">Contact Info</h2>
                    <hr className="flex-grow mt-3" />
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 p-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="">
                            phone Number
                        </label>
                        <Input
                            {...register("phone_number")}
                            className="focus-visible:ring-blue-600"
                            defaultValue={students.phone_number}
                        />
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}
