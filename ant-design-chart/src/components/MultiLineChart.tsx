"use client";

import { Line } from "@ant-design/plots";
type DataPoint = {
  date: string;
  value: number;
  type: string;
};
export const MultiLineChart = () => {
  // Mock data
  const data: DataPoint[] = [
    // type register
    { date: "2023-08-01", value: 100, type: "register" },
    { date: "2023-08-02", value: 110, type: "register" },
    { date: "2023-08-03", value: 125, type: "register" },
    { date: "2023-08-04", value: 135, type: "register" },
    { date: "2023-08-05", value: 145, type: "register" },
    // type download
    { date: "2023-08-01", value: 60, type: "download" },
    { date: "2023-08-02", value: 65, type: "download" },
    { date: "2023-08-03", value: 75, type: "download" },
    { date: "2023-08-04", value: 78, type: "download" },
    { date: "2023-08-05", value: 85, type: "download" },
  ];

  const config = {
    data,
    xField: "date",
    yField: "value",
    yAxis: {
      label: {
        formatter: (v: any) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    seriesField: "type",
    color: ({ type }: Partial<DataPoint>) => {
      if (type === "register") return "#F4664A";
      if (type === "download") return "#30BF78";
      return "#FAAD14";
    },
    lineStyle: ({ type }: DataPoint) => {
      if (type === "register") {
        return {
          lineDash: [4, 4],
          opacity: 1,
        };
      }
      return {
        opacity: 0.5,
      };
    },
  };

  return <Line {...config} />;
};
