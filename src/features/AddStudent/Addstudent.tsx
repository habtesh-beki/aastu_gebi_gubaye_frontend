import axios from "axios";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Mselect, { MultiValue, Options } from "react-select";

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
// import { useState } from "react";

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
  phone_number: number;
  email: string;
};

type ConfessionT = {
  id: string;
  first_name: string;
  last_name: string;
};

const optionslanguage: Options<{ value: string; label: string }> = [
  { value: "2d4e2350-a78c-4f24-ae01-e56d3d22e5d9", label: "Amharic" },
  { value: "1049a5c8-4304-4a01-9c94-bc1dc2336764", label: "Afan Oromo" },
  { value: "6ab72587-19de-4623-8285-a78e384af68e", label: "Tigrigna" },
];

const optionsService: Options<{ value: string; label: string }> = [
  { value: "bach", label: "bach" },
  { value: "temehert", label: "temehert" },
  { value: "begena", label: "Begena" },
  { value: "78f85e2b-0096-497c-b274-781c3fbc6330", label: "Mezemur" },
];

export default function AddStudent() {
  const [confessionObj, setConfession] = useState<ConfessionT[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();

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
      });
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let language = data.language.map((lang) => lang.value);
    let service = data.service.map((service) => service.value);
    const studentData = { ...data, language, service };

    console.log(confessionObj);
    try {
      await axios.post("http://127.0.0.1:3000/api/student", studentData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("there is error", error);
    }
    console.log({ ...data, language, service });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-2/4 w-2/5 rounded-md absolute top-1/4 left-1/3 shadow-2xl "
    >
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
            <Input
              {...register("first_name")}
              className="focus-visible:ring-blue-600"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Last Name
            </label>
            <Input
              {...register("last_name")}
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
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Student Id
            </label>
            <Input
              {...register("student_id")}
              className="focus-visible:ring-blue-600"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              Department
            </label>
            <Select onValueChange={(value) => setValue("department", value)}>
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
            <Input
              {...register("current_year")}
              className="focus-visible:ring-blue-600"
            />
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
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#7D807C]">
              confession
            </label>
            <Select onValueChange={(value) => setValue("confession", value)}>
              <SelectTrigger
                {...register("confession")}
                className="focus:ring-blue-600"
              >
                <SelectValue placeholder="confession" />
              </SelectTrigger>
              <SelectContent>
                {confessionObj.length > 0 ? (
                  confessionObj.map((conf) => (
                    <SelectItem key={conf.id} value={conf.id}>
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
          <div className="grid grid-cols-2 gap-4 p-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-[#7D807C]">
                phone Number 1
              </label>
              <Input
                {...register("phone_number")}
                placeholder="Optional"
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
        <Button
          type="submit"
          className="mt-4 mb-4 w-24 ml-1/3 bg-bg_btn hover:bg-blue-500"
        >
          Add Student
        </Button>
      </ScrollArea>
    </form>
  );
}
