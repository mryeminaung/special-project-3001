import { Link, usePage } from '@inertiajs/react';
import StudentImg from '/public/assets/dashboard/student.png';

export default function DashboradBanner({ currentDate }) {
    const {
        auth: { user },
    } = usePage().props;

    return (
        <div className="mt-6 grid grid-cols-1 items-center rounded-3xl bg-gradient-to-l from-[#6D5394] to-[#3B2C55] p-8 pb-10 pt-10 text-white lg:grid-cols-3 lg:pe-10 lg:ps-16">
            <div className="col-span-2 space-y-12">
                <p className="font-inter font-medium">{currentDate}</p>
                <div className="space-y-5">
                    <h2 className="font-poppins text-2xl font-semibold md:text-3xl lg:text-4xl">
                        Welcome Back, <br className="block md:hidden" />
                        {user.name}!
                    </h2>
                    <p className="font-inter">
                        Ready to plan your perfect exam schedule? Let's get
                        started with your personalized exam timetable.
                    </p>
                    <p>
                        <Link
                            href={route('timetables.add')}
                            className="font-poppins rounded-full bg-platinum px-5 py-3 text-center text-sm font-medium text-[#3B2C55] hover:bg-platinum/80 focus:outline-none dark:bg-main-purple dark:text-white dark:hover:bg-main-purple/70 sm:w-auto"
                        >
                            Get Started
                        </Link>
                    </p>
                </div>
            </div>
            <img
                className="hidden xl:col-span-1 xl:block"
                src={StudentImg}
                alt="student image"
            />
        </div>
    );
}
