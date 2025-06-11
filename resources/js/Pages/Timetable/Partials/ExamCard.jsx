import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function ExamCard({ semesterId, courseInfo }) {
    return (
        <Link
            href={route('timetables.show', semesterId)}
            className="flex h-full w-full items-center justify-center gap-x-5 rounded-3xl border-4 border-primary-purple/70 bg-[#925FE2]/25 py-8 sm:w-[45%] md:max-w-[300px] lg:w-[30%]"
        >
            <div className="rounded-full bg-[#925FE2]/60 p-3">
                <img src={logo} alt="Semester Logo" className="h-12 w-12" />
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Semester {semesterId}</h2>
                <div className="flex items-center space-x-2">
                    <p className="text-3xl font-bold">
                        {courseInfo[semesterId]}{' '}
                    </p>
                    <span className="font-bold">Courses</span>
                </div>
            </div>
        </Link>
    );
}
