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
import { useState } from "react";
import MultiSelect from "./components/Multiselect";

export default function AddStudent() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="flex flex-col h-2/4 w-2/5 rounded-md absolute top-1/4 left-1/3 shadow-2xl ">
      <div className="flex items-center pl-9 p-4 h-20 bg-bg_login">
        <h2 className="text-xl text-bg_btn font-bold">Add new member</h2>
      </div>
      <ScrollArea className="flex-grow border-1 bg-white border-red-500 border-solid pl-9 pr-7">
        <div className="flex items-center gap-3">
          <h5 className="mt-3 font-bold">User Info</h5>
          <hr className="flex-grow  h-2 mt-4" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5 p-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              First Name
            </label>
            <Input className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Last Name
            </label>
            <Input className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Babtismal Name
            </label>
            <Input className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Gender
            </label>
            <Select>
              <SelectTrigger className="focus:ring-blue-600">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Male</SelectItem>
                <SelectItem value="dark">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Student Id
            </label>
            <Input className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Department
            </label>
            <Select>
              <SelectTrigger className="focus:ring-blue-600">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="Software">Software</SelectItem>
                <SelectItem value="mechanical">Mechanical</SelectItem>
                <SelectItem value="arch">Arch</SelectItem>
                <SelectItem value="environmental">Environmental</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="chemical">Chemical</SelectItem>
                <SelectItem value="civil">Civil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Year
            </label>
            <Input className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              password
            </label>
            <Input type="password" className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Language
            </label>
            <MultiSelect
              placeholder="Language"
              options={[
                { label: "Amharic", value: "amharic" },
                { label: "Afan Oromo", value: "afan oromo" },
              ]}
              selectedOptions={selectedItems}
              setSelectedOptions={setSelectedItems}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Serivce
            </label>
            <MultiSelect
              placeholder="Service"
              options={[
                { label: "Temehert", value: "Temehert" },
                { label: "Bache", value: "Bache" },
                { label: "muya", value: "muya" },
              ]}
              selectedOptions={selectedItems}
              setSelectedOptions={setSelectedItems}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Role
            </label>
            <Select>
              <SelectTrigger className="focus:ring-blue-600">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="std-user">student</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="Super-admin">Super Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              confession
            </label>
            <Input
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
              <label htmlFor="" className="text-[#7D807C]">
                phone Number 1
              </label>
              <Input
                placeholder="Optional"
                className="focus-visible:ring-blue-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#7D807C]">
                Phone Number 2
              </label>
              <Input
                placeholder="Optional"
                className="focus-visible:ring-blue-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#7D807C]">
                Email
              </label>
              <Input
                placeholder="Optional"
                className="focus-visible:ring-blue-600"
              />
            </div>
          </div>
        </div>
        <Button className="mt-4 mb-4 w-24 ml-80 bg-bg_btn hover:bg-blue-500">
          Add Student
        </Button>
      </ScrollArea>
    </div>
  );
}
