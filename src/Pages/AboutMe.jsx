import React from "react";
import { GrAnnounce } from "react-icons/gr";

const defaultDataItems = [
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

const aboutMeDataDefault = {
  title: "About Me",
  paragraph:
    "Prion gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem ",
  img: "https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid",
};

const analyticsDataDefault = [
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

function Data({ dataCurr, dataNext }) {
  return (
    <div className="flex flex-col w-full mt-12 ms:mt-28">
      <div className="flex flex-col">
        <div className="flex flex-col gap-12 items-center">
          <div className="w-full sm:w-1/2 flex flex-col gap-5 items-center">
            <div className="flex gap-2 w-full">
              <div className="text-TextColor bg-blue-200 p-3 rounded-md h-10">
                {dataCurr.icon}
              </div>
              <h1 className="text-l ms:text-xl font-bold py-1">{dataCurr.title}</h1>
            </div>
            <p className="text-xs ms:text-sm text-gray-500 font-bold w-full">
              {dataCurr.description}
            </p>
          </div>
          {dataNext && (
            <div className="w-full sm:w-1/2 flex flex-col gap-4 items-center">
              <div className="flex gap-2 w-full">
                <div className="text-TextColor bg-blue-200 p-3 rounded-md h-10">
                  {dataNext.icon}
                </div>
                <h1 className="text-l ms:text-xl font-bold py-1">{dataNext.title}</h1>
              </div>
              <p className="text-xs ms:text-sm text-gray-500 font-bold w-full">
                {dataNext.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutMeData({ data, analyticsData }) {
  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <div className="flex flex-col sm:w-4/12 gap-2 items-center">
        <h1 className="text-3xl ms:text-6xl font-black">{data.title}</h1>
        <p className="text-xs ms:text-sm w-full text-center ms:w-7/12 text-gray-500">{data.paragraph}</p>
      </div>
      <div className="flex gap-6">
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-4 ms:px-8 border-r last:border-none"
          >
            <h1 className=" text-l ms:text-2xl font-bold">{item.value}</h1>
            <p className="text-xs ms:text-sm text-bold text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutMe(props) {
  const aboutMeData = props.aboutMeData || aboutMeDataDefault;
  const dataItems = props.dataItems || defaultDataItems;
  const analyticsData = props.analyticsData || analyticsDataDefault;

  return (
    <div className="w-full flex justify-center m-4">
      <div className="w-full p-12 max-w-7xl flex flex-col gap-4 items-center">
        <AboutMeData data={aboutMeData} analyticsData={analyticsData} />
        <div className="flex flex-col gap-4 items-center lg:flex-row w-full justify-center">
          {dataItems.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <React.Fragment key={index}>
                  <Data
                    dataCurr={item}
                    dataNext={
                      index + 1 < dataItems.length ? dataItems[index + 1] : null
                    }
                  />
                  {index + 2 < dataItems.length && (
                    <img
                      src={aboutMeData.img}
                      alt="User Image"
                      className="hidden lg:block py-7 mt-24 bg-gray-200 "
                    />
                  )}
                </React.Fragment>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
