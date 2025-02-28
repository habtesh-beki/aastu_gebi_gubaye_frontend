import axios from "axios";
import { ENV } from "./env";
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

interface CountResult {
    total: number;
    male: number;
    female: number;
}
interface ProcessedResult {
    byDepartment: Record<string, CountResult>;
    byCurrentYear: Record<string, CountResult>;
    byService: Record<string, CountResult>;
}
export const ProcessData = async () => {
    const token = localStorage.getItem("auth-token");

    const response = await axios.get(
        ENV.apiBaseURL + "/api/student/stats/studentdata",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const students = response.data.data.students;
    const result: ProcessedResult = {
        byDepartment: {},
        byCurrentYear: {},
        byService: {},
    };

    students.forEach((student: Student) => {
        const { department, gender, current_year, service } = student;

        const departmentName = department.department;
        const serviceName = service.map((s) => s.name);

        ///add number for student by each department
        if (!result.byDepartment[departmentName]) {
            result.byDepartment[departmentName] = {
                total: 0,
                male: 0,
                female: 0,
            };
        }
        result.byDepartment[departmentName].total++;
        if (gender === "male") {
            result.byDepartment[departmentName].male++;
        } else {
            result.byDepartment[departmentName].female++;
        }

        if (!result.byCurrentYear[current_year]) {
            result.byCurrentYear[current_year] = {
                total: 0,
                male: 0,
                female: 0,
            };
        }
        result.byCurrentYear[current_year].total++;
        if (gender === "male") {
            result.byCurrentYear[current_year].male++;
        } else {
            result.byCurrentYear[current_year].female++;
        }

        serviceName.forEach((service) => {
            if (!result.byService[service]) {
                result.byService[service] = { total: 0, male: 0, female: 0 };
            }
            result.byService[service].total++;
            if (gender === "male") {
                result.byService[service].male++;
            } else {
                result.byService[service].female++;
            }
        });
    });
    return result;
};
