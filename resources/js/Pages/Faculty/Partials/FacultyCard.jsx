import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function FacultyCard({ name, count, url }) {
    return (
        <Link
            href={url}
            className="flex max-w-lg items-center justify-center gap-x-5 rounded-3xl border-2 border-primary-purple/70 bg-[#925FE2]/25 p-5 py-8 transition-transform hover:scale-105 dark:border-white"
        >
            <div className="mx-auto flex w-[200px] items-center gap-x-3 sm:w-full sm:justify-center">
                <div className="rounded-full bg-[#925FE2]/60 p-2 lg:block">
                    <img
                        src={logo}
                        alt=""
                        className="lg:h-18 h-12 w-12 md:h-14 lg:w-16"
                    />
                </div>
                <div className="font-poppins text-left">
                    <h2 className="text-[15px] font-semibold sm:text-base lg:text-lg">
                        {name}
                    </h2>
                    <p className="text-lg font-bold lg:text-xl">{count}</p>
                </div>
            </div>
        </Link>
    );
}
