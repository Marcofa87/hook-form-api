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
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Name must be at most 20 characters long",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Name must contain only letters",
            },
          })}
          type="text"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email must be a valid email address",
            },
          })}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            maxLength: {
              value: 20,
              message: "Password must be at most 20 characters long",
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Password must contain only letters and numbers",
            },
          })}
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 100, message: "Age must be at most 100" },
          })}
          type="number"
          placeholder="Enter your age"
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        <input
          {...register("dateOfBirth", {
            required: "Date of birth is required",
            min: {
              value: new Date().toISOString().split("T")[0],
              message: "Date of birth must be at least today",
            },
            max: {
              value: new Date().toISOString().split("T")[0],
              message: "Date of birth must be at most today",
            },
          })}
          type="date"
          placeholder="Enter your date of birth"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth.message}</p>
        )}
        <input
          {...register("time", {
            required: "Time is required",
            pattern: {
              value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
              message: "Time must be a valid time",
            },
          })}
          type="time"
          placeholder="Enter your time"
        />
        {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        <input
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits long",
            },
          })}
          type="tel"
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}
        <input
          {...register("website", {
            required: "Website is required",
            pattern: {
              value: /^https?:\/\/[^\s/$.?#].[^\s]*$/i,
              message: "Website must be a valid URL",
            },
          })}
          type="url"
          placeholder="Enter your website"
        />
        {errors.website && (
          <p className="text-red-500">{errors.website.message}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
