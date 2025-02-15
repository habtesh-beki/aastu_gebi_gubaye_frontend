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
  console.log(chartData);
  useEffect(() => {
    async function fetch() {
      const processDepart = (await ProcessData()).byDepartment;
      console.log(processDepart);
      const chartDataTemp = [
        {
          department: "Electrical",
          male: processDepart.Electrical.male,
          female: processDepart.Electrical.female,
        },
        {
          department: "Software",
          male: processDepart.Software.male,
          female: processDepart.Software.female,
        },
        {
          department: "Arch",
          male: processDepart.Chemical.male,
          female: processDepart.Chemical.female,
        },
        {
          department: "Electro",
          male: processDepart.Environmental.male,
          female: processDepart.Environmental.female,
        },
        {
          department: "Civil",
          male: processDepart.Civil.male,
          female: processDepart.Civil.female,
        },
        { department: "Arch", male: 73, female: 190 },
        { department: "Electro", male: 209, female: 130 },
        { department: "Civil", male: 214, female: 140 },
      ];
      console.log("FETCH IS CALLED");
      setChartData(chartDataTemp);
    }

    fetch();
  }, []);

  return (
    <div className="border rounded-md  bg-white p-6 mb-4">
      <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="department"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 8)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="male" fill="var(--color-male)" radius={4} />
          <Bar dataKey="female" fill="var(--color-female)" radius={4} />
        </BarChart>
      </ChartContainer>
      <h1>Number of Students by Department</h1>
    </div>
  );
}
