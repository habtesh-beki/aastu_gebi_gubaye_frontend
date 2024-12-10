import { ScrollArea } from "@/shared/components/ui/scroll-area"
import Alehubewere from "./components/AlehuBeWore"
import Header from "./components/Header"
import ServiceInfo from "./components/ServiceInfo"

export default function Dashboard(){
    return (
        <ScrollArea className="flex flex-col mt-24 ml-10 mr-10 w-full mb-10 ">
            <Header/>
            <ServiceInfo/>
            <Alehubewere/>
        </ScrollArea>
    )
}