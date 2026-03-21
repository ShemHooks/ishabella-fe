import AuthCard from "@/components/LandingPage/AuthCard";
import InputField from "@/components/Reusable/InputField";
import SocialLogin from "@/components/LandingPage/SocialLogin";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pt-10 mb-10 w-full flex justify-center">
      <AuthCard title="Create Account">
        <form className="space-y-4">
          <InputField label="Full Name" />
          <InputField label="Email" type="email" />
          <InputField label="Password" type="password" />
          <InputField label="Confirm Password" type="password" />

          <button className="w-full bg-green-700 text-white p-3 rounded-md">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="./" className="text-blue-500">
            Login
          </Link>
        </p>

        <div className="my-4 text-center text-gray-400">OR</div>

        <SocialLogin />
      </AuthCard>
    </div>
  );
}
