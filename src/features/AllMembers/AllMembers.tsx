import { useEffect, useState } from "react";
import axios from "axios";

import { Data, columns } from "@/features/AllMembers/components/columns";
import { DataTable } from "@/shared/components/DataTable/DataTable";
import { FilterMembers } from "./components/FilterMembers";

type Student = {
  id: string;
  first_name: string;
  last_name: string;
  baptismal_name: string;
  gender: string;
  student_id: string;
  department: { id: string; department: string };
  service: { id: string; name: string }[];
  language: { id: string; name: string }[];
  current_year: string;
  password: string;
  confession: string;
  role: string;
  phone_number: string;
  email: string;
};

export default function AllMembers() {
  const [data, setData] = useState<Data[] | string>([]);
  useEffect(() => {
    async function getData(): Promise<Data[] | string> {
      const token = localStorage.getItem("auth-token");

      const options = {
        method: "GET",
        url: "http://localhost:3000/api/student",
        params: { page: "1" },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let data: Student[];
      let returnVal: Data[] | string;
      async function fetchData(): Promise<Data[] | string> {
        try {
          data = (await axios.request(options)).data.data.students;
          console.log("First: ", data);
          returnVal = data.map((student: Student) => {
            return {
              id: student.student_id.toUpperCase(),
              fullName: student.first_name + " " + student.last_name,
              gender: student.gender,
              phoneNumber: student.phone_number,
              department: student.department.department,
              role:
                student.role === "std-user"
                  ? "Standard User"
                  : student.role === "admin"
                  ? "Admin"
                  : "Super Admin",
            };
          });
        } catch (error) {
          returnVal = `Error: ${error}`;
        }
        console.log("return value: ", returnVal);
        return returnVal;
      }
      const fetchedData = await fetchData();
      setData(fetchedData);
      console.log("Fetched Data: ", fetchedData);
      return fetchedData;
    }
    getData();
  }, []);

  return (
    <div className="container mx-auto pt-32 pb-12 px-8 space-y-12">
      <FilterMembers />
      {typeof data === "string" ? (
        "ERROR"
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
