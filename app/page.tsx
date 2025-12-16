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
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <div className="flex flex-col">
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
            className="p-2 border border-gray-300 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col">
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
            className="p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
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
            className="p-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 100, message: "Age must be at most 100" },
            })}
            type="number"
            placeholder="Enter your age"
            className="p-2 border border-gray-300 rounded"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>
        <div className="flex flex-col">
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
            className="p-2 border border-gray-300 rounded"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
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
            className="p-2 border border-gray-300 rounded"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>
        <div className="flex flex-col">
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
            className="p-2 border border-gray-300 rounded"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
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
            className="p-2 border border-gray-300 rounded"
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="col-span-2 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
