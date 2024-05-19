import React from "react";
import { GrAnnounce } from "react-icons/gr";

const defaultData = [
  {
    title: "Brand Design",
    icon: <GrAnnounce />,
    description:
      "Prion gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
  },
  {
    title: "Web Development",
    icon: <GrAnnounce />,
    description:
      "Prion gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
  },
  {
    title: "UI/UX Design",
    icon: <GrAnnounce />,
    description:
      "Prion gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
  },
  {
    title: "Graphics Design",
    icon: <GrAnnounce />,
    description:
      "Prion gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
  },
];

const aboutMeData = {
  title: "About Me",
  paragraph:
    "Prion gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem ",
  img: "https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid",
};

const analyticsData = [
  {
    title: "Experience",
    value: "06 Years",
  },
  {
    title: "Happy Clients",
    value: "587+",
  },
  {
    title: "Delivered Projects",
    value: "350+",
  },
];

function Data({ data, index }) {
  return (
    <div className="w-full flex gap-4 items-center">
      {index % 2 === 0 && index !== 0 ? (
        <div className="w-1/3">
          <img src={aboutMeData.img} alt="About Me" />
        </div>
      ) : (
        <div className=" w-1/3 flex flex-col gap-4 items-center">
          <div className="flex gap-3">
            {data.icon}
            <h1>{data.title}</h1>
          </div>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}

function AboutMeData({ data }) {
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-4 items-center w-full">
        <h1>{data.title}</h1>
        <p>{data.paragraph}</p>
      </div>
      <div className="flex gap-4">
        {analyticsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h1 className="text-2xl">{item.value}</h1>
            <h6 className="text-lg">{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <AboutMeData data={aboutMeData} />
      <div className="flex gap-4 items-center w-full">
        <div className="flex gap-4 items-center">
          {defaultData.map((item, index) => (
            <Data key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
