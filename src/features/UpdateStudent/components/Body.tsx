import { ScrollArea } from "@/shared/components/ui/scroll-area";
import Mselect, { MultiValue, Options } from "react-select";
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

const optionslanguage: Options<{ value: string; label: string }> = [
    { value: "2d4e2350-a78c-4f24-ae01-e56d3d22e5d9", label: "Amharic" },
    { value: "1049a5c8-4304-4a01-9c94-bc1dc2336764", label: "Afan Oromo" },
    { value: "6ab72587-19de-4623-8285-a78e384af68e", label: "Tigrigna" },
];

const optionsService: Options<{ value: string; label: string }> = [
    { value: "bach", label: "bach" },
    { value: "temehert", label: "temehert" },
    { value: "begena", label: "Begena" },
    { value: "mezmure", label: "Mezemur" },
];

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

export default function Body({
    register,
    control,
    setValue,
}: {
    register: UseFormRegister<Inputs>;
    control: Control<Inputs, any>;
    setValue: UseFormSetValue<Inputs>;
}) {
    return (
        <ScrollArea className="flex-grow border-1 bg-white border-red-500 border-solid pl-9 pr-7">
            <div className="flex items-center gap-3">
                <h5 className="mt-3 font-bold">User Info</h5>
                <hr className="flex-grow  h-2 mt-4" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5 p-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="">
                        First Name
                    </label>
                    <Input
                        {...register("first_name")}
                        className="focus-visible:ring-blue-600"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Last Name</label>
                    <Input
                        {...register("last_name")}
                        className="focus-visible:ring-blue-600"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Babtismal Name</label>
                    <Input
                        {...register("baptismal_name")}
                        className="focus-visible:ring-blue-600"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Gender</label>
                    <Select
                        onValueChange={(value) => setValue("gender", value)}
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
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Department</label>
                    <Select
                        onValueChange={(value) => setValue("department", value)}
                    >
                        <SelectTrigger
                            {...register("department")}
                            className="focus:ring-blue-600"
                        >
                            <SelectValue placeholder="Department" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0f324b57-a834-4eef-a5cd-954fa30101e3">
                                Electrical
                            </SelectItem>
                            <SelectItem value="4d43f617-70e4-4856-9f5d-811bba9663d5">
                                Software
                            </SelectItem>
                            <SelectItem value="mechanical">
                                Mechanical
                            </SelectItem>
                            <SelectItem value="arch">Arch</SelectItem>
                            <SelectItem value="environmental">
                                Environmental
                            </SelectItem>
                            <SelectItem value="industrial">
                                Industrial
                            </SelectItem>
                            <SelectItem value="chemical">Chemical</SelectItem>
                            <SelectItem value="civil">Civil</SelectItem>
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
                            <SelectItem value="freshman">Freshman</SelectItem>
                            <SelectItem value="sophomore">sophomore</SelectItem>
                            <SelectItem value="junior">junior</SelectItem>
                            <SelectItem value="senior">senior</SelectItem>
                            <SelectItem value="lastyear">last year</SelectItem>
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
                    <Select onValueChange={(value) => setValue("role", value)}>
                        <SelectTrigger
                            {...register("role")}
                            className="focus:ring-blue-600"
                        >
                            <SelectValue placeholder="Role" />
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
                    />
                </div>
            </div>
            <div className="mt-5">
                <div className="flex">
                    <h2 className="font-bold mr-3">Contact Info</h2>
                    <hr className="flex-grow mt-3" />
                </div>
                <div className="grid grid-cols-2 gap-4 p-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="">
                            phone Number
                        </label>
                        <Input
                            {...register("phone_number")}
                            className="focus-visible:ring-blue-600"
                        />
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}
