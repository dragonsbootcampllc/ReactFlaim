import img from "./2024-05-20_021047.png";


const NotFound1_Inner = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:min-h-screen h-fit bg-gray-50 p-0 sm:flex-row ">
      <div className=" py-7 h-full flex items-center justify-center text-center md:w-1/2 md:text-left bg-slate-100 sm:min-h-screen">
        <div className=" w-[80%] lg:w-[500px] text-start p-4">
          <h1 className="text-3xl  sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
            404 ERROR
          </h1>
          <p className=" text-base sm:text-lg font-bold mb-2">
            Oops! The page you are looking for does not exist.
          </p>
          <p className=" text-sm sm:text-base font-semibold text-gray-600 mb-4">
            Uh oh, we can’t seem to find the page you’re looking for, contact us
            for more information.
          </p>
          <button className="text-sm sm:text-base bg-blue-600 text-white px-2 py-2  rounded hover:bg-blue-700">
            Back to Homepage
          </button>
        </div>
      </div>
      <div className="h-fit mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img src={img} alt="404 Error" className="max-w-full " />
      </div>
    </div>
  );
};

export default NotFound1_Inner;
