import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollArea } from "@/shared/components/ui/scroll-area";

export default function Filter(){
    return (
        <div className="flex bg-white flex-col h-3/5 w-96 absolute top-1/4 left-1/3 border rounded-lg shadow-lg">
         <Header />
         <ScrollArea className="flex flex-col gap-2 py-4 px-4">
          <div className="px-2 mb-3">
            <p className="mb-2">Department</p>
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
          <div className="px-2 mb-3">
          <p className="mb-2">Gender</p>
            <Select>
                    <SelectTrigger className="focus:ring-blue-600">
                     <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                 <SelectContent>
                     <SelectItem value="std-user">Male</SelectItem>
                     <SelectItem value="admin">Female</SelectItem>
                 </SelectContent>
                </Select>
          </div>
          <div className="px-2 mb-3">
          <p className="mb-2">Year</p>
            <Select>
                    <SelectTrigger className="focus:ring-blue-600">
                     <SelectValue placeholder="Year" />
                    </SelectTrigger>
                 <SelectContent>
                     <SelectItem value="first">1st Year</SelectItem>
                     <SelectItem value="second">2nd year</SelectItem>
                     <SelectItem value="thired">3rd year</SelectItem>
                     <SelectItem value="fourth">4th year</SelectItem>
                     <SelectItem value="fivth">5th year</SelectItem>
                 </SelectContent>
                </Select>
          </div>
          <div className="px-2 mb-3">
          <p className="mb-2">Role</p>
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
          <div className="px-2 mb-3">
          <p className="mb-2">Service</p>
            <Select>
                    <SelectTrigger className="focus:ring-blue-600">
                     <SelectValue placeholder="Service" />
                    </SelectTrigger>
                 <SelectContent>
                     <SelectItem value="temehert">temehert</SelectItem>
                     <SelectItem value="bache">Bache</SelectItem>
                     <SelectItem value="mezemur">Mezemur</SelectItem>
                 </SelectContent>
                </Select>
          </div>
          <div className="px-2 mb-3">
          <p className="mb-2">Sort By</p>
            <Select>
                    <SelectTrigger className="focus:ring-blue-600">
                     <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                 <SelectContent>
                     <SelectItem value="std-user">name</SelectItem>
                     <SelectItem value="admin">year</SelectItem>
                     <SelectItem value="Super-admin">Student ID</SelectItem>
                 </SelectContent>
                </Select>
          </div>
         </ScrollArea>
         <Footer />
        </div> 
    )
}