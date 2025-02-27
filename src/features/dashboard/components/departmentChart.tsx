import { ProcessData } from "../../../shared/utils/processData";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/shared/components/ui/chart";
import { useEffect, useState } from "react";

const chartConfig = {
    male: {
        label: "male",
        color: "#2563eb",
    },
    female: {
        label: "female",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

interface IChartData {
    department: string;
    male: number;
    female: number;
}

export function DepartmentChart() {
    const [chartData, setChartData] = useState<IChartData[]>();
    useEffect(() => {
        async function fetch() {
            const processDepart = (await ProcessData()).byDepartment;
            const chartDataTemp = [
                {
                    department: "Electrical",
                    male: processDepart.Electrical?.male
                        ? processDepart.Electrical.male
                        : 0,
                    female: processDepart.Electrical?.female
                        ? processDepart.Electrical.female
                        : 0,
                },
                {
                    department: "Software",
                    male: processDepart.Software?.male
                        ? processDepart.Software.male
                        : 0,
                    female: processDepart.Software?.female
                        ? processDepart.Software.female
                        : 0,
                },
                {
                    department: "Chemical",
                    male: processDepart.Chemical?.male
                        ? processDepart.Chemical.male
                        : 0,
                    female: processDepart.Chemical?.female
                        ? processDepart.Chemical.female
                        : 0,
                },
                {
                    department: "Environmental",
                    male: processDepart.Environmental?.male
                        ? processDepart.Environmental.male
                        : 0,
                    female: processDepart.Environmental?.female
                        ? processDepart.Environmental.female
                        : 0,
                },
                {
                    department: "Civil",
                    male: processDepart.Civil?.male
                        ? processDepart.Civil?.male
                        : 0,
                    female: processDepart.Civil?.female
                        ? processDepart.Civil.female
                        : 0,
                },
                {
                    department: "Electromechanical",
                    male: processDepart.ElectroMechanical?.male
                        ? processDepart.ElectroMechanical?.male
                        : 0,
                    female: processDepart.ElectroMechanical?.female
                        ? processDepart.ElectroMechanical?.female
                        : 0,
                },
                {
                    department: "Food",
                    male: processDepart.Food?.male
                        ? processDepart.Food?.male
                        : 0,
                    female: processDepart.Food?.female
                        ? processDepart.Food?.female
                        : 0,
                },
                {
                    department: "Architectural",
                    male: processDepart.Archticture?.male
                        ? processDepart.Archticture?.male
                        : 0,
                    female: processDepart.Archticture?.female
                        ? processDepart.Archticture?.female
                        : 0,
                },
                {
                    department: "Mechanical",
                    male: processDepart.Mechanical?.male
                        ? processDepart.Mechanical?.male
                        : 0,
                    female: processDepart.Mechanical?.female
                        ? processDepart.Mechanical?.female
                        : 0,
                },
                {
                    department: "Indestrial",
                    male: processDepart.Industrial?.male
                        ? processDepart.Industrial?.male
                        : 0,
                    female: processDepart.Industrial?.female
                        ? processDepart.Industrial?.female
                        : 0,
                },
                {
                    department: "Biotechnology",
                    male: processDepart.Biotechnology?.male
                        ? processDepart.Biotechnology?.male
                        : 0,
                    female: processDepart.Biotechnology?.female
                        ? processDepart.Biotechnology?.female
                        : 0,
                },
                {
                    department: "Geology",
                    male: processDepart.Geology?.male
                        ? processDepart.Geology?.male
                        : 0,
                    female: processDepart.Geology?.female
                        ? processDepart.Geology?.female
                        : 0,
                },
                {
                    department: "Mining",
                    male: processDepart.Mining?.male
                        ? processDepart.Mining?.male
                        : 0,
                    female: processDepart.Mining?.female
                        ? processDepart.Mining?.female
                        : 0,
                },
            ];
            setChartData(chartDataTemp);
        }

        fetch();
    }, []);

    return (
        <div className="border rounded-md  bg-white p-6 mb-4">
            <ChartContainer
                config={chartConfig}
                className="min-h-[100px] w-full"
            >
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="department"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 4)}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="male" fill="var(--color-male)" radius={4} />
                    <Bar
                        dataKey="female"
                        fill="var(--color-female)"
                        radius={4}
                    />
                </BarChart>
            </ChartContainer>
            <h1 className="text-xl m-2 ">Number of Students by Department</h1>
        </div>
    );
}
