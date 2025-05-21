import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import { ExamModal } from './ExamModal';

export default function ExamTimetable({ exams, semester }) {
    return (
        <AuthLayout>
            <Head title={semester.name} />
            <div className="mt-12">
                <TableWrapper>
                    <table className="w-full overflow-x-auto bg-white text-left font-inter text-sm dark:text-gray-400 rtl:text-right">
                        <TableCaption>
                            <div className="flex items-center">
                                <span className="font-poppins">
                                    Exam Timetable
                                </span>
                                <span className="ms-2 rounded-full border border-blue-300 bg-blue-100 px-2.5 py-1 font-poppins text-xs font-medium text-blue-800">
                                    {semester.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <a
                                    href={route(
                                        'timetables.export-excel',
                                        semester.id,
                                    )}
                                    className="max-w-fit rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                                >
                                    Export As Excel
                                </a>
                            </div>
                        </TableCaption>
                        <TableHead>
                            <tr className="font-poppins">
                                <th scope="col" className="hidden px-6 py-3">
                                    Batch
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Room Number
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-6 py-3 lg:table-cell"
                                >
                                    Course Name
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-6 py-3 md:table-cell"
                                >
                                    No. of Students
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Exam Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Exam Time
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-6 py-3 lg:table-cell"
                                >
                                    Program
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-6 py-3 md:table-cell"
                                >
                                    Invigilators
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
                                        className="hidden whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white lg:table-cell"
                                    >
                                        {exam.title}
                                    </td>
                                    <td
                                        scope="row"
                                        className="hidden whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white md:table-cell"
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
                                        className="flex items-center gap-x-3 whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white"
                                    >
                                        {exam.exam_time_id == 1 ? 'AM' : 'PM'}
                                    </td>
                                    <td
                                        scope="row"
                                        className="hidden whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white lg:table-cell"
                                    >
                                        {exam.program.name}
                                    </td>
                                    <td className="hidden cursor-pointer whitespace-nowrap px-6 py-4 font-medium text-gray-900 md:table-cell">
                                        <ExamModal exam={exam} />
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
