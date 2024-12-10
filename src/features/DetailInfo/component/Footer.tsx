import { Button } from "@/shared/components/ui/button";

export default function Footer(){
return (
    <div className="flex justify-between items-center gap-2 pl-9 pr-9 p-4 h-20 bg-bg_login mt-auto">
       <Button className="text-red-600 w-2/3 bg-[#F79797] hover:bg-red-600 text-white border">Remove</Button>
       <Button className="bg-bg_btn hover:bg-blue-600 w-2/3">Edit</Button>
    </div>
)    
}