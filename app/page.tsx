"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  age: number;
  dateOfBirth: string;
  time: string;
  phoneNumber: string;
  website: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-Z]+$/,
          })}
          type="text"
          placeholder="Enter your name"
        />
        <input
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          type="email"
          placeholder="Enter your email"
        />
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
            pattern: /^[a-zA-Z0-9]+$/,
          })}
          type="password"
          placeholder="Enter your password"
        />
        <input
          {...register("age", { required: true, min: 18, max: 100 })}
          type="number"
          placeholder="Enter your age"
        />
        <input
          {...register("dateOfBirth", {
            required: true,
            min: new Date().toISOString().split("T")[0],
            max: new Date().toISOString().split("T")[0],
          })}
          type="date"
          placeholder="Enter your date of birth"
        />
        <input
          {...register("time", {
            required: true,
            pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
          })}
          type="time"
          placeholder="Enter your time"
        />
        <input
          {...register("phoneNumber", {
            required: true,
            pattern: /^[0-9]{10}$/,
          })}
          type="tel"
          placeholder="Enter your phone number"
        />
        <input
          {...register("website", {
            required: true,
            pattern: /^https?:\/\/[^\s/$.?#].[^\s]*$/i,
          })}
          type="url"
          placeholder="Enter your website"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
