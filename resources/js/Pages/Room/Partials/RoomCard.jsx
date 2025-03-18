import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function RoomCard({ name, count, url }) {
    return (
        <Link
            href={url}
            className="flex h-full w-full items-center justify-center gap-x-4 rounded-3xl border-2 border-primary-purple/70 bg-[#925FE2]/25 py-8 transition-transform hover:scale-105 dark:border-white/60"
        >
            <div className="rounded-full bg-[#925FE2]/60 p-1 md:p-3 lg:block">
                <img src={logo} alt="" className="lg:h-18 h-14 w-14 lg:w-16" />
            </div>
            <div className="font-poppins space-y-0">
                <h2 className="text-md font-semibold lg:text-lg">{name}</h2>
                <p className="text-xl font-bold lg:text-2xl">{count}</p>
            </div>
        </Link>
    );
}
