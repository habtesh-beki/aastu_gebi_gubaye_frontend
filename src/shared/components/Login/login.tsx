import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { useNavigate } from "react-router";
import Logo from "@/assets/logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Ilogin = {
  studentId: string;
  password: string;
};

export default function Login({
  setLogedIn,
}: {
  setLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [error, setError] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<Ilogin>();
  const onSubmit: SubmitHandler<Ilogin> = async (data) => {
    try {
      await axios.post("http://127.0.0.1:3000/api/student/login", data);
      setError(false);
      console.log("success");
      setLogedIn(true);
      navigate("/home");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-1/2 w-96"
    >
      <div className="h-32 bg-white flex flex-col justify-center items-center rounded-t-md">
        <img
          src={Logo}
          className="h-12 w-12 object-contain"
          alt="Mahibere kidusan logo"
        />
        <h2 className="text-bg_btn">
          AASTU <span className="font-bold">Gebi Gubye</span>
        </h2>
        <p>Main Portal</p>
      </div>
      <div className="flex flex-col gap-3 flex-grow pl-8 pr-8 bg-bg_loginBoard rounded-b-md">
        <h2 className="font-bold mt-3">Wellcome Back!</h2>
        <label htmlFor="" className="mt-2 text-color_lable text-xl">
          Username
        </label>
        <Input
          {...register("studentId", { required: true })}
          className="h-11 w-full focus-visible:ring-blue-700"
          placeholder="Enter your username..."
        />

        <label htmlFor="" className="text-color_lable text-xl">
          Password
        </label>
        <Input
          type="password"
          {...register("password", { required: true })}
          className="h-11 w-full focus-visible:ring-blue-700"
          placeholder="Enter Your Password.."
        />
        {error && <p className="text-red-500">Invalid studentId or password</p>}
        <Button
          type="submit"
          className="w-full h-11 bg-blue-600 hover:bg-blue-500 mt-4"
        >
          Log In
        </Button>
      </div>
    </form>
  );
}
