'use client';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { socialLogin } from '@/server/api/auth';
import { useRouter } from 'next/navigation';

export default function SocialLogin() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSuccess = async (credentialResponse: any) => {
    setError('');
    try {
      setLoading(true);
      const res = await socialLogin(credentialResponse.credential);

      localStorage.setItem('token', res.data.token);
      const role = res.data.role;

      if (role === 'Admin') {
        router.replace('/admin/dashboard');
      } else if (role === 'Inventory Manager') {
        router.replace('/inventory/dashboard');
      }

      // else if (role === 'Customer') {
      //   router.replace('/customer/dashboard');
      // }
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.log('Google Login Failed');
      }}
    />
  );
}
