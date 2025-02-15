import { ProcessData } from "@/shared/utils/processData";

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

export function ServiceChart() {
  const [chartData, setChartData] = useState<Array<Object>>();

  useEffect(() => {
    const fetchData = async () => {
      const processService = (await ProcessData()).byService;
      const chartDataTempo = [
        {
          service: "Bach",
          male: processService.mezemur.female,
          female: processService.mezemur.male,
        },
        { service: "Mezemur", male: 305, female: 200 },
        { service: "Begena", male: 237, female: 120 },
        { service: "Alehu Bewore", male: 73, female: 190 },
        { service: "Muya", male: 209, female: 130 },
        { service: "Civil", male: 214, female: 140 },
      ];
      setChartData(chartDataTempo);
    };
    fetchData();
  }, []);
  return (
    <div className="border rounded-md  bg-white p-6 mb-4">
      <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="service"
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
      <h1>Student Participation in Services</h1>
    </div>
  );
}
