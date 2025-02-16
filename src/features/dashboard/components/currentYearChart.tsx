import { ProcessData } from "@/shared/utils/processData";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/shared/components/ui/chart";
const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

interface yearChart {
    currentYear: string;
    memeber: number;
    fill: string;
}

export function YearChart() {
    const [chartData, setChartData] = useState<yearChart[]>([]);
    useEffect(() => {
        const fechService = async () => {
            const processedYear = (await ProcessData()).byCurrentYear;
            console.log("current year data", processedYear);
            const chartDataTempo = [
                {
                    currentYear: "freshman",
                    memeber: processedYear?.freshman?.total
                        ? processedYear.freshman?.total
                        : 0,
                    fill: "var(--color-chrome)",
                },
                {
                    currentYear: "sophomore",
                    memeber: processedYear?.sophomore?.total
                        ? processedYear.sophomore.total
                        : 0,
                    fill: "var(--color-safari)",
                },
                {
                    currentYear: "juniour",
                    memeber: processedYear?.joniur?.total
                        ? processedYear.joniur.total
                        : 0,
                    fill: "var(--color-firefox)",
                },
                {
                    currentYear: "Senior",
                    memeber: processedYear?.senior?.total
                        ? processedYear?.senior?.total
                        : 0,
                    fill: "var(--color-edge)",
                },
                {
                    currentYear: "Last Year",
                    memeber: processedYear?.lastyear?.total
                        ? processedYear?.lastyear?.total
                        : 0,
                    fill: "var(--color-other)",
                },
            ];

            setChartData(chartDataTempo);
        };
        fechService();
    }, []);

    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.memeber, 0);
    }, [chartData]);

    return (
        <Card className="flex flex-col ">
            <CardHeader className="items-center pb-0">
                <CardTitle>
                    Pie Chart - Number of Students per Academic Year
                </CardTitle>
                <CardDescription>First year - last year</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="memeber"
                            nameKey="currentYear"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Students
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing total student in each year
                </div>
            </CardFooter>
        </Card>
    );
}
