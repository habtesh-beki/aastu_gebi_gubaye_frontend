import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data } from "@/features/Admins/components/ServicesColumns";

export default function useGetService() {
    type Service = {
        id: string;
        name: string;
    };

    const token = localStorage.getItem("auth-token");

    return useQuery({
        queryKey: ["serviceName"],
        queryFn: async (): Promise<Data[]> => {
            const options = {
                method: "GET",
                url: "https://aastu-gibi-gubaye-api.onrender.com/api/service",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            let response;
            try {
                response = await axios.request(options).then((data) => {
                    return data.data.data.map((service: Service, i: number) => {
                        return {
                            number: i + 1,
                            serviceName: service.name,
                        };
                    });
                });
            } catch (error) {
                throw new Error(`Service Fetching Error: ${error}`);
            }

            return response;
        },
    });
}
