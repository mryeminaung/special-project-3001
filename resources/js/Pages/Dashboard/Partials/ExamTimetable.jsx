import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function ExamTimetable({ exams, courseInfo }) {
    return (
        <>
            <div className="mb-2 flex items-center justify-between font-poppins">
                <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white">
                    Exam Timetables
                </h2>
                <Link
                    href={route('timetables.index')}
                    className="font-poppins font-medium text-[#925FE2] transition-colors hover:text-[#925FE2]/80 hover:underline focus:underline focus:outline-none dark:text-purple-300 dark:hover:text-purple-400"
                >
                    See all
                </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5">
                {Object.entries(exams).map(([semesterId]) => (
                    <Link
                        key={semesterId}
                        href={route('timetables.show', semesterId)}
                        className="flex w-full items-center justify-center gap-x-5 rounded-3xl border-4 border-primary-purple/70 bg-[#925FE2]/25 py-8 sm:w-[45%] md:max-w-[300px] lg:w-[30%]"
                    >
                        <div className="rounded-full bg-[#925FE2]/60 p-3">
                            <img
                                src={logo}
                                alt="Semester Logo"
                                className="h-12 w-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">
                                Semester {semesterId}
                            </h2>
                            <p className="text-3xl font-bold">
                                {courseInfo[semesterId]}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
