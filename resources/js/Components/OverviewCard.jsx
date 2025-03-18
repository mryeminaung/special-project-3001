import { Link } from '@inertiajs/react';

export default function OverviewCard({ path, icon, count, title }) {
    return (
        <Link
            href={path}
            className="flex w-full flex-col items-center justify-center gap-y-2 rounded-3xl border-2 border-primary-purple/80 bg-white py-3 shadow-sm transition-all hover:scale-105 dark:border-main-purple/90 dark:border-white dark:bg-[#925FE2]/25 md:max-w-xs md:py-8"
        >
            <img
                src={icon}
                alt={title}
                className="h-14 w-16 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
            <div className="text-center">
                <p className="font-poppins text-xl font-semibold">
                    {count >= 100 ? count + ' +' : count}
                </p>
                <p className="font-inter text-lg text-gray-600 dark:text-white">
                    Total {title}
                </p>
            </div>
        </Link>
    );
}
