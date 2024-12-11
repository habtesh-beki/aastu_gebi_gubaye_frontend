import { ScrollArea } from "@/shared/components/ui/scroll-area";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

export default function AddConfession() {
  return (
    <div className="flex flex-col h-1/3 w-2/5 rounded-md absolute top-1/4 left-1/3 shadow-2xl">
      <div className="flex items-center pl-9 p-4 h-20 bg-bg_login">
        <h2 className="text-xl text-bg_btn font-bold">Add Confession Father</h2>
      </div>
      <ScrollArea className="flex-grow border-1 bg-white border-red-500 border-solid pl-9 pr-7">
        <div className="flex items-center gap-3">
          <h5 className="mt-3 font-bold">Father Info</h5>
          <hr className="flex-grow  h-2 mt-4" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5 p-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="">
              First Name
            </label>
            <Input className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Last Name</label>
            <Input className="focus-visible:ring-blue-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Phone Number</label>
            <Input
              placeholder="Optional"
              className="focus-visible:ring-blue-600"
            />
          </div>
        </div>
        <Button className="mt-4 mb-4  ml-80 bg-bg_btn hover:bg-blue-500">
          Add Confession Father
        </Button>
      </ScrollArea>
    </div>
  );
}
