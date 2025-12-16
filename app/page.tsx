"use client";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm<FormData>();
  console.log(register);
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Enter your password"
        />
        <input
          {...register("age")}
          type="number"
          placeholder="Enter your age"
        />
        <input
          {...register("dateOfBirth")}
          type="date"
          placeholder="Enter your date of birth"
        />
        <input
          {...register("time")}
          type="time"
          placeholder="Enter your time"
        />
        <input
          {...register("phoneNumber")}
          type="tel"
          placeholder="Enter your phone number"
        />
        <input
          {...register("website")}
          type="url"
          placeholder="Enter your website"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
