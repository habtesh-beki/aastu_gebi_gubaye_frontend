import { faker } from "@faker-js/faker";
import { Data, columns } from "@/features/AllMembers/components/columns";
import { DataTable } from "@/features/AllMembers/components/DataTable";

import { FilterMembers } from "./components/FilterMembers";

function getData(): Data[] {
  const data = [];
  const departments = [
    "Electrical",
    "Mechanical",
    "Civil",
    "Software",
    "Electromechanical",
  ];
  const genders = ["M", "F"];

  for (let i = 0; i < 20; i++) {
    const entry = {
      id: `ETS${faker.string.numeric(4)}/${faker.string.numeric(2)}`,
      fullName: faker.person.fullName(),
      gender: faker.helpers.arrayElement(genders),
      phoneNumber: `09${faker.string.numeric(8)}`,
      department: faker.helpers.arrayElement(departments),
      service: `+${faker.string.numeric(1)}${faker.string.alpha({
        length: 3,
        casing: "upper",
      })}+ ${faker.string.alpha({ length: 3, casing: "mixed" })}`,
    };
    data.push(entry);
  }
  return data;
}

export default function AllMembers() {
  const data = getData();
  console.log(data);

  return (
    <div className="container mx-auto pt-32 pb-12 px-8 space-y-12">
      <FilterMembers />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
