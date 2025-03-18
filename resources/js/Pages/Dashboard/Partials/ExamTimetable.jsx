import RoomCard from '@/Pages/Room/Partials/RoomCard';
import { Link } from '@inertiajs/react';

export default function ExamTimetable() {
    return (
        <div className="rounded-3xl bg-white p-6 font-poppins shadow-lg">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">
                    Exam Timetables
                </h2>
                <Link
                    href={route('timetables.index')}
                    className="text-lg font-semibold text-purple-600 hover:underline"
                >
                    See all
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <RoomCard name="Timetable 1" count={1} />
                <RoomCard name="Timetable 2" count={2} />
            </div>
        </div>
    );
}
