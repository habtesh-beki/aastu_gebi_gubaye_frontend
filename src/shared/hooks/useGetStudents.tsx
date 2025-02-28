import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Data } from "@/features/AllMembers/components/columns";
import { useFetchParams } from "@/features/AllMembers/context/filterParamContex";

export default function useGetStudent(pagination?: {
    pageIndex: number;
    pageSize: number;
}) {
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

    type returnType = {
        total: number;
        data: Data[];
    };

    const token = localStorage.getItem("auth-token");
    const { fetchParams } = useFetchParams();
    const pageIndex = pagination?.pageIndex ? pagination.pageIndex + 1 : 1;

    return useQuery({
        queryKey: ["students", fetchParams, pagination],
        queryFn: async (): Promise<returnType> => {
            const options = {
                method: "GET",
                url: "https://aastu-gibi-gubaye-api.onrender.com/api/student",
                params: { ...fetchParams, page: pageIndex },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            let response;
            let totalNumberOfStudents: number;
            try {
                response = await axios.request(options).then((data) => {
                    totalNumberOfStudents = data.data.total;
                    const studentData = data.data.data.students.map(
                        (student: Student) => {
                            return {
                                ...student,
                                uid: student.id,
                                id: student.student_id.toUpperCase(),
                                fullName:
                                    student.first_name +
                                    " " +
                                    student.last_name,
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
                        }
                    );
                    return {
                        data: studentData,
                        total: totalNumberOfStudents,
                    };
                });
            } catch (error) {
                throw new Error(`Student Fetch Error: ${error}`);
            }

            return response;
        },
        placeholderData: keepPreviousData,
    });
}
