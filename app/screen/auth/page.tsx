'use client';

import Link from 'next/link';

import AuthCard from '@/components/LandingPage/AuthCard';
import InputField from '@/components/Reusable/InputField';
import SocialLogin from '@/components/LandingPage/SocialLogin';
import { Button } from '@/components/ui/button';
import { login } from '@/server/api/auth';
import { useState } from 'react';
import { Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  const loginUser = async () => {
    setError('');

    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);

      const role = response.data.role;

      if (role === 'Admin') {
        router.replace('/admin/dashboard');
      } else if (role === 'Inventory Manager') {
        router.replace('/inventory/dashboard');
      }

      console.log(response);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Sign In">
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
          loginUser();
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
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rightIcon={
            <button type="button" onClick={() => setShow(!show)}>
              {show ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          }
        />

        <div className="flex justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" className="text-blue-500">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white p-3 rounded-md hover:bg-green-900"
        >
          {loading ? <Loader2 className="h-6 w-6 animate-spin justify-self-center" /> : 'Login'}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Don’t have an account?{' '}
        <Link href="./auth/register" className="text-blue-500">
          Register
        </Link>
      </p>

      <div className="my-4 text-center text-gray-400">OR</div>

      <SocialLogin />
    </AuthCard>
  );
}
