// import { FaCookieBite } from 'react-icons/fa';
// import { MdCookie } from 'react-icons/md';

import { Cookies } from "react-cookie-consent";
import PropTypes from "prop-types";
import { useState } from "react";

export default function CookiePage({
  cookieName,
  cookieValue,
  cookieOptions,
  className,
  imgSrc,
  paragraphText,
  privacyPolicyText,
  acceptButtonText,
}) {
  // Cookies.remove(cookieName);

  const [display, setDisplay] = useState("block");

  return (
    <div className="w-full bg-transparent flex items-end justify-start h-screen z-50">
    {!Cookies.get(cookieName) &&
      <div className={`${display} cookie ${className} relative z-10`}>
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => {
            setDisplay("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* <FaCookieBite className="text-6xl text-amber-900" />

      <MdCookie className="text-6xl text-amber-900" /> */}
        <img
          src={imgSrc}
          alt="cookie"
          className="w-16 h-16"
        />
        <p className="text-gray-700 text-base">
          ${paragraphText}
        </p>
        <div className="flex w-full justify-between">
          <a href="#" className="text-xs my-auto text-slate-300 font-bold">
            ${privacyPolicyText}
          </a>
          <button
            type="button"
            className="px-2 text-l sm-text-2xl sm:px-5 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              Cookies.set(cookieName, cookieValue, cookieOptions);
              setDisplay("hidden");
            }
            }
          >
            ${acceptButtonText}
          </button>
        </div>
      </div>
          }
    </div>
  );
}

CookiePage.defaultProps = {
  cookieName: "reactFlame",
  cookieValue: true,
  cookieOptions: {
    path: "/",
    expires: 365,
  },
  className: " bg-white w-72 min-w-48 px-6 shadow-slate-200 rounded-lg shadow-md py-5 flex flex-col items-center space-y-3",
  imgSrc: "/public/assets/cookie.png",
  paragraphText: "We use cookies to provide a better user experience.",
  privacyPolicyText: "Privacy Policy",
  acceptButtonText: "Accept",
};

CookiePage.propTypes = {
  cookieName: PropTypes.string,
  cookieValue: PropTypes.bool,
  cookieOptions: PropTypes.object,
  className: PropTypes.string,
  imgSrc: PropTypes.string,
  paragraphText: PropTypes.string,
  privacyPolicyText: PropTypes.string,
  acceptButtonText: PropTypes.string,
};