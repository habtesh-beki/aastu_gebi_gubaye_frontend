import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data } from "@/features/AllMembers/components/columns";
import { useFetchParams } from "@/features/AllMembers/context/filterParamContex";

export default function useGetStudent() {

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

  const token = localStorage.getItem("auth-token");
  const { fetchParams } = useFetchParams();

  return useQuery({
    queryKey: ["students", fetchParams], queryFn: async (): Promise<Data[]> => {
      console.log(fetchParams);

      const options = {
        method: "GET",
        url: "http://localhost:3000/api/student",
        params: fetchParams,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let response;
      try {
        response = await axios.request(options).then((data) => {
          return data.data.data.students.map((student: Student) => {
            return {
              ...student,
              uid: student.id,
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
          })
        })
      } catch (error) {
        response = `Error: ${error}`;
      }

      console.log("!!!!!!!!!!!!!!!!!!!!");
      console.log(response);

      return response;
    }
  })
}
