import { IoIosFootball } from "react-icons/io";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";

const cards = [
  {
    title: "Cup of Water",
    description: "200m",
    icon: <FaDroplet />,
    iconColor: "blue-500",
    timeline: "10:00 AM ",
  },
  {
    title: "Training",
    description: "1h",
    icon: <IoIosFootball />,
    iconColor: "gray-700",
    timeline: "10:00 AM ",
  },
  {
    title: "Study",
    description: "1h",
    icon: <FaBookJournalWhills />,
    iconColor: "red-300",
    timeline: "10:00 AM ",
  },
];

const CardListWrapper = () => {
  return (
    <div className="bg-gray-200 min-w-70 w-80  m-2">
      <div className=" flex flex-col gap-2 p-2">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            description={card.description}
            icon={card.icon}
            iconColor={card.iconColor}
            timeline={card.timeline}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description, icon,iconColor, timeline }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex justify-between  ">
        <div className="flex gap-6">
          <div className=" h-11 w-9  p-2 rounded-md bg-gray-200 flex justify-center items-center">
            {" "}
            <span className={` text-${iconColor} `}>{icon}</span>
          </div>
          <div className="">
            <h2 className=" font-semibold">{title}</h2>
            <p className="text-gray-500 font-semibold">{description}</p>
          </div>
        </div>

        <p className="text-gray-500 font-semibold text-sm flex justify-center items-center">
          {timeline}
        </p>
      </div>
    );
}
export default CardListWrapper;
