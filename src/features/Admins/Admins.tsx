import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { DataTable } from "@/shared/components/DataTable/DataTable";
import { faker } from "@faker-js/faker";
import {
  columns as ServiceColumns,
  Data as ServiceData,
} from "./components/ServicesColumns";
import {
  columns as ConfessionFatherColumns,
  Data as ConfessionFatherData,
} from "./components/ConfessionFatherColumns";
import AddStudent from "@/features/AddStudent/Addstudent";
import AddConfession from "@/features/Confession/AddConfession/AddConfession";

export default function Admins() {
  function getData(): ServiceData[] {
    const data = [];
    const services = ["Timihirt", "Bach", "Mezmur", "Alew Bewere", "Begena"];

    for (let i = 0; i < 20; i++) {
      const entry = {
        number: i + 1,
        serviceName: faker.helpers.arrayElement(services),
      };
      data.push(entry);
    }
    return data;
  }

  function getConfessionFatherData(): ConfessionFatherData[] {
    const data = [];
    for (let i = 0; i < 10; i++) {
      const entry = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: `09${faker.string.numeric(8)}`,
      };
      data.push(entry);
    }
    return data;
  }

  const services = getData();

  const ConfessionFathers = getConfessionFatherData();

  return (
    <Tabs
      defaultValue="account"
      className="container mx-auto pt-32 pb-12 px-8 space-y-6"
    >
      <TabsList className="bg-white h-12 p-2">
        <TabsTrigger value="account" className="text-base data-[state=active]:bg-blue-700 data-[state=active]:text-white">
          Add Member
        </TabsTrigger>
        <TabsTrigger value="password" className="text-base data-[state=active]:bg-blue-700 data-[state=active]:text-white">View Members</TabsTrigger>
      </TabsList>
      <div className="grid lg:grid-cols-2 items-start justify-stretch gap-6">
        <div className="">
          <TabsContent value="account">
            <AddStudent />
          </TabsContent>
          <TabsContent value="password">
            <DataTable columns={ServiceColumns} data={services} />
          </TabsContent>
        </div>
        <div className="">
          <TabsContent value="account">
            <AddConfession />
          </TabsContent>
          <TabsContent value="password">
            <DataTable
              columns={ConfessionFatherColumns}
              data={ConfessionFathers}
            />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
