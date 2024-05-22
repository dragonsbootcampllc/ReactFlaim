import { useState } from "react";
import img from "./2024-05-22_115930.png"; // Ensure this path is correct


const ModelWrapper = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Welcome to Toby!"
        image={img}
        description="Ready to get started? Master the essential of Toby in less than 2 minutes."
        buttonText="LET'S GO!"
        color="pink-500"
      />
    </div>
  );
};
const Modal = ({
  title,
  image,
  description,
  buttonText,
  color,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-300 bg-opacity-50">
      <div className="bg-white rounded-lg p-4  w-96  mx-4 min-w-[260px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-lg font-bold mx-auto text-${color} `}>
            {title}
          </h3>
          <button
            className="text-gray-500 hover:text-gray-900 text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="text-center px-2 pb-2 sm:px-6 sm:pb-4 ">
          <img src={image} alt="Modal Illustration" className="mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-600 font-semibold mb-4">{description}</p>
          <button
            className={`px-6 py-2 rounded text-white text-sm font-base font-bold bg-${color}`}
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};



export default ModelWrapper;
