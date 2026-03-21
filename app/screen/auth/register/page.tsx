"use client";

import AuthCard from "@/components/LandingPage/AuthCard";
import InputField from "@/components/Reusable/InputField";
import SocialLogin from "@/components/LandingPage/SocialLogin";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";
import { registration } from "@/server/api/auth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Page() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const registerUser = async () => {
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await registration({
        email,
        password,
        password_confirmation: confirmPassword,
      });

      console.log(response);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10 mb-10 w-full flex justify-center">
      <AuthCard title="Create Account">
        {error && (
          <Alert variant="destructive" className="mt-4 w-full">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            registerUser();
          }}
        >
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rightIcon={
              <button type="button" onClick={() => setShow(!show)}>
                {show ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            }
          />

          <InputField
            label="Confirm Password"
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            }
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-md"
          >
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin justify-self-center" />
            ) : (
              "Register"
            )}
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
