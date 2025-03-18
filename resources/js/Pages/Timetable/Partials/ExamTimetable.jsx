import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';
import { useState } from 'react';

export default function ExamTimetable({ exams, semester }) {
    const [selectedExam, setSelectedExam] = useState(null);

    const removeHonorifics = (name) => {
        return name.replace(/^(Daw|U)\s+/i, '');
    };

    const handleAvatarClick = (exam) => {
        setSelectedExam({
            ...exam,
            exam_time: exam.exam_time_id === 1 ? 'AM' : 'PM',
        });
    };

    const closeModal = () => setSelectedExam(null);

    // Group duties by room_number
    const groupedDuties = selectedExam?.exam_duties?.reduce((acc, duty) => {
        const room = duty.room_number;
        if (!acc[room]) acc[room] = [];
        acc[room].push(duty);
        return acc;
    }, {});

    return (
        <AuthLayout>
            <div className="relative mt-12">
                {/* Centered Modal */}
                {selectedExam && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="relative max-h-[80vh] min-w-[500px] overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
                            <button
                                onClick={closeModal}
                                className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700"
                            >
                                &times;
                            </button>

                            {/* Course Header */}
                            <div className="mb-6 border-b pb-4">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {selectedExam.course_code}
                                </h2>
                                <p className="text-gray-600">
                                    {selectedExam.title}
                                </p>
                                <div className="mt-2 flex gap-4 text-sm text-gray-500">
                                    <span>Date: {selectedExam.exam_date}</span>
                                    <span>Time: {selectedExam.exam_time}</span>
                                </div>
                            </div>

                            {/* Invigilation Teams */}
                            <div className="space-y-6">
                                {Object.entries(groupedDuties || {}).map(
                                    ([room, duties]) => (
                                        <div
                                            key={room}
                                            className="rounded-lg border p-4"
                                        >
                                            <h3 className="mb-3 text-lg font-semibold">
                                                Room {room}
                                            </h3>
                                            <ul className="space-y-2">
                                                {duties.map((duty, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
                                                    >
                                                        <span
                                                            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                                                                duty.role
                                                                    .name ===
                                                                'Invigilator'
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-yellow-100 text-yellow-800'
                                                            }`}
                                                        >
                                                            {removeHonorifics(
                                                                duty.faculty
                                                                    .name,
                                                            ).charAt(0)}
                                                        </span>
                                                        <div>
                                                            <p className="text-gray-800">
                                                                {
                                                                    duty.faculty
                                                                        .name
                                                                }
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {duty.role.name}
                                                            </p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <TableWrapper>
                    <table className="w-full overflow-x-auto bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                        {/* ... keep the existing table headers and caption ... */}
                        <TableCaption>
                            <div className="flex items-center">
                                <span className="font-poppins">
                                    Exam Timetable
                                </span>
                                <span className="font-poppins ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                    {semester.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <a
                                    href={route('courses.export-excel')}
                                    className="max-w-fit rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                                >
                                    Export As Excel
                                </a>
                            </div>
                        </TableCaption>

                        <TableHead>
                            <tr>
                                <th scope="col" className="hidden px-6 py-3">
                                    Batch
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Room Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Name
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    No. of Students
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Exam Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Program
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Invigilation Team
                                </th>
                            </tr>
                        </TableHead>

                        <tbody>
                            {exams.map((exam) => (
                                <TableRow key={exam.id}>
                                    <td
                                        scope="row"
                                        className="hidden whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        BE-2019
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.course_code}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        {exam.rooms.join(', ')}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.title}
                                    </td>

                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.no_students}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.exam_date}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.exam_time_id == 1 ? 'AM' : 'PM'}
                                    </td>
                                    <td
                                        scope="row"
                                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.program.name}
                                    </td>
                                    <td
                                        className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                                        onClick={() => handleAvatarClick(exam)}
                                    >
                                        <div className="flex items-center">
                                            {exam.exam_duties
                                                ?.slice(0, 3)
                                                .map((duty, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`-mr-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white ${
                                                            duty.role.name ===
                                                            'Invigilator'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                        }`}
                                                    >
                                                        {removeHonorifics(
                                                            duty.faculty.name,
                                                        ).charAt(0)}
                                                    </div>
                                                ))}
                                            {exam.exam_duties?.length > 3 && (
                                                <div className="-mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-600">
                                                    +
                                                    {exam.exam_duties.length -
                                                        3}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </TableRow>
                            ))}
                        </tbody>
                    </table>
                </TableWrapper>
            </div>
        </AuthLayout>
    );
}
