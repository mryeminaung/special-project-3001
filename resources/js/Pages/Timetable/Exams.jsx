import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function Exams({ exams }) {
    return (
        <div className="flex items-center gap-5">
            {Object.entries(exams).map(([semesterId, examList]) => (
                <Link
                    key={semesterId}
                    href={route('timetables.show', semesterId)}
                    className="flex h-full min-w-96 items-center justify-center gap-x-8 rounded-3xl border-4 border-primary-purple/70 bg-[#925FE2]/25 py-8"
                >
                    <div className="rounded-full bg-[#925FE2]/60 p-3">
                        <img
                            src={logo}
                            alt="Semester Logo"
                            className="h-12 w-12"
                        />
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-poppins text-xl font-semibold">
                            Semester {semesterId}
                        </h2>
                        <p className="font-inter text-3xl font-bold">
                            {examList.length}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
