import Link from "next/link";

import AuthCard from "@/components/LandingPage/AuthCard";
import InputField from "@/components/Reusable/InputField";
import SocialLogin from "@/components/LandingPage/SocialLogin";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <AuthCard title="ISHABELLA CORP.">
      <form className="space-y-4">
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />

        <div className="flex justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" className="text-blue-500">
            Forgot Password?
          </a>
        </div>

        <Button className="w-full bg-green-700 hover:bg-green-900 text-white p-3 rounded-md">
          Login
        </Button>
      </form>

      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <Link href="./auth/register" className="text-blue-500">
          Register
        </Link>
      </p>

      <div className="my-4 text-center text-gray-400">OR</div>

      <SocialLogin />
    </AuthCard>
  );
}
