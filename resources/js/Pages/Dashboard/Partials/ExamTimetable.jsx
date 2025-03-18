import RoomCard from '@/Pages/Room/Partials/RoomCard';
import { Link } from '@inertiajs/react';

export default function ExamTimetable() {
    return (
        <div className="mb-4 grid grid-cols-6 gap-8 rounded-3xl">
            <div className="col-span-4 h-48 rounded-3xl">
                <div className="mb-3 flex justify-between font-semibold">
                    <p className="font-poppins mb-2 text-2xl font-bold">
                        Exam Timetables
                    </p>
                    <Link
                        href={route('timetables.index')}
                        className="font-poppins text-lg font-semibold text-[#925FE2]"
                    >
                        See all
                    </Link>
                </div>
                <div className="mt-5 grid grid-cols-2 items-center gap-x-4 gap-y-3 2xl:grid-cols-3">
                    <RoomCard name="Timetable 1" count={1} />
                    <RoomCard name="Timetable 2" count={2} />
                </div>
            </div>
        </div>
    );
}
