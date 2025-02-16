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
        <ScrollArea className="flex flex-col gap-2">
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
                        <SelectItem value="mechanical">Mechanical</SelectItem>
                        <SelectItem value="arch">Arch</SelectItem>
                        <SelectItem value="environmental">
                            Environmental
                        </SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="chemical">Chemical</SelectItem>
                        <SelectItem value="civil">Civil</SelectItem>
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
                        <SelectItem value="temehert">temehert</SelectItem>
                        <SelectItem value="bache">Bache</SelectItem>
                        <SelectItem value="mezemur">Mezemur</SelectItem>
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
