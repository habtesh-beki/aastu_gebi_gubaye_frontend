import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/components/ui/select";

import { ScrollArea } from "@/shared/components/ui/scroll-area";

interface BodyProps {
    register: UseFormRegister<Inputs>;
    setValue: UseFormSetValue<Inputs>;
}

type Inputs = {
    gender: string;
    department: string;
    service: string;
    current_year: string;
    password: string;
    role: string;
    sort: string;
    keyword: "";
    page: "1";
    // year: "";
};

export default function Body({ register, setValue }: BodyProps) {
    return (
        <ScrollArea className="grid gap-2">
            <div className="px-2 mb-4">
                <p className="mb-2 ml-2 text-[#7D807C]">Department</p>
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
                        <SelectItem value="Electrical">Electrical</SelectItem>
                        <SelectItem value="Software">Software</SelectItem>
                        <SelectItem value="Mechanical">Mechanical</SelectItem>
                        <SelectItem value="Archticture">Arch</SelectItem>
                        <SelectItem value="Environmental">
                            Environmental
                        </SelectItem>
                        <SelectItem value="Industrial">Industrial</SelectItem>
                        <SelectItem value="Chemical">Chemical</SelectItem>
                        <SelectItem value="Civil">Civil</SelectItem>
                        <SelectItem value="ElectroMechanical">
                            Electro
                        </SelectItem>
                        <SelectItem value="Food">Food</SelectItem>
                        <SelectItem value="Biotechnology">
                            Biotechnology
                        </SelectItem>
                        <SelectItem value="Geology">Geology</SelectItem>
                        <SelectItem value="Mining">Minig</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="px-2 mb-4">
                <p className="mb-2 ml-2 text-[#7D807C]">Gender</p>
                <Select onValueChange={(value) => setValue("gender", value)}>
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
            <div className="px-2 mb-4">
                <p className="mb-2 ml-2 text-[#7D807C]">Year</p>
                <Select
                    onValueChange={(value) => setValue("current_year", value)}
                >
                    <SelectTrigger
                        {...register("current_year")}
                        className="focus:ring-blue-600"
                    >
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="freshman">1st Year</SelectItem>
                        <SelectItem value="sophomore">2nd year</SelectItem>
                        <SelectItem value="junior">3rd year</SelectItem>
                        <SelectItem value="senior">4th year</SelectItem>
                        <SelectItem value="lastyear">5th year</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="px-2 mb-4">
                <p className="mb-2 ml-2 text-[#7D807C]">Role</p>
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
                        <SelectItem value="Super-admin">Super Admin</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="px-2 mb-4">
                <p className="mb-2 ml-2 text-[#7D807C]">Service</p>
                <Select onValueChange={(value) => setValue("service", value)}>
                    <SelectTrigger
                        {...register("service")}
                        className="focus:ring-blue-600"
                    >
                        <SelectValue placeholder="Service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Timihert">temehert</SelectItem>
                        <SelectItem value="Bache">Bache</SelectItem>
                        <SelectItem value="Mezemur">Mezemur</SelectItem>
                        <SelectItem value="Plan">Plan</SelectItem>
                        <SelectItem value="Muya">Muya</SelectItem>
                        <SelectItem value="Audit">Audit</SelectItem>
                        <SelectItem value="Abalat">Abalat</SelectItem>
                        <SelectItem value="Hisab">Hisab</SelectItem>
                        <SelectItem value="Lemat">Lemat</SelectItem>
                        <SelectItem value="Language">Languge</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="px-2 mb-2">
                <p className="mb-2 ml-2 text-[#7D807C]">Sort By</p>
                <Select onValueChange={(value) => setValue("sort", value)}>
                    <SelectTrigger
                        {...register("sort")}
                        className="focus:ring-blue-600"
                    >
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="first_name">name</SelectItem>
                        <SelectItem value="current_year">year</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </ScrollArea>
    );
}
