import PropTypes from "prop-types";

const x = [
  {
    title: "This is Title 1",
    date: "feb 2023",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
  {
    title: "This is Title 2",
    date: "may 2024",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
  {
    title: "This is Title 2",
    date: "may 2024",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
  {
    title: "This is Title 2",
    date: "may 2024",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
  {
    title: "This is Title 2",
    date: "may 2024",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

export default function TimeLineFlow({ data = x }) {
  return (
    <div className="mx-auto w-full bg-white bg-gradient-to-r dark:bg-gray-900 p-5">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {data.map((item, index) => (
          <li className="mb-10 ml-6" key={index}>
            <div>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900">
                <CalendarIcon />
              </span>
            </div>
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const CalendarIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="h-3 w-3 text-cyan-600 dark:text-cyan-300"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    ></path>
  </svg>
);

TimeLineFlow.propTypes = {
  data: PropTypes.array,
};
