import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";

export default function BarChart(props) {
    const data = {
        labels: props.incomes_date,
        datasets: [
            {
                label: "Monthly Income",
                data: props.incomes_value,
                backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <Bar
            className={"bar-graph"}
            width={100}
            height={200}
            data={data}
            options={options}
        />
    );
}
