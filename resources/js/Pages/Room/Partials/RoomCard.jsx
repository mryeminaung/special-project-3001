import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function RoomCard({ name, count, url }) {
    return (
        <Link
            href={url}
            className="block w-full rounded-3xl border-4 border-soft-purple/70 bg-[#925FE2]/25 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-purple/50 dark:border-white/60"
        >
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                    <div className="rounded-full bg-[#925FE2]/60 p-2.5 transition-colors hover:bg-[#925FE2]/80">
                        <img
                            src={logo}
                            alt={`${name} room logo`}
                            className="h-12 w-12 object-contain md:h-14 lg:h-16 lg:w-16"
                        />
                    </div>
                </div>
                <div className="min-w-0 flex-1">
                    <h2 className="text-md line-clamp-2 font-poppins font-semibold text-gray-900 dark:text-white lg:text-xl">
                        {name}
                    </h2>
                    <div className="flex items-center space-x-2">
                        <p className="mt-1 font-poppins text-xl font-bold text-primary-purple dark:text-purple-200 lg:text-2xl">
                            {count}
                        </p>
                        <span className="font-bold text-primary-purple dark:text-purple-200">
                            Rooms
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
