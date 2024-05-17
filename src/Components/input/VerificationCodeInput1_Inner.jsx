import PropTypes from "prop-types";
import { useState, useRef } from "react";

export default function VerificationCodeInput1_Inner({
  className = "",
  length = 6,
  onOtpSubmit = (v) => {
    console.log(v);
  },
}) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const onOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9a-zA-Z]*$/.test(value)) return;
    const newOtp = otp.map((data, i) => (i === index ? value : data));
    setOtp(newOtp);
    if (value !== "" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (newOtp.every((data) => data !== "")) onOtpSubmit(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
      inputRefs.current[index - 1].setSelectionRange(1, 1);
    }
  };

  return (
    <>
      <div className="bg-[#111928] p-4 rounded-md">
        <h1 className="text-2xl text-white">Verification Code Input</h1>
        <div className={`flex justify-center items-center gap-4 ${className}`}>
          {otp.map((data, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={data}
              maxLength={1}
              className="w-12 h-12 text-center border border-blue-600 rounded-lg bg-[#1d2533] text-white text-3xl font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-800 transition-all"
              onChange={(e) => onOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <h3 className="text-gray-500 text-center mt-2">
          Use Arrow keys to navigate between input fields
        </h3>
      </div>
    </>
  );
}

VerificationCodeInput1_Inner.propTypes = {
  className: PropTypes.string,
  length: PropTypes.number,
  onOtpSubmit: PropTypes.func,
};
