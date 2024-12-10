import { Button } from "@/shared/components/ui/button"
import { Separator } from "@/shared/components/ui/separator"

type Service = {
 id:string,
 name:string,
 price:number | string,
}

const ServiceList : Service[] = [
    {
        id:'saline meheret',
        name:'ሰአሊነ ቅድስት',
        price:24
    },
    {
        id:'natan',
        name:'ናታን',
        price:50
    },
     {
        id:'dawit',
        name:'ዳዊት',
        price:100
    },
    {
        id:'adam',
        name:'አዳም',
        price:150
    },
   
    {
        id:'muya',
        name:'ኢፊሶን',
        price:200
    },
    {
        id:'abalat',
        name:'free',
        price:'free'
    },
]
export default function Alehubewere(){
    return (
        <div className=" bg-white w-full rounded-lg p-6">
           <h2 className="mt-4 text-3xl mb-4">አለሁ በወር መረጃ</h2>
           <Separator />
           <ul className="grid grid-cols-4 gap-6 m-10">
           {ServiceList.map((service) =>  
           <li className="flex flex-col justify-evenly items-center h-48 rounded-lg shdow-md border-l border-r border-b" key={service.id}>
            <h1 className="text-3xl">{service.name}</h1>
            <div className="flex gap-4 text-xl">
                <p>ክፍያ</p>
                <p>{service.price}</p>
            </div>
            <Button className="w-2/3 border-bg_btn text-xl" variant={"outline"}>ዝርዝር መረጃ</Button>
           </li>
           )}
           </ul>
        </div>
    )
}