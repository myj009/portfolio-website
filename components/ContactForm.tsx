"use client";

import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast } from "react-toastify";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("/api/send", data);
      console.log(res);
      if (res.status == 500) {
        toast.error(
          "Unexpected error. Kindly email me at mohammadjagora@gmail.com"
        );
      } else {
        toast.success("Email sent");
      }
    } catch (e) {
      toast.error(
        "Unexpected error. Kindly email me at mohammadjagora@gmail.com"
      );
    }
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        className="bg-highlight text-white rounded-lg p-3"
        {...register("name", { required: "Name is required", maxLength: 80 })}
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}
      <input
        type="email"
        placeholder="Email"
        className="bg-highlight text-white rounded-lg p-3"
        {...register("email", {
          required: "Email address is required",
          maxLength: 80,
          minLength: 4,
          pattern: /^\S+@\S+$/i,
        })}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
      <textarea
        placeholder="Message"
        className="bg-highlight text-white rounded-lg p-3 min-h-36"
        {...register("message", { required: "Message is required" })}
      ></textarea>
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}
      <button
        type="submit"
        className="flex items-center justify-center space-x-3 w-full rounded-lg bg-[#2663EB] py-2 text-lg"
      >
        <p className="text-white">Send Message</p>
        <RiSendPlaneFill className="h-5 w-5" />
      </button>
    </form>
  );
};

export default ContactForm;
