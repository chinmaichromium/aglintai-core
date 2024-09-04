'use client';

import { Button } from '@components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@/components/hooks/use-toast';
import { supabase } from '@/utils/supabase/client';

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { toast } = useToast();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message,
        });
      } else {
        const response = await fetch('/auth/redirect', {
          method: 'GET',
          redirect: 'follow',
        });

        if (response.redirected) {
          await router.push(response.url);
        } else if (!response.ok) {
          await router.push('/login');
        }
      }
    } catch (err) {
      //
    } finally {
      setIsLoading(false);
    }
  };

  const oauthHandler = async (provider: 'google') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_HOST_NAME}/auth/callback`,
        },
      });
      if (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message,
        });
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.message,
      });
    }
  };

  return (
    <Card className='w-[400px] border-border'>
      <CardHeader>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  // eslint-disable-next-line security/detect-unsafe-regex
                  value: /^[\w.+-]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email',
                },
              })}
            />
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <div className='relative'>
              <Input
                id='password'
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: 'Invalid login credentials',
                  },
                })}
              />

              <Button
                className='absolute right-2 top-1/2 -translate-y-1/2 p-1'
                onClick={() => setShowPassword(!showPassword)}
                type='button'
                variant='ghost'
                size='sm'
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
            {errors.password && (
              <p className='text-sm text-red-500'>{errors.password.message}</p>
            )}
          </div>
          <Button className='w-full' type='submit' disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className='flex flex-col space-y-4'>
        <Button
          variant='outline'
          className='w-full'
          onClick={() => oauthHandler('google')}
        >
          Sign in with Google
        </Button>
        <div className='text-sm text-center'>
          <a href='/forgot-password' className='text-blue-500 hover:underline'>
            Forgot password?
          </a>
        </div>
        <div className='text-sm text-center'>
          Don&apos;t have an account?{' '}
          <a href='/signup' className='text-blue-500 hover:underline'>
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
