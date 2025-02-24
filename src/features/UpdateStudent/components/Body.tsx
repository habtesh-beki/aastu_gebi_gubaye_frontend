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
    { value: "ef7d3e8a-2034-4d03-816d-e694ac6d0e79", label: "Amharic" },
    { value: "f36bbaa6-0dbe-4b83-b63d-47e70b8b0f70", label: "Afan Oromo" },
    { value: "a144fe60-da72-466b-82ec-bd73e88c322e", label: "Tigrigna" },
];

const optionsService: Options<{ value: string; label: string }> = [
    { value: "43777475-7ff2-49fe-ac0f-71601b2a9b1f", label: "Mezemur" },
    { value: "b3df39d0-dee9-4824-81a0-1b1d92392f2c", label: "Timhirt" },
    { value: "fb857962-a705-4c5e-948e-778d23cd588c", label: "Muya" },
    { value: "f0481d3a-1a60-459e-9973-37e55529c1ca", label: "Bache" },
    { value: "e05a9b3a-5142-4f65-88b6-00f85e8856cd", label: "Plan" },
    { value: "34262273-5155-4bb9-8753-1340a600f4ee", label: "Audit" },
    { value: "790cb7e1-48f7-445a-923b-7266463f32f3", label: "Abalat" },
    { value: "7fe8b2ff-299b-4005-8f79-447abd3b3af1", label: "Hisab" },
    { value: "e59ea122-c91f-41fe-8d7e-e1fa7fe388de", label: "Lemat" },
    { value: "f53edf17-42ce-4855-b34c-917f6726b44d", label: "language" },
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
                            <SelectItem value="31e4ed2b-8a15-4b4d-852d-805f2d483b5c">
                                Electrical
                            </SelectItem>
                            <SelectItem value="af0905fc-3ae8-4672-a9aa-314c054254e7">
                                Software
                            </SelectItem>
                            <SelectItem value="607377c1-79a6-4d8d-aa88-e7c35e191d94">
                                Electro
                            </SelectItem>
                            <SelectItem value="5642c05f-bd40-449a-9322-5817a3631877">
                                Arch
                            </SelectItem>
                            <SelectItem value="5bf6384c-76e5-41a5-b183-4b0981b78033">
                                Environmental
                            </SelectItem>
                            <SelectItem value="2464f17a-336d-462e-9ec6-2639567c4a9c">
                                Food
                            </SelectItem>
                            <SelectItem value="3ccc6aeb-a0a0-44ce-b106-0f2de302975c">
                                Chemical
                            </SelectItem>
                            <SelectItem value="f3c1d465-d69f-431f-9c80-7d19e1f7ed22">
                                Civil
                            </SelectItem>
                            <SelectItem value="588cbae8-868c-45b6-9ac7-376013b0e2e9">
                                Mechanical
                            </SelectItem>
                            <SelectItem value="1d371b26-b1af-4268-a1c8-615edd124d41">
                                Biotechnology
                            </SelectItem>
                            <SelectItem value="93442573-6802-4c63-ac16-b15c9f132499">
                                Geology
                            </SelectItem>
                            <SelectItem value="690d7d7c-2ffc-4cd8-99c8-9aaff1d4c563">
                                Industrial
                            </SelectItem>
                            <SelectItem value="c03631a1-2f69-42b6-8ee1-0ba439507f10">
                                Mining
                            </SelectItem>
                            {/* <SelectItem value="0f324b57-a834-4eef-a5cd-954fa30101e3">
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
                            <SelectItem value="civil">Civil</SelectItem> */}
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
                            {...register("current_year")}
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
