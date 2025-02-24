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
                    service: "Mezemur",
                    male: processService.Mezemur?.male
                        ? processService.Mezemur?.male
                        : 0,
                    female: processService.Mezemur?.female
                        ? processService.Mezemur?.female
                        : 0,
                },
                {
                    service: "Bache",
                    male: processService.Bache?.male
                        ? processService.Bache?.male
                        : 0,
                    female: processService.Bache?.female
                        ? processService.Bache?.female
                        : 0,
                },
                {
                    service: "Timihert",
                    male: processService.Timihert?.male
                        ? processService.Timihert?.male
                        : 0,
                    female: processService.Timihert?.female
                        ? processService.Timihert?.female
                        : 0,
                },

                {
                    service: "Plan",
                    male: processService.Plan?.male
                        ? processService.Plan?.male
                        : 0,
                    female: processService.Plan?.female
                        ? processService.Plan?.female
                        : 0,
                },
                {
                    service: "Muya",
                    male: processService.Muya?.male
                        ? processService.Muya?.male
                        : 0,
                    female: processService.Muya?.female
                        ? processService.Muya?.female
                        : 0,
                },
                {
                    service: "Audit",
                    male: processService.Audit?.male
                        ? processService.Audit?.male
                        : 0,
                    female: processService.Audit?.female
                        ? processService.Audit?.female
                        : 0,
                },
                {
                    service: "Abalat",
                    male: processService.Abalat?.male
                        ? processService.Abalat?.male
                        : 0,
                    female: processService.Abalat?.female
                        ? processService.Abalat?.female
                        : 0,
                },
                {
                    service: "Hisab",
                    male: processService.Hisab?.male
                        ? processService.Hisab?.male
                        : 0,
                    female: processService.Hisab?.female
                        ? processService.Hisab?.female
                        : 0,
                },
                {
                    service: "Lemat",
                    male: processService.Lemat?.male
                        ? processService.Lemat?.male
                        : 0,
                    female: processService.Lemat?.female
                        ? processService.Lemat?.female
                        : 0,
                },
                {
                    service: "Language",
                    male: processService.Language?.male
                        ? processService.Language?.male
                        : 0,
                    female: processService.Language?.female
                        ? processService.Language?.female
                        : 0,
                },
            ];
            setChartData(chartDataTempo);
        };
        fetchData();
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
                        dataKey="service"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 8)}
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
            <h1 className="text-xl m-2 ">Student Participation in Services</h1>
        </div>
    );
}
