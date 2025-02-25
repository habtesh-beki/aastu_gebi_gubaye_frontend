import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data } from "@/features/Admins/components/ConfessionFatherColumns";

export default function useGetConfessionFathers() {

  type ConfessionFather = {
    id: string;
    first_name: string;
    last_name: string;
    phoneNumber: string;
  };

  const token = localStorage.getItem("auth-token");

  return useQuery({
    queryKey: ["confessionFather"], queryFn: async (): Promise<Data[]> => {

      const options = {
        method: "GET",
        url: "http://localhost:3000/api/confession",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      let response;
      try {
         response = await axios.request(options).then((data) => {
          return data.data.data.confession.map((confessionFather: ConfessionFather) => {
            return {
                firstName: confessionFather.first_name,
                lastName: confessionFather.last_name,
                phoneNumber: confessionFather.phoneNumber
            }
          });
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
