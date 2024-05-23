import PropTypes from "prop-types";
import { FaRegGem } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

export default function Card({
  title,
  imgSrc,
  description,
  EthValue,
  ownerImgSrc,
  ownerName,
  timeLeft,
}) {
  return (
    <div className="flex flex-col w-40 sm:w-56 p-4 bg-slate-800 gap-2 rounded-md">
      <div className="bg-white rounded-xl">
        <img
          src={imgSrc}
          alt="img"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="text-white text-sm sm:text-lg font-bold">{title}</div>
      <div className="text-white text-[10px] sm:text-xs">{description}</div>

      <div className="flex justify-between items-center py-2 border-b border-b-neutral-400">
        <div className="flex items-center gap-1">
          <FaRegGem className="text-cyan-500 text-[10px] sm:text-xs" />
          <span className="text-[10px] sm:text-xs text-cyan-500">{EthValue}ETH</span>
        </div>

        <div className="flex items-center gap-1">
          <FaRegClock className="text-gray-400 text-[10px] sm:text-xs" />
          <span className="text-[10px] sm:text-xs text-gray-400 ">{timeLeft}</span>
        </div>
      </div>

      <div className="flex justify-start gap-2 items-center">
        <img src={ownerImgSrc} alt="Creator" className="w-4 h-4 sm:w-6 sm:h-6 rounded-full"/>
        <div className="flex gap-1">
          <span className="text-sky-300 text-[8px] sm:text-xs">Creation By</span>
          <span className="text-white text-[8px] sm:text-xs">{ownerName}</span>
          </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
  EthValue: PropTypes.number.isRequired,
  ownerImgSrc: PropTypes.string.isRequired,
  timeLeft: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "Equilibrium #3421",
  imgSrc:
    "https://play-lh.googleusercontent.com/1cf6sZ503u5W_L4OhrJs-ocOqnXJ71NkKi9J4_IM1WtZozPZOns_NVjciC6SvsYykxox=w240-h480-rw",
  description: "Our Equilibrium collection promotes balance and calm.",
  EthValue: 0.041,
  ownerImgSrc:
    "https://play-lh.googleusercontent.com/1cf6sZ503u5W_L4OhrJs-ocOqnXJ71NkKi9J4_IM1WtZozPZOns_NVjciC6SvsYykxox=w240-h480-rw",
  timeLeft: "3 days left",
  ownerName: "Jules Wyvern",
};
