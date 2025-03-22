import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ExamSchedule from './Partials/ExamSchedule';
import SemesterDropdown from './Partials/SemesterDropdown';

export default function NewTimetable({
    semesters,
    courses,
    examPeriods,
    semesterIds,
}) {
    const urlParams = new URLSearchParams(window.location.search);
    const semesterIdFromUrl = urlParams.get('semester_id') || 0;

    const [selectedSemesterName, setSelectedSemesterName] =
        useState('Select a Semester');

    useEffect(() => {
        const selectedSemester = semesters.find(
            (semester) => semester.id == semesterIdFromUrl,
        );
        if (selectedSemester) {
            setSelectedSemesterName(selectedSemester.name);
        } else {
            setSelectedSemesterName('Select a Semester');
        }
    }, [semesterIdFromUrl]);

    return (
        <AuthLayout>
            <Head title="Create Exam Schedule" />
            {/* {semesterIdFromUrl != 0 && <ScrollIndicator />} */}
            <div className="mt-12 rounded-xl border border-white bg-white px-5 py-5 shadow-md dark:bg-main-purple">
                <div className="flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center">
                    <p className="font-poppins text-xl font-bold hover:underline">
                        <Link href="/new-timetable">Create Exam Schedule</Link>
                    </p>
                    <SemesterDropdown
                        semesters={semesters}
                        semesterIds={semesterIds}
                        selectedSemesterName={selectedSemesterName}
                    />
                </div>
                {courses.length > 0 && (
                    <ExamSchedule
                        semesterIdFromUrl={semesterIdFromUrl}
                        examPeriods={examPeriods}
                        courses={courses}
                    />
                )}
            </div>
        </AuthLayout>
    );
}
