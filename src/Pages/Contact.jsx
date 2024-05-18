import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function Contact1_Inner() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const CompanyContactData = [
    {
      id: 1,
      title: "Phone",
      value: "1-800-123-4567",
      icon: <FaPhone />,
    },
    {
      id: 2,
      title: "Email",
      value: "test@company.com",
      icon: <FaEnvelope />,
    },
    {
      id: 3,
      title: "Address",
      value: "1234 North Street, New York, NY 12345",
      icon: <FaMapMarkerAlt />,
    },
  ];

  const onSubmit = async (data) => {
    console.log("data",data);
  };

  return (
    <div className="bg-gray-100 py-12 flex justify-center">
      <div className="flex flex-col md:flex-row gap-12 w-8/12">
        <div className="container mx-auto bg-white p-12 rounded-3xl md:w-1/2">
          <div className="flex flex-col gap-2">
            <h6 className="text-TextColor font-bold">Get in Touch</h6>
            <h2>Let's Chat, Contact with Us</h2>
            <p className="text-gray-500">
              Have any questions or feedback? We're here to help. Send us a message, and we'll get back to you within 24 hours.
            </p>
          </div>
          <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 w-5/12">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  {...register("firstName", { required: "First Name is required", pattern: { value: /^[a-z]+$/i, message: "First Name should be a valid name" } })}
                  className="p-2 border border-gray-300 rounded-md"
                />
                {errors.firstName && (
                  <span className="text-red-500">{errors.firstName.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  {...register("lastName", { required: "Last Name is required", pattern: { value: /^[a-z]+$/i, message: "Last Name should be a valid name" } })}
                  className="p-2 border border-gray-300 rounded-md"
                />
                {errors.lastName && (
                  <span className="text-red-500">{errors.lastName.message}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="yourname@company.com"
                {...register("email", { required: "Email is required", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, message: "Email is not valid" } })}
                className="p-2 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="+1 (123) 456-7890"
                {...register("phone", { required: "Phone Number is required", pattern: { value: /^[0-9]+$/, message: "Phone Number should be numeric" } })}
                className="p-2 border border-gray-300 rounded-md"
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Type your message..."
                {...register("message", { required: "Message cannot be empty" })}
                className="p-2 border border-gray-300 rounded-md"
              ></textarea>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto md:w-1/2 mt-8 md:mt-0">
          <div className="flex flex-col gap-4 items-center w-full rounded-2xl">
            <img
              className="w-full rounded-2xl"
              src="https://media.istockphoto.com/id/841093480/photo/contact-us.jpg?s=612x612&w=0&k=20&c=SUs3dkEh_NgwejMA9i03wMTPz4UcEO2JkySTiPkT6u8="
              alt="Contact Us Image"
            />
          </div>
          <div className="flex flex-col w-full bg-contactbg gap-4 items-center mt-5 p-6 rounded-3xl">
            <div className="flex flex-col gap-3 text-white rounded-3xl md:w-full">
              {CompanyContactData.map((item) => (
                <ContactItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ item }) {
  return (
    <div className="flex bg-inputContact w-full rounded-2xl md:w-full">
      <div className="flex items-center justify-center bg-contactbg p-4 m-3 md:m-2 md:p-2 rounded-full">
        {item.icon}
      </div>
      <div className="flex flex-col p-2">
        <span className="text-white font-bold">{item.title}</span>
        <span className="text-gray-300 md:text-gray md:text-xs">{item.value}</span>
      </div>
    </div>
  );
}
