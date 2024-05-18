import img from "./2024-05-18_031346.png";

const NotFound1_Inner = () => {
  return (
    <div className="flex flex-col items-center text-center p-5 md:flex-row md:justify-around md:text-left lg:p-10 max-w-screen-2xl mx-auto bg-slate-100">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">404 ERROR</h1>
        <h1 className="text-2xl font-bold mb-2">
          Oops! The page you are looking for does not exist.
        </h1>
        <p className="font-semibold text-gray-600 mb-4">
          Uh oh, we can’t seem to find the page you’re looking for, contact us
          for more information.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 font-bold rounded hover:bg-blue-700">
          Back to Homepage
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src={img}
          alt="404 Error Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default NotFound1_Inner;
