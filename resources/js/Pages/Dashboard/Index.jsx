import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';

import ScrollIndicator from '@/Components/ScrollIndicator';
import DashboradBanner from './Partials/DashboradBanner';
import ExamTimetable from './Partials/ExamTimetable';
import Overview from './Partials/Overview';

export default function Index({
    currentDate,
    faculties,
    noOfFaculty,
    noOfStudent,
    noOfCourse,
    exams,
    courseInfo,
}) {
    return (
        <AuthLayout>
            <Head title="Dashboard" />
            <ScrollIndicator />
            <DashboradBanner currentDate={currentDate} />

            <Overview
                faculties={faculties}
                noOfCourse={noOfCourse}
                noOfStudent={noOfStudent}
                noOfFaculty={noOfFaculty}
            />

            <ExamTimetable exams={exams} courseInfo={courseInfo} />
        </AuthLayout>
    );
}
