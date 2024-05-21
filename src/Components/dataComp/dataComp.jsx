// src/components/DataCard.js
import { FaBox, FaUser, FaShoppingCart, FaStore } from "react-icons/fa";

const data = [
  {
    title: "New Orders",
    duration: "This week",
    icon: <FaBox />,
    color: "bg-green-500",
    number: 1368,
    percentage: "0.43",
    isPositive: true,
  },
  {
    title: "New Customers",
    duration: "This week",
    icon: <FaUser />,
    color: "bg-blue-500",
    number: 785,
    percentage: "0.39%",
    isPositive: true,
  },
  {
    title: "Online Orders",
    duration: "This month",

    icon: <FaShoppingCart />,
    color: "bg-orange-500",
    number: 795,
    percentage: "1.39%",
    isPositive: false,
  },
  {
    title: "Offline Orders",
    duration: "This month",
    icon: <FaStore />,
    color: "bg-purple-500",
    number: 573,
    percentage: "2.69%",
    isPositive: true,
  },
];

const DataComp = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <DataCard key={index} {...item} />
      ))}
    </div>
  );
};

const DataCard = ({ title,duration, icon, color, number, percentage, isPositive }) => {
  return (
    <div className="p-4 bg-white shadow-sm shadow-gray-300 min-w-[260px] ">
      <div>
        <div className="flex items-center">
          <div className={`p-2  ${color}  text-white`}>{icon}</div>
          <div className="ml-4">
            <h3 className="font-bold">{title}</h3>
            <p className=" text-gray-500 font-mono  ">
              {duration}
            </p>
          </div>
        </div>
        <div>
          <div className="mt-2">
            <span className="text-2xl font-bold">{number}</span>{" "}
            <span
              className={`text-base ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {percentage} {isPositive ? "↑" : "↓"}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className={`h-full rounded-full ${color} w-[70%]`}
            // style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DataComp;
