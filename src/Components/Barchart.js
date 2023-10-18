import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    pv: 80,
  },
  {
    name: "Feb",
    pv: 60,
  },
  {
    name: "Mar",
    pv: 100,
  },
  {
    name: "Apr",
    pv: 85,
  },
  {
    name: "May",
    pv: 90,
  },
  {
    name: "Jun",
    pv: 20,
  },
  {
    name: "Jul",
    pv: 90,
  },
  {
    name: "Aug",
    pv: 100,
  },
  {
    name: "Sep",
    pv: 95,
  },
  {
    name: "Oct",
    pv: 80,
  },
  {
    name: "Nov",
    pv: 78,
  },
  {
    name: "Dec",
    pv: 82,
  },
];

export default function Barchart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={40}
      >
        <XAxis
          dataKey="name"
          scale="point"
          s
          padding={{ left: 10, right: 10 }}
        />
        <Tooltip />

        <Bar dataKey="pv" fill="#eef" radius={10} />
      </BarChart>
    </ResponsiveContainer>
  );
}
