import { Link, useParams } from "react-router-dom";
import { BoxArrowInRight } from "react-bootstrap-icons";
import {
  Button,
  Heading,
  Checkbox,
  InputLabel,
  InputPassword,
  Spinner,
} from "@/components/reactdash-ui";
import { useForm } from "react-hook-form";
import { authImpersonate } from "@/api/auth";
import to from "await-to-js";
import { toast } from "react-toastify";
import { saveAccessToken } from "@/utils/utils";
import { useAppDispatch } from "@/app/store";
import { updateProfile } from "@/slices/profileSlice";
import { accountProfile } from "@/api/account";
import { useState } from "react";

type FormData = {
  user_name: string;
  password: string;
};

export default function Login() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { register, handleSubmit } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false);

  const logins = {
    login: "Login",
    forgot_link: "/auth/forgot",
    register: "Register",
    register_link: "/auth/register",
    dont: "Dont have an account?",
    or: "Or",
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const [err, res] = await to(
      authImpersonate({ ...data, vendor_id: params.vendor_id })
    );
    if (err) {
      setLoading(false);
      return toast.error((err as any)?.response?.data?.message);
    }
    saveAccessToken(res.token);

    const [error, account] = await to(accountProfile());
    if (error) {
      setLoading(false);
      return toast.error((error as any)?.response?.data?.message);
    }

    dispatch(updateProfile(account));
    setLoading(false);
    toast.success("Login successful");
  };

  const renderIconSubmit = () => {
    if (!loading) {
      return (
        <BoxArrowInRight className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2" />
      );
    }
    return (
      <Spinner size="x-small" color="dark" className="ltr:mr-2 rtl:ml-2" />
    );
  };

  return (
    <>
      <Heading variant="h3" className="text-center">
        Login
      </Heading>
      <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel
          label="Username"
          required
          placeholder="Enter username"
          {...register("user_name")}
        />
        <div className="mb-4">
          <div className="flex flex-row justify-between items-center mb-2">
            <label htmlFor="inputpass" className="inline-block">
              Password
              <span className="text-red-500"> *</span>
            </label>
            <Link to={logins.forgot_link} className="hover:text-blue-700">
              Forgot password?
            </Link>
          </div>
          <InputPassword
            required
            placeholder="Enter password"
            {...register("password")}
          />
        </div>
        <Checkbox name="remember" label="Remember me" value="1" checked />

        <div className="grid">
          <Button disabled={loading} type="submit">
            <div className="flex justify-center items-center">
              {renderIconSubmit()}
              Login
            </div>
          </Button>
        </div>
      </form>

      <div className="mt-4">
        <p className="text-center mb-3">
          <span>{logins.or}</span>
        </p>
        <p className="text-center mb-4">
          {logins.dont}{" "}
          <Link to={logins.register_link} className="hover:text-indigo-500">
            {logins.register}
          </Link>
        </p>
      </div>
    </>
  );
}
