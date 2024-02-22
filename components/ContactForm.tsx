"use client";

import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RiSendPlaneFill } from "react-icons/ri";

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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    axios.post("/api/send", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        className="bg-highlight text-white rounded-md p-3"
        {...register("name", { required: "Name is required", maxLength: 80 })}
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}
      <input
        type="email"
        placeholder="Email"
        className="bg-highlight text-white rounded-md p-3"
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
        className="bg-highlight text-white rounded-md p-3 min-h-28"
        {...register("message", { required: "Message is required" })}
      ></textarea>
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}
      <button
        type="submit"
        className="flex items-center justify-center space-x-3 w-full rounded-md bg-[#2663EB] py-2 text-lg"
      >
        <p className="text-white">Send Message</p>
        <RiSendPlaneFill className="h-5 w-5" />
      </button>
    </form>
  );
};

export default ContactForm;
