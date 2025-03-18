import { Head, Link, useForm } from '@inertiajs/react';
import mainBg from '/public/assets/academic-bg.jpg';
import bgImage from '/public/assets/bg.jpg';
import lineStroke from '/public/assets/line-stroke.png';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('sign-up'), {
            preserveState: true,
            onError: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <div
                className="grid grid-cols-1 bg-cover bg-scroll lg:grid-cols-2"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <Head title="Sign Up" />
                <div className="hidden h-screen lg:block">
                    <img
                        src={mainBg}
                        alt=""
                        className="h-full w-full rounded-r-3xl object-fill"
                    />
                </div>
                <div className="mx-auto min-h-screen pt-28 lg:w-auto 2xl:w-full 2xl:px-20 2xl:pe-80">
                    <div className="h-full w-auto space-y-4 rounded-2xl px-10">
                        <img
                            src="https://lms.miit.edu.mm/pluginfile.php/1/core_admin/logo/0x200/1684573304/miit_logo_wordmark_small.png"
                            alt=""
                            className="w-48"
                        />
                        <h2 className="font-poppins w-full text-3xl font-bold">
                            Hi, Welcome!
                        </h2>
                        <p className="font-inter w-full text-gray-600 md:w-96">
                            Please sign up to use Exam Time-Table generator.
                            Provide your credentials below.
                        </p>

                        <form onSubmit={submit} className="w-full space-y-8">
                            <div className="">
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium dark:text-white"
                                >
                                    Your Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={handleDataChange}
                                        name="name"
                                        className="block w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="Kyaw Kyaw"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="gray"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-address-book"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                                            <path d="M10 16h6" />
                                            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                            <path d="M4 8h3" />
                                            <path d="M4 12h3" />
                                            <path d="M4 16h3" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium dark:text-white"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={handleDataChange}
                                        name="email"
                                        className="block w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="kyaw_kyaw@miit.edu.mm"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                                        <svg
                                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 16"
                                        >
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium dark:text-white"
                                >
                                    Password (at least 8 characters)
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        value={data.password}
                                        onChange={handleDataChange}
                                        name="password"
                                        className="block w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="********"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="gray"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                            <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                                            <path d="M3 3l18 18" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div className="">
                                <label
                                    htmlFor="password_confirmation"
                                    className="mb-2 block text-sm font-medium dark:text-white"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password_confirmation"
                                        value={data.password_confirmation}
                                        onChange={handleDataChange}
                                        name="password_confirmation"
                                        className="block w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="********"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="gray"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                            <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                                            <path d="M3 3l18 18" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.password_confirmation && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-2">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-gradient-to-r from-[#6D5394] to-[#3B2C55] py-2 text-center font-semibold text-white hover:bg-[#4a3d70]"
                                    disabled={processing}
                                >
                                    Sign Up
                                </button>
                                <div className="flex items-start justify-center gap-x-1 text-center">
                                    <span className="text-gray-600">
                                        Already have an account?
                                    </span>
                                    <p className="font-poppins flex flex-col">
                                        <Link
                                            href={route('sign-in')}
                                            className="font-semibold text-[#3B2C55]"
                                        >
                                            Sign In Here
                                        </Link>
                                        <img
                                            src={lineStroke}
                                            alt=""
                                            className="w-28"
                                        />
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
