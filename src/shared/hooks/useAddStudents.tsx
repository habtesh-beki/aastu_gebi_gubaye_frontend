import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useAddStudent() {
    type studentData = {
        first_name: string;
        last_name: string;
        baptismal_name: string;
        gender: string;
        student_id: string;
        department: string;
        service: string[];
        language: string[];
        current_year: string;
        password: string;
        confession: string;
        role: string;
        phone_number: string;
        email: string;
    };

    const token = localStorage.getItem("auth-token");
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (studentData: studentData) => {
            let response;

            const options = {
                method: "post",
                url: "http://127.0.0.1:3000/api/student",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: studentData,
            };

            try {
                response = await axios.request(options);
            } catch (error) {
                console.log(error);
                response = error.response.data.message;
            }
            console.log(response);
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["students"] });
        },
    });
}
