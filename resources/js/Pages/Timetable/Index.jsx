import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import Exams from './Exams';

export default function Index({ exams, courseInfo }) {
    return (
        <AuthLayout>
            <Head title="All Exam Timetables" />
            <div className="mb-5 mt-12 rounded-3xl">
                <div className="h-48">
                    <p className="mb-2 text-xl font-bold">Exam Timetables</p>
                    <div className="mt-5">
                        <Exams exams={exams} courseInfo={courseInfo} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
