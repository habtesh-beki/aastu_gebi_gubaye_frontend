import { useForm, SubmitHandler } from "react-hook-form";
import { useFetchParams } from "@/features/AllMembers/context/filterParamContex";

import { ListFilter, FileSpreadsheet, Search } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/shared/components/ui/dialog";
import {
  FilterHeader,
  FilterBody,
  FilterFooter,
} from "@/features/Filter/Filter";

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
  year: "";
};

export function FilterMembers() {
  const { register, reset, handleSubmit, setValue } = useForm<Inputs>({});
  const { setFetchParams } = useFetchParams();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const sort = data.sort === "" ? "first_name" : data.sort;
    const paramData = { ...data, sort };
    setFetchParams(paramData);
  };

  const handleCancel = () => {
    setFetchParams({
      page: "1",
      department: "",
      gender: "",
      year: "",
      role: "",
      service: "",
      sort: "first_name",
      keyword: "",
    });
    reset({
      page: "1",
      department: "",
      gender: "",
      year: "",
      role: "",
      service: "",
      sort: "first_name",
      keyword: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg space-y-8">
      <h2 className="text-3xl">Students</h2>
      <div className="flex justify-between flex-col gap-6 min-[1100px]:gap-0 min-[1100px]:flex-row">
        <div className="w-full lg:w-[400px] bg-blue-50 rounded-lg px-4 py-4 has-[:focus]:ring-blue-700 has-[:focus]:ring-2 has-[:focus]:ring-offset-2 group flex items-center">
          <input
            type="text"
            {...register("keyword")}
            placeholder="Search by Name, email or phone number"
            className="flex-grow bg-blue-50 focus:outline-none"
          />
          <Search
            onClick={handleSubmit(onSubmit)}
            className="text-gray-300 cursor-pointer group-has-[:focus]:text-gray-600"
          />
        </div>
        <div className="text-blue-700 font-bold space-x-2 flex gap-4">
          <Dialog>
            <DialogTrigger className="text-md px-10 py-4 bg-blue-100 text-blue-700 flex gap-2 rounded-lg border-[2.5px] border-blue-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
              <ListFilter />
              Filter
            </DialogTrigger>
            <DialogContent className="p-0 overflow-hidden">
              <DialogHeader className="px-6 py-4 bg-bg_login">
                <FilterHeader />
              </DialogHeader>
              <div className="p-6">
                <FilterBody register={register} setValue={setValue} />
              </div>
              <DialogFooter className="px-6 py-4 bg-bg_login">
                <FilterFooter
                  onSubmit={handleSubmit(onSubmit)}
                  handleCancel={handleCancel}
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="px-6 py-4 bg-blue-100 text-blue-700 rounded-lg border-[2.5px] border-blue-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2">
              <FileSpreadsheet />
            </DialogTrigger>
            <DialogContent>Download student data in csv format</DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
