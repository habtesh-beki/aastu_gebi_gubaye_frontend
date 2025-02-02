import { faker } from "@faker-js/faker";
import { Data, columns } from "@/features/AllMembers/components/columns";
import { DataTable } from "@/shared/components/DataTable/DataTable";

import { FilterMembers } from "./components/FilterMembers";
// import { useEffect, useState } from "react";
// import axios from "axios";

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
  //   const [data, setData] = useState(null)
  //   const [loading, setLoading] = useState(true)
  //   const [error ,setError] = useState()

  //  useEffect(() => {
  //   const apiURL = 'http://127.0.0.1:3000/api/student'

  //   axios.get(apiURL).then((response) => {
  //     setData(response)
  //     setLoading(false)
  //     setError('')
  //   }).catch((err) => {
  //     setError(err)
  //   })
  //  })
  const data = getData();
  console.log(data);

  return (
    <div className="container mx-auto pt-32 pb-12 px-8 space-y-12">
      <FilterMembers />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
