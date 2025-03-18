import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function StudentCard({ name, count }) {
    return (
        <Link
            href="#"
            className="flex items-center justify-center gap-x-6 rounded-3xl border-2 border-primary-purple/70 bg-[#925FE2]/25 py-8 transition-transform hover:scale-105 dark:border-white lg:gap-x-3"
        >
            <div className="rounded-full bg-[#925FE2]/60 p-3">
                <img src={logo} alt="" className="h-10 w-10 lg:h-12 lg:w-12" />
            </div>
            <div className="space-y-2">
                <h2 className="font-poppins text-md font-semibold xl:text-xl">
                    {name}
                </h2>
                <p className="text-lg font-bold xl:text-3xl">{count}</p>
            </div>
        </Link>
    );
}
