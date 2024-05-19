import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

const defaultFormFields = [
  {
    label: "First Name",
    id: "firstName",
    placeholder: "First Name",
    requiredMessage: "First Name is required",
    patternValue: /^[a-z]+$/i,
    patternMessage: "First Name should be a valid name",
  },
  {
    label: "Last Name",
    id: "lastName",
    placeholder: "Last Name",
    requiredMessage: "Last Name is required",
    patternValue: /^[a-z]+$/i,
    patternMessage: "Last Name should be a valid name",
  },
  {
    label: "Email",
    id: "email",
    placeholder: "yourname@company.com",
    requiredMessage: "Email is required",
    patternValue: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
    patternMessage: "Email is not valid",
  },
  {
    label: "Phone Number",
    id: "phone",
    placeholder: "+1 (123) 456-7890",
    requiredMessage: "Phone Number is required",
    patternValue: /^[0-9]+$/,
    patternMessage: "Phone Number should be numeric",
  },
  {
    label: "Message",
    id: "message",
    placeholder: "Type your message...",
    requiredMessage: "Message cannot be empty",
    isTextarea: true,
  },
];

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

export default function Contact1_Inner(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formFields = props.formFields || defaultFormFields;

  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <div className="bg-gray-100 py-12 flex justify-center">
      <div className="flex flex-col xl:flex-row gap-12 w-11/12 sm:w-8/12">
        <div className="container mx-auto bg-white p-12 rounded-3xl xl:w-1/2">
          <div className="flex flex-col gap-2">
            <h6 className="text-TextColor font-bold">Get in Touch</h6>
            <h2>Let's Chat, Contact with Us</h2>
            <p className="text-gray-500 hidden md:block">
              Have any questions or feedback? We're here to help. Send us a
              message, and we'll get back to you within 24 hours.
            </p>
          </div>
          <form
            className="flex flex-col gap-4 mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {formFields.map((field) => (
              <FormField
                key={field.id}
                field={field}
                register={register}
                errors={errors}
              />
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="right hidden xl:flex flex-col justify-center items-center mx-auto xl:w-1/2 mt-8 xl:mt-0">
          <div className="flex flex-col gap-4 items-center w-full rounded-2xl">
            <img
              className="w-full rounded-2xl"
              src={
                props.imgSrc ||
                "https://media.istockphoto.com/id/841093480/photo/contact-us.jpg?s=612x612&w=0&k=20&c=SUs3dkEh_NgwejMA9i03wMTPz4UcEO2JkySTiPkT6u8="
              }
              alt="Contact Us Image"
            />
          </div>
          <div className="flex flex-col w-full bg-contactbg gap-4 items-center mt-5 p-6 rounded-3xl">
            <div className="flex flex-col gap-3 text-white rounded-3xl xl:w-full">
              {CompanyContactData.map((item) => (
                <ContactItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="left xl:hidden flex flex-col w-full">
          {CompanyContactData.map((item) => (
            <div key={item.id} className="flex flex-col items-start p-2">
              <ContactItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactItem({ item }) {
  return (
    <div className="flex bg-inputContact w-full rounded-2xl xl:w-full">
      <div className="flex items-center justify-center bg-contactbg p-4 m-3 xl:m-2 xl:p-2 rounded-full h-10">
        {item.icon}
      </div>
      <div className="flex flex-col p-2">
        <span className="text-white font-bold">{item.title}</span>
        <span className="text-gray-300 xl:text-gray xl:text-xs">
          {item.value}
        </span>
      </div>
    </div>
  );
}

function FormField({ field, register, errors }) {
  return (
    <div key={field.id} className="flex flex-col gap-2">
      <label htmlFor={field.id}>{field.label}</label>
      {field.isTextarea ? (
        <textarea
          id={field.id}
          placeholder={field.placeholder}
          {...register(field.id, {
            required: field.requiredMessage,
          })}
          className="p-2 border border-gray-300 rounded-md max-w-full"
        ></textarea>
      ) : (
        <input
          type="text"
          id={field.id}
          placeholder={field.placeholder}
          {...register(field.id, {
            required: field.requiredMessage,
            pattern: field.patternValue && {
              value: field.patternValue,
              message: field.patternMessage,
            },
          })}
          className="p-2 border border-gray-300 rounded-md"
        />
      )}
      {errors[field.id] && (
        <span className="text-red-500">{errors[field.id].message}</span>
      )}
    </div>
  );
}
