import GuestLayout from '@/Layouts/GuestLayout';
import ErrorLabel from '@/shadcn/error-label';
import ModeToggle from '@/shadcn/mode-toggle';
import { Button } from '@/shadcn/ui/button';
import { Input } from '@/shadcn/ui/input';
import { Label } from '@/shadcn/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { Lock, Mail } from 'lucide-react';
import mainBg from '/public/assets/academic-bg.jpg';
import bgImage from '/public/assets/bg.jpg';

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
                className="bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="grid min-h-svh dark:bg-main-purple/90 lg:grid-cols-2">
                    <div className="relative hidden lg:block">
                        <img
                            src={mainBg}
                            alt="Image"
                            className="absolute inset-0 h-full w-full rounded-r-3xl object-cover dark:brightness-[0.7]"
                        />
                    </div>
                    <div className="relative flex flex-col gap-4 p-6 md:p-10">
                        <div className="flex flex-1 items-center justify-center">
                            <div className="w-full max-w-md">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-start gap-2 text-left dark:text-white">
                                        <img
                                            src="https://lms.miit.edu.mm/pluginfile.php/1/core_admin/logo/0x200/1684573304/miit_logo_wordmark_small.png"
                                            alt=""
                                            className="w-48"
                                        />
                                        <h2 className="font-poppins w-full text-3xl font-bold">
                                            Welcome Back!
                                            <ModeToggle className="absolute right-5 top-5" />
                                        </h2>
                                        <p className="font-inter w-full text-gray-700 dark:text-white md:w-96">
                                            To use Exam Time-Table generator,
                                            <br />
                                            Please login in to your account with
                                            university email address.
                                        </p>
                                    </div>
                                    <form
                                        method="post"
                                        onSubmit={submit}
                                        className="grid gap-4"
                                    >
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
                                                    className="bg-white py-5 pr-10 dark:text-black"
                                                />
                                                <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                                            </div>
                                            {errors.email && (
                                                <ErrorLabel
                                                    message={errors.email}
                                                />
                                            )}
                                        </div>
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
                                                    className="bg-white py-5 pr-10 dark:text-black"
                                                />
                                                <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                                            </div>
                                            {errors.password && (
                                                <ErrorLabel
                                                    message={errors.password}
                                                />
                                            )}
                                        </div>
                                        <div className="grid items-center justify-end">
                                            <Link
                                                href="forgot-password"
                                                className="text-sm font-semibold text-blue-500 hover:underline"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <Button
                                            type="submit"
                                            className="font-poppins w-full rounded-md bg-gradient-to-r from-[#6D5394] to-[#3B2C55] py-2 text-center font-semibold text-white hover:bg-[#4a3d70]"
                                            disabled={processing}
                                        >
                                            Login
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
