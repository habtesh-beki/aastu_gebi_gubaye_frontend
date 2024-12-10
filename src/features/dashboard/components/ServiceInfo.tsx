// import { Button } from "@/shared/components/ui/button"
import { Button } from "@/shared/components/ui/button"
import { Separator } from "@/shared/components/ui/separator"

type Service = {
 id:string,
 name:string,
 member:number,
}

const ServiceList : Service[] = [
    {
        id:'temehert',
        name:'ትምህርት ክፍል',
        member:12
    },
    {
        id:'mezemur',
        name:'መዝሙር ክፍል',
        member:12
    },
    {
        id:'bache',
        name:'ባች ክፍል',
        member:12
    },
    {
        id:'genzeb',
        name:'ግንዘብ ክፍል',
        member:12
    },
    {
        id:'muya',
        name:'ሙያ ክፍል',
        member:12
    },
    {
        id:'abalat',
        name:'አባላት ክፍል',
        member:12
    },
]
export default function ServiceInfo(){
    return (
        <div className=" bg-white w-full rounded-lg p-6 mb-4">
           <h2 className="mt-4 text-3xl mb-4">የክፍላት መረጃ</h2>
           <Separator />
           <ul className="grid grid-cols-4 gap-6 m-10">
           {ServiceList.map((service) =>  
           <li className="flex flex-col justify-evenly items-center h-48 rounded-lg shdow-md border-l border-r border-b" key={service.id}>
            <h1 className="text-3xl">{service.name}</h1>
            <div className="flex gap-10 text-xl">
                <p>የአባላት ብዛት</p>
                <p>{service.member}</p>
            </div>
            <Button className="w-2/3 border-bg_btn text-xl" variant={"outline"}>ዝርዝር መረጃ</Button>
           </li>
           )}
           </ul>
        </div>
    )
}