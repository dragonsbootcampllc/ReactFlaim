// src/components/StatisticsCard.js
import React from "react";
import { FaShoppingCart, FaUsers, FaBox, FaDollarSign } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const statsData = [
  {
    id: 1,
    icon: FaShoppingCart,
    value: "1,253",
    label: "New Sales",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [20, 22, 21, 23, 21.5, 25],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: {
            target: 'origin',
            below: 'rgb(0, 0, 255)'
          }
        },
      ],
    },
  },
  {
    id: 2,
    icon: FaUsers,
    value: "9,358",
    label: "Active Users",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [17, 17.7, 16, 18.5, 18, 19.5],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: {
            target: 'origin',
            below: 'rgb(0, 0, 255)'
          }
        },
      ],
    },
  },
  {
    id: 3,
    icon: FaBox,
    value: "1,342",
    label: "New Orders",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [19, 20, 21, 19, 23, 23.5],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: {
            target: 'origin',
            below: 'rgb(0, 0, 255)'
          }
        },
      ],
    },
  },
  {
    id: 4,
    icon: FaDollarSign,
    value: "12,872",
    label: "Total Revenue",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [23, 17, 22, 19, 25, 20],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: {
            target: 'origin',
            below: 'rgb(0, 0, 255)'
          }
        },
      ],
    },
  },
];

const StatisticsCard = () => {
  return (
    <div className="bg-white px-6 py-2 m-24 rounded-lg shadow-lg max-w-[22rem] mx-auto divide-y-2">
      {statsData.map((stat) => (
        <div key={stat.id} className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="bg-[#f5f7fb] p-4 rounded-md">
              <stat.icon className="text-[#3055cf] w-6 h-6" />
            </div>
            <div className="ml-8">
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          </div>
          <div className="w-24 h-6">
            <Line
              data={stat.chartData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  x: { display: false },
                  y: { display: false },
                },
                plugins: {
                  legend: { display: false },
                },
                elements: {
                  point: { radius: 0 },
                },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCard;
