import RoomCard from '@/Pages/Room/Partials/RoomCard';
import { Link } from '@inertiajs/react';

export default function ExamTimetable() {
    return (
        <>
            <div className="mb-2 flex items-center justify-between font-poppins">
                <h2 className="text-2xl font-bold text-gray-800">
                    Exam Timetables
                </h2>
                <Link
                    href={route('timetables.index')}
                    className="font-poppins font-medium text-[#925FE2] transition-colors hover:text-[#925FE2]/80 focus:underline focus:outline-none dark:text-purple-300 dark:hover:text-purple-400"
                >
                    See all
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <RoomCard name="Timetable 1" count={1} />
                <RoomCard name="Timetable 2" count={2} />
            </div>
        </>
    );
}
