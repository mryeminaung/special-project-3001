import GuestLayout from '@/Layouts/GuestLayout';
import ErrorLabel from '@/shadcn/error-label';
import ModeToggle from '@/shadcn/mode-toggle';
import { Button } from '@/shadcn/ui/button';
import { Input } from '@/shadcn/ui/input';
import { Label } from '@/shadcn/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { Lock, Mail } from 'lucide-react';

import bgImage from '/public/assets/bg.jpg';
import loginBg from '/public/assets/loginBg.jpg';
import miitLogoWordMark from '/public/assets/miit_logo_wordmark.png';

export default function LoginForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            preserveState: true,
            onError: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log In" />
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="grid min-h-svh dark:bg-main-purple/90 lg:grid-cols-2">
                    {/* Left Side: Background Image */}
                    <div className="relative hidden lg:block">
                        <img
                            src={loginBg}
                            alt="Academic Background"
                            className="absolute inset-0 h-full w-full rounded-r-2xl object-cover"
                        />
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="relative flex flex-col gap-4 p-6 md:p-10">
                        <div className="flex flex-1 items-center justify-center">
                            <div className="w-full max-w-md">
                                <div className="flex flex-col gap-6">
                                    {/* Header Section */}
                                    <div className="flex flex-col items-start gap-2 text-left dark:text-white">
                                        <Link
                                            href="/"
                                            className="rounded-2xl px-5 py-1 dark:bg-white"
                                        >
                                            <img
                                                src={miitLogoWordMark}
                                                className="mx-auto h-16 transition-all"
                                                alt="MIIT"
                                            />
                                        </Link>
                                        <h2 className="w-full font-poppins text-4xl font-bold text-primary-purple dark:text-purple-100">
                                            Welcome Back!
                                            <ModeToggle className="absolute right-5 top-5" />
                                        </h2>
                                        <p className="w-full font-inter text-gray-700 dark:text-gray-300 md:w-96">
                                            To use Exam Time-Table generator,
                                            <br />
                                            Please login to your account with
                                            your university email address.
                                        </p>
                                    </div>

                                    {/* Login Form */}
                                    <form
                                        method="post"
                                        onSubmit={submit}
                                        className="grid gap-4"
                                    >
                                        {/* Email Field */}
                                        <div className="grid gap-2">
                                            <Label
                                                htmlFor="email"
                                                className="text-sm font-medium dark:text-white"
                                            >
                                                Email
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    onChange={handleDataChange}
                                                    placeholder="@miit.edu.mm"
                                                    className="bg-white py-5 pr-10 transition-all duration-300 ease-in-out focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/50 dark:bg-gray-800 dark:text-white dark:focus:ring-primary-purple"
                                                />
                                                <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 dark:text-gray-300" />
                                            </div>
                                            {errors.email && (
                                                <ErrorLabel
                                                    message={errors.email}
                                                />
                                            )}
                                        </div>

                                        {/* Password Field */}
                                        <div className="grid gap-2">
                                            <Label
                                                htmlFor="password"
                                                className="text-sm font-medium dark:text-white"
                                            >
                                                Password
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    onChange={handleDataChange}
                                                    placeholder="********"
                                                    className="bg-white py-5 pr-10 transition-all duration-300 ease-in-out focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/50 dark:bg-gray-800 dark:text-white dark:focus:ring-primary-purple"
                                                />
                                                <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 dark:text-gray-300" />
                                            </div>
                                            {errors.password && (
                                                <ErrorLabel
                                                    message={errors.password}
                                                />
                                            )}
                                        </div>

                                        {/* Forgot Password Link */}
                                        <div className="grid items-center justify-end">
                                            <Link
                                                href="forgot-password"
                                                className="text-sm font-semibold text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>

                                        {/* Login Button */}
                                        <Button
                                            type="submit"
                                            className="w-full rounded-md bg-gradient-to-r from-[#6D5394] to-[#3B2C55] py-2 text-center font-poppins font-semibold text-white transition-all duration-300 ease-in-out hover:from-[#4a3d70] hover:to-[#2a1f3d] disabled:opacity-50"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? 'Logging In...'
                                                : 'Login'}
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
